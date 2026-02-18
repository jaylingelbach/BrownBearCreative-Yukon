import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

import { cn } from '@/src/lib/cn';
import { getPrimaryCtaConfig } from '@/src/config/home/getters';
import type { PrimaryCtaTheme } from '@/src/theme/primaryCtaThemes';
import { defaultPrimaryCtaTheme } from '@/src/theme/primaryCtaThemes';
import SmartLink from '@/src/brownBearComponents/components/ui/SmartLink';

type PrimaryCTASectionProps = {
  theme?: PrimaryCtaTheme;
};

type PrimaryCtaIconProps = {
  icon?: 'phone' | 'pin';
  className: string;
};

/**
 * Render the primary CTA icon based on the provided `icon` type.
 *
 * @param icon - The icon type to render; `'pin'` renders a map pin icon, any other value renders a phone icon.
 * @param className - CSS class names applied to the rendered icon element.
 * @returns A `MapPin` icon when `icon` is `'pin'`, otherwise a `Phone` icon.
 */
function PrimaryCtaIcon({ icon, className }: PrimaryCtaIconProps) {
  if (icon === 'pin') {
    return <MapPin className={className} aria-hidden={true} />;
  }

  return <Phone className={className} aria-hidden={true} />;
}

/**
 * Render the primary call-to-action section using the configured layout, text, actions, icon, and optional media.
 *
 * @param theme - Optional theme object of CSS class names to override the section's styling and layout
 * @returns The rendered section element containing the CTA content and action control
 */
export default function PrimaryCTASection({
  theme = defaultPrimaryCtaTheme
}: PrimaryCTASectionProps) {
  const config = getPrimaryCtaConfig();

  const sectionLabel = [config.lines.join(' '), config.secondaryLine]
    .filter(Boolean)
    .join('. ');

  if (config.layout === 'bar') {
    return (
      <section className={theme.section} aria-label={sectionLabel}>
        <div className={theme.inner}>
          <div className={theme.barWrap}>
            <div className="flex items-center gap-3">
              <PrimaryCtaIcon icon={config.icon} className={theme.icon} />
              <div className={theme.lines}>{config.lines.join(' ')}</div>
            </div>

            <SmartLink
              href={config.primaryAction.href}
              className={theme.action}
              ariaLabel={config.primaryAction.label}
            >
              {config.primaryAction.label}
            </SmartLink>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={theme.section} aria-label={sectionLabel}>
      <div className={theme.inner}>
        <div className={theme.splitWrap}>
          <div className={cn(theme.splitLeft, theme.splitLeftCard)}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <PrimaryCtaIcon icon={config.icon} className={theme.icon} />
              <div className={theme.lines}>{config.lines.join(' ')}</div>
            </div>

            {config.secondaryLine ? (
              <div className={theme.secondaryLine}>{config.secondaryLine}</div>
            ) : null}

            <div className="mt-6 flex justify-center">
              <SmartLink
                href={config.primaryAction.href}
                className={theme.action}
                ariaLabel={config.primaryAction.label}
              >
                {config.primaryAction.label}
              </SmartLink>
            </div>
          </div>

          {config.media?.imageSrc ? (
            <div className={theme.splitRight}>
              <div className={theme.mediaFrame} aria-hidden={true}>
                <Image
                  src={config.media.imageSrc}
                  alt={config.media.alt}
                  fill
                  sizes="112"
                  className={theme.mediaImage}
                  priority={false}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
