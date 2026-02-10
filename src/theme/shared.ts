import { cn } from '@/src/lib/cn';

export const focusRing = cn(
  'focus-visible:outline-none',
  'focus-visible:ring-2 focus-visible:ring-primary-foreground',
  'focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
);
