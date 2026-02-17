import { Star } from 'lucide-react';
import { clampRating } from '@/src/components/reviews/utils';
import { ReviewsLandingViewProps } from '@/src/components/reviews/types';

/**
 * Render a reviews section with quoted review cards, optional star ratings, and author/source metadata.
 *
 * @param config - Component configuration containing `reviews`, optional `featuredReviewIds` (to prioritize shown reviews), and `cardHeading`.
 * @param theme - CSS className mappings for the section and its nested elements (e.g., sectionWrap, sectionHeading, reviewsGrid, reviewCard, reviewQuote, reviewRatingRow, starIcon, reviewMetaRow, reviewAuthor, reviewLocation, reviewSource).
 * @returns A section element containing a labeled heading and a list of review cards with quotes, optional 0–5 star ratings, author/location, and optional source/date labels.
 */
export default function ReviewsList({
  config,
  theme
}: ReviewsLandingViewProps) {
  const resolvedReviews =
    config.featuredReviewIds && config.featuredReviewIds.length > 0
      ? config.featuredReviewIds
          .map((id) => config.reviews.find((review) => review.id === id))
          .filter((review): review is NonNullable<typeof review> =>
            Boolean(review)
          )
      : config.reviews;
  return (
    <section
      className={theme.sectionWrap}
      aria-labelledby="reviews-section-title"
    >
      <h2 id="reviews-section-title" className={theme.sectionHeading}>
        {config.cardHeading}
      </h2>

      <ul className={theme.reviewsGrid} role="list">
        {resolvedReviews.map((review) => {
          const rating = clampRating(review.rating);
          const sourceLabel =
            typeof review.source === 'string'
              ? review.source.toUpperCase()
              : undefined;
          const quoteId = `review-quote-${review.id}`;
          const authorId = `review-author-${review.id}`;
          const metaId = `review-meta-${review.id}`;

          return (
            <li key={review.id}>
              <article
                className={theme.reviewCard}
                aria-labelledby={authorId}
                aria-describedby={`${quoteId} ${metaId}`}
              >
                <p id={quoteId} className={theme.reviewQuote}>
                  &ldquo;{review.quote}&rdquo;
                </p>

                {rating > 0 ? (
                  <div
                    className={theme.reviewRatingRow}
                    role="img"
                    aria-label={`${rating} out of 5 stars`}
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={`star-${review.id}-${index}`}
                        className={theme.starIcon}
                        aria-hidden={true}
                        fill={index < rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                ) : null}

                <div id={metaId} className={theme.reviewMetaRow}>
                  <div>
                    <div id={authorId} className={theme.reviewAuthor}>
                      {review.author}
                    </div>
                    {review.location ? (
                      <div className={theme.reviewLocation}>
                        {review.location}
                      </div>
                    ) : null}
                  </div>

                  <div className="text-right">
                    {sourceLabel ? (
                      <div className={theme.reviewSource}>{sourceLabel}</div>
                    ) : null}
                    {review.dateLabel ? (
                      <div className={theme.reviewLocation}>
                        {review.dateLabel}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}