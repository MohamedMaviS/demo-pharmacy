'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';

import ProductCard from '@/components/ProductCard';
import { useWishlist } from '@/context/WishlistContext';
import { PRODUCTS } from '@/lib/data';

export default function WishlistPage() {
  const { items } = useWishlist();
  const products = PRODUCTS.filter((p) => items.includes(p.handle));

  if (products.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-surface-soft text-brand">
          <Heart size={36} aria-hidden="true" />
        </div>
        <h1 className="font-display text-2xl font-bold">قائمة الأمنيات فارغة</h1>
        <p className="mt-2 text-sm text-ink-mute">
          اضغط على القلب على أي منتج لإضافته هنا.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block cursor-pointer rounded-full bg-trust px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-trust-800"
        >
          تصفّح المنتجات
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 font-display text-2xl font-bold">قائمة الأمنيات ({products.length})</h1>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((p) => (
          <ProductCard key={p.handle} product={p} />
        ))}
      </div>
    </div>
  );
}
