import { HomeConfig, ValuePropsSectionConfig } from '@/src/config/home/types';

export const homeConfig: HomeConfig = {
  serviceCards: {
    /**
     * 'contained' => media sits inside padding (card background visible)
     * 'bleed'     => media is edge-to-edge like the mockup tiles
     */
    mediaVariant: 'bleed',
    /**
     * Global image rendering mode for service cards.
     * This intentionally prevents per-service mixing.
     *
     * 'cover'   => photo tiles (fills frame, may crop)
     * 'contain' => logo tiles (fully visible, letterboxed)
     */
    imageFit: 'cover'
  },
  valuePropsSection: {
    heading: 'Your Local Plumbing Experts',
    description: 'Friendly, professional plumbing services.',
    items: [
      { text: 'Fast, Reliable Service' },
      { text: 'Licensed & Insured' },
      { text: 'Free Estimates' }
    ],
    image: {
      src: '/plumber1.png',
      alt: 'Plumber'
    },
    cta: {
      label: 'Get a Free Quote',
      href: '/contact'
    }
  }
};
