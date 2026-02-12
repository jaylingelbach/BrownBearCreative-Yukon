import ServicesLandingView from '@/src/components/services/ServiceLandingView';
import { getServicesLandingConfig } from '@/src/config/services/landing/getters';
import { defaultServicesLandingTheme } from '@/src/theme/serviceLandingThemes';

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