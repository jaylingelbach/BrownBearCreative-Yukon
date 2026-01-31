export const homepageSectionTypes = [
  'hero',
  'services',
  'service-cards',
  'testimonials',
  'gallery',
  'cta',
  'about',
  'faq'
] as const;

export type HomepageSectionType = (typeof homepageSectionTypes)[number];

export const tierIds = ['starter', 'growth', 'managed'] as const;

export type TierId = (typeof tierIds)[number];

export type NavDepth = 0 | 1;
export type TierNavigationOptions = {
  enableDropdowns: boolean;
  maxDepth: NavDepth;
};

export type TierContentOptions = {
  maxPages: number | 'unlimited';
  blogEnabled: boolean;
  galleryEnabled: boolean;
  faqEnabled: boolean;
};

export type TierMarketingOptions = {
  testimonialsEnabled: boolean;
  conversionTracking: boolean;
};

export type TierManagementOptions = {
  ongoingEdits: boolean;
  proactiveOptimization: boolean;
};

export type TierPreset = {
  id: TierId;
  navigation: TierNavigationOptions;
  homepage: {
    allowedSectionsInOrder: HomepageSectionType[];
  };
  content: TierContentOptions;
  marketing: TierMarketingOptions;
  management: TierManagementOptions;
};
