import { Star } from 'lucide-react';
import { clampRating } from '@/src/components/reviews/utils';
import { ReviewsLandingViewProps } from '@/src/components/reviews/types';

export default function ReviewCard({ config, theme }: ReviewsLandingViewProps) {
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
        Reviews
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
