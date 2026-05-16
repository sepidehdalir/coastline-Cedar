import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProduct, getRelated, products } from '@/lib/products';
import { site } from '@/lib/site.config';
import ProductGrid from '@/components/ProductGrid';
import { CTASection, FAQAccordion } from '@/components/sections';
import JsonLd from '@/components/JsonLd';

export const dynamicParams = false;
export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    alternates: { canonical: `${site.url}/shop/${p.slug}` },
    openGraph: { title: p.seoTitle, description: p.seoDescription, images: [p.image] }
  };
}

const productFAQ = [
  { q: 'Is this size in stock?', a: 'We build to order — standard sizes typically ship within 7–10 business days.' },
  { q: 'Can I get this in a different size?', a: 'Yes. Send us the dimensions you need and we’ll quote a custom version.' },
  { q: 'How does delivery work?', a: `Free delivery across Greater Vancouver on orders over $${site.freeDeliveryThreshold}. Workshop pickup also available.` },
  { q: 'Do you assemble on delivery?', a: 'Yes — planters arrive fully assembled and ready to fill with soil.' }
];

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return notFound();
  const related = getRelated(product.slug);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.seoDescription,
    image: product.image,
    brand: { '@type': 'Brand', name: site.name },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'CAD',
      price: product.startingPrice ?? undefined,
      availability: 'https://schema.org/InStock',
      url: `${site.url}/shop/${product.slug}`,
      areaServed: 'Greater Vancouver'
    }
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `${site.url}/shop` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${site.url}/shop/${product.slug}` }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: productFAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqSchema} />

      <nav className="mx-auto max-w-8xl px-5 pt-6 text-xs text-charcoal-900/55 lg:px-10" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-1">
          <li><Link href="/" className="hover:text-charcoal-900">Home</Link></li>
          <li>/</li>
          <li><Link href="/shop" className="hover:text-charcoal-900">Shop</Link></li>
          <li>/</li>
          <li className="text-charcoal-900/80">{product.name}</li>
        </ol>
      </nav>

      <section className="section pt-10">
        <div className="mx-auto grid max-w-8xl gap-10 px-5 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl bg-cedar-100 shadow-soft">
              <div className="aspect-[5/4]">
                <img src={product.image} alt={product.imageAlt} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="eyebrow">{product.categoryLabel}</p>
            <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-charcoal-900 md:text-5xl">{product.name}</h1>
            <p className="mt-3 text-charcoal-900/75">{product.shortDescription}</p>
            <p className="mt-6 font-display text-3xl font-semibold text-charcoal-900">{product.priceLabel}</p>
            <p className="text-sm text-charcoal-900/55">Free delivery in Greater Vancouver on orders over ${site.freeDeliveryThreshold}.</p>

            <div className="mt-7 space-y-3">
              <Link href="/contact" className="btn-primary w-full sm:w-auto">Order this planter →</Link>
              <Link href="/custom-planters" className="btn-secondary w-full sm:w-auto sm:ml-2">Request custom size</Link>
            </div>

            <dl className="mt-10 divide-y divide-charcoal-900/10 rounded-2xl border border-charcoal-900/10 bg-white">
              <Row k="Dimensions" v={product.dimensions} />
              <Row k="Material" v="Kiln-dried Western Red Cedar (BC)" />
              <Row k="Hardware" v="Stainless steel fasteners" />
              <Row k="Drainage" v={product.drainage} />
              <Row k="Finish options" v={product.finishOptions.join(' · ')} />
              <Row k="Suitable for" v="Outdoor (recommended) · Covered indoor patios" />
              <Row k="Build time" v="7–10 business days (standard) · 2–3 weeks (custom)" />
            </dl>
          </div>
        </div>
      </section>

      {/* Description + features */}
      <section className="section pt-0">
        <div className="mx-auto grid max-w-8xl gap-10 px-5 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-semibold text-charcoal-900 md:text-4xl">About this planter</h2>
            <p className="mt-4 text-charcoal-900/75">{product.description}</p>

            <h3 className="mt-10 font-display text-xl font-semibold text-charcoal-900">Features</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {product.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-charcoal-900/80">
                  <span aria-hidden className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cedar-600" />
                  {f}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-semibold text-charcoal-900">Best for</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {product.bestFor.map(b => (
                <li key={b} className="rounded-full border border-cedar-200 bg-cedar-50 px-3 py-1 text-xs text-cedar-700">{b}</li>
              ))}
            </ul>
          </div>

          <aside className="lg:col-span-5">
            <h3 className="font-display text-xl font-semibold text-charcoal-900">Questions about this planter</h3>
            <div className="mt-4"><FAQAccordion items={productFAQ} /></div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="section pt-0">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <h2 className="font-display text-2xl font-semibold text-charcoal-900 md:text-4xl">You might also like</h2>
          <div className="mt-8"><ProductGrid items={related} /></div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-3 gap-4 px-5 py-3 text-sm">
      <dt className="text-charcoal-900/55">{k}</dt>
      <dd className="col-span-2 text-charcoal-900">{v}</dd>
    </div>
  );
}
