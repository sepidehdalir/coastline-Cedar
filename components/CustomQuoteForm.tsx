'use client';
import { useState } from 'react';
import { serviceAreas } from '@/lib/service-areas';

export default function CustomQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    await new Promise(r => setTimeout(r, 700));
    setPending(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-forest-500/30 bg-forest-500/5 p-8">
        <p className="eyebrow text-forest-600">Quote request received</p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-charcoal-900">Thanks — sketch and quote on the way.</h3>
        <p className="mt-2 text-sm text-charcoal-900/70">We typically reply within 1–2 business days with a sketch, materials list, finish recommendations, and a firm price.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-charcoal-900/10 bg-white p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" />
        <Select label="Service area" name="serviceArea" options={serviceAreas.map(a => a.city)} />
      </div>

      <div>
        <p className="text-sm font-medium text-charcoal-900">Dimensions (inches)</p>
        <div className="mt-2 grid gap-3 sm:grid-cols-3">
          <Field label="Length" name="length" type="number" min={0} required />
          <Field label="Width" name="width" type="number" min={0} required />
          <Field label="Height" name="height" type="number" min={0} required />
        </div>
        <p className="mt-2 text-xs text-charcoal-900/55">Not sure exactly? Give us a range and we’ll work it out together.</p>
      </div>

      <Select label="Finish preference" name="finish" options={['Natural (unfinished)', 'Clear outdoor sealer', 'Charcoal stain', 'Custom colour', 'Not sure yet']} />
      <Select label="Use case" name="useCase" options={['Patio / deck', 'Balcony', 'Front entrance', 'Vegetable garden', 'Privacy / trellis', 'Restaurant / café', 'Other']} />

      <div>
        <label className="text-sm font-medium text-charcoal-900">Project details</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us where it will live, what you’re planting, deadline, anything we should know."
          className="mt-2 w-full rounded-xl border border-charcoal-900/15 bg-cream px-4 py-3 text-sm outline-none focus:border-cedar-700"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-charcoal-900">Photo of the space (optional)</label>
        <input type="file" name="photo" accept="image/*" className="mt-2 block w-full text-sm text-charcoal-900/70 file:mr-4 file:rounded-full file:border-0 file:bg-cedar-50 file:px-4 file:py-2 file:text-sm file:text-cedar-700 hover:file:bg-cedar-100" />
      </div>

      <button type="submit" disabled={pending} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {pending ? 'Sending…' : 'Request Custom Quote →'}
      </button>
      <p className="text-xs text-charcoal-900/55">Free, no-obligation quote. Most quotes come back within 1–2 business days.</p>
    </form>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, name, ...rest } = props;
  return (
    <label className="block text-sm">
      <span className="font-medium text-charcoal-900">{label}</span>
      <input name={name} {...rest} className="mt-2 w-full rounded-xl border border-charcoal-900/15 bg-cream px-4 py-3 text-sm outline-none focus:border-cedar-700" />
    </label>
  );
}
function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block text-sm">
      <span className="font-medium text-charcoal-900">{label}</span>
      <select name={name} className="mt-2 w-full rounded-xl border border-charcoal-900/15 bg-cream px-4 py-3 text-sm outline-none focus:border-cedar-700">
        <option value="">Select…</option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
