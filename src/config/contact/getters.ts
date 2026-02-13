import type { ContactLandingConfig } from './types';
import { defaultContactLandingConfig } from './contactLandingConfig';

/**
 * Retrieve the default contact landing configuration.
 *
 * @returns The default ContactLandingConfig object
 */
export function getContactLandingConfig(): ContactLandingConfig {
  return defaultContactLandingConfig;
}