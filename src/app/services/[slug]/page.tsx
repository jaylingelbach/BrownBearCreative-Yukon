import { notFound } from 'next/navigation';

import ServiceView from '@/src/components/services/ServiceView';
import { services } from '@/src/config/services/services';
import { defaultServiceViewTheme } from '@/src/theme/serviceViewThemes';
import { getServiceBySlug } from '@/src/config/services/selectors';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(services, slug);

  if (!service) {
    notFound();
  }

  return <ServiceView service={service} theme={defaultServiceViewTheme} />;
}
