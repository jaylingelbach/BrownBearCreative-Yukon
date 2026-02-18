import ContactLandingView from '@/src/brownBearComponents/components/contact/ContactLandingView';
import { getContactLandingConfig } from '@/src/config/contact/getters';
import { defaultContactLandingTheme } from '@/src/theme/contactLandingThemes';

/**
 * Render the contact landing page using configured data and the default theme.
 *
 * @returns A React element that displays the ContactLandingView with the retrieved contact configuration and the default contact landing theme.
 */
export default function ContactPage() {
  const config = getContactLandingConfig();

  return (
    <ContactLandingView config={config} theme={defaultContactLandingTheme} />
  );
}
