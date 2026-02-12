import type { LucideIcon } from 'lucide-react';

export type ServicesLandingSection =
  | {
      type: 'hero';
      heading: string;
      subheading?: string;
    }
  | {
      type: 'cards';
      heading?: string;
      items: Array<{
        title: string;
        description?: string;
        icon?: LucideIcon;
      }>;
    }
  | {
      type: 'bullets';
      heading?: string;
      items: string[];
    }
  | {
      type: 'text';
      heading?: string;
      paragraphs: string[];
    }
  | {
      type: 'cta';
      heading?: string;
      text?: string;
      primary: { label: string; href: string };
      secondary?: { label: string; href: string };
    };

export type ServicesLandingContent = {
  /**
   * Starter: one single services page.
   * Sections are fully config-driven (order matters).
   */
  sections: ServicesLandingSection[];
};
