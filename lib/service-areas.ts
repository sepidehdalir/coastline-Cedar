export type ServiceArea = {
  slug: string;
  city: string;
  cityFull: string;
  shortLocale: string;
  h1: string;
  intro: string;
  localBlurb: string;
  useCases: string[];
  neighborhoods: string;
  deliveryNote: string;
  faq: { q: string; a: string }[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'north-vancouver',
    city: 'North Vancouver',
    cityFull: 'North Vancouver, BC',
    shortLocale: 'North Van',
    h1: 'Cedar Planter Boxes — North Vancouver',
    intro:
      'We’re North Vancouver locals. Our workshop is on the North Shore, which means short delivery routes, fewer scheduling headaches, and the chance to stop by in person if you want to see a planter before you buy.',
    localBlurb:
      'North Van homes have a particular landscape: tall trees, sloped lots, a lot of weather, and a real love of natural materials. Cedar fits perfectly here — it ages to a soft silver-grey that matches the West Coast palette and stands up to the rain that defines our winters.',
    useCases: [
      'Lonsdale townhouse front entries',
      'Edgemont and Capilano deck planters',
      'Lynn Valley raised vegetable gardens',
      'Deep Cove balcony planters'
    ],
    neighborhoods:
      'Lonsdale, Lower Lonsdale, Central Lonsdale, Edgemont, Capilano, Lynn Valley, Deep Cove, Seymour, Blueridge, and Upper Lonsdale.',
    deliveryNote:
      'Free delivery on orders over $200 in North Vancouver. Workshop pickup is available by appointment.',
    faq: [
      {
        q: 'Do you deliver to apartments on the North Shore?',
        a: 'Yes. Many of our balcony planters are sized to fit standard condo elevators. Let us know your building and we’ll plan the delivery.'
      },
      {
        q: 'Will cedar hold up in North Van rain?',
        a: 'Western Red Cedar is one of the most rot-resistant softwoods in North America and is native to BC. Left untreated it weathers to a soft grey; sealed, it keeps the warm cedar tone for years.'
      }
    ]
  },
  {
    slug: 'vancouver',
    city: 'Vancouver',
    cityFull: 'Vancouver, BC',
    shortLocale: 'Vancouver',
    h1: 'Cedar Planter Boxes — Vancouver',
    intro:
      'Vancouver outdoor spaces work hard. Tight patios, narrow balconies, downtown roof decks, and Kitsilano backyards all have the same problem: standard planters look generic. We build cedar planters in standard and custom sizes that suit how Vancouver actually lives outside.',
    localBlurb:
      'From a 200 sq ft Yaletown balcony to a Kerrisdale backyard, the right planter changes how a space feels. Western Red Cedar is local, weathers beautifully in our wet winters, and avoids the plastic look of mass-produced planters.',
    useCases: [
      'Yaletown and Coal Harbour high-rise balconies',
      'Kitsilano patio gardens',
      'Mount Pleasant café and storefront planters',
      'East Van backyard vegetable beds'
    ],
    neighborhoods:
      'Downtown, Yaletown, Coal Harbour, West End, Kitsilano, Point Grey, Kerrisdale, Dunbar, Mount Pleasant, Main Street, Commercial Drive, East Van, Strathcona.',
    deliveryNote:
      'Free delivery on orders over $200 across Vancouver. High-rise elevator delivery available — just send us the building.'
,
    faq: [
      {
        q: 'Can you deliver to a downtown high-rise?',
        a: 'Yes — we deliver to high-rises across downtown Vancouver. We size our balcony planters to fit standard condo elevators and book deliveries through your loading dock if your building requires it.'
      },
      {
        q: 'Do you build planters for restaurants and cafés?',
        a: 'Frequently. Our commercial cedar planters work as patio dividers for licensed areas, storefront accents, and seasonal displays. Volume pricing applies on 5+ units.'
      }
    ]
  },
  {
    slug: 'west-vancouver',
    city: 'West Vancouver',
    cityFull: 'West Vancouver, BC',
    shortLocale: 'West Van',
    h1: 'Cedar Planter Boxes — West Vancouver',
    intro:
      'West Vancouver homes lean into the West Coast aesthetic — natural stone, exposed cedar, sweeping views. Our planters are made to live in that world. Hand-built cedar, clean lines, and finishes that complement the materials already on your property.',
    localBlurb:
      'British Properties terraces, Ambleside courtyards, Caulfeild gardens — every neighbourhood here treats outdoor space as a real room. We build planters at a scale that matches: larger formats, premium finishes, and custom sizes when the architecture demands it.',
    useCases: [
      'British Properties terraces and pool decks',
      'Ambleside patio entrances',
      'Caulfeild and Eagle Harbour view decks',
      'Custom-sized planters for architect-designed homes'
    ],
    neighborhoods:
      'Ambleside, Dundarave, British Properties, Sentinel Hill, Caulfeild, Eagle Harbour, Horseshoe Bay, Park Royal area.',
    deliveryNote:
      'Free delivery on orders over $200 in West Vancouver. Bridge access fees never apply — we live on this side.',
    faq: [
      {
        q: 'Can you match an existing wood tone on my home?',
        a: 'Yes. We can sample stain and seal options against a piece of your siding or trim and confirm the finish before we build.'
      },
      {
        q: 'Do you handle multi-unit residential or strata projects?',
        a: 'Yes — including coordinated planter sets for shared terraces and rooftop amenity decks. Strata volume pricing available.'
      }
    ]
  },
  {
    slug: 'burnaby',
    city: 'Burnaby',
    cityFull: 'Burnaby, BC',
    shortLocale: 'Burnaby',
    h1: 'Cedar Planter Boxes — Burnaby',
    intro:
      'Burnaby is a city of townhouses, condos, and family homes — three very different planter problems. We build the slim balcony planter for the Brentwood condo, the raised vegetable bed for the South Slope backyard, and the privacy planter for the Burnaby Heights deck.',
    localBlurb:
      'Whether you’re near SFU, Metrotown, or down on the slope, cedar planters give an outdoor space a finished look without the maintenance of full landscaping. Local delivery is easy from our North Vancouver workshop.',
    useCases: [
      'Brentwood and Metrotown condo balconies',
      'South Slope raised vegetable gardens',
      'Burnaby Heights front entrance planters',
      'Townhouse complex strata orders'
    ],
    neighborhoods:
      'Metrotown, Brentwood, Burnaby Heights, North Burnaby, South Slope, Edmonds, Highgate, Lougheed, SFU area.',
    deliveryNote:
      'Free delivery on orders over $200 in Burnaby. Standard delivery window is 7–10 business days from order.',
    faq: [
      {
        q: 'Do you build for townhouse complexes?',
        a: 'Yes. We coordinate matching planter sets for shared entrances and patios and offer strata volume pricing.'
      },
      {
        q: 'Can I get a slimmer balcony planter for a Brentwood tower?',
        a: 'Yes — most of our balcony planters are sized to fit standard condo balconies, and we can build narrower custom versions if your rail clearance is tight.'
      }
    ]
  },
  {
    slug: 'richmond',
    city: 'Richmond',
    cityFull: 'Richmond, BC',
    shortLocale: 'Richmond',
    h1: 'Cedar Planter Boxes — Richmond',
    intro:
      'Richmond gardens deal with one thing the North Shore doesn’t: wind. Our planters are built with extra base stability and weighted options for exposed patios and rooftop spaces near the dyke or facing the river.',
    localBlurb:
      'Steveston front entries, Terra Nova townhomes, Brighouse high-rises — the right planter quietly anchors the entire outdoor look. Western Red Cedar handles the moisture and salt air well and ages beautifully.',
    useCases: [
      'Steveston front entry planters',
      'Brighouse and City Centre balcony planters',
      'Terra Nova townhouse patios',
      'Wind-stable planters for exposed sites'
    ],
    neighborhoods:
      'Steveston, Terra Nova, Brighouse, City Centre, Hamilton, Bridgeport, Seafair, Broadmoor.',
    deliveryNote:
      'Free delivery on orders over $200 in Richmond. Lead times stay the same as the North Shore — same workshop, just a tunnel away.',
    faq: [
      {
        q: 'Will cedar handle the salt air near the dyke?',
        a: 'Yes. Cedar contains natural oils that resist rot and decay even in coastal conditions. We recommend a clear outdoor sealer for exposed sites to keep the colour warm.'
      },
      {
        q: 'Can you add wind-stability for an exposed deck?',
        a: 'Yes — we can spec a wider base, levelling feet, and optional ballast for rooftops or wind-exposed terraces.'
      }
    ]
  },
  {
    slug: 'coquitlam',
    city: 'Coquitlam',
    cityFull: 'Coquitlam, BC',
    shortLocale: 'Coquitlam',
    h1: 'Cedar Planter Boxes — Coquitlam, Port Coquitlam & Port Moody',
    intro:
      'The Tri-Cities have great outdoor space — bigger lots, real backyards, and a lot of new builds with patios that need something better than a plastic planter. We deliver across Coquitlam, Port Coquitlam, and Port Moody from our North Vancouver workshop.',
    localBlurb:
      'From Burke Mountain new builds to Port Moody Inlet Centre condos, our cedar planters add scale and warmth to any outdoor space. Custom sizes are common in the Tri-Cities — we’ve done a lot of one-off builds for unique decks here.',
    useCases: [
      'Burke Mountain new build patios',
      'Inlet Centre and Suter Brook condo balconies',
      'PoCo backyard raised vegetable gardens',
      'Custom-sized planters for sloped decks'
    ],
    neighborhoods:
      'Burke Mountain, Westwood Plateau, Town Centre, Maillardville, Inlet Centre, Suter Brook, Heritage Mountain, downtown PoCo.',
    deliveryNote:
      'Free delivery on orders over $200 across Coquitlam, Port Coquitlam, and Port Moody. Tri-Cities deliveries are typically scheduled together once per week.',
    faq: [
      {
        q: 'Do you serve Port Moody and Port Coquitlam too?',
        a: 'Yes — we treat the Tri-Cities as one delivery zone. Same lead times, same free-delivery threshold.'
      },
      {
        q: 'My deck has a slope. Can you build to level it?',
        a: 'Yes. Our custom builds can include levelling feet or stepped construction for sloped or uneven decks.'
      }
    ]
  },
  {
    slug: 'surrey',
    city: 'Surrey',
    cityFull: 'Surrey, BC',
    shortLocale: 'Surrey',
    h1: 'Cedar Planter Boxes — Surrey',
    intro:
      'Surrey has more new construction than anywhere else in BC right now — and a lot of those new patios, townhouse decks, and front entries need a planter that looks finished, not generic. Cedar gives you that without a big renovation.',
    localBlurb:
      'South Surrey backyards, Cloverdale family homes, Newton townhouses, Whalley condos — every part of Surrey has different planter needs, and we build for all of them. Custom dimensions are easy.',
    useCases: [
      'Townhouse complex front entries',
      'Family backyard raised vegetable gardens',
      'New build patio statement planters',
      'Strata coordination on multi-unit projects'
    ],
    neighborhoods:
      'South Surrey, White Rock area, Cloverdale, Fleetwood, Newton, Whalley, City Centre, Guildford, Panorama Ridge, Sunnyside.',
    deliveryNote:
      'Free delivery on orders over $200 across Surrey. Larger deliveries are typically scheduled within 7–10 business days.',
    faq: [
      {
        q: 'Can you build for new construction homes in South Surrey?',
        a: 'Yes — a lot of our Surrey work is exactly this. We can match modern home palettes with charcoal stains or keep the natural cedar tone.'
      },
      {
        q: 'Do you do bulk pricing for townhouse complexes?',
        a: 'Yes, with strata volume pricing on 5+ matching planters. Get in touch with the project details.'
      }
    ]
  },
  {
    slug: 'langley',
    city: 'Langley',
    cityFull: 'Langley, BC',
    shortLocale: 'Langley',
    h1: 'Cedar Planter Boxes — Langley',
    intro:
      'Langley has the kind of yards that planters were made for. Real space, real gardens, real backyards. Whether you’re looking for a raised vegetable bed in Walnut Grove or a privacy planter for a Willoughby townhouse, we build it locally and deliver across Langley.',
    localBlurb:
      'Langley homeowners often go larger with planters — bigger raised beds, multi-unit garden installations, and bold front entrance pieces. Our cedar holds up to full-sun summer afternoons and wet winter weeks equally well.',
    useCases: [
      'Walnut Grove backyard raised vegetable beds',
      'Willoughby and Yorkson townhouse patios',
      'Fort Langley heritage-home entrance planters',
      'Larger custom builds for hobby farms and acreage'
    ],
    neighborhoods:
      'Walnut Grove, Willoughby, Yorkson, Fort Langley, Murrayville, Brookswood, Aldergrove, Langley City Centre.',
    deliveryNote:
      'Free delivery on orders over $200 across Langley. Langley deliveries are scheduled weekly.',
    faq: [
      {
        q: 'Do you deliver to Aldergrove and rural Langley?',
        a: 'Yes — most of Langley is on our regular delivery route. For very remote rural addresses, just send us the postal code and we’ll confirm.'
      },
      {
        q: 'Can you build big enough for a hobby farm garden?',
        a: 'Yes. Our custom raised beds go well beyond the standard sizes — we’ve built 12-ft runs for serious vegetable gardens.'
      }
    ]
  }
];

export const getServiceArea = (slug: string) => serviceAreas.find(a => a.slug === slug);
