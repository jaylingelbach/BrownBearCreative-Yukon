import { ServiceCta } from '@/src/config/services/types';

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
