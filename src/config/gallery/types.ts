export type GalleryItem = {
  id: string;
  imageSrc: string;
  alt: string;

  title?: string;
  description?: string;

  /**
   * Display-only tags for now (no filtering UI yet).
   */
  tags?: string[];
};

export type GalleryLandingConfig = {
  heading: string;
  subheading?: string;

  bullets?: string[];

  /**
   * Portfolio grid items.
   * For now: no links; just cards with image + text.
   */
  items: GalleryItem[];
};
