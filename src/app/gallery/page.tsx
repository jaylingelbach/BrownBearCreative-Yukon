import { notFound } from 'next/navigation';

import GalleryLandingView from '@/src/components/gallery/GalleryLandingView';
import { defaultGalleryLandingTheme } from '@/src/theme/galleryLandingThemes';
import { getTierPreset } from '@/src/config/tiers/getters';
import getGalleryLandingConfig from '@/src/config/gallery/getters';

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
