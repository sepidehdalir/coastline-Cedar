import Link from 'next/link';
import { site } from '@/lib/site.config';
import { products } from '@/lib/products';
import { serviceAreas } from '@/lib/service-areas';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-charcoal-900/10 bg-bone">
      <div className="mx-auto grid max-w-8xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="font-display text-xl font-semibold text-charcoal-900">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-charcoal-900/70">
            Hand-built cedar planter boxes for homes and businesses across Greater Vancouver. Made locally on the North Shore.
          </p>
          <p className="mt-5 text-sm">
            <a href={site.phoneHref} className="block text-charcoal-900 hover:text-cedar-700">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="block text-charcoal-900 hover:text-cedar-700">{site.email}</a>
            <span className="mt-1 block text-charcoal-900/60">{site.hours}</span>
          </p>
        </div>

        <div>
          <p className="eyebrow">Products</p>
          <ul className="mt-4 space-y-2 text-sm">
            {products.map(p => (
              <li key={p.slug}>
                <Link href={`/shop/${p.slug}`} className="text-charcoal-900/80 hover:text-cedar-700">{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Service Areas</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {serviceAreas.map(a => (
              <li key={a.slug}>
                <Link href={`/service-areas/${a.slug}`} className="text-charcoal-900/80 hover:text-cedar-700">{a.city}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Company</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="text-charcoal-900/80 hover:text-cedar-700">About</Link></li>
            <li><Link href="/gallery" className="text-charcoal-900/80 hover:text-cedar-700">Gallery</Link></li>
            <li><Link href="/custom-planters" className="text-charcoal-900/80 hover:text-cedar-700">Custom Planters</Link></li>
            <li><Link href="/faq" className="text-charcoal-900/80 hover:text-cedar-700">FAQ</Link></li>
            <li><Link href="/contact" className="text-charcoal-900/80 hover:text-cedar-700">Order / Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-900/10">
        <div className="mx-auto max-w-8xl px-5 py-6 text-xs text-charcoal-900/60 lg:px-10">
          <p>
            Locally built cedar planter boxes in North Vancouver, West Vancouver, Vancouver, Burnaby, Richmond,
            Coquitlam, Port Moody, Port Coquitlam, New Westminster, Surrey, Delta, and Langley.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
