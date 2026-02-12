import { cn } from '@/src/lib/cn';
import type { AboutLandingTheme } from '@/src/lib/types';
import { focusRing } from '@/src/theme/shared';

export const defaultAboutLandingTheme: AboutLandingTheme = {
  page: 'bg-white text-slate-900',
  inner: 'mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10',

  heroWrap: 'space-y-3 rounded-lg bg-white shadow-sm ring-1 ring-border p-6',

  heroHeading: 'text-3xl font-extrabold tracking-tight sm:text-4xl',
  heroSubheading: 'text-base leading-relaxed text-slate-700 max-w-2xl',

  proofList: 'mt-6 space-y-3',
  proofItem: 'flex items-start gap-3 text-slate-700',
  proofIcon: 'mt-0.5 h-5 w-5 text-emerald-700',

  sectionsWrap: 'mt-10 space-y-6',

  card: 'rounded-lg bg-white shadow-sm ring-1 ring-border p-6',
  cardHeading: 'text-lg font-bold text-slate-900',
  cardBody: 'mt-2 text-sm leading-relaxed text-slate-600',

  bulletsList: 'mt-4 space-y-2',
  bulletsItem: 'flex items-start gap-3 text-slate-700',
  bulletsDot: 'mt-2 h-2 w-2 rounded-full bg-blue-800',

  featuresGrid: 'mt-4 grid gap-4 sm:grid-cols-2',
  featureItem: 'rounded-md border border-border bg-white p-4',
  featureTitle: 'font-semibold text-slate-900',
  featureText: 'mt-1 text-sm leading-relaxed text-slate-600',

  stepsList: 'mt-4 space-y-4',
  stepItem: 'flex gap-4',
  stepIndex:
    'mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary',
  stepTitle: 'font-semibold text-slate-900',
  stepText: 'mt-1 text-sm leading-relaxed text-slate-600',

  ctaCard: 'rounded-lg bg-blue-800 text-white p-6 shadow-sm',
  ctaText: 'mt-2 text-sm/6 text-white/90 max-w-2xl',
  ctaActions: 'mt-5 flex flex-wrap items-center gap-3',
  ctaPrimary: cn(
    'inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-sm font-semibold text-blue-900 hover:bg-white/90 transition-colors',
    focusRing
  ),
  ctaSecondary: cn(
    'inline-flex h-11 items-center justify-center rounded-md border border-white/30 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10 transition-colors',
    focusRing
  ),
  ctaHeading: 'text-lg font-bold text-white'
};
