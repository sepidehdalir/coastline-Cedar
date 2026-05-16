'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navigation, site } from '@/lib/site.config';

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

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigation.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm text-charcoal-900/85 transition hover:text-cedar-700"
            >
              {n.label}
            </Link>
          ))}
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
            {navigation.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-charcoal-900 hover:bg-charcoal-900/5"
              >
                {n.label}
              </Link>
            ))}
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