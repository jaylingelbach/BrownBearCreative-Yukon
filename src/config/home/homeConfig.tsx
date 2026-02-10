import { HomeConfig } from '@/src/config/home/types';

const PHONE_HREF = process.env.NEXT_PUBLIC_PHONE_HREF!;
const PHONE_STRING = process.env.NEXT_PUBLIC_PHONE_STRING!;

export const homeConfig: HomeConfig = {
  hero: {
    heading: 'Trusted Plumbing Services in Belleville, IL',
    subheading: '24/7 Emergency Repairs — Call Us Today!',
    ctas: {
      primary: { label: 'Book Appointment', href: '/contact' }, // placeholder
      secondary: { label: 'Call Now', href: PHONE_HREF } // placeholder
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
  },
  primaryCtaSection: {
    layout: 'split',
    lines: ['Call Us:', PHONE_STRING],
    secondaryLine: 'Serving Belleville & Nearby Areas',
    primaryAction: {
      label: `Call Us: ${PHONE_STRING}`,
      href: PHONE_HREF
    },
    icon: 'phone',
    media: { imageSrc: '/plumber3.png', alt: 'Plumber working' }
  }
};
