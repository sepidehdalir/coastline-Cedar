// Centralized promotion + pricing system.
// Single source of truth for the 3-month 40% OFF promotion.
// Toggle `promo.active` to false (or let dates lapse) to cleanly disable everything.

export const promo = {
  active: true,
  name: '3-Month Cedar Build Promotion',
  discount: 0.4, // 40% off
  discountLabel: '40% OFF',
  startDate: '2026-06-07',
  endDate: '2026-09-07',
  endDateLabel: 'September 7, 2026',
  message:
    'Limited 3-month promotion — save 40% on cedar planters, privacy panels, saunas, gates, fences, and custom outdoor cedar builds.',
  bannerText:
    '3-Month Cedar Build Promotion: 40% OFF all cedar builds until September 7, 2026.',
  ctaLabel: 'Request Your Discounted Quote',
  ctaHref: '/contact',
  note: 'Promotional pricing applies to standard starting prices. Final custom quotes depend on size, finish, delivery, installation, and site conditions.',
} as const;

/** Round a discounted price using the promo discount. discountedPrice = round(original * 0.6) */
export function discountedPrice(original: number): number {
  return Math.round(original * (1 - promo.discount));
}

/** Is the promo currently live (active flag + within date window)? */
export function isPromoLive(now: Date = new Date()): boolean {
  if (!promo.active) return false;
  const start = new Date(promo.startDate + 'T00:00:00');
  const end = new Date(promo.endDate + 'T23:59:59');
  return now >= start && now <= end;
}

export type PriceView = {
  hasPrice: boolean;
  original: number | null;
  sale: number | null;
  /** "$229" */
  originalLabel: string | null;
  /** "$137" */
  saleLabel: string | null;
  /** true when this is a "starting from" / quote-driven price */
  startingFrom: boolean;
  /** true when no fixed price exists at all (pure quote) */
  quoteOnly: boolean;
};

/** Format a number as a whole-dollar CAD price string. */
export function money(n: number): string {
  return `$${n.toLocaleString('en-CA')}`;
}

/**
 * Build a price view from an original price.
 * - original = null  -> quote only
 * - startingFrom flag -> "Starting from $X" wording handled in the UI
 */
export function buildPriceView(
  original: number | null,
  opts: { startingFrom?: boolean } = {}
): PriceView {
  if (original == null) {
    return {
      hasPrice: false,
      original: null,
      sale: null,
      originalLabel: null,
      saleLabel: null,
      startingFrom: false,
      quoteOnly: true,
    };
  }
  const sale = isPromoLive() ? discountedPrice(original) : original;
  return {
    hasPrice: true,
    original,
    sale,
    originalLabel: money(original),
    saleLabel: money(sale),
    startingFrom: Boolean(opts.startingFrom),
    quoteOnly: false,
  };
}
