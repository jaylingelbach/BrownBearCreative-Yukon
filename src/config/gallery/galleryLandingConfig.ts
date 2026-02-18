import type { GalleryLandingConfig } from './types';

export const defaultGalleryLandingConfig: GalleryLandingConfig = {
  heading: 'Recent Work',
  subheading:
    'A few examples of projects we’ve completed across the St. Louis metro. Clean workmanship, clear communication, and results that last.',
  bullets: [
    'Photo-documented work',
    'Clean job sites',
    'Upfront options & pricing',
    'Code-compliant installs'
  ],
  items: [
    {
      id: 'g1',
      imageSrc: '/plumber1.png',
      alt: 'Technician clearing a kitchen sink drain',
      title: 'Kitchen Drain Clearing',
      description:
        'Removed a stubborn grease clog and restored full flow. We also checked the trap and cleaned up the under-sink area.',
      tags: ['Drain Cleaning', 'Kitchen', 'Same-Day']
    },
    {
      id: 'g2',
      imageSrc: '/plumber2.png',
      alt: 'Water heater replacement installation',
      title: 'Water Heater Replacement',
      description:
        'Replaced a failing tank unit with a new, efficient model. New shutoff, expansion considerations, and a clean, organized install.',
      tags: ['Water Heaters', 'Install', 'Code-Compliant']
    },
    {
      id: 'g3',
      imageSrc: '/plumber3.png',
      alt: 'Emergency plumbing repair on a leaking pipe',
      title: 'Emergency Leak Repair',
      description:
        'Isolated the leak, stabilized the line, and completed a permanent repair. Walked the homeowner through next steps and prevention.',
      tags: ['Emergency Repair', 'Leak', 'After-Hours']
    },
    {
      id: 'g4',
      imageSrc: '/plumber1.png',
      alt: 'Main line cleanout and drain service',
      title: 'Main Line Clog Removal',
      description:
        'Cleared a main line blockage and confirmed improved drainage throughout the home. Recommended maintenance intervals based on usage.',
      tags: ['Main Line', 'Drain Cleaning', 'Diagnostics']
    },
    {
      id: 'g5',
      imageSrc: '/plumber2.png',
      alt: 'Bathroom fixture installation and plumbing work',
      title: 'Bathroom Fixture Install',
      description:
        'Installed a new faucet and updated supply lines. Verified connections, tested for leaks, and ensured smooth operation.',
      tags: ['Bathroom', 'Install', 'Fixtures']
    },
    {
      id: 'g6',
      imageSrc: '/plumber3.png',
      alt: 'Sump pump or basement plumbing equipment service',
      title: 'Basement Pump Service',
      description:
        'Serviced and tested the pump system, checked discharge routing, and confirmed reliable operation for heavy rain conditions.',
      tags: ['Basement', 'Maintenance', 'Reliability']
    }
  ]
};
