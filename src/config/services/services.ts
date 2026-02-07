import { Droplets, Flame, AlertTriangle } from 'lucide-react';
import { ServiceData, ServiceId } from './types';

const SORT_ORDER_LAST = 99;
/* ──────────────────────────────────────────────────────────
 * Service Registry (per business)
 * Example below
 * ────────────────────────────────────────────────────────── */

export const services: Record<ServiceId, ServiceData> = {
  'drain-cleaning': {
    id: 'drain-cleaning',
    slug: 'drain-cleaning',

    labels: {
      navLabel: 'Drain Cleaning',
      cardTitle: 'Professional Drain Cleaning'
    },

    visibility: {
      showInNav: true,
      showOnHomepage: true
    },

    order: {
      nav: 1,
      homepage: 1
    },

    media: {
      // icon: Droplets,
      imageSrc: '/plumber1.png'
    }
  },

  'water-heaters': {
    id: 'water-heaters',
    slug: 'water-heaters',

    labels: {
      navLabel: 'Water Heaters',
      cardTitle: 'Water Heater Repair & Installation'
    },

    visibility: {
      showInNav: true,
      showOnHomepage: true
    },

    order: {
      nav: 2,
      homepage: 2
    },

    media: {
      // icon: Flame
      imageSrc: '/plumber2.png'
    }
  },

  'emergency-repair': {
    id: 'emergency-repair',
    slug: 'emergency-repair',

    labels: {
      navLabel: 'Emergency Repair',
      cardTitle: '24/7 Emergency Plumbing'
    },

    visibility: {
      showInNav: true,
      showOnHomepage: true
    },

    order: {
      nav: 3,
      homepage: SORT_ORDER_LAST
    },

    media: {
      // icon: AlertTriangle,
      imageSrc: '/plumber3.png'
    }
  }
};
