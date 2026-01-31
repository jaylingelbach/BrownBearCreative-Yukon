import { TierId, TierPreset } from '@/src/config/tiers/types';

export const tierPresets: Record<TierId, TierPreset> = {
  starter: {
    id: 'starter',
    navigation: {
      enableDropdowns: false,
      maxDepth: 1
    },
    homepage: {
      allowedSectionsInOrder: ['hero', 'services', 'about', 'cta']
    },
    content: {
      maxPages: 5,
      blogEnabled: false,
      galleryEnabled: false,
      faqEnabled: false
    },
    marketing: {
      testimonialsEnabled: false,
      conversionTracking: false
    },
    management: {
      ongoingEdits: false,
      proactiveOptimization: false
    }
  },
  growth: {
    id: 'growth',
    navigation: {
      enableDropdowns: true,
      maxDepth: 1
    },
    homepage: {
      allowedSectionsInOrder: [
        'hero',
        'services',
        'service-cards',
        'testimonials',
        'cta'
      ]
    },
    content: {
      maxPages: 10,
      blogEnabled: false,
      galleryEnabled: false,
      faqEnabled: false
    },
    marketing: {
      testimonialsEnabled: false,
      conversionTracking: false
    },
    management: {
      ongoingEdits: false,
      proactiveOptimization: false
    }
  },
  managed: {
    id: 'managed',
    navigation: {
      enableDropdowns: true,
      maxDepth: 1
    },

    homepage: {
      allowedSectionsInOrder: [
        'hero',
        'services',
        'service-cards',
        'testimonials',
        'gallery',
        'faq',
        'cta'
      ]
    },

    content: {
      maxPages: 'unlimited',
      blogEnabled: true,
      galleryEnabled: true,
      faqEnabled: true
    },

    marketing: {
      testimonialsEnabled: true,
      conversionTracking: true
    },

    management: {
      ongoingEdits: true,
      proactiveOptimization: true
    }
  }
};
