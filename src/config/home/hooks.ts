import { homeConfig } from './homeConfig';

/**
 * Provide the application's home page configuration.
 *
 * @returns The `homeConfig` object containing configuration and settings for the home page.
 */
export function useHomeConfig() {
  return homeConfig;
}

/**
 * Accesses the `serviceCards` section of the home configuration.
 *
 * @returns The `serviceCards` configuration extracted from `homeConfig`.
 */
export function useServiceCardsConfig() {
  return homeConfig.serviceCards;
}

/**
 * Accesses the `valuePropsSection` section of the home configuration.
 *
 * `@returns` The `valuePropsSection` configuration extracted from `homeConfig`.
 */

export function useValuePropsConfig() {
  return homeConfig.valuePropsSection;
}
