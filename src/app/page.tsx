'use client';

import { homepageSectionRegistry } from '@src/components/homepage/services/sectionRegistry';
import { getTierPreset } from '@src/config/tiers/hooks';

/**
 * Render the home page by composing configured homepage sections in order.
 *
 * Sections listed in the current tier's `homepage.allowedSectionsInOrder` are rendered
 * using components registered in `homepageSectionRegistry`. If a section has no
 * registered component it is skipped (rendered as `null`) and a console warning is
 * emitted in non-production environments.
 * @returns The root JSX element containing the homepage sections in configured order; missing sections are represented as `null` in the children.
 */
export default function Home() {
  const tier = getTierPreset();
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
