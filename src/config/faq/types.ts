export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqSection = {
  heading?: string;
  description?: string;
  items: FaqItem[];
};

export type FaqCta = {
  heading?: string;
  text?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export type FaqLandingConfig = {
  heading: string;
  subheading?: string;

  /**
   * Optional quick bullets near the top (keeps it “why choose us” adjacent).
   */
  bullets?: string[];

  sections: FaqSection[];

  cta?: FaqCta;
};
