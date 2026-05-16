import type { Metadata } from 'next';
import { ServiceAreaCard, CTASection } from '@/components/sections';
import { serviceAreas } from '@/lib/service-areas';
import { site } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Service Areas — Cedar Planter Delivery Greater Vancouver',
  description:
    'Cedar planter boxes delivered across Greater Vancouver — North Vancouver, West Vancouver, Vancouver, Burnaby, Richmond, Coquitlam, Surrey, and Langley.',
  alternates: { canonical: `${site.url}/service-areas` }
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="border-b border-charcoal-900/8 bg-cream">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-10 md:py-20">
          <p className="eyebrow">Service areas</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-charcoal-900 md:text-6xl">Cedar planters delivered across Greater Vancouver.</h1>
          <p className="mt-5 max-w-2xl text-charcoal-900/75">
            We build everything in our North Vancouver workshop and deliver directly to your door across the Lower Mainland. Free delivery on orders over ${site.freeDeliveryThreshold}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map(a => <ServiceAreaCard key={a.slug} area={a} />)}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
