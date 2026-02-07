import { NavChild } from '@/src/lib/types';
import type {
  ServiceData,
  ServiceId,
  ServicePageContent
} from '@/src/config/services/types';

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

/**
 * Collects services permitted to appear in navigation dropdowns and sorts them by navigation order.
 *
 * @param servicesById - Mapping of service IDs to their ServiceData
 * @returns An array of ServiceData for services with `visibility.showInNav === true`, sorted by `order.nav` ascending and by `id` for ties
 */
export function getAllowedDropdowns(
  servicesById: Record<ServiceId, ServiceData>
): ServiceData[] {
  const allowedDropdowns = Object.values(servicesById)
    .filter((service) => service.visibility.showInNav === true)
    .sort((a, b) => a.order.nav - b.order.nav || a.id.localeCompare(b.id));
  return allowedDropdowns;
}

/**
 * Converts service entries into navigation child items for use in a dropdown.
 *
 * @param allowedDropdowns - Services permitted to appear in navigation dropdowns.
 * @returns An array of `NavChild` objects where `label` is the service's `labels.navLabel` and `href` is `/services/{slug}`.
 */
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

/**
 * Finds a service by slug from the service registry.
 *
 * @param servicesById - Record mapping service IDs to ServiceData
 * @param slug - URL slug to resolve
 * @returns The matching ServiceData or undefined if not found
 */
export function getServiceBySlug(
  servicesById: Record<ServiceId, ServiceData>,
  slug?: string
): ServiceData | undefined {
  if (typeof slug !== 'string' || slug.length === 0) {
    return undefined;
  }

  const directMatch = servicesById[slug];
  if (directMatch && directMatch.slug === slug) {
    return directMatch;
  }

  return Object.values(servicesById).find((service) => service.slug === slug);
}

export type ResolvedServicePage = {
  service: ServiceData;
  page?: ServicePageContent;
};
/**
 * Resolves a service page model (core service + optional page content) by slug.
 *
 * @param servicesById - Service registry
 * @param pagesById - Optional page content registry keyed by ServiceId
 * @param slug - URL slug
 * @returns A resolved model or null if the slug is unknown
 */
export function resolveServicePageBySlug(args: {
  servicesById: Record<ServiceId, ServiceData>;
  pagesById: Partial<Record<ServiceId, ServicePageContent>>;
  slug: string;
}): ResolvedServicePage | null {
  const { servicesById, slug, pagesById } = args;
  const service = getServiceBySlug(servicesById, slug);

  if (!service) {
    return null;
  }

  const page = pagesById[service.id];
  return { service, page };
}
