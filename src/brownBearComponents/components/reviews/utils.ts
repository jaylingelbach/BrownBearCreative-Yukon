/**
 * Convert and constrain an arbitrary value to a star rating between 0 and 5.
 *
 * @param rating - Value to interpret as a rating; non-number inputs are treated as 0
 * @returns `0` for non-number inputs or values <= 0, `5` for values >= 5, otherwise the nearest integer `1`, `2`, `3`, or `4`
 */
export function clampRating(rating: unknown): 0 | 1 | 2 | 3 | 4 | 5 {
  if (typeof rating !== 'number') return 0;
  if (rating <= 0) return 0;
  if (rating >= 5) return 5;
  return Math.round(rating) as 1 | 2 | 3 | 4;
}