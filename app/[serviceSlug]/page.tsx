import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getService, services, type ServiceTier } from '@/lib/services';
import { site } from '@/lib/site.config';
import { CTASection, FAQAccordion } from '@/components/sections';
import ServiceCard from '@/components/ServiceCard';
import PriceBlock from '@/components/PriceBlock';
import JsonLd from '@/components/JsonLd';
import { isPromoLive, discountedPrice, promo } from '@/lib/promo';

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ serviceSlug: s.slug }));
}

export async function generateMetadata({ params }: { params: { serviceSlug: string } }): Promise<Metadata> {
  const s = getService(params.serviceSlug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `${site.url}/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, images: [s.cardImage] },
  };
}

function TierPrice({ tier }: { tier: ServiceTier }) {
  if (tier.original == null) {
    return (
      <div>
        <p className="font-display text-lg font-semibold text-charcoal-900">Quote required</p>
        {tier.note && <p className="promo-note">{tier.note}</p>}
      </div>
    );
  }
  return (
    <div>
      <PriceBlock
        original={tier.original}
        startingFrom={tier.startingFrom}
        showNote={false}
      />
      {tier.unitSuffix && <p className="mt-1 text-xs text-charcoal-900/55">{tier.unitSuffix}</p>}
      {tier.note && <p className="promo-note">{tier.note}</p>}
    </div>
  );
}

export default function ServicePage({ params }: { params: { serviceSlug: string } }) {
  const service = getService(params.serviceSlug);
  if (!service) return notFound();

  const related = services.filter((s) => s.slug !== service.slug);
  const url = `${site.url}/${service.slug}`;

  // Schema: Product for product-kind, Service for service-kind.
  const offerForTier = (t: ServiceTier) => {
    if (t.original == null) return undefined;
    const price = isPromoLive() ? discountedPrice(t.original) : t.original;
    return {
      '@type': 'Offer',
      priceCurrency: 'CAD',
      price,
      availability: 'https://schema.org/InStock',
      url,
      areaServed: 'Greater Vancouver',
      ...(t.startingFrom ? { priceSpecification: { '@type': 'PriceSpecification', valueAddedTaxIncluded: false, price, priceCurrency: 'CAD' } } : {}),
    };
  };

  const pricedTiers = service.tiers.filter((t) => t.original != null);

  const mainSchema =
    service.kind === 'product'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: service.cardTitle,
          description: service.metaDescription,
          image: `${site.url}${service.cardImage}`,
          brand: { '@type': 'Brand', name: site.name },
          ...(pricedTiers.length
            ? {
                offers: {
                  '@type': 'AggregateOffer',
                  priceCurrency: 'CAD',
                  lowPrice: Math.min(
                    ...pricedTiers.map((t) => (isPromoLive() ? discountedPrice(t.original as number) : (t.original as number)))
                  ),
                  highPrice: Math.max(
                    ...pricedTiers.map((t) => (isPromoLive() ? discountedPrice(t.original as number) : (t.original as number)))
                  ),
                  offerCount: pricedTiers.length,
                  availability: 'https://schema.org/InStock',
                  url,
                },
              }
            : {}),
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.cardTitle,
          description: service.metaDescription,
          image: `${site.url}${service.cardImage}`,
          provider: { '@type': 'LocalBusiness', name: site.name, '@id': `${site.url}/#business` },
          areaServed: [
            'North Vancouver', 'West Vancouver', 'Vancouver', 'Burnaby', 'Richmond',
            'Coquitlam', 'Port Moody', 'Surrey', 'Delta', 'Langley',
          ].map((n) => ({ '@type': 'City', name: n })),
          ...(pricedTiers.length
            ? {
                offers: pricedTiers.map((t) => offerForTier(t)).filter(Boolean),
              }
            : {}),
        };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: service.cardTitle, item: url },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={mainSchema} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={faqSchema} />

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-8xl px-5 pt-6 text-xs text-charcoal-900/55 lg:px-10" aria-label="Breadcrumb">
        <ol className="flex flex-wrap gap-1">
          <li><Link href="/" className="hover:text-charcoal-900">Home</Link></li>
          <li>/</li>
          <li className="text-charcoal-900/80">{service.cardTitle}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="section pt-10">
        <div className="mx-auto grid max-w-8xl gap-10 px-5 lg:grid-cols-12 lg:gap-14 lg:px-10">
          <div className="lg:col-span-7">
            <p className="eyebrow">{service.navLabel}</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-charcoal-900 md:text-6xl">
              {service.h1}
            </h1>
            <p className="mt-5 max-w-xl text-charcoal-900/75">{service.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">{service.ctaLabel} →</Link>
              <Link href="/gallery" className="btn-ghost">View gallery</Link>
            </div>
            {isPromoLive() && (
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-forest-500/10 px-4 py-2 text-sm text-forest-600">
                <span className="font-semibold">{promo.discountLabel}</span> during our 3-month promotion — until {promo.endDateLabel}.
              </p>
            )}
          </div>
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl bg-cedar-100 shadow-soft">
              <div className="aspect-[5/4]">
                <img src={service.cardImage} alt={service.cardImageAlt} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body + pricing */}
      <section className="section pt-0">
        <div className="mx-auto grid max-w-8xl gap-10 px-5 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-semibold text-charcoal-900 md:text-4xl">
              About our {service.cardTitle.toLowerCase()}
            </h2>
            <div className="mt-4 space-y-4 text-charcoal-900/75">
              {service.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <p className="mt-8 text-sm text-charcoal-900/55">
              Serving North Vancouver, West Vancouver, Vancouver, Burnaby, Richmond, Coquitlam,
              Port Moody, Surrey, Delta, and Langley.
            </p>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-charcoal-900/10 bg-white p-6 shadow-soft">
              <h3 className="font-display text-xl font-semibold text-charcoal-900">Pricing</h3>
              <ul className="mt-4 divide-y divide-charcoal-900/10">
                {service.tiers.map((t) => (
                  <li key={t.name} className="flex flex-col gap-2 py-4">
                    <span className="text-sm font-medium text-charcoal-900">{t.name}</span>
                    <TierPrice tier={t} />
                  </li>
                ))}
              </ul>
              {isPromoLive() && (
                <p className="promo-note mt-3">{promo.note}</p>
              )}
              {service.disclaimer && (
                <p className="mt-4 rounded-xl bg-bone px-4 py-3 text-xs leading-relaxed text-charcoal-900/70">
                  {service.disclaimer}
                </p>
              )}
              <Link href="/contact" className="btn-primary mt-5 w-full">{service.ctaLabel} →</Link>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bone">
        <div className="mx-auto max-w-4xl px-5 py-20 lg:px-10">
          <p className="eyebrow text-center">FAQ</p>
          <h2 className="mt-3 text-center font-display text-3xl font-semibold text-charcoal-900 md:text-5xl">
            Common questions.
          </h2>
          <div className="mt-10"><FAQAccordion items={service.faqs} /></div>
        </div>
      </section>

      {/* Related builds */}
      <section className="section">
        <div className="mx-auto max-w-8xl px-5 lg:px-10">
          <h2 className="font-display text-2xl font-semibold text-charcoal-900 md:text-4xl">More custom cedar builds</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => <ServiceCard key={s.slug} service={s} />)}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to start?"
        title="Tell us about your project."
        body="Send your dimensions and a photo of the space — we’ll come back with a quote during our 3-month promotion."
        primaryHref="/contact"
        primaryLabel={service.ctaLabel}
        secondaryHref="/shop"
        secondaryLabel="Browse planters"
      />
    </>
  );
}
