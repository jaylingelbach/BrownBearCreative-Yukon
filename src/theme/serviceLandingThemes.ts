import { cn } from '@/src/lib/cn';
import { ServicesLandingTheme } from '@/src/lib/types';
import { focusRing } from '@/src/theme/shared';

export const defaultServicesLandingTheme: ServicesLandingTheme = {
  page: 'bg-white text-slate-900',
  inner: 'mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10',

  heroWrap: 'space-y-3',
  heroHeading: 'text-3xl font-extrabold tracking-tight sm:text-4xl',
  heroSubheading: 'text-base leading-relaxed text-slate-700 max-w-2xl',

  sectionWrap: 'mt-10',
  sectionHeadingTop: 'text-lg font-bold text-slate-800',
  sectionHeading: 'text-lg font-bold text-white',

  cardsGrid: 'mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3',
  card: 'rounded-lg bg-white shadow-sm ring-1 ring-border p-5',
  cardIcon: 'h-5 w-5 text-blue-800',
  cardTitle: 'mt-3 text-base font-semibold text-slate-900',
  cardDescription: 'mt-1 text-sm leading-relaxed text-slate-600',
  cardsList: 'mt-5 grid gap-4', // 1-col list, consistent spacing
  cardList: 'sm:flex sm:items-start',

  bulletsList: 'mt-5 space-y-3',
  bulletsItem: 'flex items-start gap-3',
  bulletsDot: 'mt-2 h-2 w-2 rounded-full bg-blue-800',
  ctaCard: 'mt-5 rounded-lg bg-blue-800 text-white p-6 shadow-sm',
  ctaText: 'mt-2 text-sm/6 text-white/90 max-w-2xl',
  ctaActions: 'mt-5 flex flex-wrap items-center gap-3',
  ctaPrimary: cn(
    'inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-blue-900 hover:bg-white/90 transition-colors',
    focusRing
  ),
  ctaSecondary: cn(
    'inline-flex h-11 items-center justify-center rounded-md border border-white/30 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10 transition-colors',
    focusRing
  )
};
