type Item = { src: string; alt: string; category: string };

const items: Item[] = [
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80', alt: 'Cedar patio planter with leafy plants', category: 'Patio' },
  { src: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=80', alt: 'Long cedar balcony planter with flowers', category: 'Balcony' },
  { src: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1200&q=80', alt: 'Large cedar planter in courtyard', category: 'Large' },
  { src: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=1200&q=80', alt: 'Raised cedar garden planter with vegetables', category: 'Raised Garden' },
  { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80', alt: 'Cedar privacy planter with trellis', category: 'Privacy' },
  { src: 'https://images.unsplash.com/photo-1525286116112-b59af11adad1?auto=format&fit=crop&w=1200&q=80', alt: 'Cedar planters lining a restaurant patio', category: 'Commercial' },
  { src: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80', alt: 'Workshop bench with cedar planter in progress', category: 'Workshop' },
  { src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80', alt: 'Front entrance cedar planter at a Vancouver home', category: 'Front Entrance' }
];

export default function GalleryGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <figure
          key={i}
          className={`group relative overflow-hidden rounded-2xl bg-cedar-100 ${i % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
        >
          <div className={`relative ${i % 5 === 0 ? 'aspect-square' : 'aspect-[4/3]'}`}>
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <figcaption className="absolute bottom-3 left-3 rounded-full bg-cream/95 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-cedar-700">
            {it.category}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
