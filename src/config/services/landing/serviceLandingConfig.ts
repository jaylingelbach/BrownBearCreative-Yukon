import { ServiceId } from '@/src/config/services/types';

export type ServicesLandingLayout = 'grid' | 'list';

export type ServicesLandingConfig = {
  heading: string;
  description?: string;

  /**
   * Optional override list. If omitted, we can still render from services registry
   * (but keeping this here gives you control later without tier props).
   */
  featuredServiceIds?: ServiceId[];

  layout: ServicesLandingLayout;

  cta?: {
    label: string;
    href: string;
  };
};

export const defaultServicesLandingConfig: ServicesLandingConfig = {
  heading: 'Our Services',
  description:
    'Explore what we offer. If you’re not sure what you need, reach out and we’ll point you in the right direction.',
  layout: 'list',
  cta: {
    label: 'Get a Free Quote',
    href: '/contact'
  }
};
