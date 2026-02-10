import Link from 'next/link';
import React from 'react';

type SmartLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

/**
 * Renders a Next.js Link for internal routes and a native anchor for external URLs.
 *
 * Internal URLs are treated as strings starting with "/".
 */
export default function SmartLink({
  href,
  className,
  children,
  ariaLabel
}: SmartLinkProps) {
  const isInternal = href.startsWith('/');

  if (isInternal) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
