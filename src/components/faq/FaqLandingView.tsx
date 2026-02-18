'use client';

import { type KeyboardEvent, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

import SmartLink from '@/src/components/ui/SmartLink';
import type { FaqLandingConfig } from '@/src/config/faq/types';
import type { FaqLandingTheme } from '@/src/lib/types';

type FaqLandingViewProps = {
  config: FaqLandingConfig;
  theme: FaqLandingTheme;
};
export default function FaqLandingView({ config, theme }: FaqLandingViewProps) {
  const bullets = config.bullets ?? [];
  const sections = config.sections;
  const summaryRefs = useRef<Record<number, Array<HTMLElement | undefined>>>(
    {}
  );

  const handleSummaryKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    sectionIndex: number,
    itemIndex: number
  ) => {
    const summaries = (summaryRefs.current[sectionIndex] ?? []).filter(
      (summary): summary is HTMLElement => Boolean(summary)
    );

    if (summaries.length === 0) return;

    let nextIndex: number | null = null;
    if (event.key === 'ArrowDown')
      nextIndex = (itemIndex + 1) % summaries.length;
    if (event.key === 'ArrowUp') {
      nextIndex = (itemIndex - 1 + summaries.length) % summaries.length;
    }
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = summaries.length - 1;

    if (nextIndex === null) return;

    event.preventDefault();
    summaries[nextIndex]?.focus();
  };

  return (
    <main className={theme.page}>
      <div className={theme.inner}>
        <div className={theme.heroWrap}>
          <h1 className={theme.heroHeading}>{config.heading}</h1>

          {config.subheading ? (
            <p className={theme.heroSubheading}>{config.subheading}</p>
          ) : null}

          {bullets.length > 0 ? (
            <ul className={theme.bulletsList}>
              {bullets.map((item) => (
                <li key={item} className={theme.bulletsItem}>
                  <span aria-hidden={true} className={theme.bulletsDot} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className={theme.sectionsWrap}>
          {sections.map((section, sectionIndex) => {
            const heading =
              typeof section.heading === 'string' &&
              section.heading.trim().length > 0
                ? section.heading.trim()
                : undefined;

            const sectionHeadingId = heading
              ? `faq-section-heading-${sectionIndex}`
              : undefined;

            return (
              <section
                key={`faq-section-${sectionIndex}`}
                className={theme.sectionCard}
                aria-labelledby={sectionHeadingId}
              >
                {heading ? (
                  <h2 id={sectionHeadingId} className={theme.sectionHeading}>
                    {heading}
                  </h2>
                ) : null}

                {section.description ? (
                  <p className={theme.sectionDescription}>
                    {section.description}
                  </p>
                ) : null}

                <div className={theme.faqList}>
                  {section.items.map((item, itemIndex) => {
                    const questionId = `faq-q-${sectionIndex}-${item.id}`;
                    const answerId = `faq-a-${sectionIndex}-${item.id}`;

                    return (
                      <details
                        key={item.id}
                        className={`${theme.faqItem} group`}
                      >
                        <summary
                          className={theme.faqSummary}
                          aria-controls={answerId}
                          id={questionId}
                          ref={(node) => {
                            if (!summaryRefs.current[sectionIndex]) {
                              summaryRefs.current[sectionIndex] = [];
                            }
                            if (node) {
                              summaryRefs.current[sectionIndex][itemIndex] =
                                node;
                            } else {
                              summaryRefs.current[sectionIndex][itemIndex] =
                                undefined;
                            }
                          }}
                          onKeyDown={(event) =>
                            handleSummaryKeyDown(event, sectionIndex, itemIndex)
                          }
                        >
                          <span className={theme.faqQuestion}>
                            {item.question}
                          </span>
                          <ChevronDown
                            className={theme.faqChevron}
                            aria-hidden
                          />
                        </summary>

                        <div id={answerId} className={theme.faqAnswerWrap}>
                          <p className={theme.faqAnswer}>{item.answer}</p>
                        </div>
                      </details>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {config.cta ? (
            <section className={theme.ctaCard} aria-label="FAQ call to action">
              {config.cta.heading ? (
                <h2 className={theme.ctaHeading}>{config.cta.heading}</h2>
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
      </div>
    </main>
  );
}
