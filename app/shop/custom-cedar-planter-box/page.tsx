import ProductPage, { generateMetadata as generateDynamicMetadata } from '../[slug]/page';

const slug = 'custom-cedar-planter-box';

export function generateMetadata() {
  return generateDynamicMetadata({ params: Promise.resolve({ slug }) });
}

export default function Page() {
  return ProductPage({ params: Promise.resolve({ slug }) });
}
