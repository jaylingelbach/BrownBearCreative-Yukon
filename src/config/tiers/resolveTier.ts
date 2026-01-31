import { tierIds, TierId } from '@/src/config/tiers/types';

function parseTier(value: string | undefined): TierId {
  if (!value) return 'starter';

  if ((tierIds as readonly string[]).includes(value)) {
    return value as TierId;
  }

  console.warn(`Invalid SITE_TIER "${value}", falling back to starter`);
  return 'starter';
}

export const SITE_TIER: TierId = parseTier(process.env.NEXT_PUBLIC_SITE_TIER);
