import { useId } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SquareCheckBig } from 'lucide-react';

import { cn } from '@/src/lib/cn';

import { getValuePropsConfig } from '@/src/config/home/getters';

import type { ValuePropsTheme } from '@/src/theme/valuePropsThemes';
import { defaultValuePropsTheme } from '@/src/theme/valuePropsThemes';

type ValuePropsSectionProps = {
  theme?: ValuePropsTheme;
};

/**
 * Render a themed value-props section with a heading, optional description, an optional list of value items with check icons, an image, and an optional call-to-action.
 *
 * @param theme - Theme overrides that provide className fragments for the section layout and elements; defaults to `defaultValuePropsTheme`.
 * @returns The rendered value-props section element.
 */
export default function ValuePropsSection({
  theme = defaultValuePropsTheme
}: ValuePropsSectionProps) {
  const config = getValuePropsConfig();
  const items = config.items ?? [];
  const hasItems = items.length > 0;
  const hasImageAlt = Boolean(config.image.alt?.trim());

  const layoutClasses = hasItems ? theme.layoutSplit : theme.layoutImageForward;
  const imageWrapClasses = hasItems
    ? theme.imageWrapSplit
    : theme.imageWrapLarge;
  const baseId = useId();
  const headingId = `${baseId}-value-props-heading`;

  return (
    <section className={theme.section} aria-labelledby={headingId}>
      <div className={theme.inner}>
        <h2 id={headingId} className={theme.heading}>
          {config.heading}
        </h2>

        {config.description ? (
          <p className={theme.description}>{config.description}</p>
        ) : null}

        <div className={layoutClasses}>
          {hasItems ? (
            <div className={cn(theme.leftCol, 'flex flex-col h-full')}>
              <ul className={theme.items}>
                {items.map((item, index) => {
                  return (
                    <li key={`${item.text}-${index}`} className={theme.item}>
                      <SquareCheckBig
                        className={theme.itemIcon}
                        aria-hidden={true}
                        focusable={false}
                      />
                      <span className={theme.itemText}>{item.text}</span>
                    </li>
                  );
                })}
              </ul>

              {config.cta ? (
                <div className={cn(theme.ctaRow, 'mt-auto pt-6')}>
                  <Link href={config.cta.href} className={theme.ctaButton}>
                    {config.cta.label}
                  </Link>
                </div>
              ) : null}
            </div>
          ) : null}

          <div className={imageWrapClasses}>
            <div className={theme.imageFrame} aria-hidden={!hasImageAlt}>
              <Image
                src={config.image.src}
                alt={hasImageAlt ? config.image.alt : ''}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority={false}
              />
            </div>

            {!hasItems && config.cta ? (
              <div className={theme.ctaRow}>
                <Link href={config.cta.href} className={theme.ctaButton}>
                  {config.cta.label}
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
