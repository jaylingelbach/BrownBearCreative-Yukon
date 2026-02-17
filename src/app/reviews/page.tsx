import ReviewsLandingView from '@/src/components/reviews/ReviewsLandingView';
import { getReviewsLandingConfig } from '@/src/config/reviews/getters';
import { defaultReviewsLandingTheme } from '@/src/theme/reviewsLandingThemes';

export default function ReviewsPage() {
  const config = getReviewsLandingConfig();

  return (
    <ReviewsLandingView config={config} theme={defaultReviewsLandingTheme} />
  );
}
