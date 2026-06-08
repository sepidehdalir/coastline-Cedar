type Item = {
  src: string;
  title: string;
  category: string;
  alt: string;
  /** Intrinsic size, used to reserve space and avoid layout shift. */
  width: number;
  height: number;
};

// Real photos from the Coastline Cedar workshop and finished projects in North Vancouver.
// Ordered strongest-first. Images render at their natural aspect ratio (no forced crop),
// so the main subject is always fully visible.
const items: Item[] = [
  {
    src: '/images/gallery/finished-cedar-planter-delivery-vancouver.jpg',
    title: 'Finished Cedar Planter',
    category: 'Finished Planters',
    alt: 'Finished stained cedar planter box with liner, hand-built by Coastline Cedar',
    width: 1200, height: 900,
  },
  {
    src: '/images/gallery/cedar-planter-build-process-workshop.jpg',
    title: 'Cedar Planter Build Process',
    category: 'Build Process',
    alt: 'Cedar planter boxes being built in the Coastline Cedar workshop in North Vancouver',
    width: 1200, height: 900,
  },
  {
    src: '/images/gallery/cedar-privacy-screen-deck-vancouver.jpg',
    title: 'Cedar Privacy Screen on a Deck',
    category: 'Delivery / Installed',
    alt: 'Hand-built cedar slat privacy screen installed on a backyard deck in Vancouver',
    width: 900, height: 1200,
  },
  {
    src: '/images/gallery/custom-cedar-planters-patio-vancouver.jpg',
    title: 'Cedar Planters on a Patio',
    category: 'Finished Planters',
    alt: 'Two finished cedar planter boxes with shrubs on a stone patio',
    width: 960, height: 1200,
  },
  {
    src: '/images/gallery/cedar-privacy-planter-build-process.jpg',
    title: 'Privacy Planter Under Construction',
    category: 'Build Process',
    alt: 'Cedar privacy planter with slat screen being assembled in the workshop',
    width: 1083, height: 1200,
  },
  {
    src: '/images/gallery/cedar-planters-installed-deck-vancouver.jpg',
    title: 'Planters Installed on a Deck',
    category: 'Delivery / Installed',
    alt: 'Finished cedar planters installed on a deck railing in West Vancouver',
    width: 1200, height: 663,
  },
  {
    src: '/images/gallery/cedar-privacy-planter-planted.jpg',
    title: 'Privacy Planter with Plants',
    category: 'Finished Planters',
    alt: 'Cedar privacy planter with attached slat screen and planted greenery',
    width: 900, height: 1200,
  },
  {
    src: '/images/gallery/cedar-boards-tools-workshop.jpg',
    title: 'Inside the Workshop',
    category: 'Workshop',
    alt: 'Cedar boards and tools used for custom planter construction in the workshop',
    width: 1200, height: 1006,
  },
  {
    src: '/images/gallery/cedar-privacy-planter-vancouver.jpg',
    title: 'Cedar Privacy Planter',
    category: 'Finished Planters',
    alt: 'Cedar privacy planter with a tall slat screen on a patio',
    width: 900, height: 1200,
  },
  {
    src: '/images/gallery/raised-cedar-herb-planter-coldframe.jpg',
    title: 'Raised Cedar Herb Planter',
    category: 'Finished Planters',
    alt: 'Raised cedar herb planter with a hinged glass cold-frame lid and potted herbs',
    width: 1200, height: 1175,
  },
  {
    src: '/images/gallery/hand-built-cedar-planter-detail.jpg',
    title: 'Hand-Built Planter Detail',
    category: 'Cedar Details',
    alt: 'Close detail of a hand-built cedar planter in the Coastline Cedar workshop',
    width: 1200, height: 591,
  },
];

export default function GalleryGrid() {
  return (
    // CSS masonry: each image keeps its natural aspect ratio, so the subject is never cropped.
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
      {items.map((it, i) => (
        <figure
          key={i}
          className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-cedar-100 shadow-soft"
        >
          <img
            src={it.src}
            alt={it.alt}
            width={it.width}
            height={it.height}
            loading={i < 3 ? 'eager' : 'lazy'}
            className="block h-auto w-full object-contain transition duration-700 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-900/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          <figcaption className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-cedar-700">
            {it.category}
          </figcaption>
          <p className="pointer-events-none absolute bottom-3 left-3 right-3 translate-y-1 text-sm font-medium text-cream opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
            {it.title}
          </p>
        </figure>
      ))}
    </div>
  );
}
