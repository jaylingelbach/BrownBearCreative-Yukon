import { TextLogo } from '@/src/components/branding/TextLogo';
import { blueTheme } from '@/src/theme/navbarThemes';

import Image from 'next/image';
import type {
  EmailConfig,
  PhoneConfig,
  SiteConfig
} from '@/src/config/header/types';

import { SITE_TIER, tierPresets } from '@/src/config/tiers';

import { services } from '@/src/config/services/services';
import {
  getAllowedDropdowns,
  getServiceNavChildren
} from '@/src/config/services/selectors';

import {
  buildStarterLinks,
  buildGrowthLinks,
  buildManagedLinks
} from '@/src/config/header/links';

/* ---------- Resolve active tier ---------- */
const tierId = SITE_TIER;
const tier = tierPresets[tierId];

if (!tier) {
  throw new Error(`[headerConfig] Invalid SITE_TIER "${tierId}"`);
}

/* ---------- logo presets ---------- */
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

const logo = logoPresets.image;

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

/* ---------- Services → dropdown children (from Service Data) ---------- */
const allowedDropdowns = getAllowedDropdowns(services);
const serviceChildren = getServiceNavChildren(allowedDropdowns);

/* ---------- Hard rule: Starter NEVER gets dropdowns ---------- */
const enableDropdowns =
  tierId !== 'starter' && tier.navigation.enableDropdowns === true;

/* ---------- Tier → links mapping (RESTORED) ---------- */
const linksByTier = {
  starter: buildStarterLinks(),
  growth: buildGrowthLinks({ serviceChildren }),
  managed: buildManagedLinks({ serviceChildren })
} as const;

/* ---------- Final Site config ---------- */
export const siteConfig: SiteConfig = {
  theme: blueTheme,
  logo,
  phone,
  email,
  seo,
  links: linksByTier[tierId],
  enableDropdowns
};
