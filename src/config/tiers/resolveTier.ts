import { tierIds, type TierId } from '@/src/config/tiers/types';

/**
 * Convert an input tier string to a valid TierId, falling back to `starter` when missing or unrecognized.
 *
 * Invalid, non-empty inputs cause a console warning before returning the fallback.
 *
 * @param value - The tier identifier to validate (e.g., from `NEXT_PUBLIC_SITE_TIER`)
 * @returns The validated `TierId`; `'starter'` when `value` is `undefined` or not one of the recognized tier identifiers
 */
function parseTier(value: string | undefined): TierId {
  if (!value) return 'starter';

  if ((tierIds as readonly string[]).includes(value)) {
    return value as TierId;
  }

  console.warn(`Invalid SITE_TIER "${value}", falling back to starter`);
  return 'starter';
}

export const SITE_TIER: TierId = parseTier(process.env.NEXT_PUBLIC_SITE_TIER);