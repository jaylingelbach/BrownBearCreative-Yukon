import type { ReactNode } from 'react';
import type { NavItem, NavbarTheme } from '@/src/lib/types';

export type PhoneConfig = {
  label: string;
  href: string;
};

export type EmailConfig = {
  label: string;
  href: string;
};

export type SiteSeoConfig = {
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
};

export type SiteConfig = {
  theme: NavbarTheme;
  logo: ReactNode;
  phone: PhoneConfig;
  email?: EmailConfig;
  seo: SiteSeoConfig;
  links: NavItem[];
  enableDropdowns: boolean;
};
