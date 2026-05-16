import type { Metadata } from 'next';
import OrderForm from '@/components/OrderForm';
import { site } from '@/lib/site.config';

export const metadata: Metadata = {
  title: 'Order or Contact — Cedar Planter Boxes Vancouver',
  description:
    'Order a cedar planter or request a custom quote. We reply within one business day. Free delivery across Greater Vancouver over $200.',
  alternates: { canonical: `${site.url}/contact` }
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-charcoal-900/8 bg-cream">
        <div className="mx-auto max-w-8xl px-5 py-16 lg:px-10 md:py-20">
          <p className="eyebrow">Order / contact</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold text-charcoal-900 md:text-6xl">Order a planter or send us a message.</h1>
          <p className="mt-5 max-w-2xl text-charcoal-900/75">
            Tell us what you’re looking for. We’ll confirm sizing, delivery window, and final pricing within one business day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-8xl gap-10 px-5 lg:grid-cols-12 lg:px-10">
          <aside className="lg:col-span-4">
            <p className="eyebrow">Get in touch</p>
            <ul className="mt-4 space-y-3 text-sm text-charcoal-900/80">
              <li><span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">Phone</span><a href={site.phoneHref} className="text-base text-charcoal-900 hover:text-cedar-700">{site.phone}</a></li>
              <li><span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">Email</span><a href={`mailto:${site.email}`} className="text-base text-charcoal-900 hover:text-cedar-700">{site.email}</a></li>
              <li><span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">Workshop</span>{site.address.locality}, {site.address.region} <span className="block text-xs text-charcoal-900/55">Pickup by appointment</span></li>
              <li><span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">Hours</span>{site.hours}</li>
            </ul>

            <div className="mt-8 rounded-2xl border border-charcoal-900/10 bg-bone p-5 text-sm text-charcoal-900/75">
              <p className="font-medium text-charcoal-900">Service area</p>
              <p className="mt-2">North Vancouver, West Vancouver, Vancouver, Burnaby, Richmond, Coquitlam, Port Coquitlam, Port Moody, New Westminster, Surrey, Delta, Langley.</p>
              <p className="mt-2 text-charcoal-900/55">Free delivery on orders over ${site.freeDeliveryThreshold}.</p>
            </div>
          </aside>

          <div className="lg:col-span-8"><OrderForm /></div>
        </div>
      </section>
    </>
  );
}
