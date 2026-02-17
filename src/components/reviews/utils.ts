export function clampRating(rating: unknown): 0 | 1 | 2 | 3 | 4 | 5 {
  if (typeof rating !== 'number') return 0;
  if (rating <= 0) return 0;
  if (rating >= 5) return 5;
  return rating as 1 | 2 | 3 | 4;
}
