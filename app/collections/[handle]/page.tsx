import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Suspense } from 'react';

import CollectionView from '@/components/CollectionView';
import { CategoryIcon } from '@/lib/icons';
import {
  COLLECTIONS,
  SITE,
  getCollection,
  getProductsByCollection,
  PRODUCTS,
} from '@/lib/data';

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ handle: c.handle }));
}

export function generateMetadata({ params }: { params: { handle: string } }): Metadata {
  const collection = getCollection(params.handle);
  const title = collection?.title ?? 'الأقسام';
  const desc =
    collection?.subtitle ??
    `تسوّق ${title} من ${SITE.nameAr} بأفضل الأسعار والعروض.`;
  return {
    title: `${title} | ${SITE.nameAr}`,
    description: desc,
    openGraph: { title, description: desc, type: 'website' },
  };
}

export default function CollectionPage({ params }: { params: { handle: string } }) {
  const collection = getCollection(params.handle);
  const products = collection
    ? getProductsByCollection(params.handle)
    : params.handle === 'sale'
      ? PRODUCTS.filter((p) => p.compareAt && p.compareAt > p.price)
      : params.handle === 'under-100'
        ? PRODUCTS.filter((p) => p.price < 100)
        : PRODUCTS;

  if (!collection && products.length === 0) notFound();

  const title =
    collection?.title ??
    (params.handle === 'sale'
      ? 'العروض والخصومات'
      : params.handle === 'under-100'
        ? 'أقل من 100 جنيه'
        : params.handle
            .split('-')
            .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
            .join(' '));

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <nav aria-label="فتات الخبز" className="mb-4 flex items-center gap-1 text-xs text-ink-mute">
        <Link href="/" className="cursor-pointer rounded transition-colors duration-200 hover:text-brand">
          الرئيسية
        </Link>
        <ChevronLeft size={12} aria-hidden="true" />
        <Link href="/search" className="cursor-pointer rounded transition-colors duration-200 hover:text-brand">
          الأقسام
        </Link>
        <ChevronLeft size={12} aria-hidden="true" />
        <span className="text-ink-soft">{title}</span>
      </nav>

      {collection?.banner && (
        <div className="relative mb-6 aspect-[16/5] overflow-hidden rounded-3xl bg-surface-sunken shadow-card sm:aspect-[16/4]">
          <Image
            src={collection.banner}
            alt={collection.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/15 to-transparent" />
          <div className="absolute bottom-6 right-6 max-w-md text-white">
            <div className="mb-3 grid h-12 w-12 place-items-center rounded-xl bg-surface/95 text-brand shadow-cardHover">
              <CategoryIcon handle={collection.handle} size={24} strokeWidth={2} />
            </div>
            <h1 className="font-display text-2xl font-extrabold drop-shadow sm:text-4xl">
              {collection.title}
            </h1>
            {collection.subtitle && (
              <p className="mt-1 text-sm text-white/90 drop-shadow sm:text-base">
                {collection.subtitle}
              </p>
            )}
          </div>
        </div>
      )}

      {!collection && (
        <div className="mb-6">
          <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">{title}</h1>
          <p className="mt-1 text-sm text-ink-mute">
            {products.length} منتج متاح
          </p>
        </div>
      )}

      <Suspense
        fallback={
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[3/4] rounded-xl bg-surface-sunken skeleton"
                aria-hidden="true"
              />
            ))}
          </div>
        }
      >
        <CollectionView products={products} collectionTitle={title} />
      </Suspense>
    </div>
  );
}
