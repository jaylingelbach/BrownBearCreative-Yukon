import ServicesLandingView from '@/src/brownBearComponents/components/services/ServiceLandingView';
import { getServicesLandingConfig } from '@/src/config/services/landing/getters';
import { defaultServicesLandingTheme } from '@/src/theme/serviceLandingThemes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Learn about our services and how to contact us.'
};

/**
 * Render the services landing page with the current configuration and default theme.
 *
 * @returns A React element that displays the services landing view using the value returned by `getServicesLandingConfig()` and `defaultServicesLandingTheme`.
 */
export default function Services() {
  const config = getServicesLandingConfig();

  return (
    <ServicesLandingView config={config} theme={defaultServicesLandingTheme} />
  );
}
