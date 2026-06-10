'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Eye, Heart, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useState } from 'react';

import type { Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useQuickView } from '@/context/QuickViewContext';
import { getProductMeta } from '@/lib/productMeta';
import { flyToCart } from '@/lib/flyToCart';
import { cn, formatPrice, BLUR_DATA_URL } from '@/lib/utils';
import Stars from './Stars';
import Tilt from './Tilt';

type Props = {
  product: Product;
  className?: string;
};

export default function ProductCard({ product, className }: Props) {
  const { add } = useCart();
  const { has, toggle } = useWishlist();
  const { open: openQuickView } = useQuickView();
  const [imgError, setImgError] = useState(false);
  const onSale = product.compareAt && product.compareAt > product.price;
  const discountPct =
    onSale && product.compareAt
      ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
      : 0;

  const wished = has(product.handle);
  const meta = getProductMeta(product.handle);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      data-product-card
      className={cn('h-full', className)}
    >
      <Tilt className="h-full" max={6}>
        <div className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface shadow-card transition-shadow duration-200 [transform-style:preserve-3d] hover:shadow-cardHover">
      <button
        type="button"
        aria-label={wished ? 'إزالة من قائمة الأمنيات' : 'إضافة لقائمة الأمنيات'}
        aria-pressed={wished}
        onClick={(e) => {
          e.preventDefault();
          const added = toggle(product.handle);
          toast.success(added ? 'تمت الإضافة لقائمة الأمنيات' : 'تمت الإزالة من قائمة الأمنيات');
        }}
        style={{ transform: 'translateZ(34px)' }}
        className={cn(
          'absolute left-2.5 top-2.5 z-10 grid h-10 w-10 cursor-pointer place-items-center rounded-full bg-surface/95 shadow-sm ring-1 ring-black/5 transition-colors duration-200',
          wished ? 'text-accent-600' : 'text-ink-mute hover:text-accent-600',
        )}
      >
        <Heart size={17} fill={wished ? 'currentColor' : 'none'} aria-hidden="true" />
      </button>

      <div
        className="absolute right-2.5 top-2.5 z-10 flex flex-col items-end gap-1.5"
        style={{ transform: 'translateZ(34px)' }}
      >
        {onSale && (
          <span
            className="rounded-full bg-accent-600 px-2.5 py-1 text-xs font-bold text-white shadow-sm"
            aria-label={`خصم ${discountPct}%`}
          >
            -{discountPct}%
          </span>
        )}
        {meta.lowStock && (
          <span className="rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
            باقي {meta.stock}
          </span>
        )}
      </div>

      <div className="relative p-3">
        <Link
          href={`/products/${product.handle}`}
          className="block cursor-pointer"
          aria-label={`عرض تفاصيل ${product.title}`}
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-surface-sunken">
            {!imgError ? (
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-contain p-2 transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transform-none"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-surface-sunken px-3 text-center text-xs text-ink-mute">
                {product.title}
              </div>
            )}
          </div>
        </Link>

        {/* Quick view — appears on hover (desktop), always tappable on touch */}
        <button
          type="button"
          onClick={() => openQuickView(product)}
          aria-label={`معاينة سريعة لـ ${product.title}`}
          className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-center gap-1.5 rounded-lg bg-slate-900/85 py-2 text-xs font-semibold text-white opacity-0 backdrop-blur transition-all duration-200 hover:bg-slate-900 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100"
        >
          <Eye size={15} aria-hidden="true" />
          معاينة سريعة
        </button>
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3">
        <span className="text-[11px] font-medium uppercase tracking-wide text-ink-mute">
          {product.brand}
        </span>
        <Link
          href={`/products/${product.handle}`}
          className="clamp-2 mt-1 min-h-[2.6rem] cursor-pointer text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-brand"
        >
          {product.title}
        </Link>

        <div className="mt-1.5">
          <Stars rating={meta.rating} reviews={meta.reviews} size={12} />
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className={cn('text-base font-bold', onSale ? 'text-accent-600' : 'text-ink')}>
            {formatPrice(product.price)}
          </span>
          {onSale && product.compareAt && (
            <span className="text-xs text-ink-mute line-through">
              {formatPrice(product.compareAt)}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            const card = e.currentTarget.closest('[data-product-card]');
            const img = card?.querySelector('img') as HTMLElement | null;
            flyToCart(product.image, img);
            add(product, 1);
            toast.success('تمت الإضافة إلى السلة');
          }}
          aria-label={`إضافة ${product.title} إلى السلة`}
          className="mt-3 flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full bg-trust py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-trust-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trust focus-visible:ring-offset-2"
        >
          <ShoppingBag size={16} aria-hidden="true" />
          أضف إلى السلة
        </button>
      </div>
        </div>
      </Tilt>
    </motion.div>
  );
}
