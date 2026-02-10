import { cn } from '@/src/lib/cn';

export type FooterContactBarTheme = {
  bar: string;
  inner: string;

  left: string;
  right: string;

  icon: string;
  phoneLabel: string;
  phoneNumber: string;

  divider: string;
  location: string;

  link: string;
};

const focusRing = cn(
  'focus-visible:outline-none',
  'focus-visible:ring-2 focus-visible:ring-primary-foreground',
  'focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
);

export const defaultFooterContactBarTheme: FooterContactBarTheme = {
  bar: 'bg-primary text-primary-foreground',
  inner:
    'mx-auto flex max-w-6xl items-center justify-between ' +
    'px-4 py-8 sm:px-6 lg:px-10',

  left: 'flex items-center gap-3',
  right: 'flex items-center gap-3',

  icon: 'h-6 w-6',
  phoneLabel: 'text-sm font-semibold opacity-90',
  phoneNumber: 'text-base font-extrabold tracking-tight',

  divider: 'text-primary-foreground/50',
  location: 'text-sm font-semibold opacity-90',

  link: cn('rounded-sm', focusRing)
};
