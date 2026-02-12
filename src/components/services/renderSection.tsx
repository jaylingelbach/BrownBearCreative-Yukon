import { ServicePageSection } from '@/src/config/services/types';
import { cn } from '@/src/lib/cn';
import { ServiceViewTheme } from '@/src/lib/types';
import { SquareCheckBig } from 'lucide-react';

/**
 * Render a service page section (bullets, steps, features, or text) using the provided theme.
 *
 * @param args.section - Section data describing the content and type to render.
 * @param args.theme - Theme object containing CSS class names used for layout and styling.
 * @param args.index - Zero-based index of the section, used to form stable keys.
 * @returns The JSX element for the rendered section, or `undefined` if the section type is not recognized.
 */
export function renderSection(args: {
  section: ServicePageSection;
  theme: ServiceViewTheme;
  index: number;
}) {
  const { section, theme, index } = args;

  const heading =
    typeof section.heading === 'string' && section.heading.trim().length > 0
      ? section.heading.trim()
      : undefined;

  const cardClass = theme.card;
  const titleClass = theme.cardTitle;
  const bodyClass = theme.cardBody;

  if (section.type === 'bullets') {
    return (
      <div key={`section-${index}`} className={cardClass}>
        {heading ? <h2 className={titleClass}>{heading}</h2> : null}

        <ul className={cn(bodyClass, theme.bulletsList)}>
          {section.items.map((item) => (
            <li key={item} className={theme.bulletsItem}>
              <SquareCheckBig
                className={theme.bulletsIcon}
                aria-hidden={true}
              />
              <span className={theme.bulletsText}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (section.type === 'steps') {
    return (
      <div key={`section-${index}`} className={cardClass}>
        {heading ? <h2 className={titleClass}>{heading}</h2> : null}

        <ol className={cn(bodyClass, theme.stepsList)}>
          {section.steps.map((step, stepIndex) => (
            <li key={step.title} className={theme.stepsItem}>
              <span aria-hidden={true} className={theme.stepsBadge}>
                {stepIndex + 1}
              </span>

              <div>
                <div className={theme.stepsTitle}>{step.title}</div>
                {step.text ? (
                  <p className={theme.stepsText}>{step.text}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (section.type === 'features') {
    return (
      <div key={`section-${index}`} className={cardClass}>
        {heading ? <h2 className={titleClass}>{heading}</h2> : null}

        <div className={cn(bodyClass, theme.featuresGrid)}>
          {section.items.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className={theme.featureCard}>
                <div className="flex items-start gap-3">
                  {Icon ? (
                    <Icon className={theme.featureIcon} aria-hidden={true} />
                  ) : (
                    <span aria-hidden={true} className={theme.featureDot} />
                  )}

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
      </div>
    );
  }

  // text
  if (section.type === 'text') {
    return (
      <div key={`section-${index}`} className={cardClass}>
        {heading ? <h2 className={titleClass}>{heading}</h2> : null}

        <div className={cn(bodyClass, theme.textWrap)}>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className={theme.textParagraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    );
  }
}