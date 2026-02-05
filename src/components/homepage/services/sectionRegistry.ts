import React from 'react';

import HeroSection from '@/src/components/homepage/HeroSection';
import ServiceCardsSection from '@/src/components/homepage/services/ServiceCardsSection';
import PrimaryCTASection from '@/src/components/homepage/PrimaryCTASection';
import ValuePropsSection from '@/src/components/homepage/ValuePropsSection';
import ReviewsSection from '@/src/components/homepage/ReviewsSection';
import GallerySection from '@/src/components/homepage/GallerySection';
import FaqSection from '@/src/components/homepage/Faq/FaqSection';

import { HomepageSectionType } from '@src/config/tiers';
export type HomepageSectionComponent = React.ComponentType<{}>;

// homepage sections are “render-only” (no required props).
export const homepageSectionRegistry: Record<
  HomepageSectionType,
  HomepageSectionComponent
> = {
  hero: HeroSection,
  'service-cards': ServiceCardsSection,
  cta: PrimaryCTASection,
  'value-props': ValuePropsSection,
  reviews: ReviewsSection,
  gallery: GallerySection,
  faq: FaqSection
};
