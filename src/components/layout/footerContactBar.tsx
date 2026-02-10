import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';

import { cn } from '@/src/lib/cn';

import type { FooterContactBarTheme } from '@/src/theme/footerContactBarThemes';
import { defaultFooterContactBarTheme } from '@/src/theme/footerContactBarThemes';
import { footerContactBar } from '@/src/config/footer/footerConfig';

type FooterContactBarProps = {
  theme?: FooterContactBarTheme;
};

/**
 * Renders a contact bar with a phone link and an optional service area.
 *
 * The component reads configuration from `footerContactBar` and returns nothing if the config is disabled.
 *
 * @param theme - Optional theme overrides for CSS class names; defaults to `defaultFooterContactBarTheme`.
 * @returns The contact bar element when enabled, or `null` if the contact bar is disabled.
 */
export default function FooterContactBar({
  theme = defaultFooterContactBarTheme
}: FooterContactBarProps) {
  const config = footerContactBar;

  if (!config.enabled) {
    return null;
  }

  const phoneHref = config.phone.href;
  const phoneAriaLabel = `${config.phone.label.replace(/:\s*$/, '')} ${config.phone.display}`;

  const PhoneLink = phoneHref.startsWith('/') ? Link : 'a';

  return (
    <nav className={theme.bar} aria-label="Contact bar">
      <div className={theme.inner}>
        <div className={theme.left}>
          <Phone className={theme.icon} aria-hidden={true} />
          <div className="flex items-baseline gap-2">
            <span className={theme.phoneLabel}>{config.phone.label}</span>

            <PhoneLink
              href={phoneHref}
              className={cn(theme.phoneNumber, theme.link)}
              aria-label={phoneAriaLabel}
            >
              {config.phone.display}
            </PhoneLink>
          </div>
        </div>

        {config.location?.display ? (
          <div className={theme.right}>
            <span className={theme.divider} aria-hidden={true}>
              •
            </span>
            <MapPin className={theme.icon} aria-hidden={true} />
            <span
              className={theme.location}
              aria-label={`Service area ${config.location.display}`}
            >
              {config.location.display}
            </span>
          </div>
        ) : null}
      </div>
    </nav>
  );
}