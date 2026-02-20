import ServicesGrid from '@/src/brownBearComponents/components/homepage/services/ServicesGrid';
import { getHomepageServices } from '@/src/config/services/selectors';
import { services } from '@/src/config/services/services';
import { useId } from 'react';

/**
 * Renders a landmark section that provides an accessible heading and a grid of homepage services.
 *
 * @returns A section element containing a visually hidden `h2` (referenced by `aria-labelledby`) and a `ServicesGrid` populated with the homepage services
 */
export default function ServiceCardsSection() {
  const homepageServices = getHomepageServices(services);

  const baseId = useId();
  const headingId = `${baseId}-service-cards-heading`;

  return (
    <section aria-labelledby={headingId}>
      <h2 id={headingId} className="sr-only">
        Professional Services
      </h2>

      <ServicesGrid filteredServices={homepageServices} />
    </section>
  );
}