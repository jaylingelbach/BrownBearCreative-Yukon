import { cn } from '@/src/lib/cn';

/**
 * Tailwind classes expected
 */
export type HeroTheme = {
  section: string;
  inner: string;

  heading: string;
  subheading: string;

  ctaRow: string;
  primaryCta: string;
  secondaryCta: string;
};

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white';
const ctaBase =
  'inline-flex h-12 items-center justify-center rounded-md px-6 text-sm font-semibold ';

export const defaultHeroTheme: HeroTheme = {
  section: 'bg-primary/5 border-b',
  inner: 'mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-10',

  heading:
    'text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl',
  subheading: 'mt-3 text-center text-base text-slate-700 sm:text-lg',

  ctaRow:
    'mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4',
  primaryCta: cn(
    ctaBase,
    'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors',
    focusRing
  ),
  secondaryCta: cn(
    ctaBase,
    'border border-primary text-primary bg-transparent hover:bg-primary/10 transition-colors',
    focusRing
  )
};
