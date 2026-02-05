import { TextLogo } from '@/src/components/branding/TextLogo';
import { blueTheme } from '@/src/theme/navbarThemes';
import {
  growthLinks,
  managedLinks,
  starterLinks
} from '@/src/config/header/links';

import Image from 'next/image';
import {
  EmailConfig,
  PhoneConfig,
  SiteConfig
} from '@/src/config/header/types';

import { SITE_TIER, tierPresets } from '@/src/config/tiers';

/* ---------- Resolve active tier ---------- */
const tierId = SITE_TIER;
const tier = tierPresets[tierId];

/* ---------- Client Specific choices ---------- */

/* ---------- logo ---------- */

const logoPresets = {
  text: <TextLogo text="Smith Plumbing" className="text-blue-900" />,
  image: (
    <div className="relative h-20 w-60">
      <Image
        src="/logos/smith-plumbing.png"
        alt="Smith Plumbing"
        fill
        className="object-contain"
        sizes="240px"
        priority
      />
    </div>
  )
} as const;

// Switch logo type here:
const logo = logoPresets.image; // Adjust logo & alt text above. Logo must be present in public/logos/
// const logo = logoPresets.text; // Enter text in logo presets object above.

/* ---------- SEO Metadata ---------- */
const seo = {
  siteName: 'Smith Plumbing',
  defaultTitle: 'Smith Plumbing',
  defaultDescription:
    'Professional residential and commercial plumbing services in your area.'
};

/* ---------- Contact info ---------- */
const phone: PhoneConfig = {
  label: '(618) 555-1234',
  href: 'tel:16185551234'
};

const email: EmailConfig = {
  label: 'info@smithplumbing.com',
  href: 'mailto:info@smithplumbing.com'
};

/* ---------- Tier → links mapping ---------- */

const linksByTier = {
  starter: starterLinks,
  growth: growthLinks,
  managed: managedLinks
} as const;

/* ---------- Final Site config ---------- */

export const siteConfig: SiteConfig = {
  theme: blueTheme,
  logo,
  phone,
  email,
  seo,
  links: linksByTier[tierId],
  enableDropdowns: tier.navigation.enableDropdowns
};
