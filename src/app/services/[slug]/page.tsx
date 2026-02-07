import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ServiceView from '@/src/components/services/ServiceView';
import { services } from '@/src/config/services/services';

import { defaultServiceViewTheme } from '@/src/theme/serviceViewThemes';
import { getServiceBySlug } from '@/src/config/services/selectors';
import { servicePagesById } from '@/src/config/services/servicePagesById';

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
  return Object.values(services).map((service) => ({
    slug: service.slug
  }));
}

/**
 * Build page metadata for a service route identified by its slug.
 *
 * Produces a Metadata object with `title` and `description` derived from the service and its page data. The title is chosen in this order of preference: `page.pageTitle`, `service.labels.cardTitle`, then `service.labels.navLabel`. If no service matches the slug, an empty object is returned.
 *
 * @param params - Route params object containing a `slug` string
 * @returns The metadata for the service page: `title` and `description`; returns `{}` when the service is not found.
 */
export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
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
 * Render the service page for the given slug.
 *
 * Resolves the slug from `params`, looks up the corresponding service and its page data, and renders the ServiceView for that service. If no service matches the slug, triggers a 404 response.
 *
 * @param params - An object (possibly a promise) containing the route `slug`
 * @returns A React element that renders the service page
 */
export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  const service = getServiceBySlug(services, slug);
  if (!service) {
    notFound();
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