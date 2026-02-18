import { Phone } from 'lucide-react';

import SmartLink from '@/src/brownBearComponents/components/ui/SmartLink';
import { cn } from '@/src/lib/cn';
import type { ServicesLandingTheme } from '@/src/lib/types';

import { services } from '@/src/config/services/services';
import { getHomepageServices } from '@/src/config/services/selectors';
import { ServicesLandingConfig } from '@/src/config/services/landing/serviceLandingConfig';
import { getTierPreset } from '@/src/config/tiers/getters';
import { notFound } from 'next/navigation';

type ServicesLandingViewProps = {
  config: ServicesLandingConfig;
  theme: ServicesLandingTheme;
};
/**
 * Render the services landing page using the provided configuration and theme.
 *
 * Resolves featured services (falling back to default homepage services), chooses a list or grid layout, renders a hero section, a services list, and an optional CTA. If the current tier is not `starter`, calls `notFound()` to produce a 404 response.
 *
 * @param config - Page configuration (heading, optional description, layout, optional featuredServiceIds, and optional `cta` with heading, paragraph, href, and label)
 * @param theme - Theme CSS class mappings used to style the page's container, hero, sections, cards, and CTA
 * @returns A `JSX.Element` containing the services landing UI; calls `notFound()` (producing a 404) when the tier is not `starter`
 */
export default function ServicesLandingView({
  config,
  theme
}: ServicesLandingViewProps) {
  const tier = getTierPreset();
  if (tier.id !== 'starter') {
    return notFound();
  }
  const defaultServices = getHomepageServices(services);
  const isList = config.layout === 'list';
  const servicesHeadingId = 'services-heading';
  const ctaHeadingId = 'services-cta-heading';

  const resolvedServices =
    config.featuredServiceIds && config.featuredServiceIds.length > 0
      ? config.featuredServiceIds
          .map((serviceId) => services[serviceId])
          .filter((service): service is NonNullable<typeof service> =>
            Boolean(service)
          )
      : defaultServices;

  return (
    <main className={theme.page}>
      <div className={theme.inner}>
        {/* Hero */}
        <div className={theme.heroWrap}>
          <h1 className={theme.heroHeading}>{config.heading}</h1>
          {config.description ? (
            <p className={theme.heroSubheading}>{config.description}</p>
          ) : null}
        </div>

        {/* Services */}
        <section
          className={theme.sectionWrap}
          aria-labelledby={servicesHeadingId}
        >
          <h2 id={servicesHeadingId} className={theme.sectionHeadingTop}>
            Services
          </h2>

          <div className={isList ? theme.cardsList : theme.cardsGrid}>
            {resolvedServices.map((service) => {
              const title = service.labels.cardTitle;
              const description = service.labels.navLabel;

              return (
                <article key={service.id} className={cn(theme.card, 'block')}>
                  <div
                    className={cn(
                      'flex items-start gap-3',
                      config.layout === 'list' && 'sm:gap-4'
                    )}
                  >
                    <Phone
                      className={cn(theme.cardIcon, 'mt-0.5 flex-none')}
                      aria-hidden={true}
                      focusable={false}
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className={cn(theme.cardTitle, 'truncate')}>
                        {title}
                      </h3>

                      <div className={cn(theme.cardDescription, 'mt-1')}>
                        {description}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA card */}
        {config.cta ? (
          <section className={theme.sectionWrap} aria-labelledby={ctaHeadingId}>
            <div className={theme.ctaCard}>
              <h2 id={ctaHeadingId} className={theme.sectionHeading}>
                {config.cta.heading}
              </h2>
              <p className={theme.ctaText}>{config.cta.paragraph}</p>

              <div className={theme.ctaActions}>
                <SmartLink href={config.cta.href} className={theme.ctaPrimary}>
                  {config.cta.label}
                </SmartLink>

                <SmartLink href="/" className={theme.ctaSecondary}>
                  Back to Home
                </SmartLink>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
