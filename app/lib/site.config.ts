export const site = {
  // EDIT THESE — they cascade across the whole site
  name: 'Coastline Cedar',
  shortName: 'Coastline Cedar',
  url: 'https://coastlinecedar.com',
  phone: '(778) 522-1810',
  phoneHref: 'tel:+17785221810',
  email: 'hello@coastlinecedar.com',
  address: {
    locality: 'North Vancouver',
    region: 'BC',
    country: 'CA',
    postal: 'V7M 0A1'
  },
  hours: 'Mon–Sat · 9am–5pm',
  // Real delivery policy
  deliveryFee: 25,
  deliveryPolicy:
    'Pickup is available by appointment. Local delivery is available, usually $25. Delivery is free for orders of 2 or more items.',
  deliveryPolicyShort: 'Pickup by appointment · Local delivery usually $25 · Free for 2+ items',
  deliveryPolicyCustom:
    'Delivery and installation depend on size, access, and project scope.',
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/'
  },
  // Approximate coords for North Vancouver — adjust to your real workshop
  geo: { lat: 49.3200, lng: -123.0700 },
  // Trust / review links. Fill these in when available; sections degrade gracefully when empty.
  googleReviewsUrl: 'https://maps.app.goo.gl/yhUoFWP781fFc1jg9?g_st=ic', // GOOGLE_REVIEWS_URL
  trustpilotUrl: ''      // TRUSTPILOT_URL — paste once your Trustpilot profile is live
};

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const navigation: NavItem[] = [
  { label: 'Shop', href: '/shop' },
  {
    label: 'Products',
    children: [
      { label: 'Cedar Planters', href: '/shop' },
      { label: 'Custom Planters', href: '/custom-planters' },
      { label: 'Privacy Panels', href: '/cedar-privacy-panels-vancouver' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Custom Outdoor Saunas', href: '/custom-outdoor-saunas-vancouver' },
      { label: 'Gates & Fences', href: '/handmade-cedar-gates-fences-vancouver' },
      { label: 'Custom Builds', href: '/custom-planters' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
