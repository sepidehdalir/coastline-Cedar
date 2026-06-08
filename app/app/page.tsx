import Link from 'next/link';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import ServiceCard from '@/components/ServiceCard';
import { CTASection, FAQAccordion, ServiceAreaCard, SEOContentBlock } from '@/components/sections';
import { ReviewsSection, TrustpilotSection } from '@/components/Reviews';
import { products } from '@/lib/products';
import { services } from '@/lib/services';
import { serviceAreas } from '@/lib/service-areas';
import { faqs } from '@/lib/faqs';
import { promo, isPromoLive } from '@/lib/promo';
import JsonLd from '@/components/JsonLd';

const steps = [
  { n: '01', t: 'Choose your size', d: 'Pick from seven standard sizes — or request custom dimensions.' },
  { n: '02', t: 'Place your order', d: 'Order online or send a quote request. We confirm details within one business day.' },
  { n: '03', t: 'Pickup or delivery', d: 'Pickup is available by appointment. Local delivery is usually $25, and free for orders of 2 or more items.' }
];

const why = [
  { t: 'Hand-built locally', d: 'Made in North Vancouver from kiln-dried Western Red Cedar.' },
  { t: 'Made to last', d: 'Stainless fasteners, reinforced corners, and proper drainage on every build.' },
  { t: 'Custom sizes', d: 'Send us length, width, and height — we build to spec, every time.' },
  { t: 'Pickup or delivery', d: 'Pickup by appointment, or local delivery usually $25 — free for orders of 2 or more items.' }
];

