import { CheckCircle2 } from 'lucide-react';

import type { AboutLandingTheme } from '@/src/lib/types';
import type { AboutLandingConfig } from '@/src/config/about/types';
import renderAboutSection from '@/src/components/about/renderAboutSection';

type AboutLandingViewProps = {
  config: AboutLandingConfig;
  theme: AboutLandingTheme;
};

export default function AboutLandingView({
  config,
  theme
}: AboutLandingViewProps) {
  return (
    <main className={theme.page}>
      <div className={theme.inner}>
        <div className={theme.heroWrap}>
          <h1 className={theme.heroHeading}>{config.heading}</h1>
          {config.subheading ? (
            <p className={theme.heroSubheading}>{config.subheading}</p>
          ) : null}

          {config.proofPoints && config.proofPoints.length > 0 ? (
            <ul className={theme.proofList}>
              {config.proofPoints.map((item) => (
                <li key={item} className={theme.proofItem}>
                  <CheckCircle2
                    className={theme.proofIcon}
                    aria-hidden={true}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className={theme.sectionsWrap}>
          {config.sections.map((section, index) =>
            renderAboutSection({ section, theme, index })
          )}
        </div>
      </div>
    </main>
  );
}
