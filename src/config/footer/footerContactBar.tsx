import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';

import { cn } from '@/src/lib/cn';

import type { FooterContactBarTheme } from '@/src/theme/footerContactBarThemes';
import { defaultFooterContactBarTheme } from '@/src/theme/footerContactBarThemes';
import { footerContactBar } from '@/src/config/footer/footerConfig';

type FooterContactBarProps = {
  theme?: FooterContactBarTheme;
};

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
    <div className={theme.bar} aria-label="Contact bar">
      <div className={theme.inner}>
        <div className={theme.left}>
          <Phone className={theme.icon} aria-hidden={true} />
          <div className="flex items-baseline gap-2">
            <span className={theme.phoneLabel}>{config.phone.label}</span>

            {PhoneLink === Link ? (
              <Link
                href={phoneHref}
                className={cn(theme.phoneNumber, theme.link)}
                aria-label={phoneAriaLabel}
              >
                {config.phone.display}
              </Link>
            ) : (
              <a
                href={phoneHref}
                className={cn(theme.phoneNumber, theme.link)}
                aria-label={phoneAriaLabel}
              >
                {config.phone.display}
              </a>
            )}
          </div>
        </div>

        {config.location?.display ? (
          <div className={theme.right}>
            <span className={theme.divider} aria-hidden={true}>
              •
            </span>
            <MapPin className={theme.icon} aria-hidden={true} />
            <span className={theme.location} aria-label={`Service area ${config.location.display}`}>
              {config.location.display}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
