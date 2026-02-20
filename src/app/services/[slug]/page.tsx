import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ServiceView from '@/src/brownBearComponents/components/services/ServiceView';
import { services } from '@/src/config/services/services';

import { defaultServiceViewTheme } from '@/src/theme/serviceViewThemes';
import { getServiceBySlug } from '@/src/config/services/selectors';
import { servicePagesById } from '@/src/config/services/servicePagesById';
import { getTierPreset } from '@/src/config/tiers/getters';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/**
 * Produce route parameters for pre-rendering by listing every service slug.
 *
 * @returns An array of objects each containing a `slug` string for a service
 */
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const tier = getTierPreset();
  if (tier.navigation.enableDropdowns === false) return [];
  return Object.values(services).map((service) => ({
    slug: service.slug
  }));
}

/**
 * Builds page metadata for a service identified by its slug.
 *
 * Chooses the page title in this order of preference: `page.pageTitle`, `service.labels.cardTitle`, then `service.labels.navLabel`. The description is taken from `page.intro` when available.
 *
 * @param params - Route params object containing a `slug` string
 * @returns An object with `title` and `description` for the service page, or an empty object if the service is not found or navigation dropdowns are disabled.
 */
export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const tier = getTierPreset();
  if (tier.navigation.enableDropdowns === false) {
    return {};
  }

  const { slug } = await params;

  const service = getServiceBySlug(services, slug);

  if (!service) {
    return {};
  }

  const page = servicePagesById[service.id];

  const title =
    page?.pageTitle ?? service.labels.cardTitle ?? service.labels.navLabel;
  const description = page?.intro;

  return {
    title,
    description
  };
}

/**
 * Render the service page for a given slug.
 *
 * Resolves the route `slug`, finds the matching service and its page data, and renders the ServiceView. If navigation is disabled or the slug does not match a service, responds with a 404.
 *
 * @param params - Object containing the route `slug`
 * @returns The React element that renders the requested service page, or triggers a 404 response when unavailable
 */
export default async function ServicePage({ params }: PageProps) {
  const tier = getTierPreset();
  if (tier.navigation.enableDropdowns === false) {
    return notFound();
  }
  const { slug } = await params;

  const service = getServiceBySlug(services, slug);
  if (!service) {
    return notFound();
  }

  const page = servicePagesById[service.id];

  return (
    <ServiceView
      service={service}
      page={page}
      theme={defaultServiceViewTheme}
    />
  );
}