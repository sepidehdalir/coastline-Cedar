import type { Metadata } from 'next';
import GalleryGrid from '@/components/GalleryGrid';
import { CTASection } from '@/components/sections';
import { site } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Gallery — Cedar Planter Projects in Greater Vancouver',
  description:
    'See cedar planter boxes we’ve built for homes, patios, balconies, restaurants, and storefronts across Greater Vancouver.',
  alternates: { canonical: `${site.url}/gallery` }
};

export default function GalleryPage() {
  return (
    <>
      <section className="border-b border-charcoal-900/8 bg-cream">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-10 md:py-20">
          <p className="eyebrow">Gallery</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-charcoal-900 md:text-6xl">A look at what we build.</h1>
          <p className="mt-5 max-w-2xl text-charcoal-900/75">
            A selection of recent cedar planter projects from homes, patios, balconies, restaurants, and front entrances across
            Greater Vancouver. Replace these placeholders with your real project photos in <code className="rounded bg-cedar-100 px-1.5 py-0.5 text-[0.7rem] text-cedar-700">components/GalleryGrid.tsx</code>.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-8xl px-5 lg:px-10"><GalleryGrid /></div>
      </section>

      <CTASection eyebrow="Liked what you saw?" title="Let’s build one for your space." />
    </>
  );
}
