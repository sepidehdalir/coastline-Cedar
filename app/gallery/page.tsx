import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import { site } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Cedar Planter Gallery | Coastline Cedar North Vancouver',
  description:
    'View real Coastline Cedar workshop photos, build process images, and finished cedar planter projects handmade in North Vancouver for homes across Greater Vancouver.',
  alternates: { canonical: `${site.url}/gallery` },
};

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-charcoal-900/8 bg-cream">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-10 md:py-20">
          <p className="eyebrow">Gallery</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-charcoal-900 md:text-6xl">
            Cedar Planter Gallery
          </h1>
          <p className="mt-5 max-w-2xl text-charcoal-900/75">
            A look inside our Coastline Cedar workshop, build process, and finished cedar planter projects. These
            photos show the hands-on work behind our custom cedar builds in North Vancouver.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <GalleryGrid />
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-10">
          <h2 className="font-display text-3xl font-semibold text-charcoal-900 md:text-4xl">
            Want something similar for your outdoor space?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-charcoal-900/75">
            Send us your dimensions, preferred style, and a few inspiration photos. We’ll help you plan a cedar build
            that fits your space.
          </p>
          <a href="/contact" className="btn-primary mt-7 inline-flex">Request a Quote →</a>
        </div>
      </section>
    </>
  );
}
