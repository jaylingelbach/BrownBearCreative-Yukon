import { SITE_TIER, tierPresets } from './index';
import type { TierId, TierNavigationOptions, TierPreset } from './types';

export function useTierId(): TierId {
  return SITE_TIER;
}

export function useTierPreset(): TierPreset {
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

export function useNavigationCapabilities(): TierNavigationOptions {
  return useTierPreset().navigation;
}
