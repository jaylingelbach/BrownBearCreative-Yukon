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
 * @param href - Destination URL; treated as internal if it starts with "/".
 * @param className - Optional CSS class names applied to the rendered element.
 * @param children - Content to render inside the link element.
 * @param ariaLabel - Optional aria-label applied to the rendered element.
 * @returns The rendered link element: a Next.js Link for internal URLs, otherwise a native `<a>`.
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