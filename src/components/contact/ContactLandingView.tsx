import SmartLink from '@/src/components/ui/SmartLink';
import type { ContactLandingConfig } from '@/src/config/contact/types';
import type { ContactLandingTheme } from '@/src/lib/types';

type ContactLandingViewProps = {
  config: ContactLandingConfig;
  theme: ContactLandingTheme;
};

/**
 * Render a two-column contact landing view with configurable sections for contact methods, service area, hours, and next steps.
 *
 * The component displays a hero heading and optional subheading, then builds left and right columns that include:
 * - "How to reach us" (methods) with optional icons, values, hints and links
 * - "Service area" with optional description and locations
 * - "Hours" showing business hours rows
 * - "What happens next" listing ordered steps
 *
 * Sections are rendered only when the corresponding config data is present. The provided `theme` supplies CSS class names for layout and styling; when keys are missing, sensible defaults are used for specific list and item styles.
 *
 * @param config - ContactLandingConfig containing heading, subheading, methods, hours, serviceArea, and nextSteps used to populate the view
 * @param theme - ContactLandingTheme providing class-name hooks for styling and layout; missing theme keys fall back to internal defaults
 * @returns The rendered contact landing element containing the hero and any configured sections
 */
export default function ContactLandingView({
  config,
  theme
}: ContactLandingViewProps) {
  const methods = config.methods ?? [];
  const hours = config.hours ?? [];
  const serviceArea = config.serviceArea;
  const nextSteps = config.nextSteps;

  const locationsListClass =
    'locationsList' in theme
      ? theme.locationsList
      : 'mt-4 grid gap-2 sm:grid-cols-2 text-sm text-slate-700';

  const locationItemClass =
    'locationItem' in theme ? theme.locationItem : 'flex items-start gap-3';

  const locationDotClass =
    'locationDot' in theme
      ? theme.locationDot
      : 'mt-2 h-2 w-2 rounded-full bg-blue-800';

  return (
    <main className={theme.page}>
      <div className={theme.inner}>
        <div className={theme.heroWrap}>
          <h1 className={theme.heroHeading}>{config.heading}</h1>
          {config.subheading ? (
            <p className={theme.heroSubheading}>{config.subheading}</p>
          ) : null}
        </div>

        <div className={theme.layoutGrid}>
          {/* Left column */}
          <div className={theme.leftCol}>
            {methods.length > 0 ? (
              <section
                className={theme.card}
                aria-labelledby="contact-methods-heading"
              >
                <h2 id="contact-methods-heading" className={theme.cardHeading}>
                  How to reach us
                </h2>
                <p className={theme.cardBody}>
                  Choose the option that’s easiest. We’ll respond quickly.
                </p>

                <ul className={theme.methodsGrid} role="list">
                  {methods.map((method, index) => {
                    const Icon = method.icon;
                    const methodBaseId = `contact-method-${index}`;
                    const labelId = `${methodBaseId}-label`;
                    const valueId = `${methodBaseId}-value`;
                    const hintId = `${methodBaseId}-hint`;

                    const content = (
                      <div className={theme.methodItem}>
                        <div className="flex gap-3">
                          <div
                            className={theme.methodIconWrap}
                            aria-hidden={true}
                          >
                            {Icon ? (
                              <Icon className={theme.methodIcon} />
                            ) : null}
                          </div>

                          <div className="min-w-0">
                            <div id={labelId} className={theme.methodLabel}>
                              {method.label}
                            </div>
                            <div id={valueId} className={theme.methodValue}>
                              {method.value}
                            </div>
                            {method.hint ? (
                              <div id={hintId} className={theme.methodHint}>
                                {method.hint}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    );

                    const href =
                      typeof method.href === 'string' && method.href.length > 0
                        ? method.href
                        : undefined;
                    const describedBy = method.hint
                      ? `${valueId} ${hintId}`
                      : valueId;

                    return href ? (
                      <li key={`${method.type}-${method.label}`}>
                        <SmartLink
                          href={href}
                          className="block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                          aria-labelledby={labelId}
                          aria-describedby={describedBy}
                        >
                          {content}
                        </SmartLink>
                      </li>
                    ) : (
                      <li key={`${method.type}-${method.label}`}>{content}</li>
                    );
                  })}
                </ul>
              </section>
            ) : null}

            {serviceArea ? (
              <section className={theme.card} aria-label="Service area">
                <h2 className={theme.cardHeading}>
                  {serviceArea.heading ?? 'Service area'}
                </h2>
                {serviceArea.description ? (
                  <p className={theme.cardBody}>{serviceArea.description}</p>
                ) : null}

                {serviceArea.locations && serviceArea.locations.length > 0 ? (
                  <ul className={locationsListClass}>
                    {serviceArea.locations.map((location) => (
                      <li key={location} className={locationItemClass}>
                        <span aria-hidden={true} className={locationDotClass} />
                        <span>{location}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ) : null}
          </div>

          {/* Right column */}
          <div className={theme.rightCol}>
            {hours.length > 0 ? (
              <section className={theme.card} aria-label="Business hours">
                <h2 className={theme.cardHeading}>Hours</h2>
                <ul className={theme.hoursList}>
                  {hours.map((row) => (
                    <li key={row.label} className={theme.hoursRow}>
                      <span className={theme.hoursLabel}>{row.label}</span>
                      <span className={theme.hoursValue}>{row.hours}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {nextSteps ? (
              <section className={theme.card} aria-label="What happens next">
                <h2 className={theme.cardHeading}>
                  {nextSteps.heading ?? 'What happens next'}
                </h2>

                <ol className={theme.stepsList}>
                  {nextSteps.steps.map((step, index) => (
                    <li key={step.title} className={theme.stepItem}>
                      <span aria-hidden={true} className={theme.stepIndex}>
                        {index + 1}
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
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}