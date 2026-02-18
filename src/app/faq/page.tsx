import type { Metadata } from 'next';
import FaqLandingView from '@/src/brownBearComponents/components/faq/FaqLandingView';
import { getFaqLandingConfig } from '@/src/config/faq/getters';
import { defaultFaqLandingTheme } from '@/src/theme/faqLandingThemes';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Quick answers to common questions about scheduling, pricing, and our services.'
};

/**
 * Renders the Frequently Asked Questions landing page.
 *
 * Produces the FAQ landing view using the FAQ configuration and the default landing theme.
 *
 * @returns The React element for the FAQ landing page.
 */
export default function FaqPage() {
  const config = getFaqLandingConfig();

  return <FaqLandingView config={config} theme={defaultFaqLandingTheme} />;
}
