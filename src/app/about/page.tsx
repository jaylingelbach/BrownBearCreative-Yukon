import AboutLandingView from '@/src/components/about/AboutLandingView';
import { getAboutLandingConfig } from '@/src/config/about/getters';
import { defaultAboutLandingTheme } from '@/src/theme/aboutLandingThemes';

export default function AboutPage() {
  const config = getAboutLandingConfig();

  return <AboutLandingView config={config} theme={defaultAboutLandingTheme} />;
}
