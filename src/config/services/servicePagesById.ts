import type { ServicePageContent, ServiceId } from './types';

export const servicePagesById: Partial<Record<ServiceId, ServicePageContent>> =
  {
    'drain-cleaning': {
      intro:
        'Fast, clean drain clearing for sinks, tubs, showers, and main lines. We’ll find the clog, clear it safely, and help prevent repeat backups.',
      description:
        'Whether it’s a slow sink, a backed-up tub, or a stubborn main line clog, we diagnose the cause and use the right method to clear it—without making a mess. We’ll also call out common culprits (grease, roots, buildup) and share simple steps to keep your drains flowing.',
      highlights: [
        'Same-day availability',
        'Upfront pricing',
        'Clean work area'
      ],
      heroMedia: {
        imageSrc: '/plumber1.png',
        alt: 'Plumber clearing a drain under a sink'
      },
      sections: [
        {
          type: 'bullets',
          heading: 'What we help with',
          items: [
            'Kitchen sinks (grease & food buildup)',
            'Showers & tubs (hair and soap scum)',
            'Toilets (paper and blockages)',
            'Floor drains and laundry drains',
            'Main line clogs and recurring backups'
          ]
        },
        {
          type: 'steps',
          heading: 'How it works',
          steps: [
            {
              title: 'Assess',
              text: 'We locate the clog and confirm the safest, most effective clearing method.'
            },
            {
              title: 'Clear',
              text: 'We remove the blockage using professional tools and keep the work area protected and clean.'
            },
            {
              title: 'Prevent',
              text: 'We test flow, explain what caused the issue, and share tips to reduce repeat clogs.'
            }
          ]
        }
      ]
    },

    'water-heaters': {
      intro:
        'Hot water back fast—repair, replacement, and installation for standard and tankless water heaters.',
      description:
        'From lukewarm showers to leaking tanks, we troubleshoot the issue, explain your options, and make the fix that fits your home and budget. If replacement makes more sense, we’ll size the unit correctly, install it safely, and make sure everything is code-compliant and running efficiently.',
      highlights: [
        'Repair & replacement',
        'Tankless options',
        'Code-compliant install',
        'Upfront recommendations'
      ],
      heroMedia: {
        imageSrc: '/plumber2.png',
        alt: 'Technician inspecting a water heater'
      },
      sections: [
        {
          type: 'bullets',
          heading: 'Common problems we fix',
          items: [
            'No hot water or inconsistent temperature',
            'Pilot / ignition issues',
            'Leaks, corrosion, or rust-colored water',
            'Strange noises (sediment buildup)',
            'Low hot-water pressure'
          ]
        },
        {
          type: 'steps',
          heading: 'Your options',
          steps: [
            {
              title: 'Repair',
              text: 'Best when the tank is in good shape and the issue is a replaceable component.'
            },
            {
              title: 'Replace',
              text: 'Recommended for older units, recurring failures, or when efficiency upgrades make sense.'
            },
            {
              title: 'Upgrade',
              text: 'Consider tankless or high-efficiency models for space savings and long-term performance.'
            }
          ]
        }
      ]
    },

    'emergency-repair': {
      intro:
        'Plumbing problems don’t wait. If you have an urgent leak, backup, or failure, we can help you stabilize the issue and fix it ASAP.',
      description:
        'When something is actively leaking, overflowing, or causing damage, our priority is fast containment and a safe, durable repair. We’ll walk you through immediate steps to limit damage, arrive prepared, and get your system back to a stable, working state as quickly as possible.',
      highlights: [
        'Rapid response',
        'Leak control',
        'Damage prevention',
        'Clear next steps'
      ],
      heroMedia: {
        imageSrc: '/plumber3.png',
        alt: 'Emergency plumbing repair in progress'
      },
      sections: [
        {
          type: 'bullets',
          heading: 'Emergency issues we handle',
          items: [
            'Burst pipes and active leaks',
            'Sewer backups and overflowing drains',
            'No water or major pressure loss',
            'Water heater leaks or failures',
            'Frozen pipes and thaw assistance'
          ]
        },
        {
          type: 'steps',
          heading: 'What to do right now',
          steps: [
            {
              title: 'Shut off water',
              text: 'Use your main shutoff or the nearest fixture shutoff to stop the flow.'
            },
            {
              title: 'Protect the area',
              text: 'Move valuables, use towels/buckets, and avoid electrical hazards around water.'
            },
            {
              title: 'Call us',
              text: 'We’ll help you triage the situation and schedule the fastest available response.'
            }
          ]
        }
      ]
    }
  };
