import React from 'react';

export type NavbarTheme = {
  // top identity bar
  topbarContainer: string;
  topbarText: string;
  topbarPhone: string;

  // main nav bar
  navContainer: string;
  navLink: string;
  navLinkActive: string;
  navPhone: string;

  // dropdown menu
  dropdown: string;
  dropdownItem: string;

  // navigation bar gap
  navGap: string;

  // ── Mobile (optional) ───────────────────────────────
  mobileBar?: string;
  mobileMenuButton?: string;
  mobileCtaButton?: string;

  mobileSheet?: string;
  mobileSheetHeader?: string;
  mobileSheetTitle?: string;

  mobileNavList?: string;
  mobileNavItem?: string;
  mobileNavItemActive?: string;

  mobileAccordionTrigger?: string;
  mobileAccordionContent?: string;
  mobileChildItem?: string;
  mobileChildItemActive?: string;
};

export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

export type NavbarProps = {
  links: NavItem[];
  enableDropdowns?: boolean;
  theme: NavbarTheme;
};

export type NavCta = {
  label: string;
  href: string;
  ariaLabel?: string;
};

/* ---------- Header ---------- */
export type HeaderProps = {
  logo: React.ReactNode;
  phone: {
    label: string;
    href: string;
  };
  links: NavItem[];
  enableDropdowns?: boolean;
  theme: NavbarTheme;
  primaryCta?: NavCta;
};

/* ---------- Service View Theme ---------- */
export type ServiceViewTheme = {
  page: string;

  hero: string;
  heroInner: string;

  heroGrid: string;
  heroLeft: string;
  heroRight: string;

  eyebrow: string;
  title: string;
  intro: string;

  highlights: string;
  highlightItem: string;

  mediaFrame: string;
  iconFrame: string;
  icon: string;

  ctaRow: string;
  primaryCta: string;
  secondaryCta: string;

  bodySection: string;
  bodyInner: string;

  card: string;
  cardTitle: string;
  cardBody: string;

  // ── Service page sections (theme-driven) ───────────────────────────────
  sectionsWrap: string;
  sectionDivider: string;

  bulletsList: string;
  bulletsItem: string;
  bulletsIcon: string;
  bulletsText: string;

  stepsList: string;
  stepsItem: string;
  stepsBadge: string;
  stepsTitle: string;
  stepsText: string;

  featuresGrid: string;
  featureCard: string;
  featureIcon: string;
  featureDot: string;
  featureTitle: string;
  featureText: string;

  textWrap: string;
  textParagraph: string;
};

// -- Service Landing theme ---------------------
export type ServicesLandingTheme = {
  page: string;
  inner: string;

  heroWrap: string;
  heroHeading: string;
  heroSubheading: string;

  sectionWrap: string;
  sectionHeadingTop: string;
  sectionHeading: string;

  cardsGrid: string;
  card: string;
  cardIcon: string;
  cardTitle: string;
  cardDescription: string;
  cardsList: string;
  cardList: string;

  bulletsList: string;
  bulletsItem: string;
  bulletsDot: string;

  ctaCard: string;
  ctaText: string;
  ctaActions: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

// ── About Landing Theme ───────────────────────────────
export type AboutLandingTheme = {
  page: string;
  inner: string;

  heroWrap: string;
  heroHeading: string;
  heroSubheading: string;

  proofList: string;
  proofItem: string;
  proofIcon: string;

  sectionsWrap: string;

  card: string;
  cardHeading: string;
  cardBody: string;

  bulletsList: string;
  bulletsItem: string;
  bulletsDot: string;

  featuresGrid: string;
  featureItem: string;
  featureRow: string;
  featureIconWrap: string;
  featureIcon: string;
  featureDot: string;
  featureTitle: string;
  featureText: string;

  stepsList: string;
  stepItem: string;
  stepIndex: string;
  stepTitle: string;
  stepText: string;

  ctaCard: string;
  ctaText: string;
  ctaActions: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaHeading: string;

  textBodyWrap: string;
};

// ──  Contact Landing Theme ───────────────────────────────
export type ContactLandingTheme = {
  page: string;
  inner: string;

  heroWrap: string;
  heroHeading: string;
  heroSubheading: string;

  layoutGrid: string;
  leftCol: string;
  rightCol: string;

  card: string;
  cardHeading: string;
  cardBody: string;

  methodsGrid: string;
  methodItem: string;
  methodIconWrap: string;
  methodIcon: string;
  methodLabel: string;
  methodValue: string;
  methodHint: string;

  hoursList: string;
  hoursRow: string;
  hoursLabel: string;
  hoursValue: string;

  stepsList: string;
  stepItem: string;
  stepIndex: string;
  stepTitle: string;
  stepText: string;

  locationsList: string;
  locationItem: string;
  locationDot: string;
};

// reviews
export type ReviewsLandingTheme = {
  page: string;
  inner: string;

  heroWrap: string;
  heroHeading: string;
  heroSubheading: string;

  statsGrid: string;
  statCard: string;
  statLabel: string;
  statValue: string;
  statIconWrap: string;
  statIcon: string;

  sectionWrap: string;
  sectionHeading: string;

  reviewsGrid: string;
  reviewCard: string;
  reviewQuote: string;
  reviewMetaRow: string;
  reviewAuthor: string;
  reviewLocation: string;
  reviewRatingRow: string;
  starIcon: string;
  reviewSource: string;

  ctaCard: string;
  ctaHeading: string;
  ctaText: string;
  ctaActions: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

// FAQ
export type FaqLandingTheme = {
  page: string;
  inner: string;

  heroWrap: string;
  heroHeading: string;
  heroSubheading: string;

  bulletsList: string;
  bulletsItem: string;
  bulletsDot: string;

  sectionsWrap: string;

  sectionCard: string;
  sectionHeading: string;
  sectionDescription: string;

  faqList: string;

  faqItem: string;
  faqSummary: string;
  faqQuestion: string;
  faqChevron: string;
  faqAnswerWrap: string;
  faqAnswer: string;

  ctaCard: string;
  ctaHeading: string;
  ctaText: string;
  ctaActions: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

// Gallery

export type GalleryLandingTheme = {
  page: string;
  inner: string;

  heroWrap: string;
  heroHeading: string;
  heroSubheading: string;

  bulletsList: string;
  bulletsItem: string;
  bulletsDot: string;

  grid: string;

  card: string;
  imageFrame: string;
  image: string;

  cardBody: string;
  cardTitle: string;
  cardDescription: string;

  tagsWrap: string;
  tag: string;
};
