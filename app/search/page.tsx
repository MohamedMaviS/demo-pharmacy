'use client';

import { Search, TrendingUp, X } from 'lucide-react';
import { Suspense, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CollectionView from '@/components/CollectionView';
import SectionHeader from '@/components/SectionHeader';
import CategoryCard from '@/components/CategoryCard';
import { COLLECTIONS, PRODUCTS, BRAND_CHIPS } from '@/lib/data';

const TRENDING = ['فيتامين', 'سيرافي', 'واقي شمس', 'بانثينول', 'شامبو', 'حفاضات', 'لاروش', 'مكمل'];

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
        <h1 className="font-display text-2xl font-black text-ink sm:text-3xl">
          {trimmed ? 'نتائج البحث' : 'ابحث وتصفّح'}
        </h1>
        <p className="mt-1 text-sm text-ink-mute">
          {trimmed ? `${results.length} نتيجة لـ "${q}"` : 'استكشف ١٣ قسم بأكثر من ١٨٠ منتج'}
        </p>
      </div>

      <label htmlFor="search-q" className="sr-only">ابحث في المتجر</label>
      <div className="mx-auto mt-5 flex max-w-xl items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 shadow-card transition-colors duration-200 focus-within:border-trust focus-within:shadow-cardHover">
        <Search size={20} className="text-ink-mute" aria-hidden="true" />
        <input
          id="search-q"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoFocus
          placeholder="ابحث باسم المنتج، الماركة، أو القسم..."
          className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-mute"
        />
        {q && (
          <button type="button" onClick={() => setQ('')} aria-label="مسح" className="grid h-7 w-7 cursor-pointer place-items-center rounded-full text-ink-mute transition-colors hover:bg-surface-sunken hover:text-accent-600">
            <X size={15} aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Trending searches */}
      <div className="mx-auto mt-3 flex max-w-2xl flex-wrap items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-ink-mute"><TrendingUp size={13} aria-hidden="true" /> شائع:</span>
        {TRENDING.map((t) => (
          <button
            key={t}
            onClick={() => setQ(t)}
            className="cursor-pointer rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-ink-soft transition-colors hover:border-brand hover:text-brand"
          >
            {t}
          </button>
        ))}
      </div>

      {!trimmed ? (
        <>
          <section className="mt-12" aria-label="كل الأقسام">
            <SectionHeader eyebrow="تصفّح" title="كل الأقسام" subtitle={`${COLLECTIONS.length} قسم بأكثر من ١٨٠ منتج`} />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
              {COLLECTIONS.map((c) => (
                <CategoryCard key={c.handle} collection={c} />
              ))}
            </div>
          </section>

          <section className="mt-12" aria-label="ماركات شهيرة">
            <SectionHeader eyebrow="ماركات" title="علامات شهيرة" />
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {BRAND_CHIPS.map((b) => (
                <Link key={b.label} href={b.href} className="group flex cursor-pointer flex-col items-center gap-2 text-center">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full border border-line bg-surface shadow-card transition-shadow duration-200 group-hover:shadow-cardHover">
                    <Image src={b.image} alt={b.label} fill sizes="80px" className="object-contain p-2" />
                  </div>
                  <span className="text-xs font-medium text-ink-soft transition-colors duration-200 group-hover:text-brand">{b.label}</span>
                </Link>
              ))}
            </div>
          </section>
        </>
      ) : results.length === 0 ? (
        <div className="mx-auto mt-10 max-w-md rounded-3xl border border-line bg-surface p-10 text-center shadow-card">
          <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-surface-sunken text-ink-mute"><Search size={26} aria-hidden="true" /></div>
          <p className="font-display text-base font-bold text-ink">مفيش نتائج لـ «{q}»</p>
          <p className="mt-1 text-sm text-ink-mute">جرّب كلمة مختلفة، أو من الأكثر بحثًا:</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {TRENDING.slice(0, 5).map((t) => (
              <button key={t} onClick={() => setQ(t)} className="cursor-pointer rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-bold text-ink-soft transition-colors hover:border-brand hover:text-brand">{t}</button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <Suspense fallback={null}>
            <CollectionView key={trimmed} products={results} collectionTitle={`نتائج "${q}"`} />
          </Suspense>
        </div>
      )}
    </div>
  );
}
