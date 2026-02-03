import { homepageSectionRegistry } from '@/src/components/homepage/sectionRegistry';
import { SITE_TIER, tierPresets } from '@/src/config/tiers';

export default function Home() {
  /* ---------- Resolve active tier ---------- */
  const tierId = SITE_TIER;
  const tier = tierPresets[tierId];

  if (!tier) {
    throw new Error(
      `[homepage] Invalid SITE_TIER: "${tierId}" not found in tierPresets.`
    );
  }

  /* ---------- Render allowed Sections ---------- */
  const allowedSections = tier.homepage.allowedSectionsInOrder;

  const sections = allowedSections.map((section, index) => {
    const Section = homepageSectionRegistry[section];
    if (!Section) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(
          `[homepage] No component registered for section "${section}". Skipping render.`
        );
      }
      return null;
    }

    return <Section key={`${section}-${index}`} />;
  });

  return <div className="flex flex-col items-center h-60 p-6">{sections}</div>;
}
