export type ServiceCardMediaVariant = 'contained' | 'bleed';
export type ServiceCardImageFit = 'cover' | 'contain';

export type HomeConfig = {
  serviceCards: {
    /**
     * 'contained' => media sits inside padding (card background visible)
     * 'bleed'     => media is edge-to-edge like the mockup tiles
     */
    mediaVariant: ServiceCardMediaVariant;

    /**
     * Global image rendering mode for service cards.
     * This intentionally prevents per-service mixing.
     *
     * 'cover'   => photo tiles (fills frame, may crop)
     * 'contain' => logo tiles (fully visible, letterboxed)
     */
    imageFit: ServiceCardImageFit;
  };
};
