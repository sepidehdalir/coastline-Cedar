import type { Metadata } from 'next';
import { FAQAccordion, CTASection } from '@/components/sections';
import { faqs } from '@/lib/faqs';
import { site } from '@/lib/site.config';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'FAQ — Cedar Planter Boxes',
  description:
    'Common questions about our cedar planter boxes — sizes, custom builds, materials, drainage, delivery across Greater Vancouver, and care.',
  alternates: { canonical: `${site.url}/faq` }
};

export default function FAQPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="border-b border-charcoal-900/8 bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-10 md:py-20">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-charcoal-900 md:text-6xl">Cedar planter questions, answered.</h1>
          <p className="mt-5 max-w-2xl text-charcoal-900/75">
            Sizes, custom builds, materials, drainage, delivery across Greater Vancouver, and how to take care of cedar over time.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-4xl px-5 lg:px-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection eyebrow="Still have questions?" title="Talk to us — we’re happy to help." primaryHref="/contact" primaryLabel="Contact Us" />
    </>
  );
}
