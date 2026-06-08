import Link from 'next/link';
import type { Product } from '@/lib/products';
import { isPromoLive, promo } from '@/lib/promo';
import PriceBlock from './PriceBlock';

export default function ProductCard({ product }: { product: Product }) {
  const isCustom = product.startingPrice == null;
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal-900/8 bg-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-cedar-50">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-cedar-700">
          {product.categoryLabel}
        </span>
        {isPromoLive() && !isCustom && (
          <span className="absolute right-3 top-3 rounded-full bg-forest-600 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-cream">
            {promo.discountLabel}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-xl font-semibold leading-snug text-charcoal-900">{product.name}</h3>
        <p className="text-sm text-charcoal-900/65">{product.dimensions}</p>
        <p className="text-sm text-charcoal-900/75">{product.shortDescription}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-3">
          <PriceBlock
            original={product.startingPrice}
            startingFrom={!isCustom}
            quoteLabel="Quote on request"
            showNote={false}
          />
          <span className="shrink-0 text-sm text-cedar-700 transition group-hover:translate-x-0.5">View →</span>
        </div>
      </div>
    </Link>
  );
}
