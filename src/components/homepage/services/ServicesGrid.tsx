import ServiceCard from '@/src/components/homepage/services/ServiceCard';
import type { ServiceData } from '@/src/config/services/types';
import { defaultServiceGridTheme } from '@/src/theme/serviceGridThemes';

interface Props {
  filteredServices: ServiceData[];
}

/**
 * Renders a grid of service cards for the provided services.
 *
 * @param filteredServices - The services to display in the grid.
 * @returns A React element containing a container with a grid of ServiceCard components.
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