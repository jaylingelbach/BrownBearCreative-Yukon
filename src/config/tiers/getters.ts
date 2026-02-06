import { SITE_TIER, tierPresets } from './index';
import type { TierId, TierNavigationOptions, TierPreset } from './types';

/**
 * Provides the current site tier identifier.
 *
 * @returns The active site tier identifier used by the application.
 */
export function getTierId(): TierId {
  return SITE_TIER;
}

/**
 * Retrieve the TierPreset corresponding to the current SITE_TIER.
 *
 * @returns The `TierPreset` for the active `SITE_TIER`.
 * @throws Error if `SITE_TIER` is not found in `tierPresets`.
 */
export function getTierPreset(): TierPreset {
  const tierId = SITE_TIER;
  const tier = tierPresets[tierId];

  if (!tier) {
    // Should never happen if resolveTier defaults correctly,
    // but keeps failures obvious in preview/dev.
    throw new Error(
      `[tiers] Invalid SITE_TIER: "${tierId}" not found in tierPresets.`
    );
  }

  return tier;
}

/**
 * Retrieves navigation options for the current site tier.
 *
 * @returns The navigation capabilities defined by the active tier preset.
 */
export function getNavigationCapabilities(): TierNavigationOptions {
  return getTierPreset().navigation;
}
