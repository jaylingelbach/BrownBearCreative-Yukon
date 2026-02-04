import ServiceCard from '@src/components/homepage/services/ServiceCard';
import type { ServiceData } from '@src/config/services/types';
import { defaultServiceGridTheme } from '@src/theme/serviceGridThemes';

interface Props {
  filteredServices: ServiceData[];
}

export default function ServicesGrid({ filteredServices }: Props) {
  const theme = defaultServiceGridTheme;

  return (
    <section className={theme.section}>
      <div className={theme.grid}>
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} theme={theme} />
        ))}
      </div>
    </section>
  );
}
