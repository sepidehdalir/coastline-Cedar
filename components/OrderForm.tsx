'use client';

import { useState } from 'react';

const PROJECT_TYPES = [
  'Cedar Planter',
  'Privacy Panel',
  'Outdoor Sauna',
  'Gate / Fence',
  'Custom Cedar Build',
];

const FINISH_OPTIONS = ['Natural cedar', 'Stain', 'Clear sealer', 'Not sure'];

const CITIES = [
  'North Vancouver', 'West Vancouver', 'Vancouver', 'Burnaby', 'Richmond',
  'Coquitlam', 'Port Moody', 'Port Coquitlam', 'New Westminster', 'Surrey',
  'Delta', 'Langley', 'Other',
];

const CONFIRMATION =
  'Thanks — we received your request. We’ll contact you shortly to confirm the details.';
const FAILURE =
  'Sorry, we couldn’t send your request right now. Please text or call us at (778) 522-1810.';

const inputClass =
  'mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600';
const labelClass = 'block text-xs uppercase tracking-[0.16em] text-charcoal-900/45';

export default function OrderForm() {
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [delivery, setDelivery] = useState('Pickup');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setStatus('Sending...');

    const form = event.currentTarget;
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) || '');

    const projectType = get('projectType');
    const city = get('city');
    const dimensions = get('dimensions');
    const quantity = get('quantity');
    const fulfilment = get('fulfilment');
    const deliveryAddress = get('deliveryAddress');
    const finish = get('finish');

    const payload = {
      name: get('name'),
      email: get('email'),
      phone: get('phone'),
      projectType,
      dimensions,
      message: `
New request from Coastline Cedar website

Project type: ${projectType}
City: ${city}
Desired dimensions: ${dimensions}
Quantity: ${quantity}
Pickup or delivery: ${fulfilment}${fulfilment === 'Delivery' ? `
Delivery address: ${deliveryAddress}` : ''}
Finish: ${finish}

Message:
${get('message')}
      `,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setStatus(CONFIRMATION);
        form.reset();
        setDelivery('Pickup');
      } else {
        // Never surface server/internal error text to customers.
        setStatus(FAILURE);
      }
    } catch {
      setStatus(FAILURE);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-charcoal-900/10 bg-white/70 p-6 shadow-soft">
      <div className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className={labelClass}>Name</span>
            <input name="name" required placeholder="Your name" className={inputClass} />
          </label>
          <label className="block">
            <span className={labelClass}>Phone</span>
            <input name="phone" placeholder="(778) 000-0000" className={inputClass} />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className={labelClass}>Email</span>
            <input name="email" type="email" required placeholder="you@example.com" className={inputClass} />
          </label>
          <label className="block">
            <span className={labelClass}>City</span>
            <select name="city" className={inputClass} defaultValue="">
              <option value="" disabled>Select...</option>
              {CITIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
        </div>

        <label className="block">
          <span className={labelClass}>Project type</span>
          <select name="projectType" required className={inputClass} defaultValue="">
            <option value="" disabled>Select a project type...</option>
            {PROJECT_TYPES.map((p) => <option key={p}>{p}</option>)}
          </select>
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className={labelClass}>Desired dimensions</span>
            <input name="dimensions" placeholder='Example: 48" L × 20" W × 30" H' className={inputClass} />
          </label>
          <label className="block">
            <span className={labelClass}>Quantity</span>
            <input name="quantity" type="number" min={1} defaultValue={1} className={inputClass} />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className={labelClass}>Pickup or delivery</span>
            <select
              name="fulfilment"
              className={inputClass}
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
            >
              <option>Pickup</option>
              <option>Delivery</option>
              <option>Not sure</option>
            </select>
          </label>
          <label className="block">
            <span className={labelClass}>Finish option</span>
            <select name="finish" className={inputClass} defaultValue="">
              <option value="" disabled>Select...</option>
              {FINISH_OPTIONS.map((f) => <option key={f}>{f}</option>)}
            </select>
          </label>
        </div>

        {delivery === 'Delivery' && (
          <label className="block">
            <span className={labelClass}>Delivery address</span>
            <input name="deliveryAddress" placeholder="Street, city, postal code" className={inputClass} />
          </label>
        )}

        <p className="rounded-xl bg-bone px-4 py-3 text-xs leading-relaxed text-charcoal-900/65">
          Photos help us quote accurately. Please email or text photos after submitting your request.
        </p>

        <label className="block">
          <span className={labelClass}>Message</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us what you need, preferred size, delivery area, and any details."
            className={inputClass}
          />
        </label>

        <button type="submit" disabled={isSending} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
          {isSending ? 'Sending...' : 'Send request'}
        </button>

        {status && (
          <p className="rounded-xl bg-cream px-4 py-3 text-sm text-charcoal-900/80">{status}</p>
        )}
      </div>
    </form>
  );
}
