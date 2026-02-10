export type ServiceCardMediaVariant = 'contained' | 'bleed';
export type ServiceCardImageFit = 'cover' | 'contain';
export type PrimaryCtaLayout = 'split' | 'bar';

export type HomeConfig = {
  hero: HeroSectionConfig;
  serviceCards: {
    /**
     * 'contained' => media sits inside padding (card background visible)
     * 'bleed'     => media is edge-to-edge like the mockup tiles
     */
    mediaVariant: ServiceCardMediaVariant;

    /**
     * Global image rendering mode for service cards.
     * This intentionally prevents per-service mixing.
     *
     * 'cover'   => photo tiles (fills frame, may crop)
     * 'contain' => logo tiles (fully visible, letterboxed)
     */
    imageFit: ServiceCardImageFit;
  };
  valuePropsSection: ValuePropsSectionConfig;
  primaryCtaSection: PrimaryCtaSectionConfig;
};
export type CtaLink = {
  label: string;
  href: string;
};

export type ValuePropItem = {
  text: string;
};

export type ValuePropsSectionConfig = {
  heading: string;
  description?: string;

  /**
   * Optional bullet items. If omitted or empty, the section
   * becomes “image-forward” (landscaping style).
   */
  items?: ValuePropItem[];

  image: {
    src: string;
    alt: string;
  };

  cta?: CtaLink;
};

export type HeroSectionConfig = {
  heading: string;
  subheading?: string;
  ctas: {
    primary: CtaLink;
    secondary: CtaLink;
  };
};

export type PrimaryCtaSectionConfig = {
  layout: PrimaryCtaLayout;

  heading?: string; // optional, some variants may not need
  lines: string[]; // up to you; keeps it flexible & simple

  primaryAction: CtaLink;

  secondaryLine?: string; // e.g. "Serving Belleville & Nearby Areas"

  icon?: 'phone' | 'pin'; // keep primitive for now; map to lucide in component

  media?: {
    imageSrc: string;
    alt: string;
  };
};
