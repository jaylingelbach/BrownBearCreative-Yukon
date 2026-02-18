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
  navGap: 'gap-1 sm:gap-2 md:gap-4 lg:gap-6',

  // ── Mobile ───────────────────────────────
  mobileBar:
    'bg-blue-800 text-white h-14 px-4 flex items-center justify-between',
  mobileMenuButton:
    'inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',
  mobileCtaButton:
    'inline-flex h-10 items-center justify-center rounded-md bg-white px-4 text-sm font-semibold text-blue-900 hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60',

  mobileSheet: 'p-0',
  mobileSheetHeader: 'px-4 py-4 border-b',
  mobileSheetTitle: 'text-base font-bold text-slate-900',

  mobileNavList: 'px-2 py-2',
  mobileNavItem:
    'block w-full rounded-md px-3 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100',
  mobileNavItemActive: 'bg-slate-100',

  mobileAccordionTrigger:
    'w-full rounded-md px-3 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100',
  mobileAccordionContent: 'pl-3 pr-2 pb-2',
  mobileChildItem:
    'block w-full rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100',
  mobileChildItemActive: 'bg-slate-100'
};