export default function HomePage() {
  const featured = products.slice(0, 4);
  const popular = products.slice(0, 3);
  const faqPreview = faqs.slice(0, 5);

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqPreview.map(f => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a }
          }))
        }}
      />

      <Hero />

      {/* Featured products */}
      <section className="section">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Shop the planters</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">Popular cedar planters</h2>
            </div>
            <Link href="/shop" className="hidden text-sm text-cedar-700 hover:underline md:block">See all products →</Link>
          </div>
          <div className="mt-10">
            <ProductGrid items={featured} />
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/shop" className="btn-secondary">See all products →</Link>
          </div>
        </div>
      </section>

      {/* More custom cedar builds */}
      <section className="section bg-bone pt-0 md:pt-0">
        <div className="mx-auto max-w-8xl px-5 pt-20 lg:px-10 md:pt-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Beyond planters</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">More custom cedar builds</h2>
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      {/* Promotion section */}
      {isPromoLive() && (
        <section className="section">
          <div className="mx-auto max-w-5xl px-5 lg:px-10">
            <div className="relative overflow-hidden rounded-3xl bg-forest-600 px-8 py-14 text-cream md:px-14 md:py-16">
              <p className="text-[0.72rem] uppercase tracking-[0.2em] text-cream/70">{promo.name}</p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">
                40% off all cedar builds — 3-month promotion
              </h2>
              <p className="mt-4 max-w-2xl text-cream/80">
                For a limited time, Coastline Cedar is offering 40% off cedar planters, privacy panels,
                gates, fences, and custom outdoor builds. Built locally in North Vancouver and delivered across Greater
                Vancouver.
              </p>
              <Link
                href={promo.ctaHref}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-forest-700 transition hover:bg-cedar-100"
              >
                Request a Discounted Quote →
              </Link>
              <p className="mt-4 text-xs text-cream/60">Offer ends {promo.endDateLabel}. {promo.note}</p>
            </div>
          </div>
        </section>
      )}

      {/* Why choose us */}
      <section className="bg-bone">
        <div className="mx-auto max-w-8xl px-5 py-20 lg:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Why Coastline</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">Built locally. Built right.</h2>
              <p className="mt-5 max-w-md text-charcoal-900/75">
                Every planter is built by hand from kiln-dried Western Red Cedar in our North Vancouver workshop.
                Real wood, real craftsmanship, real local delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
              {why.map(w => (
                <div key={w.t} className="rounded-2xl border border-charcoal-900/10 bg-white p-6">
                  <h3 className="font-display text-lg font-semibold text-charcoal-900">{w.t}</h3>
                  <p className="mt-2 text-sm text-charcoal-900/70">{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3-step order process */}
      <section className="section">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <p className="eyebrow">How ordering works</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">Three simple steps to a finished planter.</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map(s => (
              <li key={s.n} className="rounded-2xl border border-charcoal-900/10 bg-white p-7">
                <span className="font-display text-3xl font-semibold text-cedar-600">{s.n}</span>
                <h3 className="mt-3 font-display text-xl font-semibold text-charcoal-900">{s.t}</h3>
                <p className="mt-2 text-sm text-charcoal-900/70">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Popular sizes / custom callout */}
      <section className="section bg-cedar-50">
        <div className="mx-auto grid max-w-8xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow">Don’t see the right size?</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">Custom cedar planters, built to your dimensions.</h2>
            <p className="mt-4 max-w-lg text-charcoal-900/75">
              Awkward space? Specific design? Architectural match? Send us your dimensions and a photo of the space — we’ll come back with a sketch and quote in 1–2 business days.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/custom-planters" className="btn-primary">Request a Custom Quote →</Link>
              <Link href="/shop/custom-cedar-planter-box" className="btn-ghost">View custom option</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {popular.map(p => (
              <Link key={p.slug} href={`/shop/${p.slug}`} className="group block overflow-hidden rounded-2xl bg-white shadow-soft">
                <div className="aspect-square overflow-hidden bg-cedar-100">
                  <img src={p.image} alt={p.imageAlt} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="font-display text-sm font-semibold text-charcoal-900">{p.name}</p>
                  <p className="text-xs text-charcoal-900/60">{p.dimensions}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="section">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Local delivery</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">Serving Greater Vancouver.</h2>
            </div>
            <Link href="/service-areas" className="hidden text-sm text-cedar-700 hover:underline md:block">All service areas →</Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.slice(0, 8).map(a => <ServiceAreaCard key={a.slug} area={a} />)}
          </div>
        </div>
      </section>

      {/* Brand story preview */}
      <section className="bg-cedar-50">
        <div className="mx-auto grid max-w-8xl items-center gap-10 px-5 py-20 lg:grid-cols-12 lg:gap-14 lg:px-10 md:py-24">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-cedar-100 shadow-soft">
              <div className="aspect-[4/3]">
                <img
                  src="/images/products/workshop-cedar-planters.png"
                  alt="Coastline Cedar custom cedar build material and workshop detail"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">
              Built by a Local Family in North Vancouver
            </h2>
            <p className="mt-5 max-w-xl text-charcoal-900/75">
              Coastline Cedar began as a family project with a simple goal: to create beautiful, useful cedar
              pieces that make outdoor spaces feel warmer, cleaner, and more private. Built with care by our
              family, for local homes across Greater Vancouver.
            </p>
            <div className="mt-7">
              <Link href="/about" className="btn-primary">Read Our Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">From Workshop to Outdoor Space</h2>
              <p className="mt-4 max-w-2xl text-charcoal-900/75">
                See the cedar, tools, and hands-on process behind our custom planters and outdoor builds.
              </p>
            </div>
            <Link href="/gallery" className="btn-secondary">View Gallery →</Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { src: '/images/gallery/cedar-planter-build-process-workshop.jpg', alt: 'Coastline Cedar planter boxes being built in the North Vancouver workshop' },
              { src: '/images/gallery/finished-cedar-planter-delivery-vancouver.jpg', alt: 'Finished stained cedar planter box with liner, hand-built by Coastline Cedar' },
              { src: '/images/gallery/raised-cedar-herb-planter-coldframe.jpg', alt: 'Raised cedar herb planter with a hinged glass cold-frame lid and potted herbs' },
              { src: '/images/gallery/cedar-boards-tools-workshop.jpg', alt: 'Cedar boards and tools used for custom planter construction in the workshop' },
            ].map((img) => (
              <div key={img.src} className="overflow-hidden rounded-2xl bg-cedar-100">
                <div className="aspect-square">
                  <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Google reviews */}
      <ReviewsSection />

      {/* Trustpilot-ready credibility */}
      <TrustpilotSection />

      {/* FAQ preview */}
      <section className="section">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <p className="eyebrow text-center">Frequently asked</p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">Common questions.</h2>
          <div className="mt-10"><FAQAccordion items={faqPreview} /></div>
          <p className="mt-6 text-center"><Link href="/faq" className="text-sm text-cedar-700 hover:underline">See full FAQ →</Link></p>
        </div>
      </section>

      <CTASection />

      <SEOContentBlock title="Cedar planter boxes built for Greater Vancouver homes and businesses">
        <p>
          Coastline Cedar builds hand-crafted cedar planter boxes from our workshop in North Vancouver, serving the entire Lower Mainland.
          Our planters are made from kiln-dried Western Red Cedar — a locally grown wood that’s naturally rot-resistant, holds up beautifully
          to West Coast weather, and ages into a soft silver-grey if left unsealed.
        </p>
        <p>
          We build patio planters for small decks, slim balcony planters for Vancouver condos, large statement planters for courtyards,
          waist-height raised garden beds for vegetable growing, and privacy planters with integrated cedar trellises. We also build
          commercial-grade planters for restaurants, cafés, hotels, and strata properties across the region.
        </p>
        <p>
          If you don’t see the right size, our most-requested service is custom: send us length, width, and height — plus a photo of the
          space — and we’ll come back with a sketch and quote within 1–2 business days. We serve North Vancouver,
          West Vancouver, Vancouver, Burnaby, Richmond, Coquitlam, Port Coquitlam, Port Moody, New Westminster, Surrey, Delta, and Langley.
          Pickup is available by appointment, and local delivery is usually $25 — free for orders of two or more items.
        </p>
      </SEOContentBlock>
    </>
  );
}
