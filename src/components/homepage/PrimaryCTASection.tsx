import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';

import { cn } from '@/src/lib/cn';

import { usePrimaryCtaConfig } from '@/src/config/home/hooks';
import type { PrimaryCtaTheme } from '@/src/theme/primaryCtaThemes';
import { defaultPrimaryCtaTheme } from '@/src/theme/primaryCtaThemes';
import SmartLink from '@/src/components/ui/SmartLink';

type PrimaryCTASectionProps = {
  theme?: PrimaryCtaTheme;
};

/**
 * Selects the appropriate icon component for the CTA based on the provided keyword.
 *
 * @param icon - The icon keyword: use `'pin'` to select the map-pin icon; any other value selects the phone icon.
 * @returns The matching icon component: `MapPin` when `icon` is `'pin'`, `Phone` otherwise.
 */
function resolveIcon(icon?: 'phone' | 'pin') {
  if (icon === 'pin') return MapPin;
  return Phone;
}

/**
 * Renders a configurable primary call-to-action section for the homepage.
 *
 * Renders either a compact "bar" layout or a two-column "split" layout based on the configuration returned by `usePrimaryCtaConfig()`. Builds the section's accessible label from the configured lines and optional secondary line, displays the resolved icon, the configured text lines, the primary action as a `SmartLink`, and an optional media image when provided.
 *
 * @param theme - Optional theming object that supplies CSS class names for the section; defaults to `defaultPrimaryCtaTheme`.
 * @returns The rendered CTA section element configured from the primary CTA settings.
 */
export default function PrimaryCTASection({
  theme = defaultPrimaryCtaTheme
}: PrimaryCTASectionProps) {
  const config = usePrimaryCtaConfig();
  const Icon = resolveIcon(config.icon);

  const sectionLabel = [config.lines.join(' '), config.secondaryLine]
    .filter(Boolean)
    .join('. ');

  if (config.layout === 'bar') {
    return (
      <section className={theme.section} aria-label={sectionLabel}>
        <div className={theme.inner}>
          <div className={theme.barWrap}>
            <div className="flex items-center gap-3">
              <Icon className={theme.icon} aria-hidden={true} />
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

  // split
  return (
    <section className={theme.section} aria-label={sectionLabel}>
      <div className={theme.inner}>
        <div className={theme.splitWrap}>
          <div className={cn(theme.splitLeft, theme.splitLeftCard)}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Icon className={theme.icon} aria-hidden={true} />
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