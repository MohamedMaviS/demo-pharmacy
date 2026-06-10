'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  ShieldCheck,
  MessageCircle,
  Flame,
  RotateCcw,
  BadgeCheck,
} from 'lucide-react';
import { toast } from 'sonner';

import type { Product } from '@/lib/data';
import { SITE, getProductByHandle, getCollection } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useRecentlyViewed } from '@/context/RecentlyViewedContext';
import { getProductMeta } from '@/lib/productMeta';
import { cn, formatPrice } from '@/lib/utils';
import ProductCard from '@/components/ProductCard';
import Stars from '@/components/Stars';
import ProductGallery from '@/components/ProductGallery';
import StickyAddToCart from '@/components/StickyAddToCart';
import ProductReviews from '@/components/ProductReviews';
import FrequentlyBoughtTogether from '@/components/FrequentlyBoughtTogether';
import ProductInfoTabs from '@/components/ProductInfoTabs';

type Props = {
  product: Product;
  related: Product[];
};

export default function ProductDetail({ product, related }: Props) {
  const { add } = useCart();
  const { has, toggle } = useWishlist();
  const { handles, track } = useRecentlyViewed();
  const [qty, setQty] = useState(1);

  // Track this product as recently viewed.
  useEffect(() => {
    track(product.handle);
    setQty(1);
  }, [product.handle, track]);

  const onSale = product.compareAt && product.compareAt > product.price;
  const discountPct =
    onSale && product.compareAt
      ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
      : 0;
  const wished = has(product.handle);
  const meta = getProductMeta(product.handle);
  const collection = getCollection(product.collection);
  const saved = onSale && product.compareAt ? product.compareAt - product.price : 0;

  const recentlyViewed = handles
    .filter((h) => h !== product.handle)
    .map((h) => getProductByHandle(h))
    .filter((p): p is Product => Boolean(p))
    .slice(0, 5);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <nav aria-label="فتات الخبز" className="mb-4 flex items-center gap-1 text-xs text-ink-mute">
        <Link href="/" className="cursor-pointer rounded transition-colors duration-200 hover:text-brand">
          الرئيسية
        </Link>
        <ChevronLeft size={12} aria-hidden="true" />
        <Link
          href={`/collections/${product.collection}`}
          className="cursor-pointer rounded transition-colors duration-200 hover:text-brand"
        >
          {collection?.title ?? product.collection}
        </Link>
        <ChevronLeft size={12} aria-hidden="true" />
        <span className="line-clamp-1 text-ink-soft">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProductGallery
          image={product.image}
          title={product.title}
          badge={
            onSale ? (
              <span
                className="rounded-full bg-accent-600 px-3 py-1 text-sm font-bold text-white shadow-sm"
                aria-label={`خصم ${discountPct}%`}
              >
                -{discountPct}%
              </span>
            ) : null
          }
        />

        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wide text-ink-mute">
              {product.brand}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-surface-soft px-2 py-0.5 text-[10px] font-semibold text-brand-700">
              <BadgeCheck size={11} aria-hidden="true" />
              أصلي
            </span>
          </div>
          <h1 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
            {product.title}
          </h1>

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
            <Stars rating={meta.rating} reviews={meta.reviews} size={15} />
            <span className="text-xs text-ink-mute">تم بيع {meta.sold}+ قطعة</span>
          </div>

          <div className="mt-4 flex items-baseline gap-3">
            <span className={cn('text-3xl font-bold', onSale ? 'text-accent-600' : 'text-ink')}>
              {formatPrice(product.price)}
            </span>
            {onSale && product.compareAt && (
              <span className="text-lg text-ink-mute line-through">
                {formatPrice(product.compareAt)}
              </span>
            )}
            {saved > 0 && (
              <span className="rounded-full bg-accent-50 px-2 py-0.5 text-xs font-bold text-accent-700">
                وفّر {formatPrice(saved)}
              </span>
            )}
          </div>

          {meta.lowStock && (
            <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-accent-50 px-3 py-2 text-sm font-semibold text-accent-700">
              <Flame size={15} aria-hidden="true" />
              أسرع بالطلب! باقي {meta.stock} قطع فقط في المخزون
            </div>
          )}

          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            منتج {product.brand} الأصلي. تلاقي التفاصيل الكاملة — طريقة الاستخدام، الجرعة،
            التحذيرات والمكوّنات — في التبويبات بالأسفل.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div
              className="flex items-center rounded-full border border-line bg-surface"
              role="group"
              aria-label="تحديد الكمية"
            >
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="نقص الكمية"
                className="grid h-11 w-11 cursor-pointer place-items-center text-ink-soft transition-colors duration-200 hover:text-brand disabled:opacity-40"
                disabled={qty <= 1}
              >
                <Minus size={16} aria-hidden="true" />
              </button>
              <span className="min-w-8 text-center text-sm font-bold" aria-live="polite">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                aria-label="زيادة الكمية"
                className="grid h-11 w-11 cursor-pointer place-items-center text-ink-soft transition-colors duration-200 hover:text-brand"
              >
                <Plus size={16} aria-hidden="true" />
              </button>
            </div>

            <button
              onClick={() => add(product, qty, true)}
              className="flex min-h-[48px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-full bg-trust px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-trust-800"
            >
              <ShoppingBag size={18} aria-hidden="true" />
              أضف إلى السلة
            </button>

            <button
              onClick={() => {
                const added = toggle(product.handle);
                toast.success(added ? 'تمت الإضافة لقائمة الأمنيات' : 'تمت الإزالة');
              }}
              aria-label={wished ? 'إزالة من قائمة الأمنيات' : 'إضافة لقائمة الأمنيات'}
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

          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-green-500 py-3 text-sm font-semibold text-green-700 transition-colors duration-200 hover:bg-green-500 hover:text-white"
          >
            <MessageCircle size={18} aria-hidden="true" />
            استفسار عبر واتساب
          </a>

          <div className="mt-6 grid grid-cols-1 gap-2 rounded-xl bg-surface-soft p-4 text-xs text-ink-soft sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <Truck size={16} className="shrink-0 text-brand" aria-hidden="true" />
              <span>شحن سريع</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="shrink-0 text-brand" aria-hidden="true" />
              <span>منتج أصلي 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw size={16} className="shrink-0 text-brand" aria-hidden="true" />
              <span>إرجاع خلال 14 يوم</span>
            </div>
          </div>
        </div>
      </div>

      <ProductInfoTabs product={product} />

      <FrequentlyBoughtTogether product={product} />

      <ProductReviews handle={product.handle} />

      {related.length > 0 && (
        <section className="mt-16" aria-labelledby="related-heading">
          <h2 id="related-heading" className="mb-4 font-display text-lg font-bold text-ink sm:text-xl">
            منتجات ذات صلة
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {related.map((p) => (
              <ProductCard key={p.handle} product={p} />
            ))}
          </div>
        </section>
      )}

      {recentlyViewed.length > 0 && (
        <section className="mt-14" aria-labelledby="recent-heading">
          <h2 id="recent-heading" className="mb-4 font-display text-lg font-bold text-ink sm:text-xl">
            شاهدت مؤخرًا
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {recentlyViewed.map((p) => (
              <ProductCard key={p.handle} product={p} />
            ))}
          </div>
        </section>
      )}

      <StickyAddToCart product={product} />
    </div>
  );
}
