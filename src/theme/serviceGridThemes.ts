export type ServiceGridTheme = {
  section: string;
  heading: string;
  grid: string;
  card: string;
  icon: string;
  title: string;
};

export const defaultServiceGridTheme: ServiceGridTheme = {
  section: 'px-4 py-8 sm:px-6 sm:py-10 lg:px-10',
  heading: 'mb-6 text-center text-2xl font-extrabold',
  grid:
    'mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 ' +
    'lg:grid-cols-3 lg:gap-8 max-w-6xl xl:max-w-7xl',
  card: 'overflow-hidden shadow-sm ring-1 ring-border transition hover:shadow-md',
  icon: 'h-10 w-10',
  title: 'text-center font-medium line-clamp-1'
};
