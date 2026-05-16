import type { Metadata } from 'next';
import Link from 'next/link';
import CustomQuoteForm from '@/components/CustomQuoteForm';
import { CTASection, FAQAccordion } from '@/components/sections';
import { site } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Custom Cedar Planter Boxes Vancouver',
  description:
    'Custom cedar planter boxes built to your exact dimensions across Greater Vancouver. Free quote and sketch within 1–2 business days.',
  alternates: { canonical: `${site.url}/custom-planters` }
};

const measureSteps = [
  { n: '01', t: 'Length', d: 'Measure the full length of the space, then subtract any clearance you want at either end.' },
  { n: '02', t: 'Width', d: 'Measure how far the planter can come into the space without blocking foot traffic. 12–14″ is typical for balconies; 18–24″ for patios.' },
  { n: '03', t: 'Height', d: 'Decide the visual height. 18″ feels low and modern; 24–30″ feels architectural; 36″+ creates privacy.' },
  { n: '04', t: 'Send a photo', d: 'A simple phone photo of the space helps us spec drainage, finish, and proportions accurately.' }
];

const useCases = [
  { t: 'Balcony & patio fit', d: 'Slim, lightweight builds that fit standard condo elevators and balcony widths.' },
  { t: 'Privacy planters', d: 'Tall planters with integrated cedar trellis screens for hot tubs, decks, or strata.' },
  { t: 'Commercial', d: 'Restaurants, cafés, hotels, and storefronts. Volume pricing on 5+ matching planters.' },
  { t: 'Architectural match', d: 'Stain and finish samples so your planters match siding, trim, or existing wood features.' }
];

const customFAQ = [
  { q: 'How long does a custom planter take?', a: 'Most custom orders ship within 2–3 weeks of confirmed dimensions and finish. Larger or multi-unit orders may take 4–6 weeks.' },
  { q: 'Is the quote free?', a: 'Yes — quotes and sketches are free with no obligation. We typically send them within 1–2 business days.' },
  { q: 'How precise can the dimensions be?', a: 'We build to 1/4″ tolerance on length, width, and height. If you have very specific architectural constraints, send them and we’ll confirm.' },
  { q: 'Can you match an existing wood tone?', a: 'Yes. We can sample stain and seal options against a photo or sample of your existing wood and confirm the finish before we build.' }
];

export default function CustomPlantersPage() {
  return (
    <>
      <section className="border-b border-charcoal-900/8 bg-cream">
        <div className="mx-auto grid max-w-8xl gap-10 px-5 py-16 lg:grid-cols-12 lg:gap-14 lg:px-10 md:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow">Custom planters</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-charcoal-900 md:text-6xl">
              Built to your exact dimensions, in cedar.
            </h1>
            <p className="mt-5 max-w-xl text-charcoal-900/75">
              Awkward corner, specific architectural look, balcony that doesn’t match standard sizes? We build custom cedar planters
              to spec for homes and businesses across Greater Vancouver. Free quote and sketch within 1–2 business days.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#quote" className="btn-primary">Request a Custom Quote →</a>
              <Link href="/shop" className="btn-ghost">Browse standard sizes</Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-cedar-100 shadow-soft">
              <img src="/images/products/custom-cedar-planter-patio-project.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <p className="eyebrow">What we build</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">Custom builds for every space.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map(u => (
              <div key={u.t} className="rounded-2xl border border-charcoal-900/10 bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-charcoal-900">{u.t}</h3>
                <p className="mt-2 text-sm text-charcoal-900/70">{u.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to measure */}
      <section className="bg-bone">
        <div className="mx-auto grid max-w-8xl gap-10 px-5 py-20 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <p className="eyebrow">How to measure</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">A quick measuring guide.</h2>
            <p className="mt-4 max-w-md text-charcoal-900/75">
              Don’t worry about perfect numbers. Send us your best measurements plus a photo and we’ll confirm everything before we cut.
            </p>
          </div>
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {measureSteps.map(s => (
              <li key={s.n} className="rounded-2xl border border-charcoal-900/10 bg-white p-6">
                <span className="font-display text-2xl font-semibold text-cedar-600">{s.n}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-charcoal-900">{s.t}</h3>
                <p className="mt-2 text-sm text-charcoal-900/70">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quote form */}
      <section id="quote" className="section">
        <div className="mx-auto grid max-w-8xl gap-10 px-5 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <p className="eyebrow">Get a free quote</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">Send us your dimensions.</h2>
            <p className="mt-4 text-charcoal-900/75">
              We’ll reply with a sketch, materials list, finish recommendations, and a firm price — typically within 1–2 business days.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-charcoal-900/75">
              {['Free, no-obligation quote', 'Built in 2–3 weeks (typical)', 'Free delivery in Greater Vancouver over $200', 'Volume pricing on 5+ units'].map(t => (
                <li key={t} className="flex items-start gap-2"><span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-500" />{t}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7"><CustomQuoteForm /></div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-4xl px-5 py-20 lg:px-10">
          <p className="eyebrow text-center">FAQ</p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">Custom planter questions.</h2>
          <div className="mt-10"><FAQAccordion items={customFAQ} /></div>
        </div>
      </section>

      <CTASection
        eyebrow="Talk to us"
        title="Have a project in mind? Let’s build it."
        body="We’re happy to chat through dimensions, drainage, finishes, and delivery before you commit to anything."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/shop"
        secondaryLabel="Browse standard sizes"
      />
    </>
  );
}
