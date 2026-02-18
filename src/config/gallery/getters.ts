import { defaultGalleryLandingConfig } from '@/src/config/gallery/galleryLandingConfig';
import { GalleryLandingConfig } from '@/src/config/gallery/types';

/**
 * Retrieve the default configuration for the gallery landing page.
 *
 * @returns The `GalleryLandingConfig` object used as the application's default gallery landing configuration.
 */
export function getGalleryLandingConfig(): GalleryLandingConfig {
  return defaultGalleryLandingConfig;
}