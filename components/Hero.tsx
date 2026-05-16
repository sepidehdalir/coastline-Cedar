import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div aria-hidden className="absolute inset-0 grain" />
      <div className="relative mx-auto grid max-w-8xl gap-10 px-5 py-20 md:py-28 lg:grid-cols-12 lg:gap-14 lg:px-10">
        <div className="rise lg:col-span-7">
          <p className="eyebrow rise rise-1">Hand-built in North Vancouver</p>
          <h1 className="rise rise-2 mt-4 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-charcoal-900 sm:text-6xl lg:text-7xl">
            Cedar planter boxes,<br />
            <span className="text-cedar-600">built locally</span> for Greater Vancouver.
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-lg text-charcoal-900/75">
            Hand-built Western Red Cedar planters in popular standard sizes and made-to-measure custom builds.
            For patios, balconies, gardens, restaurants, and storefronts across the Lower Mainland.
          </p>
          <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
            <Link href="/shop" className="btn-primary">Shop Planters →</Link>
            <Link href="/custom-planters" className="btn-secondary">Request a Custom Size</Link>
          </div>
          <ul className="rise rise-4 mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-charcoal-900/70">
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-forest-500" /> Western Red Cedar</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-forest-500" /> Local delivery</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-forest-500" /> Custom sizes</li>
            <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-forest-500" /> Workshop pickup</li>
          </ul>
        </div>

        <div className="relative rise rise-3 lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cedar-100 shadow-lift">
            <img
              src="public/images/products/hero-planter"
              alt="Hand-built Western Red Cedar planter box with greenery on a patio"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-charcoal-900/10 bg-cream px-5 py-4 shadow-soft md:block">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-cedar-600">Starting from</p>
            <p className="mt-1 font-display text-2xl font-semibold text-charcoal-900">$149</p>
            <p className="text-xs text-charcoal-900/60">Patio sizes · Free local delivery over $200</p>
          </div>
        </div>
      </div>
    </section>
  );
}
