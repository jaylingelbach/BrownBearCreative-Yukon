import { ShieldCheck } from 'lucide-react';
import type { AboutLandingConfig } from './types';

export const defaultAboutLandingConfig: AboutLandingConfig = {
  heading: 'Why choose us',
  subheading:
    'Clear communication, reliable timelines, and work that holds up. We focus on making the process easy from first call to final follow-up.',

  proofPoints: [
    'Upfront pricing and clear scope',
    'Fast response times',
    'Respectful, tidy, and on-time'
  ],

  sections: [
    {
      type: 'features',
      heading: 'What you can expect',
      items: [
        {
          title: 'Clear next steps',
          text: 'You’ll always know what happens next, who’s responsible, and when it will be done.',
          icon: ShieldCheck
        },
        {
          title: 'Quality workmanship',
          text: 'We follow best practices and sweat the details so you don’t have to.',
          icon: ShieldCheck
        },
        {
          title: 'No surprises',
          text: 'We confirm scope and pricing before we start and communicate changes immediately.',
          icon: ShieldCheck
        },
        {
          title: 'Clean & respectful',
          text: 'We protect your space, keep things tidy, and wrap up with a final walkthrough.',
          icon: ShieldCheck
        }
      ]
    },
    {
      type: 'steps',
      heading: 'How it works',
      steps: [
        {
          title: 'Reach out',
          text: 'Tell us what you need and your ideal timeline.'
        },
        {
          title: 'Get a plan',
          text: 'We confirm scope, pricing, and scheduling.'
        },
        {
          title: 'Get it done',
          text: 'We complete the work and share any next-step recommendations.'
        }
      ]
    },
    {
      type: 'bullets',
      heading: 'Good fit for',
      items: [
        'Busy owners who want it handled end-to-end',
        'People who value clear communication',
        'Projects where quality and reliability matter'
      ]
    },
    {
      type: 'cta',
      heading: 'Ready to get started?',
      text: 'Send a quick note and we’ll recommend the right next step.',
      primary: { label: 'Contact us', href: '/contact' },
      secondary: { label: 'View services', href: '/services' }
    }
  ]
};
