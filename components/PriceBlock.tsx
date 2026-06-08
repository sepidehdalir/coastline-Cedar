import { buildPriceView, promo, isPromoLive } from '@/lib/promo';

type Props = {
  /** Original (pre-discount) price. null = quote only. */
  original: number | null;
  /** Render as "Starting from $X" (custom/service pricing). */
  startingFrom?: boolean;
  /** Fallback label when there is no fixed price (e.g. "Quote on request"). */
  quoteLabel?: string;
  /** Show the small promotional note under the price. */
  showNote?: boolean;
  /** Optional sub-note shown under the price (e.g. custom quote caveat). */
  subNote?: string;
  /** Visual size. 'lg' for detail pages, 'md' default for cards. */
  size?: 'md' | 'lg';
  className?: string;
};

export default function PriceBlock({
  original,
  startingFrom = false,
  quoteLabel = 'Quote on request',
  showNote = true,
  subNote,
  size = 'md',
  className = '',
}: Props) {
  const view = buildPriceView(original, { startingFrom });
  const live = isPromoLive();

  if (view.quoteOnly) {
    return (
      <div className={className}>
        <p className={`font-display font-semibold text-charcoal-900 ${size === 'lg' ? 'text-2xl' : 'text-lg'}`}>
          {quoteLabel}
        </p>
        {subNote && <p className="promo-note">{subNote}</p>}
      </div>
    );
  }

  // Promo not live: show a single clean price, no strikethrough.
  if (!live) {
    return (
      <div className={className}>
        <p className={`font-display font-semibold text-charcoal-900 ${size === 'lg' ? 'text-2xl' : 'text-lg'}`}>
          {startingFrom ? `Starting from ${view.originalLabel}` : view.originalLabel}
        </p>
        {subNote && <p className="promo-note">{subNote}</p>}
      </div>
    );
  }

  return (
    <div className={className}>
      {startingFrom && (
        <p className="text-[0.7rem] uppercase tracking-[0.16em] text-cedar-600">Starting from</p>
      )}
      <div className="price-block">
        <span className="old-price">{view.originalLabel}</span>
        <span className="sale-price" style={size === 'lg' ? { fontSize: '1.75rem' } : undefined}>
          {view.saleLabel}
        </span>
        <span className="discount-badge">{promo.discountLabel}</span>
      </div>
      {showNote && <p className="promo-note">{promo.note}</p>}
      {subNote && <p className="promo-note">{subNote}</p>}
    </div>
  );
}
