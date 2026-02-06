import { tierIds, type TierId } from '@/src/config/tiers/types';

/**
 * Normalize an input tier string to a valid TierId, defaulting to `starter` when missing or invalid.
 *
 * @param value - The tier identifier to validate, typically from an environment variable like `NEXT_PUBLIC_SITE_TIER`
 * @returns The validated `TierId`; `'starter'` when `value` is `undefined` or not one of the recognized tier identifiers (logs a warning for invalid inputs)
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
