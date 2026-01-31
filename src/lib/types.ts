import React from 'react';

export type NavbarTheme = {
  // top identity bar
  topbarContainer: string;
  topbarText: string;
  topbarPhone: string;

  // main nav bar
  navContainer: string;
  navLink: string;
  navLinkActive: string;
  navPhone: string;

  // dropdown menu
  dropdown: string;
  dropdownItem: string;

  // navigation bar gap
  navGap: string;
};

export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

export type NavbarProps = {
  links: NavItem[];
  enableDropdowns?: boolean;
  theme: NavbarTheme;
};

/* ---------- Header ---------- */
export type HeaderProps = {
  logo: React.ReactNode;
  phone: {
    label: string;
    href: string;
  };
  links: NavItem[];
  enableDropdowns?: boolean;
  theme: NavbarTheme;
};
