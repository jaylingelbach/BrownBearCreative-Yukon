import { cn } from '@/src/lib/cn';
import type { ContactLandingTheme } from '@/src/lib/types';
import { focusRing } from '@/src/theme/shared';

export const defaultContactLandingTheme: ContactLandingTheme = {
  page: 'bg-white text-slate-900',
  inner: 'mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10',

  heroWrap: 'space-y-3',
  heroHeading: 'text-3xl font-extrabold tracking-tight sm:text-4xl',
  heroSubheading: 'text-base leading-relaxed text-slate-700 max-w-2xl',

  layoutGrid: 'mt-10 grid gap-6 lg:grid-cols-12 lg:items-start',
  leftCol: 'lg:col-span-7 space-y-6',
  rightCol: 'lg:col-span-5 space-y-6',

  card: 'rounded-lg bg-white shadow-sm ring-1 ring-border p-6',
  cardHeading: 'text-lg font-bold text-slate-900',
  cardBody: 'mt-2 text-sm leading-relaxed text-slate-600',

  methodsGrid: 'mt-4 grid gap-3 sm:grid-cols-2',
  methodItem: 'rounded-md border border-border bg-white p-4',
  methodIconWrap:
    'mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-md bg-primary/10 text-primary',
  methodIcon: 'h-5 w-5',
  methodLabel: 'text-sm font-semibold text-slate-900',
  methodValue: 'mt-1 text-sm text-slate-700 break-words',
  methodHint: 'mt-1 text-xs text-slate-500',

  hoursList: 'mt-4 space-y-2',
  hoursRow: 'flex items-center justify-between gap-4 text-sm',
  hoursLabel: 'font-medium text-slate-700',
  hoursValue: 'text-slate-600',

  stepsList: 'mt-4 space-y-4',
  stepItem: 'flex gap-4',
  stepIndex:
    'mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary',
  stepTitle: 'font-semibold text-slate-900',
  stepText: 'mt-1 text-sm leading-relaxed text-slate-600'
};
