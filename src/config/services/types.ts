import type { LucideIcon } from 'lucide-react';

/* ──────────────────────────────────────────────────────────
 * Core Types
 * ────────────────────────────────────────────────────────── */

export type ServiceId = string;

export type ServiceLabels = {
  navLabel: string;
  cardTitle: string;
};

export type ServiceVisibility = {
  /** Should appear in the Services dropdown */
  showInNav: boolean;

  /** Should appear as a homepage service card */
  showOnHomepage: boolean;
};

export type ServiceViewOrder = {
  /** Order within the Services dropdown */
  nav: number;

  /** Order within homepage service cards */
  homepage: number;
};

export type ServiceMedia = {
  icon?: LucideIcon;
  imageSrc?: string;
};

export type ServiceData = {
  /** Stable identifier (used for routing & lookups) */
  id: ServiceId;

  /** URL slug (usually matches id) */
  slug: string;

  labels: ServiceLabels;
  visibility: ServiceVisibility;
  order: ServiceViewOrder;
  media: ServiceMedia;
};
