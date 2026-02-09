import { useId } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useServiceCardsConfig } from '@/src/config/home/hooks';

import type { ServiceData } from '@/src/config/services/types';
import type { ServiceGridTheme } from '@/src/theme/serviceGridThemes';

interface ServiceCardProps {
  service: ServiceData;
  theme: ServiceGridTheme;
}

/**
 * Render a linked service card displaying either an image, an icon, or a placeholder and the service title, with layout and styling adjusted by service card configuration and the provided theme.
 *
 * @param service - The service data to display (media, labels, and slug used for link).
 * @param theme - Theme classes used to style the card, icon, and title.
 * @returns A React element representing a link-wrapped service card for the given service.
 */
export default function ServiceCard({ service, theme }: ServiceCardProps) {
  const { mediaVariant, imageFit } = useServiceCardsConfig();

  const baseId = useId();
  const titleId = `${baseId}-title`;

  const imageUrl = service.media.imageSrc;
  const IconComponent = service.media.icon;

  const isBleed = mediaVariant === 'bleed';

  const imageClasses = imageFit === 'cover' ? 'object-cover' : 'object-contain';

  const cardVariantClasses = isBleed
    ? 'bg-white'
    : 'bg-primary p-6 text-primary-foreground';

  /**
   * Contain mode needs space on *all sides* (including top) so it doesn't feel stuck.
   * This padding is applied inside the media frame.
   */
  const containPadding = 'p-4 sm:p-5';

  const mediaFrameClasses = isBleed
    ? [
        'relative w-full aspect-[4/3] bg-black/5',
        imageFit === 'contain' ? containPadding : ''
      ].join(' ')
    : [
        'relative w-full aspect-[4/3] bg-black/5',
        imageFit === 'contain' ? containPadding : 'p-4'
      ].join(' ');

  const labelBarClasses = isBleed
    ? 'h-14 flex items-center justify-center px-4 bg-blue-800'
    : 'h-14 flex items-center justify-center px-4 mt-4 bg-blue-800';

  const titleColorClasses = isBleed ? 'text-white' : 'text-white';

  return (
    <Link
      href={`/services/${service.slug}`}
      aria-labelledby={titleId}
      className="block"
    >
      <article
        className={[
          theme.card,
          'flex flex-col',
          'h-auto',
          cardVariantClasses
        ].join(' ')}
      >
        <div className={mediaFrameClasses} aria-hidden="true">
          {imageUrl ? (
            <div className="relative h-full w-full">
              <Image
                src={imageUrl}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className={imageClasses}
                priority={false}
              />
            </div>
          ) : IconComponent ? (
            <div className="flex h-full w-full items-center justify-center">
              <IconComponent
                className={[
                  theme.icon,
                  isBleed ? 'text-slate-600' : 'text-primary-foreground'
                ].join(' ')}
                aria-hidden="true"
                focusable="false"
              />
            </div>
          ) : (
            <div className="h-full w-full bg-black/10" aria-hidden="true" />
          )}
        </div>

        <div className={labelBarClasses}>
          <h3
            id={titleId}
            className={[theme.title, 'text-base', titleColorClasses].join(' ')}
          >
            {service.labels.navLabel}
          </h3>
        </div>
      </article>
    </Link>
  );
}
