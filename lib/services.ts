// Cedar build lines beyond planters: privacy panels, saunas, gates & fences.
// Each drives its own SEO page + homepage card + nav/footer.

export type ServiceTier = {
  name: string;
  /** Original price. null = quote required. */
  original: number | null;
  /** Per-unit suffix, e.g. "per linear section". */
  unitSuffix?: string;
  /** Force "Starting from" wording. */
  startingFrom?: boolean;
  note?: string;
};

export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string; // url path segment (full clean slug)
  navLabel: string;
  kind: 'product' | 'service'; // product => Product schema; service => Service schema
  cardTitle: string;
  cardBlurb: string;
  cardImage: string;
  cardImageAlt: string;
  /** Lead price used on cards (original $). null = quote. */
  cardOriginal: number | null;
  cardStartingFrom: boolean;
  h1: string;
  pageTitle: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  body: string[];
  tiers: ServiceTier[];
  ctaLabel: string;
  keywords: string[];
  faqs: ServiceFaq[];
  /** Optional disclaimer block rendered before the FAQ. */
  disclaimer?: string;
};

export const services: Service[] = [
  {
    slug: 'cedar-privacy-panels-vancouver',
    navLabel: 'Privacy Panels',
    kind: 'product',
    cardTitle: 'Cedar Privacy Panels',
    cardBlurb: 'Standalone cedar screens for patios, balconies, hot tubs, and side yards. Custom heights and widths.',
    cardImage: '/images/services/cedar-privacy-panel-deck-vancouver.jpg',
    cardImageAlt: 'Hand-built cedar slat privacy screen installed on a backyard deck in Vancouver',
    cardOriginal: 399,
    cardStartingFrom: true,
    h1: 'Custom Cedar Privacy Panels in Vancouver',
    pageTitle: 'Cedar Privacy Panels Vancouver | Custom Outdoor Privacy Screens',
    metaTitle: 'Cedar Privacy Panels Vancouver | 40% Off Custom Privacy Screens',
    metaDescription:
      'Hand-built cedar privacy panels and outdoor privacy screens in North Vancouver. Custom sizes for patios, balconies, decks, hot tubs, and backyards. 40% off during our 3-month promotion.',
    intro:
      'Hand-built standalone cedar privacy panels — not planter boxes — designed to screen sightlines and define outdoor space across Greater Vancouver. Custom heights and widths to suit your patio, balcony, or yard.',
    body: [
      'Our cedar privacy panels are freestanding outdoor privacy screens built from kiln-dried Western Red Cedar. Unlike a planter with a trellis, these are dedicated screens — clean, solid, and sized to the exact run you need. They work beautifully on balconies and patios, around hot tubs, along side yards and property lines, and as elegant dividers for restaurants, cafés, and strata properties.',
      'Every panel is built to custom heights and widths, so you get coverage exactly where you want it without awkward gaps or off-the-shelf compromises. Choose horizontal slat spacing for partial airflow and light, or a tighter board layout for full screening. We offer pickup from our North Vancouver workshop and delivery across the Lower Mainland, with installation available depending on your location and the scope of the job.',
      'Finish it your way: leave the cedar natural to weather into a soft silver-grey, seal it to hold the warm cedar tone, or choose a charcoal stain for a modern West Coast look. Send us your dimensions and a photo of the space and we will come back with a quote.',
    ],
    tiers: [
      { name: '4 ft W × 6 ft H cedar privacy panel', original: 399 },
      { name: '6 ft W × 6 ft H cedar privacy panel', original: 549 },
      { name: 'Custom privacy panel', original: null, note: 'Built to your exact height and width.' },
    ],
    ctaLabel: 'Request a Privacy Panel Quote',
    keywords: [
      'cedar privacy panels Vancouver',
      'outdoor privacy screen Vancouver',
      'balcony privacy screen Vancouver',
      'cedar privacy screen North Vancouver',
      'custom patio privacy panels',
      'wood privacy screen Vancouver',
    ],
    faqs: [
      {
        q: 'Are these privacy panels freestanding or do they need a fence?',
        a: 'They are standalone cedar panels. Depending on height and site conditions we can build them with weighted bases, post anchors, or mounting brackets so they stand on their own — no existing fence required. We confirm the right base for your site before building.',
      },
      {
        q: 'What heights and widths can I get?',
        a: 'Panels are made to measure. Common sizes are 4 ft and 6 ft wide at 6 ft tall, but we build taller, wider, and multi-panel runs to suit balconies, hot tub surrounds, and full property lines.',
      },
      {
        q: 'Can you screen a hot tub or balcony?',
        a: 'Yes — these are two of the most common requests. We size panels to block specific sightlines while keeping the space open and airy, and we can build for wind exposure on upper-floor balconies.',
      },
      {
        q: 'Do you install, or is it pickup and delivery only?',
        a: 'We offer workshop pickup and delivery across Greater Vancouver. Installation is available depending on location and the scope of the project — let us know your site and we will confirm.',
      },
    ],
  },
  {
    slug: 'custom-outdoor-saunas-vancouver',
    navLabel: 'Saunas',
    kind: 'service',
    cardTitle: 'Custom Outdoor Saunas',
    cardBlurb: 'Built-to-order backyard cedar saunas with a modern West Coast look. Quoted after a site review.',
    cardImage: '/images/services/two-person-cedar-outdoor-sauna-vancouver.jpg',
    cardImageAlt: 'Two-person rectangular cedar outdoor sauna in a Vancouver backyard',
    cardOriginal: 8500,
    cardStartingFrom: true,
    h1: 'Custom Outdoor Cedar Saunas in Vancouver',
    pageTitle: 'Custom Outdoor Saunas Vancouver | Cedar Sauna Builds',
    metaTitle: 'Custom Outdoor Saunas Vancouver | Cedar Sauna Builds North Vancouver',
    metaDescription:
      'Custom outdoor cedar sauna builds for backyards, cabins, and wellness spaces in Greater Vancouver. Built locally with a clean West Coast cedar look. Request a discounted quote during our 3-month promotion.',
    intro:
      'Built-to-order outdoor cedar saunas for backyards, cabins, and wellness spaces across Greater Vancouver — designed with a clean, modern West Coast look and built locally.',
    body: [
      'We design and build custom outdoor cedar saunas: backyard saunas, small outdoor saunas for tighter lots, and bespoke sauna rooms finished in cedar inside and out. Western Red Cedar is the classic sauna wood for good reason — it handles heat and humidity, smells incredible, and ages beautifully in our climate.',
      'Every sauna is built to order around your space, your aesthetic, and how you plan to use it. Because pricing depends heavily on size, heater type, insulation, electrical work, permits, and site access, we do not quote a fixed final price online. We start from a base package and confirm a firm number after we review your details, photos, and site.',
      'Tell us about your space and send a few photos. We will walk you through layout, heater options, finishing, and what the build involves before any commitment.',
    ],
    tiers: [
      {
        name: 'Outdoor cedar sauna — starting package',
        original: 8500,
        startingFrom: true,
        note: 'Starting package only. Final quote depends on size, heater, site access, electrical requirements, and finishing details.',
      },
    ],
    ctaLabel: 'Request a Sauna Build Quote',
    keywords: [
      'custom outdoor sauna Vancouver',
      'cedar sauna Vancouver',
      'backyard sauna Vancouver',
      'outdoor sauna builder North Vancouver',
      'custom sauna build Greater Vancouver',
    ],
    disclaimer:
      'Electrical work, permits, and heater installation may require licensed trades depending on project scope. We will outline what your build requires as part of the quote.',
    faqs: [
      {
        q: 'How much does a custom outdoor sauna cost?',
        a: 'Starting packages begin around the figure shown above, but the final price depends on size, heater type, insulation, electrical requirements, permits, and site access. We provide a firm quote after reviewing your details, photos, and site — no fixed online price can account for every project.',
      },
      {
        q: 'Do you handle the electrical and permits?',
        a: 'Electrical work, permits, and heater installation may require licensed trades depending on the scope of your project. We coordinate the cedar build and outline exactly what specialized trades or approvals your project needs. We do not guarantee permit approval.',
      },
      {
        q: 'What sizes do you build?',
        a: 'From compact small outdoor saunas suited to tighter lots up to larger custom sauna rooms. Layout is built to order around your space and how many people you want it to seat.',
      },
      {
        q: 'How does the quote process work?',
        a: 'Send us your space details and a few photos. We review size, heater options, site access, and finishing, then come back with a starting package and a path to a firm quote. A site review may be needed for accurate pricing.',
      },
    ],
  },
  {
    slug: 'handmade-cedar-gates-fences-vancouver',
    navLabel: 'Gates & Fences',
    kind: 'service',
    cardTitle: 'Cedar Gates & Fences',
    cardBlurb: 'Handmade cedar garden gates, side-yard gates, and custom fence panels. Built and finished locally.',
    cardImage: '/images/services/handmade-cedar-gate-fence-vancouver.jpg',
    cardImageAlt: 'Hand-built cedar slat fence screen in a Vancouver backyard',
    cardOriginal: 950,
    cardStartingFrom: true,
    h1: 'Handmade Cedar Gates & Fences in Vancouver',
    pageTitle: 'Handmade Cedar Gates & Fences Vancouver | Custom Fence Builder',
    metaTitle: 'Handmade Cedar Gates & Fences Vancouver | Custom Cedar Fence & Gate Builds',
    metaDescription:
      'Custom handmade cedar gates and fences in North Vancouver and Greater Vancouver. Built locally with premium cedar, clean design, and custom sizing. 40% off during our 3-month promotion.',
    intro:
      'Handmade cedar gates and fences built locally with premium Western Red Cedar, clean lines, and custom sizing — from a single garden gate to a full fence run.',
    body: [
      'We build handmade cedar gates and custom fence panels for homes across North Vancouver and Greater Vancouver. Side-yard gates, garden gates, privacy fences, and matching runs — built from premium cedar with real joinery and a clean, modern profile that lifts the whole property.',
      'Because every yard is different, gates and fences are built to your measurements. We can match the look of your existing cedar planters and privacy panels for a coordinated outdoor space, and we handle repairs and replacement of tired or rotted sections as well as new builds.',
      'Custom measurements are required for an accurate quote. Depending on the scope and your location, we offer pickup, delivery, and installation. Send us your dimensions and a photo of the space to get started.',
    ],
    tiers: [
      { name: 'Handmade cedar garden gate', original: 950 },
      { name: 'Cedar fence panel', original: 280, unitSuffix: 'per linear section' },
      { name: 'Full custom fence or gate project', original: null, note: 'Quoted after measurements and a site review.' },
    ],
    ctaLabel: 'Request a Gate or Fence Quote',
    keywords: [
      'handmade cedar gate Vancouver',
      'custom cedar fence Vancouver',
      'cedar fence builder North Vancouver',
      'wood gate Vancouver',
      'custom garden gate Vancouver',
      'privacy fence Vancouver',
    ],
    faqs: [
      {
        q: 'Do you build single gates or full fences?',
        a: 'Both. We build standalone garden and side-yard gates, individual fence panels by the linear section, and full custom fence-and-gate projects. Tell us the scope and we will quote accordingly.',
      },
      {
        q: 'Can you match my existing cedar planters or fence?',
        a: 'Yes — matching the look of your existing cedar planters, privacy panels, or fence is something we do often, so the whole property reads as one coordinated design.',
      },
      {
        q: 'Do you repair or replace existing gates and fences?',
        a: 'Yes. We handle repairs and replacement of damaged or rotted sections as well as new builds. Send a photo and we will advise on repair versus replacement.',
      },
      {
        q: 'How is a fence project priced?',
        a: 'Fence panels are priced per linear section, and gates per unit, but full projects depend on length, height, terrain, and site access. Custom measurements are required for an accurate quote.',
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
