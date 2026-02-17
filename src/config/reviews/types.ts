import type { LucideIcon } from 'lucide-react';

export type ReviewSource = 'google' | 'facebook' | 'yelp' | 'internal';

export type ReviewItem = {
  id: string;
  quote: string;
  author: string;
  location?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  dateLabel?: string; // e.g. "Jan 2026"
  source?: ReviewSource;
};

export type ReviewsStat = {
  label: string; // "Average rating"
  value: string; // "4.9/5"
  icon?: LucideIcon;
};

export type ReviewsLandingConfig = {
  heading: string;
  cardHeading: string;
  subheading?: string;

  stats?: ReviewsStat[];

  /** Optional filtering / curation */
  featuredReviewIds?: string[];

  reviews: ReviewItem[];

  cta?: {
    heading?: string;
    text?: string;
    primary: { label: string; href: string };
    secondary?: { label: string; href: string };
  };
};
