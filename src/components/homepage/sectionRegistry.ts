import React from 'react';

import ServicesGrid from '@src/components/homepage/servicesGrid';
import HeroSection from '@src/components/homepage/heroSection';
import ServiceCardsSection from '@src/components/homepage/serviceCardsSection';
import PrimaryCTASection from '@src/components/homepage/primaryCTASection';
import ValuePropsSection from '@src/components/homepage/valuePropsSection';
import ReviewsSection from '@src/components/homepage/reviewsSection';
import GallerySection from '@src/components/homepage/gallerySection';
import FaqSection from '@src/components/homepage/faqSection';

import { HomepageSectionType } from '@src/config/tiers';
type HomepageSectionComponent = React.ComponentType<{}>;

// homepage sections are “render-only” (no required props).
export const homepageSectionRegistry: Record<
  HomepageSectionType,
  HomepageSectionComponent
> = {
  hero: HeroSection,
  services: ServicesGrid,
  'service-cards': ServiceCardsSection,
  cta: PrimaryCTASection,
  'value-props': ValuePropsSection,
  reviews: ReviewsSection,
  gallery: GallerySection,
  faq: FaqSection
};
