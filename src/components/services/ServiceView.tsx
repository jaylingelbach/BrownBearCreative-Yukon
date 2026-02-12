import Image from 'next/image';

import SmartLink from '@/src/components/ui/SmartLink';
import type {
  ServiceData,
  ServicePageContent
} from '@/src/config/services/types';
import type { ServiceViewTheme } from '@/src/lib/types';
import { renderSection } from '@/src/components/services/renderSection';
import { resolveCta } from '@/src/components/services/resolveCta';

type ServiceViewProps = {
  service: ServiceData;
  page?: ServicePageContent;
  theme: ServiceViewTheme;

  /** Keep minimal + production-safe for now */
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
};

/**
 * Service detail page view:
 * - hero (title + intro + highlights + CTAs + media)
 * - body (description + config-driven sections)
 */
export default function ServiceView({
  service,
  page,
  theme,
  primaryCtaHref = '/contact',
  secondaryCtaHref = '/'
}: ServiceViewProps) {
  const title =
    page?.pageTitle ?? service.labels.cardTitle ?? service.labels.navLabel;

  const eyebrow = service.labels.navLabel;

  const intro = page?.intro;
  const description = page?.description?.trim();
  const highlights = page?.highlights ?? [];
  const sections = page?.sections ?? [];

  const primaryCta = resolveCta({
    override: page?.ctas?.primary,
    fallbackHref: primaryCtaHref,
    fallbackLabel: 'Get a Free Quote'
  });

  const secondaryCta = resolveCta({
    override: page?.ctas?.secondary,
    fallbackHref: secondaryCtaHref,
    fallbackLabel: 'Back to Home'
  });

  const imageUrl = page?.heroMedia?.imageSrc ?? service.media.imageSrc;

  const imageAltRaw = page?.heroMedia?.alt ?? '';
  const imageAlt = imageAltRaw.trim();
  const hasImageAlt = imageAlt.length > 0;

  const IconComponent = page?.heroMedia?.icon ?? service.media.icon;

  return (
    <main className={theme.page}>
      <header className={theme.hero}>
        <div className={theme.heroInner}>
          <div className={theme.heroGrid}>
            <div className={theme.heroLeft}>
              <p className={theme.eyebrow}>{eyebrow}</p>
              <h1 className={theme.title}>{title}</h1>

              {intro ? <p className={theme.intro}>{intro}</p> : null}

              {highlights.length > 0 ? (
                <ul className={theme.highlights}>
                  {highlights.slice(0, 5).map((item, index) => (
                    <li
                      key={`${item}-${index}`}
                      className={theme.highlightItem}
                    >
                      <span aria-hidden={true} className="mt-1 select-none">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className={theme.ctaRow}>
                <SmartLink href={primaryCta.href} className={theme.primaryCta}>
                  {primaryCta.label}
                </SmartLink>

                <SmartLink
                  href={secondaryCta.href}
                  className={theme.secondaryCta}
                  g
                >
                  {secondaryCta.label}
                </SmartLink>
              </div>
            </div>

            <div className={theme.heroRight}>
              {imageUrl ? (
                <div
                  className={theme.mediaFrame}
                  aria-hidden={hasImageAlt ? undefined : 'true'}
                >
                  <Image
                    src={imageUrl}
                    alt={hasImageAlt ? imageAlt : ''}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              ) : IconComponent ? (
                <div className={theme.iconFrame} aria-hidden="true">
                  <IconComponent
                    className={theme.icon}
                    aria-hidden="true"
                    focusable={false}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>

      <section className={theme.bodySection}>
        <div className={theme.bodyInner}>
          <div className={theme.card}>
            <h2 className={theme.cardTitle}>Service details</h2>

            <p className={theme.cardBody}>
              {description && description.length > 0
                ? description
                : `Learn more about ${service.labels.navLabel}. We’ll tailor the approach to your needs and provide clear next steps.`}
            </p>

            {sections.length > 0 ? (
              <div className={theme.sectionsWrap}>
                {sections.map((section, sectionIndex) => (
                  <div key={`section-${sectionIndex}`}>
                    {sectionIndex > 0 ? (
                      <div className={theme.sectionDivider} />
                    ) : null}

                    {renderSection({ section, theme, index: sectionIndex })}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
