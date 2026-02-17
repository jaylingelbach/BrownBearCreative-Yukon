import type { Metadata } from 'next';
import FaqLandingView from '@/src/components/faq/FaqLandingView';
import { getFaqLandingConfig } from '@/src/config/faq/getters';
import { defaultFaqLandingTheme } from '@/src/theme/faqLandingThemes';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Quick answers to common questions about scheduling, pricing, and our services.'
};

export default function FaqPage() {
  const config = getFaqLandingConfig();

  return <FaqLandingView config={config} theme={defaultFaqLandingTheme} />;
}
