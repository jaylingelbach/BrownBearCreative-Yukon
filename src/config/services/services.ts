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
      cardTitle: 'Professional Drain Cleaning',
      shortDescription: 'Clear stubborn clogs and restore proper drainage fast.'
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
      icon: Droplets
    }
  },

  'water-heaters': {
    id: 'water-heaters',
    slug: 'water-heaters',

    labels: {
      navLabel: 'Water Heaters',
      cardTitle: 'Water Heater Repair & Installation',
      shortDescription: 'Reliable hot water solutions for your home.'
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
      icon: Flame
    }
  },

  'emergency-repair': {
    id: 'emergency-repair',
    slug: 'emergency-repair',

    labels: {
      navLabel: 'Emergency Repair',
      cardTitle: '24/7 Emergency Plumbing',
      shortDescription: 'Fast response when plumbing problems can’t wait.'
    },

    visibility: {
      showInNav: true,
      showOnHomepage: false
    },

    order: {
      nav: 3,
      homepage: SORT_ORDER_LAST
    },

    media: {
      icon: AlertTriangle
    }
  }
};
