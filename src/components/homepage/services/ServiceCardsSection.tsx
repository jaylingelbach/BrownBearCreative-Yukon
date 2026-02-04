import ServicesGrid from '@src/components/homepage/services/ServicesGrid';
import { getHomepageServices } from '@src/config/services/selectors';
import { services } from '@src/config/services/services';
import { useId } from 'react';

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
