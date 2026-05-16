import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceArea, serviceAreas } from '@/lib/service-areas';
import { products } from '@/lib/products';
import { site } from '@/lib/site.config';
import ProductGrid from '@/components/ProductGrid';
import { CTASection, FAQAccordion } from '@/components/sections';
import JsonLd from '@/components/JsonLd';

export function buildMetadata(slug: string): Metadata {
  const a = getServiceArea(slug);
  if (!a) return {};
  return {
    title: `Cedar Planter Boxes ${a.city} | ${site.name}`,
    description: `Hand-built cedar planter boxes delivered across ${a.city}. Standard sizes and custom builds. Free delivery on orders over $${site.freeDeliveryThreshold}.`,
    alternates: { canonical: `${site.url}/service-areas/${a.slug}` }
  };
}

export default function ServiceAreaPage({ slug }: { slug: string }) {
  const a = getServiceArea(slug);
  if (!a) return notFound();
  const featured = products.slice(0, 3);

  const otherAreas = serviceAreas.filter(x => x.slug !== slug).slice(0, 4);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${site.url}/service-areas` },
      { '@type': 'ListItem', position: 3, name: a.city, item: `${site.url}/service-areas/${a.slug}` }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: a.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqSchema} />

      <nav className="mx-auto max-w-8xl px-5 pt-6 text-xs text-charcoal-900/55 lg:px-10" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-1">
          <li><Link href="/" className="hover:text-charcoal-900">Home</Link></li>
          <li>/</li>
          <li><Link href="/service-areas" className="hover:text-charcoal-900">Service Areas</Link></li>
          <li>/</li>
          <li className="text-charcoal-900/80">{a.city}</li>
        </ol>
      </nav>

      <section className="border-b border-charcoal-900/8 bg-cream">
        <div className="mx-auto max-w-8xl px-5 py-12 lg:px-10 md:py-20">
          <p className="eyebrow">Service area · {a.cityFull}</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-tight text-charcoal-900 md:text-6xl">{a.h1}</h1>
          <p className="mt-5 max-w-2xl text-charcoal-900/75">{a.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/shop" className="btn-primary">Shop Planters →</Link>
            <Link href="/custom-planters" className="btn-secondary">Request Custom Quote</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-8xl gap-10 px-5 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl font-semibold text-charcoal-900 md:text-4xl">Cedar planters in {a.shortLocale}</h2>
            <p className="mt-4 text-charcoal-900/75">{a.localBlurb}</p>
            <h3 className="mt-10 font-display text-xl font-semibold text-charcoal-900">Popular uses in {a.shortLocale}</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {a.useCases.map(u => (
                <li key={u} className="flex items-start gap-2 text-sm text-charcoal-900/80">
                  <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cedar-600" />{u}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 font-display text-xl font-semibold text-charcoal-900">Neighbourhoods we serve</h3>
            <p className="mt-3 text-sm text-charcoal-900/75">{a.neighborhoods}</p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-charcoal-900/10 bg-bone p-6">
              <p className="eyebrow">Delivery</p>
              <p className="mt-3 text-charcoal-900/80">{a.deliveryNote}</p>
              <Link href="/contact" className="btn-primary mt-5 w-full">Order Now →</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section pt-0">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <h2 className="font-display text-2xl font-semibold text-charcoal-900 md:text-4xl">Popular planters in {a.shortLocale}</h2>
          <div className="mt-8"><ProductGrid items={featured} /></div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-4xl px-5 py-20 lg:px-10">
          <p className="eyebrow">FAQ · {a.shortLocale}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">Questions from {a.shortLocale} customers.</h2>
          <div className="mt-10"><FAQAccordion items={a.faq} /></div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <p className="eyebrow">Other service areas</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-charcoal-900 md:text-4xl">We also deliver to…</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherAreas.map(o => (
              <Link key={o.slug} href={`/service-areas/${o.slug}`} className="rounded-2xl border border-charcoal-900/10 bg-white px-5 py-4 text-sm text-charcoal-900 transition hover:border-cedar-300 hover:text-cedar-700">
                Cedar planters in {o.city} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow={`Local to ${a.shortLocale}`} title={`Cedar planters delivered across ${a.city}.`} />
    </>
  );
}
