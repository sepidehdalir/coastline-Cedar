import type { Metadata } from 'next';
import ServiceAreaPage, { buildMetadata } from '@/components/ServiceAreaPage';

const SLUG = 'richmond';

export const metadata: Metadata = buildMetadata(SLUG);

export default function Page() {
  return <ServiceAreaPage slug={SLUG} />;
}
