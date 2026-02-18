import React from 'react';

import HeroSection from '@/src/brownBearComponents/components/homepage/HeroSection';
import ServiceCardsSection from '@/src/brownBearComponents/components/homepage/services/ServiceCardsSection';
import PrimaryCTASection from '@/src/brownBearComponents/components/homepage/PrimaryCTASection';
import ValuePropsSection from '@/src/brownBearComponents/components/homepage/ValuePropsSection';
import ReviewsSection from '@/src/brownBearComponents/components/homepage/ReviewsSection';
import GallerySection from '@/src/brownBearComponents/components/homepage/GallerySection';
import FaqSection from '@/src/brownBearComponents/components/homepage/Faq/FaqSection';

import { HomepageSectionType } from '@/src/config/tiers';
export type HomepageSectionComponent = React.ComponentType<
  Record<string, string>
>;

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
