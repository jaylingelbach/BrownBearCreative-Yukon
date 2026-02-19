import ContactLandingView from '@/src/brownBearComponents/components/contact/ContactLandingView';
import { getContactLandingConfig } from '@/src/config/contact/getters';
import { defaultContactLandingTheme } from '@/src/theme/contactLandingThemes';

/**
 * Renders the contact landing page using the configured contact data and the default theme.
 *
 * @returns The ContactLandingView React element configured with the retrieved contact configuration and the default contact landing theme.
 */
export default function ContactPage() {
  const config = getContactLandingConfig();

  return (
    <ContactLandingView config={config} theme={defaultContactLandingTheme} />
  );
}