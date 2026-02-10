import { cn } from '@/src/lib/cn';

export type PrimaryCtaTheme = {
  section: string;
  inner: string;

  splitWrap: string;

  /** Grid placement for the left column */
  splitLeft: string;

  /** The “white card” styling inside the left column (theme-driven) */
  splitLeftCard: string;

  /** Grid placement for the right column */
  splitRight: string;

  barWrap: string;

  icon: string;
  lines: string;
  secondaryLine: string;

  action: string;

  mediaFrame: string;
  mediaImage: string;
};

const focusRing = cn(
  'focus-visible:outline-none',
  'focus-visible:ring-2 focus-visible:ring-primary-foreground',
  'focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
);

export const defaultPrimaryCtaTheme: PrimaryCtaTheme = {
  section: 'border-t bg-gradient-to-b from-primary/10 to-white',

  inner: 'mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-10',

  splitWrap: 'grid gap-10 lg:grid-cols-12 lg:items-stretch',

  splitLeft: 'lg:col-span-7 h-full',

  splitLeftCard: cn(
    'h-full',
    'rounded-lg bg-white/60 p-6 ring-1 ring-border',
    'flex flex-col items-center justify-center text-center',
    'min-h-[220px] sm:min-h-[260px]'
  ),

  splitRight:
    'lg:col-span-5 h-full flex items-center justify-center lg:justify-end',

  barWrap:
    'flex items-center justify-between gap-4 rounded-md bg-primary/10 px-6 py-4',

  icon: 'h-9 w-9 text-primary',
  lines: 'text-primary font-extrabold text-lg sm:text-xl',
  secondaryLine: 'mt-2 text-sm sm:text-base text-slate-700',

  action: cn(
    'inline-flex h-12 sm:h-14 items-center justify-center rounded-md bg-primary px-6 sm:px-8 text-sm sm:text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors',
    focusRing
  ),

  mediaFrame:
    'relative h-56 w-56 sm:h-64 sm:w-64 overflow-hidden rounded-full ring-2 ring-border bg-white shadow-sm',

  mediaImage: 'object-cover'
};
