import { cn } from '@/src/lib/cn';
import type { ReviewsLandingTheme } from '@/src/lib/types';
import { focusRing } from '@/src/theme/shared';

export const defaultReviewsLandingTheme: ReviewsLandingTheme = {
  page: 'bg-white text-slate-900',
  inner: 'mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10',

  heroWrap: 'space-y-3',
  heroHeading: 'text-3xl font-extrabold tracking-tight sm:text-4xl',
  heroSubheading: 'text-base leading-relaxed text-slate-700 max-w-2xl',

  statsGrid: 'mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4',
  statCard: 'rounded-lg bg-white shadow-sm ring-1 ring-border p-5',
  statLabel: 'text-sm font-semibold text-slate-700',
  statValue: 'mt-1 text-2xl font-extrabold text-slate-900',
  statIconWrap:
    'mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-50',
  statIcon: 'h-5 w-5 text-blue-800',

  sectionWrap: 'mt-10',
  sectionHeading: 'text-lg font-bold text-slate-900',

  reviewsGrid: 'mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3',
  reviewCard:
    'rounded-lg bg-white shadow-sm ring-1 ring-border p-6 flex h-full flex-col',
  reviewQuote: 'text-slate-700 leading-relaxed min-h-[84px]',
  reviewMetaRow: 'mt-auto pt-4 flex items-end justify-between gap-4',
  reviewRatingRow: 'mt-4 flex items-center gap-1',
  reviewAuthor: 'font-semibold text-slate-900',
  reviewLocation: 'text-sm text-slate-600',
  starIcon: 'h-4 w-4 text-amber-500',
  reviewSource: 'text-xs font-semibold text-slate-600',

  ctaCard: 'mt-10 rounded-lg bg-blue-800 text-white p-6 shadow-sm',
  ctaHeading: 'text-lg font-bold text-white',
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
