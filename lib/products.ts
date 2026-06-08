export type Product = {
  slug: string;
  name: string;
  category: 'patio' | 'balcony' | 'large' | 'raised' | 'privacy' | 'commercial' | 'custom';
  categoryLabel: string;
  shortDescription: string;
  description: string;
  dimensions: string;
  features: string[];
  bestFor: string[];
  startingPrice: number | null; // null = quote
  priceLabel: string;
  drainage: string;
  finishOptions: string[];
  image: string; // replace with your own /public/products/* paths
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
};

// Unsplash placeholders chosen for cedar + planter aesthetic.
// Replace with your own photos in /public/products/*.jpg and update paths.
export const products: Product[] = [
  {
    slug: 'classic-cedar-patio-planter',
    name: 'Classic Cedar Patio Planter',
    category: 'patio',
    categoryLabel: 'Patio',
    shortDescription: 'Compact cedar planter sized for small patios, decks, and front entrances.',
    description:
      'Our most popular patio size. Hand-built from kiln-dried Western Red Cedar with concealed fasteners and a soft chamfered top edge. Sized to fit narrow decks and front-entry alcoves without crowding the walkway, with enough soil depth for herbs, annuals, and small shrubs.',
    dimensions: '24″ L × 12″ W × 15″ H',
    features: [
      'Western Red Cedar — naturally rot-resistant',
      'Stainless steel fasteners',
      'Built-in drainage gaps and protective liner shelf',
      'Chamfered top edge — clean, modern profile',
      'Locally hand-built in North Vancouver'
    ],
    bestFor: ['Small patios', 'Front entrances', 'Townhouse decks', 'Herb gardens'],
    startingPrice: 129,
    priceLabel: 'Starting from $129',
    drainage: 'Pre-drilled drainage holes + interior shelf to elevate liner',
    finishOptions: ['Natural (unfinished)', 'Clear outdoor sealer', 'Charcoal stain'],
    image:'/images/products/patio-classic-24x12x15.png',
    imageAlt: 'Classic cedar patio planter with leafy plants on a small wooden deck',
    seoTitle: 'Classic Cedar Patio Planter | Coastline Cedar',
    seoDescription:
      'Compact hand-built cedar patio planter from Coastline Cedar. Locally crafted in Greater Vancouver. Local delivery available.'
  },
  {
    slug: 'long-cedar-balcony-planter',
    name: 'Long Cedar Balcony Planter',
    category: 'balcony',
    categoryLabel: 'Balcony',
    shortDescription: 'Narrow profile balcony planter that fits standard condo railings.',
    description:
      'Designed for Vancouver condo balconies. Long, shallow profile that tucks neatly against a balcony rail without eating into your usable space. Lightweight enough for elevator delivery and built with reinforced base joints for upper-floor use.',
    dimensions: '48″ L × 12″ W × 14″ H',
    features: [
      'Slim depth — fits standard balcony widths',
      'Reinforced base for high-rise use',
      'Drilled drainage with optional drip tray',
      'Lightweight construction for elevator delivery',
      'Tongue-and-groove cedar panels'
    ],
    bestFor: ['Condo balconies', 'Apartment patios', 'Privacy edging', 'Trailing flowers'],
    startingPrice: 199,
    priceLabel: 'Starting from $199',
    drainage: 'Drilled drainage with optional matching cedar drip tray',
    finishOptions: ['Natural (unfinished)', 'Clear outdoor sealer', 'Charcoal stain'],
    image:'/images/products/balcony-long-48x12x14.png',
    imageAlt: 'Long narrow cedar balcony planter against a railing with flowers',
    seoTitle: 'Long Cedar Balcony Planter | Greater Vancouver | Coastline Cedar',
    seoDescription:
      'Slim cedar balcony planter built for Vancouver condos and apartments. Hand-built in BC. Custom sizes available.'
  },
  {
    slug: 'standard-outdoor-cedar-planter',
    name: 'Standard Outdoor Cedar Planter Box',
    category: 'large',
    categoryLabel: 'Large',
    shortDescription: 'Bold statement planter for entryways, courtyards, and patios.',
    description:
      'A serious centrepiece. Deep soil volume lets you grow boxwood, Japanese maples, or feature evergreens. Built with mitred corner construction and a wide cap rail for a finished, architectural look.',
    dimensions: '47″ L × 16″ W × 17″ H',
    features: [
      'Generous soil depth — suits small trees and shrubs',
      'Mitred corners and wide cap rail',
      'Heavy-duty cedar — 1″ thick wall panels',
      'Reinforced interior frame',
      'Concealed stainless fasteners'
    ],
    bestFor: ['Front entryways', 'Courtyards', 'Pool decks', 'Architectural focal points'],
    startingPrice: 229,
    priceLabel: 'Starting from $229',
    drainage: 'Multiple drainage points + interior liner shelf',
    finishOptions: ['Natural (unfinished)', 'Clear outdoor sealer', 'Charcoal stain'],
    image:'/images/products/cedar-planter-47x16x17.png',
    imageAlt: 'Large cedar planter box with shrubs in a residential courtyard',
    seoTitle: 'Large Outdoor Cedar Planter Box | Coastline Cedar',
    seoDescription:
      'Large hand-built cedar planter box for Vancouver homes and patios. Architectural quality. Local delivery.'
  },
  {
    slug: 'raised-cedar-garden-planter',
    name: 'Raised Cedar Garden Planter',
    category: 'raised',
    categoryLabel: 'Raised Garden',
    shortDescription: 'Waist-height raised bed for vegetables, herbs, and easy gardening.',
    description:
      'Built for people who want to garden without bending. Waist-height working surface, deep soil reservoir, and a sturdy interior frame designed to hold the weight of saturated soil through Vancouver winters.',
    dimensions: '48″ L × 20″ W × 30″ H',
    features: [
      'Waist-height — no bending required',
      'Deep 20″+ usable soil depth',
      'Reinforced legs and cross-braces',
      'Optional pollinator trellis add-on',
      'Food-safe — no pressure-treated lumber'
    ],
    bestFor: ['Vegetable gardens', 'Senior gardeners', 'Backyard food growing', 'School gardens'],
    startingPrice: 299,
    priceLabel: 'Starting from $299',
    drainage: 'Slatted base with drainage gaps and liner support',
    finishOptions: ['Natural (unfinished)', 'Clear outdoor sealer'],
    image:'/images/products/large-cedar-planter-48x20x30.png',
    imageAlt: 'Waist-height raised cedar garden planter growing vegetables',
    seoTitle: 'Raised Cedar Garden Planter | Vancouver | Coastline Cedar',
    seoDescription:
      'Waist-height raised cedar garden planter for vegetables and herbs. Built locally in Greater Vancouver.'
  },
  {
    slug: 'privacy-cedar-planter',
    name: 'Privacy Cedar Planter Box',
    category: 'privacy',
    categoryLabel: 'Privacy',
    shortDescription: 'Tall planter with integrated cedar trellis screen for instant privacy.',
    description:
      'A planter and privacy screen in one. Built with a long, low planter base and a tall vertical cedar trellis that supports climbing plants — bamboo, jasmine, clematis, or ivy. Perfect for blocking sightlines from neighbours or framing a hot tub area.',
    dimensions: '60″ L × 14″ W × 72″ H (with trellis)',
    features: [
      'Integrated full-height cedar trellis',
      'Engineered for wind load',
      'Levelling feet for uneven decks',
      'Anchor points for trailing climbers',
      'Looks finished on both sides'
    ],
    bestFor: ['Backyard privacy', 'Hot tub screens', 'Patio dividers', 'Strata patios'],
    startingPrice: 549,
    priceLabel: 'Starting from $549',
    drainage: 'Drilled drainage + raised interior shelf',
    finishOptions: ['Natural (unfinished)', 'Clear outdoor sealer', 'Charcoal stain'],
    image:'/images/products/privacy-planter-60x14x72.png',
    imageAlt: 'Tall cedar privacy planter with vertical trellis on a patio',
    seoTitle: 'Privacy Cedar Planter with Trellis | Coastline Cedar',
    seoDescription:
      'Cedar privacy planter with built-in trellis. Block sightlines and grow climbers on your Vancouver patio.'
  },
  {
    slug: 'commercial-cedar-planter',
    name: 'Commercial Cedar Planter for Restaurants & Cafés',
    category: 'commercial',
    categoryLabel: 'Commercial',
    shortDescription: 'Heavy-duty cedar planters for restaurants, cafés, hotels, and storefronts.',
    description:
      'Built to commercial spec. Reinforced corners, heavier wall stock, and finishes that hold up to constant outdoor use. We work with restaurants, cafés, hotels, strata, and retail storefronts across Greater Vancouver. Volume pricing available — get in touch for a project quote.',
    dimensions: 'Standard 50″ L × 20″ W × 24″ H · Custom sizes on request',
    features: [
      'Commercial-grade construction',
      'Heavier wall thickness',
      'Stainless hardware throughout',
      'Custom branding option (laser-etched logo)',
      'Volume pricing for 5+ units'
    ],
    bestFor: ['Restaurants & cafés', 'Hotels', 'Retail storefronts', 'Strata properties', 'Patio dividers for licensed areas'],
    startingPrice: 399,
    priceLabel: 'Starting from $399 · Volume pricing available',
    drainage: 'Engineered drainage system suitable for high-traffic areas',
    finishOptions: ['Natural (unfinished)', 'Clear outdoor sealer', 'Charcoal stain', 'Custom colour match'],
    image:"/images/products/cedar-planter-50x20x24.png",
    imageAlt: 'Row of large cedar planters lining a restaurant patio',
    seoTitle: 'Commercial Cedar Planters for Restaurants & Cafés | Vancouver',
    seoDescription:
      'Commercial-grade cedar planters for Greater Vancouver restaurants, cafés, hotels, and strata. Volume pricing. Built locally.'
  },
  {
    slug: 'custom-cedar-planter-box',
    name: 'Custom Cedar Planter Box',
    category: 'custom',
    categoryLabel: 'Custom',
    shortDescription: 'Built to your exact dimensions. Any length, width, or height in cedar.',
    description:
      'Have a tricky corner, a stairwell, or a precise design in mind? We build to your measurements. Send us length, width, and height — plus a photo of the space if you have one — and we’ll come back with a quote, sketch, and timeline. Most standard cedar builds are ready in about 2–3 days once details are confirmed; larger custom projects depend on size, measurements, site access, and installation scope.',
    dimensions: 'Your dimensions · Length, width, height to spec',
    features: [
      'Made to your measurements (1/4″ precision)',
      'Sketch and quote within 1–2 business days',
      'All finish and stain options available',
      'Optional drainage upgrades and casters',
      'Most standard builds ready in about 2–3 days after details are confirmed'
    ],
    bestFor: ['Awkward spaces', 'Designer projects', 'Architectural matching', 'Multi-unit residential'],
    startingPrice: null,
    priceLabel: 'Quote on request',
    drainage: 'Specify in your quote — we recommend based on use',
    finishOptions: ['Natural', 'Clear outdoor sealer', 'Charcoal stain', 'Custom colour match'],
    image:'/images/products/custom-cedar-planter-patio-project.png',
    imageAlt: 'Custom cedar planter sketches and woodworking tools on a workshop bench',
    seoTitle: 'Custom Cedar Planter Boxes Vancouver | Coastline Cedar',
    seoDescription:
      'Custom-size cedar planter boxes built to your exact dimensions. Hand-built in Greater Vancouver. Free quote.'
  }
];

export const categories = [
  { id: 'patio', label: 'Patio', description: 'Compact planters for decks and entrances' },
  { id: 'balcony', label: 'Balcony', description: 'Slim profiles for condos and apartments' },
  { id: 'large', label: 'Large', description: 'Statement planters for courtyards' },
  { id: 'raised', label: 'Raised Garden', description: 'Waist-height beds for vegetables' },
  { id: 'privacy', label: 'Privacy', description: 'Planter + trellis screens' },
  { id: 'commercial', label: 'Commercial', description: 'Restaurants, cafés, strata' },
  { id: 'custom', label: 'Custom', description: 'Built to your measurements' }
] as const;

export const getProduct = (slug: string) => products.find(p => p.slug === slug);
export const getRelated = (slug: string) => products.filter(p => p.slug !== slug).slice(0, 3);
