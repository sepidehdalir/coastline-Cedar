import type { MetadataRoute } from 'next';
import { site } from '@/lib/site.config';
import { products } from '@/lib/products';
import { serviceAreas } from '@/lib/service-areas';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, '');
  const now = new Date();

  const staticRoutes = [
    { url: `${base}/`, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/shop`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/custom-planters`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/gallery`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/service-areas`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/about`, priority: 0.6, changeFrequency: 'yearly' as const },
    { url: `${base}/faq`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: 'yearly' as const },
  ];

  const productRoutes = products.map((p) => ({
    url: `${base}/shop/${p.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const serviceAreaRoutes = serviceAreas.map((a) => ({
    url: `${base}/service-areas/${a.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticRoutes, ...productRoutes, ...serviceAreaRoutes].map((r) => ({
    ...r,
    lastModified: now,
  }));
}
