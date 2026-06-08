import Link from 'next/link';
import { reviews } from '@/lib/reviews';
import { site } from '@/lib/site.config';

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-cedar-500" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill={i < n ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.6L18.2 22 12 18.3 5.8 22l1.7-7.4L2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="section">
      <div className="mx-auto max-w-8xl px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Trusted by local customers</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">
              Trusted by Local Customers
            </h2>
            <p className="mt-4 max-w-2xl text-charcoal-900/75">
              Real feedback from customers who ordered custom cedar planters from Coastline Cedar.
            </p>
          </div>
          {site.googleReviewsUrl ? (
            <a
              href={site.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Our Google Reviews →
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-charcoal-900/60 ring-1 ring-charcoal-900/10">
              <span className="h-1.5 w-1.5 rounded-full bg-forest-500" />
              Google review link coming soon
            </span>
          )}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-charcoal-900/10 bg-white p-6 shadow-soft"
            >
              <Stars n={r.rating} />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-900/80">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm text-charcoal-900/65">
                {r.name} <span className="text-charcoal-900/40">· {r.dateLabel}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-xs text-charcoal-900/50">
          Reviews shown are real customer feedback from our Google profile.
        </p>
      </div>
    </section>
  );
}

export function TrustpilotSection() {
  return (
    <section className="bg-bone">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center lg:px-10">
        <p className="eyebrow">Credibility</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal-900 md:text-4xl">
          Building Trust, One Cedar Project at a Time
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-charcoal-900/75">
          We are also preparing our Trustpilot profile so future customers can easily verify our service
          quality and share their experience.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {site.trustpilotUrl ? (
            <a
              href={site.trustpilotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit Our Trustpilot Profile →
            </a>
          ) : (
            <span className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm text-charcoal-900/55 ring-1 ring-charcoal-900/10">
              Trustpilot profile coming soon
            </span>
          )}
        </div>
        {/*
          When your Trustpilot profile is live:
          1. Set site.trustpilotUrl in lib/site.config.ts.
          2. Embed the official Trustpilot widget here.
          Do not display the Trustpilot logo, stars, or rating until the profile/widget is active.
        */}
      </div>
    </section>
  );
}
