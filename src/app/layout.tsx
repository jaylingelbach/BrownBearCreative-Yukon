import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/src/brownBearComponents/components/layout/header';
import { siteConfig } from '@/src/config/header/HeaderConfig';
import Footer from '@/src/brownBearComponents/components/layout/footer';

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

/**
 * Root layout component that provides the global HTML structure, fonts, header, main content area, and footer.
 *
 * @param children - The page content to render inside the layout's main area.
 * @returns A JSX element containing the <html> and <body> wrappers with global font variables applied, the Header, the provided main content, and the Footer.
 */
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
        <Footer />
      </body>
    </html>
  );
}
