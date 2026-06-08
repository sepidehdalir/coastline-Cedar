import ProductPage, { generateMetadata as generateDynamicMetadata } from '../[slug]/page';

const slug = 'classic-cedar-patio-planter';

export function generateMetadata() {
  return generateDynamicMetadata({ params: Promise.resolve({ slug }) });
}

export default function Page() {
  return ProductPage({ params: Promise.resolve({ slug }) });
}
