import type { NavChild, NavItem } from '@/src/lib/types';
import { navFeatures, navLabels } from '@/src/config/header/navConfig';

export type NavFeatureFlags = {
  showReviews: boolean;
  showWork: boolean;
  showFaq: boolean;
};

/**
 * Merge optional runtime overrides with the module's default navigation feature flags.
 *
 * @param overrides - Partial set of feature flags to override defaults
 * @returns An object with `showReviews`, `showWork`, and `showFaq` set to the provided override values when present, otherwise to the defaults from `navFeatures`
 */
function resolveFeatures(
  overrides?: Partial<NavFeatureFlags>
): NavFeatureFlags {
  return {
    showReviews: overrides?.showReviews ?? navFeatures.showReviews,
    showWork: overrides?.showWork ?? navFeatures.showWork,
    showFaq: overrides?.showFaq ?? navFeatures.showFaq
  };
}

/**
 * Builds the Starter-tier top-level navigation.
 *
 * Produces a simple, non-dropdown navigation containing Home, Services, About, and Contact.
 *
 * @returns An array of `NavItem` objects representing the Starter navigation entries
 */
export function buildStarterLinks(): NavItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];
}

/**
 * Build the navigation items for the Growth tier, including a Services dropdown and optional Reviews item.
 *
 * @param params.serviceChildren - Child items to include under the "Services" dropdown.
 * @param params.features - Optional feature flag overrides to control inclusion of optional items (e.g., reviews).
 * @returns An ordered array of `NavItem` objects: Home, Services (with provided children), About, optionally Reviews, then Contact.
 */
export function buildGrowthLinks(params: {
  serviceChildren: NavChild[];
  features?: Partial<NavFeatureFlags>;
}): NavItem[] {
  const features = resolveFeatures(params.features);

  const before: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      // href: '/services', // parent page must exist for ALL tiers
      children: params.serviceChildren
    },
    { label: 'About', href: '/about' }
  ];

  const middle: NavItem[] = [];
  if (features.showReviews) {
    middle.push({ label: navLabels.reviews, href: '/reviews' });
  }

  const after: NavItem[] = [{ label: 'Contact', href: '/contact' }];

  return [...before, ...middle, ...after];
}

/**
 * Build the navigation items for the Managed tier, including a Services dropdown and optional Work/Reviews/FAQ links.
 *
 * @param params.serviceChildren - Children to include under the "Services" dropdown.
 * @param params.features - Partial feature flag overrides (`showWork`, `showReviews`, `showFaq`) to control inclusion of optional items.
 * @returns An ordered array of `NavItem` where Home, Services (with `serviceChildren`), and About appear first; optional Work, Reviews, and FAQ items appear next when enabled; Contact appears last.
 */
export function buildManagedLinks(params: {
  serviceChildren: NavChild[];
  features?: Partial<NavFeatureFlags>;
}): NavItem[] {
  const features = resolveFeatures(params.features);

  const before: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      // href: '/services', // parent page must exist for ALL tiers
      children: params.serviceChildren
    },
    { label: 'About', href: '/about' }
  ];

  const middle: NavItem[] = [];
  if (features.showWork) {
    middle.push({ label: navLabels.work, href: '/gallery' });
  }
  if (features.showReviews) {
    middle.push({ label: navLabels.reviews, href: '/reviews' });
  }
  if (features.showFaq) {
    middle.push({ label: navLabels.faq, href: '/faq' });
  }

  const after: NavItem[] = [{ label: 'Contact', href: '/contact' }];

  return [...before, ...middle, ...after];
}
