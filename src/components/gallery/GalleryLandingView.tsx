'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';

import type { GalleryLandingConfig } from '@/src/config/gallery/types';
import type { GalleryLandingTheme } from '@/src/lib/types';

type GalleryLandingViewProps = {
  config: GalleryLandingConfig;
  theme: GalleryLandingTheme;
};

export default function GalleryLandingView({
  config,
  theme
}: GalleryLandingViewProps) {
  const bullets = config.bullets ?? [];
  const items = config.items;
  const cardRefs = useRef<Array<HTMLElement | null>>([]);

  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    itemIndex: number
  ) => {
    if (items.length < 2) {
      return;
    }

    let nextIndex = itemIndex;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = (itemIndex + 1) % items.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = (itemIndex - 1 + items.length) % items.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = items.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setFocusedIndex(nextIndex);
    cardRefs.current[nextIndex]?.focus();
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
              {bullets.map((bullet, index) => (
                <li key={index} className={theme.bulletsItem}>
                  <span aria-hidden={true} className={theme.bulletsDot} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {items.length > 0 ? (
          <section
            aria-label="Gallery"
            aria-describedby="gallery-nav-hint"
            className={theme.grid}
          >
            <p id="gallery-nav-hint" className="sr-only">
              Use arrow keys to move between gallery items.
            </p>
            {items.map((item, itemIndex) => {
              const tags = item.tags ?? [];

              return (
                <article
                  key={item.id}
                  className={theme.card}
                  tabIndex={itemIndex === focusedIndex ? 0 : -1}
                  onFocus={() => setFocusedIndex(itemIndex)}
                  ref={(node) => {
                    cardRefs.current[itemIndex] = node;
                    return () => {
                      cardRefs.current[itemIndex] = null;
                    };
                  }}
                  onKeyDown={(event) => handleCardKeyDown(event, itemIndex)}
                >
                  <div className={theme.imageFrame}>
                    <Image
                      src={item.imageSrc}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={theme.image}
                      priority={itemIndex < 3}
                    />
                  </div>

                  <div className={theme.cardBody}>
                    {item.title ? (
                      <h2 className={theme.cardTitle}>{item.title}</h2>
                    ) : null}

                    {item.description ? (
                      <p className={theme.cardDescription}>
                        {item.description}
                      </p>
                    ) : null}

                    {tags.length > 0 ? (
                      <ul className={theme.tagsWrap} aria-label="Tags">
                        {tags.map((tag) => (
                          <li key={`${item.id}-${tag}`} className={theme.tag}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </section>
        ) : null}
      </div>
    </main>
  );
}
