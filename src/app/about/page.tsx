import AboutLandingView from '@/src/components/about/AboutLandingView';
import { getAboutLandingConfig } from '@/src/config/about/getters';
import { defaultAboutLandingTheme } from '@/src/theme/aboutLandingThemes';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn why clients choose us — clear communication, reliable timelines, and quality workmanship.'
};
export default function AboutPage() {
  const config = getAboutLandingConfig();

  return <AboutLandingView config={config} theme={defaultAboutLandingTheme} />;
}
