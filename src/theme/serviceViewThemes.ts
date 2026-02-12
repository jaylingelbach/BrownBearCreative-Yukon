import { ServiceViewTheme } from '@/src/lib/types';

export const defaultServiceViewTheme: ServiceViewTheme = {
  page: 'bg-white text-slate-900',

  hero: 'bg-white',
  heroInner: 'mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10',

  heroGrid: 'grid gap-10 lg:grid-cols-12 lg:items-center',
  heroLeft: 'lg:col-span-7',
  heroRight: 'lg:col-span-5 flex justify-center lg:justify-end',

  eyebrow: 'text-sm font-semibold tracking-wide text-blue-700',
  title:
    'mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl',

  intro: 'mt-4 text-base leading-relaxed text-slate-700',

  highlights: 'mt-5 space-y-2 text-slate-700',
  highlightItem: 'flex items-start gap-2 leading-relaxed',

  mediaFrame:
    'relative w-full max-w-md overflow-hidden rounded-lg ring-1 ring-border bg-black/5 aspect-[4/3]',
  iconFrame:
    'flex w-full max-w-md items-center justify-center rounded-lg ring-1 ring-border bg-blue-50 aspect-[4/3]',
  icon: 'h-16 w-16 text-blue-800',

  ctaRow: 'mt-6 flex flex-wrap items-center gap-3',
  primaryCta:
    'inline-flex items-center justify-center rounded-md bg-blue-800 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
  secondaryCta:
    'inline-flex items-center justify-center rounded-md border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-50 transition-colors ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white',

  bodySection: 'bg-white',
  bodyInner: 'mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10',

  card: 'rounded-lg bg-white shadow-sm ring-1 ring-border p-6',
  cardTitle: 'text-lg font-bold text-slate-900',
  cardBody: 'mt-2 text-sm leading-relaxed text-slate-600',

  // ── Service page sections (theme-driven) ───────────────────────────────
  sectionsWrap: 'mt-8 space-y-10',
  sectionDivider: 'mb-10 h-px w-full bg-border',

  bulletsList: 'mt-4 space-y-2',
  bulletsItem: 'flex items-start gap-3',
  bulletsIcon: 'mt-0.5 h-5 w-5 text-emerald-700',
  bulletsText: 'text-slate-700',

  stepsList: 'mt-4 space-y-4',
  stepsItem: 'flex gap-4',
  stepsBadge:
    'mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary',
  stepsTitle: 'font-semibold text-slate-900',
  stepsText: 'mt-1 text-slate-700',

  featuresGrid: 'mt-4 grid gap-4 sm:grid-cols-2',
  featureCard: 'rounded-md border border-border bg-white p-4',
  featureIcon: 'mt-0.5 h-5 w-5 text-primary',
  featureDot: 'mt-1 h-2 w-2 rounded-full bg-primary',
  featureTitle: 'font-semibold text-slate-900',
  featureText: 'mt-1 text-slate-700',

  textWrap: 'mt-4 space-y-3',
  textParagraph: 'text-slate-700'
};
