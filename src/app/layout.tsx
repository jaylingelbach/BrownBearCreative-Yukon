import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/src/components/layout/header';
import { siteConfig } from '@/src/config/header/headerConfig';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.seo.siteName}`
  },
  description: siteConfig.seo.defaultDescription
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header
          logo={siteConfig.logo}
          phone={siteConfig.phone}
          links={siteConfig.links}
          enableDropdowns={siteConfig.enableDropdowns}
          theme={siteConfig.theme}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}
