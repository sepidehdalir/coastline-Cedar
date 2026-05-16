'use client';
import Link from 'next/link';
import { useState } from 'react';
import type { FAQ } from '@/lib/faqs';
import type { ServiceArea } from '@/lib/service-areas';

export function CTASection({
  eyebrow = 'Ready to order?',
  title = 'Hand-built cedar planters, delivered locally.',
  body = 'Choose a standard size or send us your dimensions for a custom build. Free delivery on orders over $200 across Greater Vancouver.',
  primaryHref = '/shop',
  primaryLabel = 'Shop Planters',
  secondaryHref = '/custom-planters',
  secondaryLabel = 'Request a Custom Size'
}: {
  eyebrow?: string; title?: string; body?: string;
  primaryHref?: string; primaryLabel?: string;
  secondaryHref?: string; secondaryLabel?: string;
}) {
  return (
    <section className="section">
      <div className="mx-auto max-w-5xl px-5 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-charcoal-900 px-8 py-14 text-cream md:px-14 md:py-20">
          <div aria-hidden className="absolute inset-0 opacity-20">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cedar-400 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-forest-500 blur-3xl" />
          </div>
          <div className="relative">
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-cedar-200">{eyebrow}</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight md:text-5xl">{title}</h2>
            <p className="mt-4 max-w-xl text-cream/75">{body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={primaryHref} className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-medium text-charcoal-900 transition hover:bg-cedar-100">
                {primaryLabel} →
              </Link>
              <Link href={secondaryHref} className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-medium text-cream transition hover:bg-cream/10">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-charcoal-900/10 rounded-2xl border border-charcoal-900/10 bg-white">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition hover:bg-cedar-50/40"
            >
              <span className="font-display text-base font-medium text-charcoal-900 md:text-lg">{it.q}</span>
              <span aria-hidden className={`mt-1 text-cedar-700 transition ${isOpen ? 'rotate-45' : ''}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
              </span>
            </button>
            {isOpen && <div className="px-6 pb-6 text-sm leading-relaxed text-charcoal-900/75">{it.a}</div>}
          </div>
        );
      })}
    </div>
  );
}

export function ServiceAreaCard({ area }: { area: ServiceArea }) {
  return (
    <Link href={`/service-areas/${area.slug}`} className="group block rounded-2xl border border-charcoal-900/10 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lift">
      <p className="eyebrow">Service area</p>
      <h3 className="mt-2 font-display text-2xl font-semibold text-charcoal-900">{area.city}</h3>
      <p className="mt-2 text-sm text-charcoal-900/65 line-clamp-2">{area.intro}</p>
      <p className="mt-4 text-sm text-cedar-700 transition group-hover:translate-x-0.5">Cedar planters in {area.shortLocale} →</p>
    </Link>
  );
}

export function TestimonialCard({ name, role, body }: { name: string; role: string; body: string }) {
  return (
    <figure className="rounded-2xl border border-charcoal-900/10 bg-white p-6">
      <div className="flex gap-1 text-cedar-500" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2l2.9 6.9L22 10l-5.5 4.6L18.2 22 12 18.3 5.8 22l1.7-7.4L2 10l7.1-1.1L12 2z" /></svg>
        ))}
      </div>
      <blockquote className="mt-3 font-display text-lg leading-snug text-charcoal-900">“{body}”</blockquote>
      <figcaption className="mt-4 text-sm text-charcoal-900/65">{name} <span className="text-charcoal-900/45">· {role}</span></figcaption>
    </figure>
  );
}

export function SEOContentBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-charcoal-900/10 bg-bone">
      <div className="mx-auto max-w-4xl px-5 py-16 lg:px-10">
        <h2 className="font-display text-3xl font-semibold text-charcoal-900 md:text-4xl">{title}</h2>
        <div className="mt-6 space-y-4 text-charcoal-900/75 [&_a]:text-cedar-700 [&_a:hover]:underline">{children}</div>
      </div>
    </section>
  );
}
