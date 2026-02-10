import { useId, type ReactNode } from 'react';
import Link from 'next/link';

import { useHeroConfig } from '@/src/config/home/hooks';
import type { HeroTheme } from '@/src/theme/heroThemes';
import { defaultHeroTheme } from '@/src/theme/heroThemes';

type HeroSectionProps = {
  theme?: HeroTheme;
};
type CtaAnchorProps = {
  href: string;
  className: string;
  children: ReactNode;
};
function CtaAnchor({ href, className, children }: CtaAnchorProps) {
  return href.startsWith('/') ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

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
          <CtaAnchor
            href={config.ctas.primary.href}
            className={theme.primaryCta}
          >
            {config.ctas.primary.label}
          </CtaAnchor>

          <CtaAnchor
            href={config.ctas.secondary.href}
            className={theme.secondaryCta}
          >
            {config.ctas.secondary.label}
          </CtaAnchor>
        </div>
      </div>
    </section>
  );
}
