import SmartLink from '@/src/brownBearComponents/components/ui/SmartLink';
import { AboutSection } from '@/src/config/about/types';
import { AboutLandingTheme } from '@/src/lib/types';

export default function renderAboutSection(args: {
  section: AboutSection;
  theme: AboutLandingTheme;
  index: number;
}) {
  const { section, theme, index } = args;

  const heading =
    typeof section.heading === 'string' && section.heading.trim().length > 0
      ? section.heading.trim()
      : undefined;

  const headingId = heading ? `about-section-heading-${index}` : undefined;
  const sectionAriaLabel = heading ? undefined : `About section ${index + 1}`;

  if (section.type === 'bullets') {
    return (
      <section
        key={`about-section-${index}`}
        className={theme.card}
        role="region"
        tabIndex={0}
        aria-labelledby={headingId}
        aria-label={sectionAriaLabel}
      >
        {heading ? (
          <h2 id={headingId} className={theme.cardHeading}>
            {heading}
          </h2>
        ) : null}

        <ul className={theme.bulletsList}>
          {section.items.map((item) => (
            <li key={item} className={theme.bulletsItem}>
              <span aria-hidden={true} className={theme.bulletsDot} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (section.type === 'features') {
    return (
      <section
        key={`about-section-${index}`}
        className={theme.card}
        role="region"
        tabIndex={0}
        aria-labelledby={headingId}
        aria-label={sectionAriaLabel}
      >
        {heading ? (
          <h2 id={headingId} className={theme.cardHeading}>
            {heading}
          </h2>
        ) : null}

        <div className={theme.featuresGrid}>
          {section.items.map((item, itemIndex) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.title}-${itemIndex}`}
                className={theme.featureItem}
              >
                <div className={theme.featureRow}>
                  <div className={theme.featureIconWrap} aria-hidden={true}>
                    {Icon ? (
                      <Icon className={theme.featureIcon} aria-hidden={true} />
                    ) : (
                      <span className={theme.featureDot} aria-hidden={true} />
                    )}
                  </div>

                  <div>
                    <div className={theme.featureTitle}>{item.title}</div>
                    {item.text ? (
                      <p className={theme.featureText}>{item.text}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  if (section.type === 'steps') {
    return (
      <section
        key={`about-section-${index}`}
        className={theme.card}
        role="region"
        tabIndex={0}
        aria-labelledby={headingId}
        aria-label={sectionAriaLabel}
      >
        {heading ? (
          <h2 id={headingId} className={theme.cardHeading}>
            {heading}
          </h2>
        ) : null}

        <ol className={theme.stepsList}>
          {section.steps.map((step, stepIndex) => (
            <li key={step.title} className={theme.stepItem}>
              <span aria-hidden={true} className={theme.stepIndex}>
                {stepIndex + 1}
              </span>

              <div>
                <div className={theme.stepTitle}>{step.title}</div>
                {step.text ? (
                  <p className={theme.stepText}>{step.text}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (section.type === 'cta') {
    return (
      <section
        key={`about-section-${index}`}
        className={theme.ctaCard}
        role="region"
        tabIndex={0}
        aria-labelledby={headingId}
        aria-label={sectionAriaLabel}
      >
        {heading ? (
          <h2 id={headingId} className={theme.ctaHeading}>
            {heading}
          </h2>
        ) : null}

        {section.text ? <p className={theme.ctaText}>{section.text}</p> : null}

        <div className={theme.ctaActions}>
          <SmartLink href={section.primary.href} className={theme.ctaPrimary}>
            {section.primary.label}
          </SmartLink>

          {section.secondary ? (
            <SmartLink
              href={section.secondary.href}
              className={theme.ctaSecondary}
            >
              {section.secondary.label}
            </SmartLink>
          ) : null}
        </div>
      </section>
    );
  }

  // text
  return (
    <section
      key={`about-section-${index}`}
      className={theme.card}
      role="region"
      tabIndex={0}
      aria-labelledby={headingId}
      aria-label={sectionAriaLabel}
    >
      {heading ? (
        <h2 id={headingId} className={theme.cardHeading}>
          {heading}
        </h2>
      ) : null}

      <div className={theme.textBodyWrap}>
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className={theme.cardBody}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
