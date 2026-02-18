import Link from 'next/link';
import React from 'react';

type SmartLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'children'
> & {
  href: string;
  children: React.ReactNode;

  /**
   * Back-compat convenience prop.
   * If provided, we map it to `aria-label` unless caller already provided one.
   */
  ariaLabel?: string;
};

/**
 * Renders a Next.js Link for internal routes and a native anchor for external URLs.
 *
 * - Internal: href starts with "/"
 * - External: everything else
 *
 * Forwards all standard anchor props (aria-*, target, rel, onClick, etc.)
 * to preserve accessibility and avoid prop swallowing.
 *
 * If `target="_blank"` is used for external links and `rel` is not provided,
 * it will default to "noreferrer noopener".
 */
export default function SmartLink({
  href,
  className,
  children,
  ariaLabel,
  ...rest
}: SmartLinkProps) {
  const isInternal = href.startsWith('/');

  // Only apply aria-label from ariaLabel if caller didn't pass aria-label already.
  const ariaLabelProp =
    typeof rest['aria-label'] === 'string' ? undefined : ariaLabel;

  if (isInternal) {
    return (
      <Link
        href={href}
        className={className}
        aria-label={ariaLabelProp}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const targetValue = typeof rest.target === 'string' ? rest.target : undefined;

  const relValue =
    typeof rest.rel === 'string' && rest.rel.trim().length > 0
      ? rest.rel
      : targetValue === '_blank'
        ? 'noreferrer noopener'
        : undefined;

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabelProp}
      rel={relValue}
      {...rest}
    >
      {children}
    </a>
  );
}
