'use client';

import type { Collection, Product } from '@/lib/data';
import { getCategoryIcon } from '@/lib/icons';
import ProductCard from './ProductCard';
import SectionHeader from './SectionHeader';

type Props = {
  collection: Collection;
  products: Product[];
};

export default function CollectionRow({ collection, products }: Props) {
  const Icon = getCategoryIcon(collection.handle);

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-9"
      aria-labelledby={`collection-${collection.handle}`}
    >
      <SectionHeader
        eyebrow="مجموعة"
        title={collection.title}
        subtitle={collection.subtitle}
        href={`/collections/${collection.handle}`}
        Icon={Icon}
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {products.slice(0, 5).map((p) => (
          <ProductCard key={p.handle} product={p} />
        ))}
      </div>
    </section>
  );
}
