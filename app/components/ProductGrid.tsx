import type { Product } from '@/lib/products';
import ProductCard from './ProductCard';

export default function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(p => <ProductCard key={p.slug} product={p} />)}
    </div>
  );
}
