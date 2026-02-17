import FaqLandingView from '@/src/components/faq/FaqLandingView';
import { getFaqLandingConfig } from '@/src/config/faq/getters';
import { defaultFaqLandingTheme } from '@/src/theme/faqLandingThemes';

export default function FaqPage() {
  const config = getFaqLandingConfig();

  return <FaqLandingView config={config} theme={defaultFaqLandingTheme} />;
}
