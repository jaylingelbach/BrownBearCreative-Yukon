export type FooterContactBarConfig = {
  enabled: boolean;
  phone: {
    label: string; // "Call:"
    display: string; // "(618) 555-1234"
    href: string; // "tel:+16185551234"
  };

  location?: {
    display: string; // "Belleville, IL"
  };
};

export const footerContactBar: FooterContactBarConfig = {
  enabled: true,
  phone: {
    label: 'Call:',
    display: '(618) 555-1234',
    href: 'tel:+16185551234'
  },
  location: { display: 'Belleville, IL' }
};
