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
/**
 * Renders a call-to-action link that uses Next.js `Link` for internal paths and a plain `<a>` for external URLs.
 *
 * @param href - The destination URL; if it starts with `'/'` the component renders a Next.js `Link`, otherwise a standard anchor.
 * @param className - CSS class names to apply to the rendered link element.
 * @param children - Content to display inside the link.
 * @returns A React element representing the CTA link.
 */
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

/**
 * Render a themed, configurable hero section with a heading, optional subheading, and primary/secondary CTAs.
 *
 * The component reads content from the runtime hero config, generates a unique id for the heading and binds it to
 * the section's `aria-labelledby`. CTA links use the hrefs from the config and will render as internal or external
 * links depending on the target.
 *
 * @param theme - Optional theme object supplying class names for the section; defaults to `defaultHeroTheme`
 * @returns The rendered hero section element containing the heading, optional subheading, and CTA row
 */
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