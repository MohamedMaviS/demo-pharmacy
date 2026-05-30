'use client';

import Image from 'next/image';
import { Plus, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';

import type { Product } from '@/lib/data';
import { getRelatedProducts } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { formatPrice, BLUR_DATA_URL } from '@/lib/utils';
import SectionHeader from './SectionHeader';

export default function FrequentlyBoughtTogether({ product }: { product: Product }) {
  const { add } = useCart();
  const extras = getRelatedProducts(product, 2);
  if (extras.length < 2) return null;

  const bundle = [product, ...extras];
  const total = bundle.reduce((a, p) => a + p.price, 0);

  return (
    <section className="mt-14" aria-label="يُشترى عادةً معًا">
      <SectionHeader eyebrow="وفّر أكتر" title="يُشترى عادةً معًا" />

      <div className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-stretch">
          <div className="flex flex-1 flex-wrap items-center justify-center gap-2">
            {bundle.map((p, i) => (
              <div key={p.handle} className="flex items-center gap-2">
                <div className="w-28 rounded-2xl border border-line bg-surface p-2">
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-sunken">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="112px"
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="mt-1.5 line-clamp-1 text-[10px] text-ink-mute">{p.brand}</div>
                  <div className="text-xs font-bold text-trust">{formatPrice(p.price)}</div>
                </div>
                {i < bundle.length - 1 && (
                  <Plus size={18} className="shrink-0 text-ink-mute" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col justify-center gap-2 rounded-2xl bg-surface-soft p-4 lg:w-56 dark:bg-slate-800/60">
            <div className="text-xs text-ink-mute">إجمالي الطقم ({bundle.length} منتجات)</div>
            <div className="font-display text-2xl font-black text-ink">{formatPrice(total)}</div>
            <button
              onClick={() => {
                bundle.forEach((p) => add(p, 1));
                toast.success('تمت إضافة الطقم إلى السلة');
              }}
              className="mt-1 flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-full bg-trust text-sm font-bold text-white transition-colors duration-200 hover:bg-trust-800"
            >
              <ShoppingBag size={16} aria-hidden="true" />
              أضف الكل للسلة
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
