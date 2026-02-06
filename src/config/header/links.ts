import type { NavChild, NavItem } from '@/src/lib/types';
import { navFeatures, navLabels } from '@/src/config/header/navConfig';

export type NavFeatureFlags = {
  showReviews: boolean;
  showWork: boolean;
  showFaq: boolean;
};

function resolveFeatures(
  overrides?: Partial<NavFeatureFlags>
): NavFeatureFlags {
  return {
    showReviews: overrides?.showReviews ?? navFeatures.showReviews,
    showWork: overrides?.showWork ?? navFeatures.showWork,
    showFaq: overrides?.showFaq ?? navFeatures.showFaq
  };
}

/* ──────────────────────────────────────────────────────────
 * Tier 1 — Starter
 * No dropdowns. Simple conversion nav.
 * ────────────────────────────────────────────────────────── */
export function buildStarterLinks(): NavItem[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];
}

/* ──────────────────────────────────────────────────────────
 * Tier 2 — Growth
 * Services dropdown (1 level) + Reviews, always between About and Contact.
 * ────────────────────────────────────────────────────────── */
export function buildGrowthLinks(params: {
  serviceChildren: NavChild[];
  features?: Partial<NavFeatureFlags>;
}): NavItem[] {
  const features = resolveFeatures(params.features);

  const before: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services', // parent page must exist for ALL tiers
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

/* ──────────────────────────────────────────────────────────
 * Tier 3 — Managed
 * Services dropdown (1 level) + optional Work/Reviews/FAQ,
 * always between About and Contact.
 * ────────────────────────────────────────────────────────── */
export function buildManagedLinks(params: {
  serviceChildren: NavChild[];
  features?: Partial<NavFeatureFlags>;
}): NavItem[] {
  const features = resolveFeatures(params.features);

  const before: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services', // parent page must exist for ALL tiers
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
