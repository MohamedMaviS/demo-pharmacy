'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Minus, Plus, ShoppingBag, X, Check, Flame } from 'lucide-react';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

import { useQuickView } from '@/context/QuickViewContext';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { getProductMeta } from '@/lib/productMeta';
import { cn, formatPrice } from '@/lib/utils';
import Stars from './Stars';

export default function QuickViewModal() {
  const { product, isOpen, close } = useQuickView();
  const { add } = useCart();
  const { has, toggle } = useWishlist();
  const [qty, setQty] = useState(1);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (isOpen) setQty(1);
  }, [isOpen, product]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  const onSale = product?.compareAt && product.compareAt > product.price;
  const discountPct =
    onSale && product?.compareAt
      ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
      : 0;
  const meta = product ? getProductMeta(product.handle) : null;
  const wished = product ? has(product.handle) : false;

  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-[2px]"
            onClick={close}
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-[71] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl bg-surface shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label={`معاينة سريعة: ${product.title}`}
            >
              <button
                onClick={close}
                aria-label="إغلاق المعاينة"
                className="absolute left-3 top-3 z-10 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-surface/90 text-ink-soft shadow ring-1 ring-black/5 transition-colors duration-200 hover:bg-surface-sunken hover:text-ink"
              >
                <X size={20} aria-hidden="true" />
              </button>

              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-square bg-surface-sunken">
                  {!imgError ? (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 400px"
                      className="object-contain p-6"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center px-6 text-center text-sm text-ink-mute">
                      {product.title}
                    </div>
                  )}
                  {onSale && (
                    <span className="absolute right-4 top-4 rounded-full bg-accent-600 px-3 py-1 text-sm font-bold text-white shadow">
                      -{discountPct}%
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-col p-5 sm:p-6">
                  <div className="text-xs font-medium uppercase tracking-wide text-ink-mute">
                    {product.brand}
                  </div>
                  <h2 className="mt-1 font-display text-lg font-bold leading-snug text-ink sm:text-xl">
                    {product.title}
                  </h2>

                  {meta && (
                    <div className="mt-2 flex items-center gap-3">
                      <Stars rating={meta.rating} reviews={meta.reviews} />
                      <span className="text-[11px] text-ink-mute">
                        تم بيع {meta.sold}+ قطعة
                      </span>
                    </div>
                  )}

                  <div className="mt-3 flex items-baseline gap-2.5">
                    <span
                      className={cn(
                        'text-2xl font-bold',
                        onSale ? 'text-accent-600' : 'text-ink',
                      )}
                    >
                      {formatPrice(product.price)}
                    </span>
                    {onSale && product.compareAt && (
                      <span className="text-base text-gray-400 line-through">
                        {formatPrice(product.compareAt)}
                      </span>
                    )}
                  </div>

                  {meta?.lowStock && (
                    <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-accent-50 px-3 py-2 text-xs font-semibold text-accent-700">
                      <Flame size={14} aria-hidden="true" />
                      أسرع! باقي {meta.stock} قطع فقط
                    </div>
                  )}

                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    منتج {product.brand} الأصلي. وصف توضيحي مختصر يظهر في المعاينة السريعة.
                  </p>

                  <div className="mt-auto pt-5">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center rounded-full border border-line">
                        <button
                          onClick={() => setQty((q) => Math.max(1, q - 1))}
                          disabled={qty <= 1}
                          aria-label="نقص الكمية"
                          className="grid h-11 w-11 cursor-pointer place-items-center text-ink-soft hover:text-brand disabled:opacity-40"
                        >
                          <Minus size={16} aria-hidden="true" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-bold">{qty}</span>
                        <button
                          onClick={() => setQty((q) => q + 1)}
                          aria-label="زيادة الكمية"
                          className="grid h-11 w-11 cursor-pointer place-items-center text-ink-soft hover:text-brand"
                        >
                          <Plus size={16} aria-hidden="true" />
                        </button>
                      </div>

                      <button
                        onClick={() => {
                          add(product, qty, true);
                          close();
                        }}
                        className="flex min-h-[48px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-trust px-5 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-trust-800"
                      >
                        <ShoppingBag size={18} aria-hidden="true" />
                        أضف إلى السلة
                      </button>

                      <button
                        onClick={() => {
                          const added = toggle(product.handle);
                          toast.success(added ? 'تمت الإضافة لقائمة الأمنيات' : 'تمت الإزالة');
                        }}
                        aria-label="قائمة الأمنيات"
                        aria-pressed={wished}
                        className={cn(
                          'grid h-12 w-12 cursor-pointer place-items-center rounded-full border transition-colors duration-200',
                          wished
                            ? 'border-accent-600 bg-accent-50 text-accent-600'
                            : 'border-line text-ink-soft hover:border-accent-600 hover:text-accent-600',
                        )}
                      >
                        <Heart size={20} fill={wished ? 'currentColor' : 'none'} aria-hidden="true" />
                      </button>
                    </div>

                    <Link
                      href={`/products/${product.handle}`}
                      onClick={close}
                      className="mt-3 flex items-center justify-center gap-1 text-sm font-medium text-ink-soft underline-offset-4 transition-colors duration-200 hover:text-brand hover:underline"
                    >
                      <Check size={14} aria-hidden="true" />
                      عرض كل التفاصيل
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
