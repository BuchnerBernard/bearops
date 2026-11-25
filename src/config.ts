export const SITE = {
  name: 'Bear Ops',
  url: 'https://bearops.net',
  tagline: 'Systems | Processes | People',
  description:
    'Business optimisation for growing SaaS companies. We find the bottlenecks that hold your growth back, design the fixes and see them through until your team is using them.',
  email: 'hello@bearops.net',
  // Paste your scheduling link here (Cal.com or similar). Leave empty to hide it.
  bookingUrl: '',
  // Paste a form service URL here (Formspree, Web3Forms and similar). Leave empty and the
  // contact form opens an email draft instead.
  formEndpoint: '',
  // Replace with the registered company name.
  legalName: 'Bear Ops',
  country: 'South Africa',
};

export const TOPICS: Record<string, { label: string; num: string }> = {
  'lead-follow-up': { label: 'Lead follow-up', num: '1' },
  'deal-handover': { label: 'Deal handover', num: '2' },
  'go-live': { label: 'Go-live', num: '3' },
  invoicing: { label: 'Invoicing', num: '4' },
  collections: { label: 'Collections', num: '5' },
  renewals: { label: 'Renewals', num: '6' },
  general: { label: 'General', num: '' },
};
