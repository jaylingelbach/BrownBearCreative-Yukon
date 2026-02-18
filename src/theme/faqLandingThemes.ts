import { cn } from '@/src/lib/cn';
import type { FaqLandingTheme } from '@/src/lib/types';
import { focusRing } from '@/src/theme/shared';

export const defaultFaqLandingTheme: FaqLandingTheme = {
  page: 'bg-white text-slate-900',
  inner: 'mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10',

  heroWrap: 'space-y-3',
  heroHeading: 'text-3xl font-extrabold tracking-tight sm:text-4xl',
  heroSubheading: 'text-base leading-relaxed text-slate-700 max-w-2xl',

  bulletsList: 'mt-6 space-y-3',
  bulletsItem: 'flex items-start gap-3 text-slate-700',
  bulletsDot: 'mt-2 h-2 w-2 rounded-full bg-blue-800',

  sectionsWrap: 'mt-10 space-y-6',

  sectionCard: 'rounded-lg bg-white shadow-sm ring-1 ring-border p-6',
  sectionHeading: 'text-lg font-bold text-slate-900',
  sectionDescription: 'mt-2 text-sm leading-relaxed text-slate-600',

  faqList: 'mt-4 space-y-3',

  faqItem: 'rounded-md border border-border bg-white',
  faqSummary: cn(
    'flex cursor-pointer list-none items-center justify-between gap-4 rounded-md px-4 py-3',
    focusRing
  ),
  faqQuestion: 'font-semibold text-slate-900',
  faqChevron:
    'h-5 w-5 text-slate-500 transition-transform group-open:rotate-180',
  faqAnswerWrap: 'border-t border-border px-4 py-3',
  faqAnswer: 'text-sm leading-relaxed text-slate-700',

  ctaCard: 'rounded-lg bg-blue-800 text-white p-6 shadow-sm',
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
