import { ServiceCta } from '@/src/config/services/types';

/**
 * Resolve a call-to-action `href` and `label`, preferring values from an optional override.
 *
 * @param args.override - Optional `ServiceCta`; its `href` and `label` are used when they are non-empty strings.
 * @param args.fallbackHref - Href to use when `override?.href` is not a non-empty string.
 * @param args.fallbackLabel - Label to use when `override?.label` is not a non-empty string.
 * @returns A `ServiceCta` whose `href` and `label` are the resolved values.
 */
export function resolveCta(args: {
  override?: ServiceCta;
  fallbackHref: string;
  fallbackLabel: string;
}): ServiceCta {
  const { override, fallbackHref, fallbackLabel } = args;

  const href =
    typeof override?.href === 'string' && override.href.length > 0
      ? override.href
      : fallbackHref;

  const label =
    typeof override?.label === 'string' && override.label.length > 0
      ? override.label
      : fallbackLabel;

  return { href, label };
}