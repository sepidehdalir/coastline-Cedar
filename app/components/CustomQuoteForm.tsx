'use client';

import { useState } from 'react';

export default function CustomQuoteForm() {
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setStatus('Sending...');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const phone = String(formData.get('phone') || '');
    const serviceArea = String(formData.get('serviceArea') || '');
    const length = String(formData.get('length') || '');
    const width = String(formData.get('width') || '');
    const height = String(formData.get('height') || '');
    const finish = String(formData.get('finish') || '');
    const useCase = String(formData.get('useCase') || '');
    const details = String(formData.get('details') || '');

    const dimensions = `${length}" L × ${width}" W × ${height}" H`;

    const payload = {
      name,
      email,
      phone,
      projectType: `Custom planter quote - ${useCase}`,
      dimensions,
      message: `
Custom planter quote request

Service Area: ${serviceArea}
Dimensions: ${dimensions}
Finish Preference: ${finish}
Use Case: ${useCase}

Project Details:
${details}
      `,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('Thanks — we received your request. We’ll contact you shortly to confirm the details.');
        form.reset();
      } else {
        // Never surface server/internal error text to customers.
        setStatus('Sorry, we couldn’t send your request right now. Please text or call us at (778) 522-1810.');
      }
    } catch {
      setStatus('Sorry, we couldn’t send your request right now. Please text or call us at (778) 522-1810.');
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-charcoal-900/10 bg-white/70 p-6 shadow-soft"
    >
      <div className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
              Full name
            </span>
            <input
              name="name"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600"
            />
          </label>

          <label className="block">
            <span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
              Email
            </span>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
              Phone
            </span>
            <input
              name="phone"
              placeholder="(778) 000-0000"
              className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600"
            />
          </label>

          <label className="block">
            <span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
              Service area
            </span>
            <select
              name="serviceArea"
              className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600"
            >
              <option value="">Select...</option>
              <option>North Vancouver</option>
              <option>Vancouver</option>
              <option>West Vancouver</option>
              <option>Burnaby</option>
              <option>Richmond</option>
              <option>Coquitlam</option>
              <option>Surrey</option>
              <option>Langley</option>
              <option>Other Greater Vancouver area</option>
            </select>
          </label>
        </div>

        <div>
          <span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
            Dimensions in inches
          </span>
          <div className="mt-2 grid gap-4 md:grid-cols-3">
            <input
              name="length"
              placeholder="Length"
              className="w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600"
            />
            <input
              name="width"
              placeholder="Width"
              className="w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600"
            />
            <input
              name="height"
              placeholder="Height"
              className="w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600"
            />
          </div>
          <p className="mt-2 text-xs text-charcoal-900/55">
            Not sure exactly? Give us a range and we will work it out together.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
              Finish preference
            </span>
            <select
              name="finish"
              className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600"
            >
              <option value="">Select...</option>
              <option>Natural unfinished cedar</option>
              <option>Clear outdoor sealer</option>
              <option>Charcoal stain</option>
              <option>Custom colour</option>
              <option>Not sure yet</option>
            </select>
          </label>

          <label className="block">
            <span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
              Use case
            </span>
            <select
              name="useCase"
              className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600"
            >
              <option value="">Select...</option>
              <option>Patio or deck</option>
              <option>Balcony</option>
              <option>Front entrance</option>
              <option>Vegetable garden</option>
              <option>Privacy or trellis</option>
              <option>Restaurant or café</option>
              <option>Other</option>
            </select>
          </label>
        </div>

        <label className="block">
          <span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
            Project details
          </span>
          <textarea
            name="details"
            required
            rows={5}
            placeholder="Tell us about the space, preferred design, quantity, delivery area, and any details."
            className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600"
          />
        </label>

        <button
          type="submit"
          disabled={isSending}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? 'Sending...' : 'Request Custom Quote'}
        </button>

        {status && (
          <p className="rounded-xl bg-cream px-4 py-3 text-sm text-charcoal-900/80">
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
