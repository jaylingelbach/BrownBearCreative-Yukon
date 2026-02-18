import { notFound } from 'next/navigation';

import GalleryLandingView from '@/src/components/gallery/GalleryLandingView';
import { defaultGalleryLandingTheme } from '@/src/theme/galleryLandingThemes';
import { getTierPreset } from '@/src/config/tiers/getters';
import { getGalleryLandingConfig } from '@/src/config/gallery/getters';

/**
 * Render the gallery landing page if the current tier enables the gallery, otherwise trigger a 404.
 *
 * @returns A JSX element that renders `GalleryLandingView` with the resolved gallery config and the `defaultGalleryLandingTheme`.
 */
export default function GalleryPage() {
  const tier = getTierPreset();

  if (tier.content.galleryEnabled !== true) {
    notFound();
  }

  const config = getGalleryLandingConfig();

  return (
    <GalleryLandingView config={config} theme={defaultGalleryLandingTheme} />
  );
}