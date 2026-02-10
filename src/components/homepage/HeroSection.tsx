import { useId } from 'react';
import Link from 'next/link';

import { cn } from '@/src/lib/cn';
import { useHeroConfig } from '@/src/config/home/hooks';
import type { HeroTheme } from '@/src/theme/heroThemes';
import { defaultHeroTheme } from '@/src/theme/heroThemes';

type HeroSectionProps = {
  theme?: HeroTheme;
};

export default function HeroSection({
  theme = defaultHeroTheme
}: HeroSectionProps) {
  const config = useHeroConfig();
  const headingId = `${useId()}-hero-heading`;

  return (
    <section className={theme.section} aria-labelledby={headingId}>
      <div className={theme.inner}>
        <h1 id={headingId} className={theme.heading}>
          {config.heading}
        </h1>

        {config.subheading ? (
          <p className={theme.subheading}>{config.subheading}</p>
        ) : null}

        <div className={theme.ctaRow} role="group" aria-label="Primary actions">
          <Link
            href={config.ctas.primary.href}
            className={cn(theme.primaryCta)}
          >
            {config.ctas.primary.label}
          </Link>

          {config.ctas.secondary.href.startsWith('/') ? (
            <Link
              href={config.ctas.secondary.href}
              className={theme.secondaryCta}
            >
              {config.ctas.secondary.label}
            </Link>
          ) : (
            <a href={config.ctas.secondary.href} className={theme.secondaryCta}>
              {config.ctas.secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
