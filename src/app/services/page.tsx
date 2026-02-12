import ServicesLandingView from '@/src/components/services/ServiceLandingView';
import { getServicesLandingConfig } from '@/src/config/services/landing/getters';
import { defaultServicesLandingTheme } from '@/src/theme/serviceLandingThemes';

export default function Services() {
  const config = getServicesLandingConfig();

  return (
    <ServicesLandingView config={config} theme={defaultServicesLandingTheme} />
  );
}
