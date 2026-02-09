import { HomeConfig } from '@/src/config/home/types';

export const homeConfig: HomeConfig = {
  hero: {
    heading: 'Trusted Plumbing Services in Belleville, IL',
    subheading: '24/7 Emergency Repairs — Call Us Today!',
    ctas: {
      primary: { label: 'Book Appointment', href: '/contact' }, // placeholder
      secondary: { label: 'Call Now', href: 'tel:+16185551234' } // placeholder
    }
  },
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
