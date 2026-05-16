'use client';

import { useState } from 'react';

export default function OrderForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      projectType: formData.get('projectType'),
      dimensions: formData.get('dimensions'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully. We will get back to you shortly.');
        event.currentTarget.reset();
      } else {
        setStatus(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('Form connection failed. Please try again later.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-charcoal-900/10 bg-white p-6 shadow-soft">
      <div>
        <label className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
          Name
        </label>
        <input
          name="name"
          required
          className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm outline-none focus:border-cedar-600"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
          Email
        </label>
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm outline-none focus:border-cedar-600"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
          Phone
        </label>
        <input
          name="phone"
          className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm outline-none focus:border-cedar-600"
          placeholder="(778) 000-0000"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
          Project Type
        </label>
        <input
          name="projectType"
          className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm outline-none focus:border-cedar-600"
          placeholder="Planter box, custom size, privacy planter..."
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
          Dimensions
        </label>
        <input
          name="dimensions"
          className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm outline-none focus:border-cedar-600"
          placeholder='Example: 48" L × 20" W × 30" H'
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm outline-none focus:border-cedar-600"
          placeholder="Tell us what you need, preferred size, delivery area, and any details."
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Send request
      </button>

      {status && (
        <p className="text-sm text-charcoal-900/70">{status}</p>
      )}
    </form>
  );
}
