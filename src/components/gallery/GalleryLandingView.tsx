import Image from 'next/image';

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
  const items = config.items ?? [];

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
              {bullets.map((bullet) => (
                <li key={bullet} className={theme.bulletsItem}>
                  <span aria-hidden={true} className={theme.bulletsDot} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {items.length > 0 ? (
          <section aria-label="Gallery" className={theme.grid}>
            {items.map((item) => {
              const tags = item.tags ?? [];

              return (
                <article key={item.id} className={theme.card}>
                  <div className={theme.imageFrame} aria-hidden={true}>
                    <Image
                      src={item.imageSrc}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={theme.image}
                      priority={false}
                    />
                  </div>

                  <div className={theme.cardBody}>
                    {item.title ? (
                      <div className={theme.cardTitle}>{item.title}</div>
                    ) : null}

                    {item.description ? (
                      <p className={theme.cardDescription}>
                        {item.description}
                      </p>
                    ) : null}

                    {tags.length > 0 ? (
                      <div className={theme.tagsWrap} aria-label="Tags">
                        {tags.map((tag) => (
                          <span key={`${item.id}-${tag}`} className={theme.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
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
