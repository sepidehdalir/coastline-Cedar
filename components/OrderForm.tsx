'use client';

import { useState } from 'react';

export default function OrderForm() {
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setStatus('Sending...');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      projectType: String(formData.get('projectType') || ''),
      dimensions: String(formData.get('dimensions') || ''),
      message: String(formData.get('message') || ''),
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
        form.reset();
      } else {
        setStatus(result.error || 'Message failed. Please try again.');
      }
    } catch {
      setStatus('Form connection failed. Please try again.');
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
        <label className="block">
          <span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
            Name
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
            Project Type
          </span>
          <input
            name="projectType"
            placeholder="Planter box, custom size, privacy planter..."
            className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600"
          />
        </label>

        <label className="block">
          <span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
            Dimensions
          </span>
          <input
            name="dimensions"
            placeholder='Example: 48" L × 20" W × 30" H'
            className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600"
          />
        </label>

        <label className="block">
          <span className="block text-xs uppercase tracking-[0.16em] text-charcoal-900/45">
            Message
          </span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us what you need, preferred size, delivery area, and any details."
            className="mt-2 w-full rounded-xl border border-charcoal-900/10 bg-cream px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-cedar-600"
          />
        </label>

        <button
          type="submit"
          disabled={isSending}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? 'Sending...' : 'Send request'}
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
