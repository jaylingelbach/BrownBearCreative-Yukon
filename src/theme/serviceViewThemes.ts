import { ServiceViewTheme } from '@/src/lib/types';

export const defaultServiceViewTheme: ServiceViewTheme = {
  page: 'bg-white text-slate-900',

  hero: 'border-b bg-white',
  heroInner: 'mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10',

  eyebrow: 'text-sm font-semibold tracking-wide text-blue-700',
  title:
    'mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl',

  mediaRow: 'mt-8',
  mediaFrame:
    'relative overflow-hidden rounded-lg ring-1 ring-border bg-black/5 aspect-[16/9]',
  iconFrame:
    'flex items-center justify-center rounded-lg ring-1 ring-border bg-blue-50 aspect-[16/9]',
  icon: 'h-16 w-16 text-blue-800',

  ctaRow: 'mt-6 flex flex-wrap items-center gap-3',
  primaryCta:
    'inline-flex items-center justify-center rounded-md bg-blue-800 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors',
  secondaryCta:
    'inline-flex items-center justify-center rounded-md border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-800 hover:bg-blue-50 transition-colors',

  section: 'bg-white',
  sectionInner: 'mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10',
  card: 'rounded-lg bg-white shadow-sm ring-1 ring-border p-6',
  cardTitle: 'text-lg font-bold text-slate-900',
  cardBody: 'mt-2 text-sm leading-relaxed text-slate-600'
};
