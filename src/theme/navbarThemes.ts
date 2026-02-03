import { NavbarTheme } from '@/src/lib/types';

// Design-system themes for the navbar.
// Selected by site config; never contain client-specific data.

export const blueTheme: NavbarTheme = {
  // top bar
  topbarContainer: 'bg-white text-blue-900 border-b',
  topbarText: 'font-extrabold tracking-wide',
  topbarPhone: 'font-semibold text-blue-700',

  // nav bar
  navContainer: 'bg-blue-800 text-white',
  navLink:
    'px-3 py-2 text-sm font-medium hover:bg-blue-700 rounded transition-colors',
  navLinkActive: 'bg-blue-700',
  navPhone: 'font-semibold',

  // dropdown
  dropdown: 'bg-white text-gray-900 border border-gray-200',
  dropdownItem: 'hover:bg-gray-100',

  // spacing
  navGap: 'gap-1 sm:gap-2 md:gap-4 lg:gap-6'
};
