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
  freeDeliveryThreshold: 200,
  social: {
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/'
  },
  // Approximate coords for North Vancouver — adjust to your real workshop
  geo: { lat: 49.3200, lng: -123.0700 }
};

export const navigation = [
  { label: 'Shop', href: '/shop' },
  { label: 'Custom Planters', href: '/custom-planters' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' }
];
