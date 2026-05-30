'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ProductCard from '@/components/ProductCard';
import SectionHeader from '@/components/SectionHeader';
import CategoryCard from '@/components/CategoryCard';
import { COLLECTIONS, PRODUCTS, BRAND_CHIPS } from '@/lib/data';

export default function SearchPage() {
  const [q, setQ] = useState('');
  const trimmed = q.trim().toLowerCase();
  const results = trimmed
    ? PRODUCTS.filter(
        (p) =>
          p.title.toLowerCase().includes(trimmed) ||
          p.brand.toLowerCase().includes(trimmed) ||
          p.collection.toLowerCase().includes(trimmed),
      )
    : [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-2 text-center">
        <h1 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
          {trimmed ? 'نتائج البحث' : 'تصفّح كل الأقسام'}
        </h1>
        <p className="mt-1 text-sm text-ink-mute">
          {trimmed
            ? `${results.length} نتيجة لـ "${q}"`
            : 'استكشف ١٣ قسم بأكثر من ١٠٠ منتج'}
        </p>
      </div>

      <label htmlFor="search-q" className="sr-only">
        ابحث في المتجر
      </label>
      <div className="mx-auto mt-5 flex max-w-xl items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 shadow-card transition-colors duration-200 focus-within:border-trust focus-within:shadow-cardHover">
        <Search size={20} className="text-gray-400" aria-hidden="true" />
        <input
          id="search-q"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoFocus
          placeholder="ابحث باسم المنتج، الماركة، أو القسم..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
        {q && (
          <button
            type="button"
            onClick={() => setQ('')}
            className="cursor-pointer text-xs text-ink-mute hover:text-accent-600"
          >
            مسح
          </button>
        )}
      </div>

      {!trimmed ? (
        <>
          {/* Categories grid */}
          <section className="mt-12" aria-label="كل الأقسام">
            <SectionHeader
              eyebrow="تصفّح"
              title="كل الأقسام"
              subtitle={`${COLLECTIONS.length} قسم بأكثر من ١٨٠ منتج`}
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {COLLECTIONS.map((c) => (
                <CategoryCard key={c.handle} collection={c} />
              ))}
            </div>
          </section>

          {/* Brand chips */}
          <section className="mt-12" aria-label="ماركات شهيرة">
            <SectionHeader eyebrow="ماركات" title="علامات شهيرة" />
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {BRAND_CHIPS.map((b) => (
                <Link
                  key={b.label}
                  href={b.href}
                  className="group flex cursor-pointer flex-col items-center gap-2 text-center"
                >
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border border-line bg-surface shadow-card transition-shadow duration-200 group-hover:shadow-cardHover">
                    <Image
                      src={b.image}
                      alt={b.label}
                      fill
                      sizes="80px"
                      className="object-contain p-2"
                    />
                  </div>
                  <span className="text-xs font-medium text-ink-soft transition-colors duration-200 group-hover:text-brand">
                    {b.label}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </>
      ) : results.length === 0 ? (
        <p className="mt-10 rounded-2xl bg-surface-soft/40 p-12 text-center text-sm text-ink-mute">
          لا توجد نتائج مطابقة لـ &laquo;{q}&raquo;. جرّب كلمة مختلفة أو تصفّح الأقسام.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
          {results.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
