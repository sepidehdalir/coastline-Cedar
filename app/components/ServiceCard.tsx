import Link from 'next/link';
import type { Service } from '@/lib/services';
import { isPromoLive, promo } from '@/lib/promo';
import PriceBlock from './PriceBlock';

export default function ServiceCard({ service }: { service: Service }) {
  const href = `/${service.slug}`;
  const isQuote = service.cardOriginal == null;
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal-900/8 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cedar-50">
        <img
          src={service.cardImage}
          alt={service.cardImageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        {isPromoLive() && !isQuote && (
          <span className="absolute right-3 top-3 rounded-full bg-forest-600 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-cream">
            {promo.discountLabel}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-xl font-semibold leading-snug text-charcoal-900">{service.cardTitle}</h3>
        <p className="text-sm text-charcoal-900/75">{service.cardBlurb}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-3">
          <PriceBlock
            original={service.cardOriginal}
            startingFrom={service.cardStartingFrom}
            quoteLabel="Quote required"
            showNote={false}
          />
          <span className="shrink-0 text-sm text-cedar-700 transition group-hover:translate-x-0.5">Learn more →</span>
        </div>
      </div>
    </Link>
  );
}
