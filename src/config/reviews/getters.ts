import type { ReviewsLandingConfig } from '@/src/config/reviews/types';

export function getReviewsLandingConfig(): ReviewsLandingConfig {
  return {
    heading: 'Customer Reviews',
    subheading:
      'Real feedback from people we’ve helped. Expect clear communication, clean work, and results you can trust.',

    stats: [
      { label: 'Average rating', value: '4.9/5' },
      { label: 'Total reviews', value: '120+' },
      { label: 'Response time', value: '< 1 business day' },
      { label: 'Repeat customers', value: 'High' }
    ],

    reviews: [
      {
        id: 'r1',
        quote:
          'Showed up on time, explained everything clearly, and fixed the issue fast. Left the area spotless.',
        author: 'Jordan M.',
        location: 'St. Charles, MO',
        rating: 5,
        dateLabel: 'Jan 2026',
        source: 'google'
      },
      {
        id: 'r2',
        quote:
          'Super professional. Pricing was upfront and the work was done right the first time.',
        author: 'Alyssa K.',
        location: 'Chesterfield, MO',
        rating: 5,
        dateLabel: 'Dec 2025',
        source: 'google'
      },
      {
        id: 'r3',
        quote:
          'Quick response when we had an emergency. Walked us through options and handled it calmly.',
        author: 'Sam R.',
        location: 'O’Fallon, IL',
        rating: 5,
        dateLabel: 'Nov 2025',
        source: 'facebook'
      }
    ],

    cta: {
      heading: 'Want the same experience?',
      text: 'Tell us what’s going on and we’ll recommend the right next step.',
      primary: { label: 'Get a Free Quote', href: '/contact' },
      secondary: { label: 'Back to Home', href: '/' }
    }
  };
}
