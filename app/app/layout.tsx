import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PromoBanner from '@/components/PromoBanner';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site.config';

// Fonts are defined as CSS variables in globals.css using robust system stacks.
// This avoids any external Google Fonts fetch at build time, so production
// (Vercel) builds never fail because fonts can't be downloaded.
// To use Fraunces / DM Sans as web fonts later, add @font-face with self-hosted
// files in /public/fonts and point --font-fraunces / --font-dm-sans at them.

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Cedar Planter Boxes Greater Vancouver`, template: `%s | ${site.name}` },
  description:
    'Hand-built Western Red Cedar planter boxes for patios, balconies, gardens, restaurants, and storefronts across Greater Vancouver. Standard sizes and custom builds.',
  openGraph: {
    title: `${site.name} — Cedar Planter Boxes Greater Vancouver`,
    description:
      'Hand-built cedar planter boxes across North Vancouver, Vancouver, Burnaby, Richmond, Coquitlam, Surrey, and Langley.',
    type: 'website',
    locale: 'en_CA',
    url: site.url,
    siteName: site.name,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Coastline Cedar — Custom Cedar Builds in North Vancouver' }]
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#business`,
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/og.jpg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: [
      'North Vancouver','West Vancouver','Vancouver','Burnaby','Richmond',
      'Coquitlam','Port Coquitlam','Port Moody','New Westminster','Surrey','Delta','Langley'
    ].map(n => ({ '@type': 'City', name: n })),
    openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:00-17:00'
  };

  return (
    <html lang="en">
      <body className="font-sans">
        <JsonLd data={localBusiness} />
        <PromoBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
