import ReviewsLandingView from '@/src/components/reviews/ReviewsLandingView';
import { getReviewsLandingConfig } from '@/src/config/reviews/getters';
import { defaultReviewsLandingTheme } from '@/src/theme/reviewsLandingThemes';

/**
 * Renders the reviews landing page using the configured settings and default theme.
 *
 * @returns A React element that displays the ReviewsLandingView with its configuration and the default reviews landing theme.
 */
export default function ReviewsPage() {
  const config = getReviewsLandingConfig();

  return (
    <ReviewsLandingView config={config} theme={defaultReviewsLandingTheme} />
  );
}