import { NavItem } from '@/src/lib/types';
import { navFeatures, navLabels } from '@/src/config/header/navConfig';

export const starterLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export const baseGrowthLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    children: [
      { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
      { label: 'Water Heaters', href: '/services/water-heaters' },
      { label: 'Emergency Repair', href: '/services/emergency' }
    ]
  },
  { label: 'About', href: '/about' },
  { label: navLabels.reviews, href: '/reviews' },
  { label: 'Contact', href: '/contact' }
];

export const growthLinks: NavItem[] = [];

growthLinks.push({ label: 'Home', href: '/' });
growthLinks.push({
  label: 'Services',
  children: [
    { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
    { label: 'Water Heaters', href: '/services/water-heaters' },
    { label: 'Emergency Repair', href: '/services/emergency' }
  ]
});
growthLinks.push({ label: 'About', href: '/about' });

if (navFeatures.showReviews) {
  growthLinks.push({ label: navLabels.reviews, href: '/reviews' });
}

growthLinks.push({ label: 'Contact', href: '/contact' });

export const baseManagedLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    children: [
      { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
      { label: 'Water Heaters', href: '/services/water-heaters' },
      { label: 'Emergency Repair', href: '/services/emergency' }
    ]
  },
  { label: 'About', href: '/about' },
  { label: navLabels.work, href: '/gallery' }, // or Portfolio depending on trade
  { label: navLabels.faq, href: '/faq' }, // or Resources
  { label: navLabels.reviews, href: '/reviews' },
  { label: 'Contact', href: '/contact' }
];

export const managedLinks: NavItem[] = [];

managedLinks.push({ label: 'Home', href: '/' });

managedLinks.push({
  label: 'Services',
  children: [
    { label: 'Drain Cleaning', href: '/services/drain-cleaning' },
    { label: 'Water Heaters', href: '/services/water-heaters' },
    { label: 'Emergency Repair', href: '/services/emergency' }
  ]
});

managedLinks.push({ label: 'About', href: '/about' });

if (navFeatures.showWork) {
  managedLinks.push({ label: navLabels.work, href: '/gallery' });
}

if (navFeatures.showReviews) {
  managedLinks.push({ label: navLabels.reviews, href: '/reviews' });
}

if (navFeatures.showFaq) {
  managedLinks.push({ label: navLabels.faq, href: '/faq' });
}

managedLinks.push({ label: 'Contact', href: '/contact' });
