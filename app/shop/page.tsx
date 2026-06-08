'use client';
import { useState } from 'react';
import Link from 'next/link';
import { products, categories } from '@/lib/products';
import { services } from '@/lib/services';
import ProductGrid from '@/components/ProductGrid';
import ServiceCard from '@/components/ServiceCard';
import { CTASection } from '@/components/sections';

export default function ShopPage() {
  const [active, setActive] = useState<string>('all');
  const filtered = active === 'all' ? products : products.filter(p => p.category === active);

  return (
    <>
      <section className="border-b border-charcoal-900/8 bg-cream">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-10 md:py-20">
          <p className="eyebrow">Shop</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-charcoal-900 md:text-6xl">Cedar planter boxes for every space.</h1>
          <p className="mt-5 max-w-2xl text-charcoal-900/75">
            Seven standard sizes covering patio, balcony, raised garden, privacy, and commercial use — plus made-to-measure custom builds.
            All hand-built in North Vancouver. Pickup by appointment or local delivery (usually $25, free for orders of 2 or more items).
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            <button
              onClick={() => setActive('all')}
              className={`rounded-full px-4 py-2 text-sm transition ${active === 'all' ? 'bg-charcoal-900 text-cream' : 'border border-charcoal-900/15 text-charcoal-900 hover:bg-charcoal-900/5'}`}
            >
              All planters
            </button>
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`rounded-full px-4 py-2 text-sm transition ${active === c.id ? 'bg-charcoal-900 text-cream' : 'border border-charcoal-900/15 text-charcoal-900 hover:bg-charcoal-900/5'}`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <ProductGrid items={filtered} />
        </div>
      </section>

      <section className="bg-bone">
        <div className="mx-auto max-w-8xl px-5 py-20 lg:px-10 md:py-24">
          <p className="eyebrow">Beyond planters</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">More custom cedar builds</h2>
          <p className="mt-4 max-w-2xl text-charcoal-900/75">
            Privacy panels, outdoor saunas, and handmade gates and fences — all hand-built
            in cedar across Greater Vancouver.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Don’t see what you need?"
        title="Custom sizes are our specialty."
        body="Send us your dimensions and a photo of the space — we’ll come back with a sketch and quote within 1–2 business days."
      />
    </>
  );
}
