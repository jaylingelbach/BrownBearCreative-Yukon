import { homeConfig } from './homeConfig';

/**
 * Provide the application's home page configuration.
 *
 * @returns The `homeConfig` object containing configuration and settings for the home page.
 */
export function getHomeConfig() {
  return homeConfig;
}

/**
 * Gets the serviceCards section of the home configuration.
 *
 * @returns The `serviceCards` configuration object from `homeConfig`.
 */
export function getServiceCardsConfig() {
  return homeConfig.serviceCards;
}

/**
 * Retrieve the value props section of the home configuration.
 *
 * @returns The `valuePropsSection` configuration object from `homeConfig`.
 */

export function getValuePropsConfig() {
  return homeConfig.valuePropsSection;
}

/**
 * Accesses the `hero` section of the home configuration.
 *
 * @returns The `hero` configuration extracted from `homeConfig`.
 */
export function getHeroConfig() {
  return homeConfig.hero;
}

/**
 * Accesses the `primaryCtaSection` section of the home configuration.
 *
 * @returns The `primaryCtaSection` configuration extracted from `homeConfig`.
 */
export function getPrimaryCtaConfig() {
  return homeConfig.primaryCtaSection;
}