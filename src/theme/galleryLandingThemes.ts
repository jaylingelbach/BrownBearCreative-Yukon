import type { GalleryLandingTheme } from '@/src/lib/types';

export const defaultGalleryLandingTheme: GalleryLandingTheme = {
  page: 'bg-white text-slate-900',
  inner: 'mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10',

  heroWrap: 'space-y-3',
  heroHeading: 'text-3xl font-extrabold tracking-tight sm:text-4xl',
  heroSubheading: 'text-base leading-relaxed text-slate-700 max-w-2xl',

  bulletsList: 'mt-6 space-y-3',
  bulletsItem: 'flex items-start gap-3 text-slate-700',
  bulletsDot: 'mt-2 h-2 w-2 rounded-full bg-blue-800',

  grid: 'mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3',

  card: 'rounded-lg bg-white shadow-sm ring-1 ring-border overflow-hidden',
  imageFrame: 'relative aspect-[4/3] bg-black/5',
  image: 'object-cover',

  cardBody: 'p-5',
  cardTitle: 'text-base font-semibold text-slate-900',
  cardDescription: 'mt-1 text-sm leading-relaxed text-slate-600',

  tagsWrap: 'mt-4 flex flex-wrap gap-2',
  tag: 'rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700'
};
