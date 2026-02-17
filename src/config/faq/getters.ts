import type { FaqLandingConfig } from './types';

export function getFaqLandingConfig(): FaqLandingConfig {
  return {
    heading: 'Frequently Asked Questions',
    subheading:
      "Quick answers to common questions. If you don't see your situation here, reach out and we'll help you figure out the next step.",
    bullets: [
      'Clear, upfront guidance',
      'Respectful service in your space',
      'Fast response times'
    ],
    sections: [
      {
        heading: 'Scheduling & estimates',
        items: [
          {
            id: 'sched-1',
            question: 'Do you offer same-day appointments?',
            answer:
              "Often, yes. Availability depends on the day and the type of issue. Contact us with your address and a short description and we'll confirm the soonest window."
          },
          {
            id: 'sched-2',
            question: 'Do you provide estimates?',
            answer:
              "Yes. We'll explain what we're seeing, talk through options, and confirm pricing before work begins whenever possible."
          }
        ]
      },
      {
        heading: 'Service & pricing',
        items: [
          {
            id: 'price-1',
            question: 'What affects the final cost?',
            answer:
              "Scope, access, and the time/materials required. We'll describe the recommended approach and confirm any changes before proceeding."
          },
          {
            id: 'price-2',
            question: 'Do you guarantee your work?',
            answer:
              "We stand behind the quality of our workmanship. If something doesn't look right after the service, contact us and we'll make it right."
          }
        ]
      }
    ],
    cta: {
      heading: 'Still have questions?',
      text: "Tell us what's going on and we'll point you in the right direction.",
      primary: { label: 'Contact Us', href: '/contact' },
      secondary: { label: 'Back to Home', href: '/' }
    }
  };
}
