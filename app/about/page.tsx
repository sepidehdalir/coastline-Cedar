import type { Metadata } from 'next';
import Link from 'next/link';
import { CTASection } from '@/components/sections';
import { site } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'About Coastline Cedar | A Family-Built Cedar Brand in North Vancouver',
  description:
    'Coastline Cedar is a family-built cedar brand in North Vancouver, creating handmade cedar planters, privacy panels, gates, fences, and custom outdoor cedar builds with care, craftsmanship, and heart.',
  alternates: { canonical: `${site.url}/about` },
};

const values = [
  { t: 'Family-built', d: 'Started and built by our family — every piece carries our name and our care.' },
  { t: 'Honest local craftsmanship', d: 'Made by hand in North Vancouver, not mass-produced overseas.' },
  { t: 'Premium cedar materials', d: 'Kiln-dried Western Red Cedar, chosen for beauty and durability in our climate.' },
  { t: 'Custom sizing', d: 'Built to your exact dimensions, for the way your space actually works.' },
  { t: 'Practical outdoor design', d: 'Clean West Coast looks paired with drainage, hardware, and details that last.' },
  { t: 'Built with care, not mass-produced', d: 'We take the time to do it properly — one cedar project at a time.' },
];

// Founder story paragraphs (exact copy provided by the owner).
const story = [
  'Coastline Cedar was created from a simple but powerful dream: to build something real, beautiful, and lasting with my own hands.',
  'My background is in technology, programming, web design, and digital business. For years, I worked in the world of screens, systems, design, and code. I loved creating online experiences, but deep down, I always wanted to build something physical — something people could touch, use, place in their home, and enjoy every day.',
  'That dream became Coastline Cedar.',
  'This brand was built with love, patience, and the support of my family. My father and my husband helped bring the first ideas to life, from working with cedar to shaping the products and improving every detail. What started as a small family project slowly became a real local business.',
  'Coastline Cedar is especially meaningful to me because I built it for my two teenage sons, Radin and Arvin. I wanted to create something that carries our family’s name, values, and effort — something honest, practical, and beautiful that I can leave behind as part of my legacy.',
  'Every planter, privacy panel, fence, gate, and custom cedar build represents more than woodwork. It represents family, hard work, creativity, and the belief that it is never too late to start building something meaningful.',
  'Coastline Cedar is not just a product brand. It is a family story, built from cedar, care, and heart.',
];

export default function AboutPage() {
  // Founder photo. Swap this file to update the portrait.
  const founderImage = '/images/founder/coastline-cedar-founder-workshop-portrait.jpg';

  return (
    <>
      <section className="border-b border-charcoal-900/8 bg-cream">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-10 md:py-20">
          <p className="eyebrow">About {site.shortName}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-charcoal-900 md:text-6xl">
            About Coastline Cedar
          </h1>
          <p className="mt-5 max-w-2xl text-charcoal-900/75">
            A family-built cedar brand in North Vancouver, creating handmade cedar planters, custom cedar privacy
            panels, handmade cedar gates and fences, and custom outdoor cedar builds
            for homes across Greater Vancouver.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="section">
        <div className="mx-auto grid max-w-8xl gap-10 px-5 lg:grid-cols-12 lg:gap-14 lg:px-10">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-cedar-100 shadow-soft">
              <div className="aspect-[4/5]">
                <img
                  src={founderImage}
                  alt="Founder of Coastline Cedar with cedar planter and tools in North Vancouver"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow">A Family-Built Cedar Brand</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">
              A family story, built from cedar, care, and heart.
            </h2>
            <div className="mt-6 space-y-4 text-charcoal-900/80">
              {story.map((p, i) => (
                <p key={i} className={i === 2 ? 'font-display text-lg font-semibold text-cedar-700' : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bone">
        <div className="mx-auto max-w-8xl px-5 py-20 lg:px-10 md:py-24">
          <p className="eyebrow">Our Values</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">
            What we build on.
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-charcoal-900/10 bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-charcoal-900">{v.t}</h3>
                <p className="mt-2 text-sm text-charcoal-900/70">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why cedar */}
      <section className="section">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <p className="eyebrow">Why cedar?</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">A material made for the West Coast.</h2>
          <div className="mt-6 space-y-4 text-charcoal-900/75">
            <p>
              Western Red Cedar is one of the most rot-resistant softwoods in North America. It contains natural oils
              that repel insects and slow decay — no pressure treatment or chemical preservatives required. It’s why
              traditional West Coast architecture has used cedar siding, shingles, and decking for over a century.
            </p>
            <p>
              For outdoor builds it ages beautifully — to a soft silver-grey if left natural, or it holds its warm tone
              with a clear sealer — and it’s grown right here in BC. We work with local materials so the cedar in your
              project doesn’t travel further than it needs to.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section pt-0">
        <div className="mx-auto max-w-5xl px-5 lg:px-10">
          <div className="rounded-3xl bg-charcoal-900 px-8 py-14 text-center text-cream md:px-14 md:py-16">
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-cedar-200">Start Your Cedar Project</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-4xl">
              Let’s build something real, together.
            </h2>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-medium text-charcoal-900 transition hover:bg-cedar-100"
              >
                Request a Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
