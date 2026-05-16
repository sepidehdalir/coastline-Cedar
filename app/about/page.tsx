import type { Metadata } from 'next';
import { CTASection } from '@/components/sections';
import { site } from '@/lib/site.config';

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description:
    'Coastline Cedar Co. is a North Vancouver workshop building hand-crafted cedar planter boxes for homes and businesses across Greater Vancouver.',
  alternates: { canonical: `${site.url}/about` }
};

const values = [
  { t: 'Local materials', d: 'Western Red Cedar is one of BC’s great natural materials. Locally grown, locally milled, locally built.' },
  { t: 'Slow craftsmanship', d: 'Mitred corners, concealed fasteners, hand-sanded edges. Built right the first time.' },
  { t: 'Honest pricing', d: 'No permanent “50% off” gimmicks. Real prices, fair quotes, and clear delivery costs upfront.' },
  { t: 'Real local delivery', d: 'We deliver our own planters, so you’re dealing with us from order to placement.' }
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-charcoal-900/8 bg-cream">
        <div className="mx-auto grid max-w-8xl gap-10 px-5 py-16 lg:grid-cols-12 lg:gap-14 lg:px-10 md:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">About {site.shortName}</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-charcoal-900 md:text-6xl">A small North Vancouver workshop, building cedar planters by hand.</h1>
            <p className="mt-5 max-w-xl text-charcoal-900/75">
              We started Coastline Cedar Co. because we kept seeing the same thing on Vancouver patios and balconies — generic plastic
              planters that didn’t match the architecture, didn’t last the winter, and didn’t look like anything anyone would pick on purpose.
              We thought cedar — done well — could do better. Hand-built, locally delivered, fairly priced.
            </p>
            <p className="mt-4 max-w-xl text-charcoal-900/75">
              Today we build cedar planters for homeowners, renters, condo dwellers, designers, strata properties, restaurants, and cafés
              across the Lower Mainland. Every planter is made by hand in our North Vancouver workshop from kiln-dried Western Red Cedar
              with stainless hardware and proper drainage. Nothing fancy — just done right.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-cedar-100 shadow-soft">
              <img src="/images/about/workshop-cedar-planters.png"/>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <p className="eyebrow">What we care about</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">Cedar, locally and properly.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(v => (
              <div key={v.t} className="rounded-2xl border border-charcoal-900/10 bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-charcoal-900">{v.t}</h3>
                <p className="mt-2 text-sm text-charcoal-900/70">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-4xl px-5 py-20 lg:px-10">
          <p className="eyebrow">Why cedar?</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">A material made for the West Coast.</h2>
          <div className="mt-6 space-y-4 text-charcoal-900/75">
            <p>
              Western Red Cedar is one of the most rot-resistant softwoods in North America. It contains natural oils called thujaplicins
              that repel insects and slow decay — no pressure treatment, no chemical preservatives required. It’s why traditional West Coast
              architecture has used cedar siding, shingles, and decking for over a century.
            </p>
            <p>
              For planters specifically, cedar has three advantages: it’s lightweight enough to handle on balconies and rooftops; it stays
              dimensionally stable through Vancouver’s wet-and-dry cycle so the joinery doesn’t fail; and it ages beautifully — either to
              a soft silver-grey if left natural, or holds its warm tone with a clear outdoor sealer.
            </p>
            <p>
              Cedar is also a renewable resource grown right here in BC. We work with local mills, so the wood in your planter doesn’t
              travel further than the planter itself.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
