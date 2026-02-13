import type { LucideIcon } from 'lucide-react';

export type ContactMethodType = 'phone' | 'email' | 'location' | 'custom';

export type ContactMethod = {
  type: ContactMethodType;
  label: string;
  value: string;
  href?: string;
  icon?: LucideIcon;
  hint?: string;
};

export type ContactHours = {
  label: string; // e.g. "Mon–Fri"
  hours: string; // e.g. "8am–5pm"
};

export type ContactFormCta = {
  heading?: string;
  text?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export type ContactLandingConfig = {
  heading: string;
  subheading?: string;

  methods?: ContactMethod[];
  hours?: ContactHours[];

  serviceArea?: {
    heading?: string;
    description?: string;
    locations?: string[];
  };

  nextSteps?: {
    heading?: string;
    steps: Array<{ title: string; text?: string }>;
  };
};
