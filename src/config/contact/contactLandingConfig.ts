import { Mail, MapPin, Phone } from 'lucide-react';
import type { ContactLandingConfig } from './types';

export const defaultContactLandingConfig: ContactLandingConfig = {
  heading: 'Contact Us',
  subheading:
    'Tell us what you’re looking for and we’ll respond with clear next steps and a quote if needed.',

  methods: [
    {
      type: 'phone',
      label: 'Call',
      value: '(555) 555-5555',
      href: 'tel:+15555555555',
      icon: Phone,
      hint: 'Fastest for urgent requests'
    },
    {
      type: 'email',
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
      icon: Mail,
      hint: 'Best for non-urgent questions'
    },
    {
      type: 'location',
      label: 'Service Area',
      value: 'St. Louis Metro',
      icon: MapPin,
      hint: 'Remote-friendly + on-site when needed'
    }
  ],

  hours: [
    { label: 'Mon–Fri', hours: '8am–5pm' },
    { label: 'Sat', hours: '9am–1pm' },
    { label: 'Sun', hours: 'Closed' }
  ],

  serviceArea: {
    heading: 'Where we work',
    description: 'On-site service in the metro area. Remote options available.',
    locations: [
      'St. Louis',
      'Clayton',
      'Chesterfield',
      'University City',
      'Webster Groves'
    ]
  },

  nextSteps: {
    heading: 'What happens next',
    steps: [
      {
        title: 'You reach out',
        text: 'Share a few details about your project.'
      },
      {
        title: 'We clarify',
        text: 'We ask any quick questions we need to quote accurately.'
      },
      {
        title: 'You get a plan',
        text: 'Clear scope, timeline, and pricing—no surprises.'
      }
    ]
  }
};
