import type { ServicePageContent, ServiceId } from './types';

export const servicePagesById: Partial<Record<ServiceId, ServicePageContent>> =
  {
    'drain-cleaning': {
      intro:
        'Fast, clean drain clearing for sinks, tubs, showers, and main lines. We’ll find the clog, remove it safely, and help prevent repeat issues.',
      highlights: [
        'Same-day availability',
        'Upfront pricing',
        'Clean work area'
      ],
      ctas: {
        primary: { label: 'Schedule Drain Service', href: '/contact' }
      },
      heroMedia: {
        imageSrc: '/plumber1.png',
        alt: 'Dude doing stuff'
      }
    },

    'water-heaters': {
      intro:
        'Repair, replacement, and installation for standard and tankless water heaters. We’ll get your hot water back quickly and safely.',
      highlights: [
        'Repair & install',
        'Tankless options',
        'Code-compliant work'
      ],
      heroMedia: {
        imageSrc: '/plumber2.png',
        alt: 'Dude doing stuff'
      }
    },

    'emergency-repair': {
      intro:
        'Plumbing problems don’t wait. If you have an urgent leak or failure, we can help you stabilize the issue and fix it ASAP.',
      highlights: ['Rapid response', 'Leak control', 'After-hours support'],
      heroMedia: {
        imageSrc: '/plumber3.png',
        alt: 'dude doing stuff'
      }
    }
  };
