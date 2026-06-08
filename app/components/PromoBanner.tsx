import Link from 'next/link';
import { promo, isPromoLive } from '@/lib/promo';

export default function PromoBanner() {
  if (!isPromoLive()) return null;

  return (
    <div className="bg-forest-600 text-cream">
      <div className="mx-auto flex max-w-8xl flex-col items-center justify-center gap-x-4 gap-y-2 px-5 py-2.5 text-center sm:flex-row lg:px-10">
        <p className="text-sm font-medium leading-snug">
          <span className="font-semibold">{promo.discountLabel}</span> all cedar builds until {promo.endDateLabel}.
        </p>
        <Link
          href={promo.ctaHref}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-cream px-4 py-1.5 text-xs font-semibold text-forest-700 transition hover:bg-cedar-100"
        >
          {promo.ctaLabel} →
        </Link>
      </div>
    </div>
  );
}
