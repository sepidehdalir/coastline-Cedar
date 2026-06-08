'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigation, site, type NavItem } from '@/lib/site.config';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal-900/8 bg-cream">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-5 py-3 lg:px-10">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <img
            src="/logo.png"
            alt="Coastline Cedar"
            className="w-[170px] md:w-[210px] h-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navigation.map((n) => <DesktopNavItem key={n.label} item={n} />)}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="text-sm text-charcoal-900/70 hover:text-charcoal-900"
          >
            {site.phone}
          </a>
          <Link href="/contact" className="btn-primary">
            Order Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-full border border-charcoal-900/15 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-charcoal-900/8 bg-cream lg:hidden">
          <div className="mx-auto flex max-w-8xl flex-col gap-1 px-5 py-4">
            {navigation.map((n) =>
              n.children ? (
                <div key={n.label} className="px-3 py-2">
                  <p className="text-xs uppercase tracking-[0.16em] text-charcoal-900/45">{n.label}</p>
                  <div className="mt-1 flex flex-col">
                    {n.children.map((c) => (
                      <Link
                        key={c.href + c.label}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-2 py-2 text-base text-charcoal-900 hover:bg-charcoal-900/5"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={n.label}
                  href={n.href!}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-charcoal-900 hover:bg-charcoal-900/5"
                >
                  {n.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function DesktopNavItem({ item }: { item: NavItem }) {
  const [hover, setHover] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href!}
        className="text-sm text-charcoal-900/85 transition hover:text-cedar-700"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        type="button"
        aria-expanded={hover}
        aria-haspopup="true"
        className="flex items-center gap-1 text-sm text-charcoal-900/85 transition hover:text-cedar-700"
        onClick={() => setHover((v) => !v)}
      >
        {item.label}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {hover && (
        <div className="absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3">
          <div className="overflow-hidden rounded-xl border border-charcoal-900/10 bg-cream shadow-lift">
            {item.children.map((c) => (
              <Link
                key={c.href + c.label}
                href={c.href}
                className="block px-4 py-3 text-sm text-charcoal-900/85 transition hover:bg-charcoal-900/5 hover:text-cedar-700"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
