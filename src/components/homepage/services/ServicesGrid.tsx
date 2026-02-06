import ServiceCard from '@/src/components/homepage/services/ServiceCard';
import type { ServiceData } from '@/src/config/services/types';
import { defaultServiceGridTheme } from '@/src/theme/serviceGridThemes';

interface Props {
  filteredServices: ServiceData[];
}

/**
 * Render a grid of service cards for the provided services.
 *
 * @param filteredServices - Array of services to display in the grid. Each service's `id` is used as the React key.
 * @returns The rendered React element containing a container with a grid of service cards.
 */
export default function ServicesGrid({ filteredServices }: Props) {
  const theme = defaultServiceGridTheme;

  return (
    <div className={theme.section}>
      <div className={theme.grid}>
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} theme={theme} />
        ))}
      </div>
    </div>
  );
}
