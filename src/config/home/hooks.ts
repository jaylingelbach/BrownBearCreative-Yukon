import { homeConfig } from './homeConfig';

export function useHomeConfig() {
  return homeConfig;
}

export function useServiceCardsConfig() {
  return homeConfig.serviceCards;
}
