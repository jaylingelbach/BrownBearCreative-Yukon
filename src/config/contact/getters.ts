import type { ContactLandingConfig } from './types';
import { defaultContactLandingConfig } from './contactLandingConfig';

export function getContactLandingConfig(): ContactLandingConfig {
  return defaultContactLandingConfig;
}
