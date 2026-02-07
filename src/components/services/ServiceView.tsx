import Image from 'next/image';
import Link from 'next/link';

import type { ServiceData } from '@/src/config/services/types';
import { ServiceViewTheme } from '@/src/lib/types';
import { servicePagesById } from '@/src/config/services/servicePagesById';

type ServiceViewProps = {
  service: ServiceData;
  theme: ServiceViewTheme;

  /** Keep minimal + production-safe for now */
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
};

export default function ServiceView({
  service,
  theme,
  primaryCtaHref = '/contact',
  secondaryCtaHref = '/'
}: ServiceViewProps) {
  const title = service.labels.cardTitle || service.labels.navLabel;
  const eyebrow = service.labels.navLabel;

  const page = servicePagesById[service.id];
  const imageUrl = page?.heroMedia?.imageSrc ?? service.media.imageSrc;

  const imageAlt = page?.heroMedia?.alt ?? '';
  const hasImageAlt = Boolean(imageAlt.trim());

  const IconComponent = service.media.icon;

  return (
    <main className={theme.page}>
      <header className={theme.hero}>
        <div className={theme.heroInner}>
          <p className={theme.eyebrow}>{eyebrow}</p>
          <h1 className={theme.title}>{title}</h1>

          <div className={theme.ctaRow}>
            <Link href={primaryCtaHref} className={theme.primaryCta}>
              Get a Free Quote
            </Link>

            <Link href={secondaryCtaHref} className={theme.secondaryCta}>
              Back to Home
            </Link>
          </div>

          <div className={theme.mediaRow}>
            {imageUrl ? (
              <div
                className={theme.mediaFrame}
                aria-hidden={hasImageAlt ? undefined : 'true'}
              >
                <Image
                  src={imageUrl}
                  alt={hasImageAlt ? imageAlt : ''}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                  priority={false}
                />
              </div>
            ) : IconComponent ? (
              <div className={theme.iconFrame} aria-hidden="true">
                <IconComponent
                  className={theme.icon}
                  aria-hidden="true"
                  focusable="false"
                />
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <section className={theme.section}>
        <div className={theme.sectionInner}>
          <div className={theme.card}>
            <h2 className={theme.cardTitle}>Service details</h2>
            <p className={theme.cardBody}>
              This is the minimal scaffold page for <strong>{eyebrow}</strong>.
              Later cards can add richer sections (FAQs, pricing, galleries,
              etc.) driven by config/CMS without changing the route or slug
              resolution.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
