'use client';

import { homepageSectionRegistry } from '@src/components/homepage/services/sectionRegistry';
import { useTierPreset } from '@src/config/tiers/hooks';

export default function Home() {
  const tier = useTierPreset();
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

  return <div className="flex flex-col items-stretch p-6">{sections}</div>;
}
