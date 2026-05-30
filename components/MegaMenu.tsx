'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

import {
  getCollection,
  getProductsByCollection,
  getBrandsInCollection,
} from '@/lib/data';
import { CategoryIcon } from '@/lib/icons';
import { formatPrice } from '@/lib/utils';

export default function MegaMenu({
  handle,
  onNavigate,
}: {
  handle: string;
  onNavigate: () => void;
}) {
  const collection = getCollection(handle);
  if (!collection) return null;

  const products = getProductsByCollection(handle).slice(0, 4);
  const brands = getBrandsInCollection(handle).slice(0, 8);

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-x-0 top-full z-40 mx-auto max-w-7xl px-4"
    >
      <div className="mt-1 overflow-hidden rounded-2xl border border-line bg-surface shadow-cardHover">
        <div className="grid grid-cols-[220px_1fr]">
          {/* Brands column */}
          <div className="border-l border-line bg-surface-soft/40 p-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface text-brand shadow-card">
                <CategoryIcon handle={handle} size={18} strokeWidth={2} />
              </span>
              <span className="font-display text-sm font-bold text-ink">{collection.title}</span>
            </div>
            <ul className="space-y-1">
              {brands.map((brand) => (
                <li key={brand}>
                  <Link
                    href={`/collections/${handle}?brands=${encodeURIComponent(brand)}`}
                    onClick={onNavigate}
                    className="block cursor-pointer rounded-md px-2 py-1.5 text-sm text-ink-soft transition-colors duration-150 hover:bg-surface hover:text-brand"
                  >
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={`/collections/${handle}`}
              onClick={onNavigate}
              className="mt-3 flex items-center gap-1 px-2 text-sm font-bold text-trust hover:text-trust-800"
            >
              عرض كل المنتجات
              <ChevronLeft size={15} aria-hidden="true" />
            </Link>
          </div>

          {/* Featured products */}
          <div className="grid grid-cols-4 gap-3 p-4">
            {products.map((p) => {
              const onSale = p.compareAt && p.compareAt > p.price;
              return (
                <Link
                  key={p.handle}
                  href={`/products/${p.handle}`}
                  onClick={onNavigate}
                  className="group/mm cursor-pointer rounded-xl border border-line p-2 transition-shadow duration-200 hover:shadow-card"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-surface-sunken">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="160px"
                      className="object-contain p-2 transition-transform duration-200 group-hover/mm:scale-105"
                    />
                  </div>
                  <div className="clamp-2 mt-2 min-h-[2.2rem] text-xs font-medium text-ink-soft">
                    {p.title}
                  </div>
                  <div className="mt-1 text-sm font-bold text-trust">
                    {formatPrice(p.price)}
                    {onSale && p.compareAt && (
                      <span className="mr-1.5 text-[10px] font-normal text-gray-400 line-through">
                        {formatPrice(p.compareAt)}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
