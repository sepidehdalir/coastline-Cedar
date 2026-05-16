'use client';
import { useState } from 'react';
import type { Metadata } from 'next';
import { products, categories } from '@/lib/products';
import ProductGrid from '@/components/ProductGrid';
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
            All hand-built in North Vancouver. Free delivery across Greater Vancouver on orders over $200.
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

      <CTASection
        eyebrow="Don’t see what you need?"
        title="Custom sizes are our specialty."
        body="Send us your dimensions and a photo of the space — we’ll come back with a sketch and quote within 1–2 business days."
      />
    </>
  );
}
