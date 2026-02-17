import SmartLink from '@/src/components/ui/SmartLink';
import { ReviewsLandingViewProps } from '@/src/components/reviews/types';
import ReviewsList from '@/src/components/reviews/ReviewsList';

/**
 * Render the reviews landing page with a hero, optional highlights grid, a reviews list, and an optional call-to-action.
 *
 * Renders accessible headings and ARIA attributes for the highlights and CTA sections, and safely handles missing stats or CTA data.
 *
 * @param config - Page configuration including `heading`, optional `subheading`, optional `stats` (array of {label, value, icon}), and optional `cta` (with `heading`, `text`, `primary`, and optional `secondary` actions)
 * @param theme - CSS class names used to style the component's elements
 * @returns A React element representing the reviews landing page
 */
export default function ReviewsLandingView({
  config,
  theme
}: ReviewsLandingViewProps) {
  const stats = config.stats ?? [];
  const statsHeadingId = 'reviews-highlights-heading';
  const ctaHeadingId = 'reviews-cta-heading';

  return (
    <main className={theme.page}>
      <div className={theme.inner}>
        <div className={theme.heroWrap}>
          <h1 className={theme.heroHeading}>{config.heading}</h1>
          {config.subheading ? (
            <p className={theme.heroSubheading}>{config.subheading}</p>
          ) : null}
        </div>

        {stats.length > 0 ? (
          <section aria-labelledby={statsHeadingId}>
            <h2 id={statsHeadingId} className="sr-only">
              Review highlights
            </h2>
            <ul className={theme.statsGrid} role="list">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <li
                    key={`${stat.label}-${stat.value}-${index}`}
                    className={theme.statCard}
                  >
                    {Icon ? (
                      <div className={theme.statIconWrap} aria-hidden={true}>
                        <Icon className={theme.statIcon} />
                      </div>
                    ) : null}
                    <div className={theme.statLabel}>{stat.label}</div>
                    <div className={theme.statValue}>{stat.value}</div>
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        <ReviewsList theme={theme} config={config} />

        {config.cta ? (
          <section
            className={theme.ctaCard}
            aria-labelledby={config.cta.heading ? ctaHeadingId : undefined}
            aria-label={config.cta.heading ? undefined : 'Get started'}
          >
            {config.cta.heading ? (
              <h2 id={ctaHeadingId} className={theme.ctaHeading}>
                {config.cta.heading}
              </h2>
            ) : null}
            {config.cta.text ? (
              <p className={theme.ctaText}>{config.cta.text}</p>
            ) : null}

            <div className={theme.ctaActions}>
              <SmartLink
                href={config.cta.primary.href}
                className={theme.ctaPrimary}
              >
                {config.cta.primary.label}
              </SmartLink>

              {config.cta.secondary ? (
                <SmartLink
                  href={config.cta.secondary.href}
                  className={theme.ctaSecondary}
                >
                  {config.cta.secondary.label}
                </SmartLink>
              ) : null}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}