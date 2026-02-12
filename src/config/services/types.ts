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

export type ServiceCta = {
  label: string;
  href: string;
};

export type ServicePageMedia = {
  /**
   * Optional override specifically for the service detail page hero.
   * If omitted, the page can fall back to ServiceData.media.
   */
  imageSrc?: string;
  icon?: LucideIcon;
  alt?: string;
};

export type ServicePageContent = {
  /**
   * Optional page-specific title override.
   * Default should be ServiceData.labels.cardTitle (fallback navLabel).
   */
  pageTitle?: string;

  /**
   * Short intro paragraph shown near the top of the page.
   * Optional so you can roll this out gradually.
   */
  intro?: string;

  /**
   * Longer body description shown in the page content area (below the hero).
   * Use this when you want more detail than the intro without duplicating it.
   */
  description?: string;

  /**
   * Optional hero media override for the service page (separate from card media).
   */
  heroMedia?: ServicePageMedia;

  /**
   * Minimal “value props” bullets for the service page.
   */
  highlights?: string[];

  /**
   * Optional page CTAs (defaults can be provided by the view).
   */
  ctas?: {
    primary?: ServiceCta;
    secondary?: ServiceCta;
  };

  /**
   * Optional page body sections. Generic on purpose so any business type can use it.
   */
  sections?: ServicePageSection[];
};

export type ServicePageSection =
  | {
      type: 'bullets';
      heading?: string;
      items: string[];
    }
  | {
      type: 'steps';
      heading?: string;
      steps: Array<{
        title: string;
        text?: string;
      }>;
    }
  | {
      type: 'features';
      heading?: string;
      items: Array<{
        title: string;
        text?: string;
        icon?: LucideIcon;
      }>;
    }
  | {
      type: 'text';
      heading?: string;
      paragraphs: string[];
    };
