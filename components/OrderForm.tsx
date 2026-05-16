'use client';
import { useState } from 'react';
import { products } from '@/lib/products';
import { serviceAreas } from '@/lib/service-areas';

export default function OrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    // Connect to Formspree, Resend, or your own API route here:
    // const data = new FormData(e.currentTarget);
    // await fetch('/api/order', { method: 'POST', body: data });
    await new Promise(r => setTimeout(r, 700));
    setPending(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-forest-500/30 bg-forest-500/5 p-8 text-charcoal-900">
        <p className="eyebrow text-forest-600">Order request received</p>
        <h3 className="mt-2 font-display text-2xl font-semibold">Thanks — we’ll be in touch within 1 business day.</h3>
        <p className="mt-2 text-sm text-charcoal-900/70">
          We’ll confirm sizing, delivery window, and final pricing by email. If your order is time-sensitive, give us a call too.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-charcoal-900/10 bg-white p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <SelectField label="Service area" name="serviceArea" options={serviceAreas.map(a => a.city)} required />
      </div>

      <SelectField
        label="Product"
        name="product"
        options={['Not sure yet — recommend something', ...products.map(p => p.name)]}
        required
      />

      <div className="grid gap-5 sm:grid-cols-4">
        <Field label="Length (in)" name="length" type="number" min={0} />
        <Field label="Width (in)" name="width" type="number" min={0} />
        <Field label="Height (in)" name="height" type="number" min={0} />
        <Field label="Quantity" name="qty" type="number" min={1} defaultValue={1} />
      </div>

      <Field label="Delivery address (optional — for quote)" name="address" />

      <fieldset>
        <legend className="text-sm font-medium text-charcoal-900">Delivery or pickup?</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {['Local delivery', 'Workshop pickup', 'Not sure yet'].map(o => (
            <label key={o} className="cursor-pointer rounded-full border border-charcoal-900/15 px-4 py-2 text-sm has-[:checked]:border-cedar-700 has-[:checked]:bg-cedar-50">
              <input type="radio" name="fulfilment" value={o} className="sr-only" defaultChecked={o === 'Local delivery'} />
              {o}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="text-sm font-medium text-charcoal-900">Tell us about your project</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Where the planter will live, what you’re planting, finish preference, deadline…"
          className="mt-2 w-full rounded-xl border border-charcoal-900/15 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none transition focus:border-cedar-700"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-charcoal-900">Photo of the space (optional)</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          className="mt-2 block w-full text-sm text-charcoal-900/70 file:mr-4 file:rounded-full file:border-0 file:bg-cedar-50 file:px-4 file:py-2 file:text-sm file:text-cedar-700 hover:file:bg-cedar-100"
        />
      </div>

      <button type="submit" disabled={pending} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {pending ? 'Sending…' : 'Send Order Request →'}
      </button>
      <p className="text-xs text-charcoal-900/55">We reply within 1 business day with a quote, sketch (if custom), and timeline.</p>
    </form>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, name, ...rest } = props;
  return (
    <label className="block text-sm">
      <span className="font-medium text-charcoal-900">{label}</span>
      <input
        name={name}
        {...rest}
        className="mt-2 w-full rounded-xl border border-charcoal-900/15 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none transition focus:border-cedar-700"
      />
    </label>
  );
}

function SelectField({ label, name, options, required }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-charcoal-900">{label}</span>
      <select
        name={name}
        required={required}
        className="mt-2 w-full rounded-xl border border-charcoal-900/15 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none transition focus:border-cedar-700"
      >
        <option value="">Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
