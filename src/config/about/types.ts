import type { LucideIcon } from 'lucide-react';

export type AboutSection =
  | {
      type: 'bullets';
      heading?: string;
      items: string[];
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
      type: 'steps';
      heading?: string;
      steps: Array<{
        title: string;
        text?: string;
      }>;
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

export type AboutLandingConfig = {
  heading: string;
  subheading?: string;

  proofPoints?: string[]; // short bullets near top

  sections: AboutSection[];
};
