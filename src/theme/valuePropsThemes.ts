export type ValuePropsTheme = {
  section: string;
  inner: string;

  heading: string;
  description: string;

  layoutSplit: string;
  layoutImageForward: string;

  leftCol: string;
  items: string;
  item: string;
  itemIcon: string;
  itemText: string;

  imageWrapSplit: string;
  imageWrapLarge: string;
  imageFrame: string;

  ctaRow: string;
  ctaButton: string;
};

export const defaultValuePropsTheme: ValuePropsTheme = {
  section: 'bg-emerald-50/50 border-y',
  inner: 'mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10',
  heading: 'text-center text-3xl font-extrabold tracking-tight text-primary',
  description: 'mx-auto mt-3 max-w-2xl text-center text-base text-primary',
  layoutSplit: 'mt-8 grid gap-10 lg:grid-cols-12 lg:items-stretch',
  layoutImageForward: 'mt-8 flex flex-col items-center gap-6',
  leftCol: 'lg:col-span-5',
  items: 'mt-20 space-y-4',
  item: 'flex items-start gap-3',
  itemIcon: 'mt-1 h-5 w-5 text-emerald-700',
  itemText: 'text-lg text-slate-700',
  imageWrapSplit: 'lg:col-span-7',
  imageWrapLarge: 'w-full max-w-4xl',
  imageFrame:
    'relative overflow-hidden rounded-lg bg-black/5 ring-1 ring-border aspect-[16/9]',
  ctaRow: 'mt-6 flex justify-start',
  ctaButton:
    'inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors'
};
