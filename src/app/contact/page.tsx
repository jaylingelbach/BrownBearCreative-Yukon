import ContactLandingView from '@/src/components/contact/ContactLandingView';
import { getContactLandingConfig } from '@/src/config/contact/getters';
import { defaultContactLandingTheme } from '@/src/theme/contactLandingThemes';

export default function ContactPage() {
  const config = getContactLandingConfig();

  return (
    <ContactLandingView config={config} theme={defaultContactLandingTheme} />
  );
}
