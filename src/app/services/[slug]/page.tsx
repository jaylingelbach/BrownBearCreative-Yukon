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

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return Object.values(services).map((service) => ({
    slug: service.slug
  }));
}

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
