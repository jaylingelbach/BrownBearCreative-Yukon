import { NavChild } from '@/src/lib/types';
import type { ServiceData, ServiceId } from '@src/config/services/types';

/**
 * Collects services flagged for homepage display and returns them sorted by homepage order then by id.
 *
 * @param servicesById - Record mapping service IDs to their ServiceData
 * @returns The list of services with `visibility.showOnHomepage === true`, sorted by `order.homepage` ascending and then by `id` to break ties
 *
 * @remarks
 * In non-production environments this function logs warnings if a homepage-visible service has neither `media.imageSrc` nor `media.icon`, and if multiple services share the same `order.homepage` value.
 */
export function getHomepageServices(
  servicesById: Record<ServiceId, ServiceData>
): ServiceData[] {
  const homepageServices: ServiceData[] = Object.values(servicesById)
    .filter((service) => service.visibility.showOnHomepage === true)
    .sort(
      (a, b) => a.order.homepage - b.order.homepage || a.id.localeCompare(b.id)
    );

  // Dev-only sanity checks
  if (process.env.NODE_ENV !== 'production') {
    const orderToIds = new Map<number, ServiceId[]>();

    for (const service of homepageServices) {
      // Track ordering duplicates
      const orderValue = service.order.homepage;
      const existingIds = orderToIds.get(orderValue) ?? [];
      existingIds.push(service.id);
      orderToIds.set(orderValue, existingIds);

      // Warn if a homepage-visible service has no usable media
      const hasImage =
        typeof service.media.imageSrc === 'string' &&
        service.media.imageSrc.length > 0;

      const hasIcon = typeof service.media.icon !== 'undefined';

      if (!hasImage && !hasIcon) {
        console.warn(
          `[services] Homepage service "${service.id}" has showOnHomepage=true but no imageSrc or icon.`
        );
      }
    }

    // Warn about duplicate homepage orders
    for (const [orderValue, ids] of orderToIds.entries()) {
      if (ids.length > 1) {
        console.warn(
          `[services] Duplicate homepage order "${orderValue}" for services: ${ids.join(
            ', '
          )}`
        );
      }
    }
  }

  return homepageServices;
}

export function getAllowedDropdowns(
  servicesById: Record<ServiceId, ServiceData>
): ServiceData[] {
  const allowedDropdowns = Object.values(servicesById)
    .filter((service) => service.visibility.showInNav === true)
    .sort((a, b) => a.order.nav - b.order.nav || a.id.localeCompare(b.id));
  return allowedDropdowns;
}

export function getServiceNavChildren(
  allowedDropdowns: ServiceData[]
): NavChild[] {
  return allowedDropdowns.map((service) => {
    return {
      label: service.labels.navLabel,
      href: `/services/${service.slug}`
    };
  });
}
