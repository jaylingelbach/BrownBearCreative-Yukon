import { defaultFaqLandingConfig } from '@/src/config/faq/faqLandingConfig';
import type { FaqLandingConfig } from './types';

/**
 * Retrieve the static configuration for the FAQ landing page.
 *
 * Provides the page heading and subheading, a list of summary bullets, FAQ sections with items (each with id, question, and answer), and a call-to-action with primary and secondary actions.
 *
 * @returns A `FaqLandingConfig` object containing heading, subheading, bullets, sections, and `cta` data for rendering the FAQ landing page
 */
export function getFaqLandingConfig(): FaqLandingConfig {
  return defaultFaqLandingConfigg;
}
