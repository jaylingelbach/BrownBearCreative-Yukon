import Image from 'next/image';
import Link from 'next/link';

import type {
  ServiceData,
  ServicePageContent
} from '@/src/config/services/types';
import type { ServiceViewTheme } from '@/src/lib/types';

type ServiceViewProps = {
  service: ServiceData;
  page?: ServicePageContent;
  theme: ServiceViewTheme;

  /** Keep minimal + production-safe for now */
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
};

/**
 * Renders a themed service header section with eyebrow, title, CTAs, and hero media.
 *
 * The component displays a title (preferring the service cardTitle when present) and an eyebrow label,
 * shows primary and secondary call-to-action links, and renders hero media using the following priority:
 * 1) image from `page.heroMedia.imageSrc` if provided, 2) image from `service.media.imageSrc`, 3) `service.media.icon` if available.
 * When an image alt is present it is applied to the image; otherwise the image and icon are marked as decorative via `aria-hidden`.
 *
 * @param service - Core service data used to derive labels and media
 * @param page - Optional page-level overrides for hero media and alt text
 * @param theme - Theme object containing class names used for layout and styling
 * @param primaryCtaHref - HREF for the primary CTA (defaults to '/contact')
 * @param secondaryCtaHref - HREF for the secondary CTA (defaults to '/')
 * @returns A React element containing the service hero/header section
 */
export default function ServiceView({
  service,
  page,
  theme,
  primaryCtaHref = '/contact',
  secondaryCtaHref = '/'
}: ServiceViewProps) {
  const title = service.labels.cardTitle || service.labels.navLabel;
  const eyebrow = service.labels.navLabel;

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
              <div className={theme.mediaFrame} aria-hidden={!hasImageAlt}>
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
              <div className={theme.iconFrame} aria-hidden={true}>
                <IconComponent
                  className={theme.icon}
                  aria-hidden={true}
                  focusable={false}
                />
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </main>
  );
}