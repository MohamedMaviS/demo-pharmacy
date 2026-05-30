'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus, ShoppingBag, Trash2, X, Truck, Check, Tag } from 'lucide-react';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

import { useCart, type CartLine } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

const FREE_SHIP_THRESHOLD = 500;

export default function CartDrawer() {
  const {
    lines,
    count,
    subtotal,
    discount,
    total,
    coupon,
    applyCoupon,
    removeCoupon,
    setQty,
    remove,
    clear,
    isOpen,
    closeCart,
  } = useCart();
  const [code, setCode] = useState('');

  // Lock body scroll + close on Escape while the drawer is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, closeCart]);

  const freeShipping = subtotal >= FREE_SHIP_THRESHOLD;
  const remaining = Math.max(0, FREE_SHIP_THRESHOLD - subtotal);
  const progress = Math.min(100, Math.round((subtotal / FREE_SHIP_THRESHOLD) * 100));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-[2px]"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Panel — slides in from the LEFT (cart icon sits top-left in this RTL layout) */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.32 }}
            className="fixed bottom-0 left-0 top-0 z-[61] flex h-full w-[92%] max-w-md flex-col bg-surface shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="سلة التسوق"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-brand" aria-hidden="true" />
                <h2 className="font-display text-base font-bold text-ink">
                  سلة التسوق
                  <span className="mr-1 text-sm font-medium text-ink-mute">({count})</span>
                </h2>
              </div>
              <button
                onClick={closeCart}
                aria-label="إغلاق السلة"
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg text-ink-soft transition-colors duration-200 hover:bg-surface-sunken hover:text-ink"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>

            {lines.length === 0 ? (
              <EmptyState onClose={closeCart} />
            ) : (
              <>
                {/* Free-shipping progress */}
                <div className="border-b border-line bg-surface-soft/60 px-5 py-3">
                  <div className="mb-2 flex items-center gap-2 text-xs font-medium text-brand-800">
                    <Truck size={15} aria-hidden="true" />
                    {freeShipping ? (
                      <span className="flex items-center gap-1">
                        <Check size={14} aria-hidden="true" />
                        مبروك! حصلت على الشحن المجاني
                      </span>
                    ) : (
                      <span>
                        باقي <span className="font-bold">{formatPrice(remaining)}</span> للحصول على
                        الشحن المجاني
                      </span>
                    )}
                  </div>
                  <div
                    className="h-1.5 w-full overflow-hidden rounded-full bg-surface"
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full rounded-full bg-brand transition-all duration-500 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Line items */}
                <div className="flex-1 overflow-y-auto px-3 py-3">
                  <ul className="space-y-2">
                    {lines.map((line) => (
                      <CartLineRow
                        key={line.product.handle}
                        line={line}
                        onQty={(q) => setQty(line.product.handle, q)}
                        onRemove={() => remove(line.product.handle)}
                      />
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      clear();
                      toast.success('تم تفريغ السلة');
                    }}
                    className="mt-3 cursor-pointer px-2 text-xs text-ink-mute underline transition-colors duration-200 hover:text-accent-600"
                  >
                    تفريغ السلة
                  </button>
                </div>

                {/* Footer / checkout */}
                <div className="border-t border-line bg-surface px-5 py-4 shadow-[0_-4px_12px_-6px_rgba(0,0,0,0.08)]">
                  {/* Coupon */}
                  {coupon ? (
                    <div className="mb-3 flex items-center justify-between rounded-lg bg-surface-soft px-3 py-2">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-800">
                        <Tag size={13} aria-hidden="true" />
                        {coupon.code} · {coupon.label}
                      </span>
                      <button
                        onClick={() => {
                          removeCoupon();
                          toast.success('تم إلغاء كود الخصم');
                        }}
                        className="cursor-pointer text-xs text-ink-mute underline hover:text-accent-600"
                      >
                        إلغاء
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const res = applyCoupon(code);
                        res.ok ? toast.success(res.message) : toast.error(res.message);
                        if (res.ok) setCode('');
                      }}
                      className="mb-3 flex gap-2"
                    >
                      <label htmlFor="coupon" className="sr-only">
                        كود الخصم
                      </label>
                      <input
                        id="coupon"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="كود الخصم (جرّب DEMO10)"
                        className="min-w-0 flex-1 rounded-full border border-line px-3 py-2 text-xs outline-none focus:border-trust"
                      />
                      <button
                        type="submit"
                        className="shrink-0 cursor-pointer rounded-full border border-trust px-4 py-2 text-xs font-bold text-trust transition-colors duration-200 hover:bg-trust hover:text-white"
                      >
                        تطبيق
                      </button>
                    </form>
                  )}

                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-ink-mute">الإجمالي الفرعي</span>
                    <span className="font-semibold text-ink">{formatPrice(subtotal)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span className="text-brand">الخصم</span>
                      <span className="font-semibold text-brand">- {formatPrice(discount)}</span>
                    </div>
                  )}
                  <div className="mb-1 flex items-center justify-between text-base">
                    <span className="font-bold text-ink">الإجمالي</span>
                    <span className="font-bold text-trust">{formatPrice(total)}</span>
                  </div>
                  <p className="mb-3 text-[11px] text-ink-mute">
                    تُحتسب الضرائب والشحن عند إتمام الطلب.
                  </p>

                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-trust py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-trust-800"
                  >
                    إتمام الطلب
                    <span className="font-bold">{formatPrice(total)}</span>
                  </Link>

                  <Link
                    href="/cart"
                    onClick={closeCart}
                    className="mt-2 block cursor-pointer text-center text-sm font-medium text-ink-soft underline-offset-4 transition-colors duration-200 hover:text-brand hover:underline"
                  >
                    عرض السلة كاملة
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function EmptyState({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="mb-5 grid h-20 w-20 place-items-center rounded-full bg-surface-soft text-brand">
        <ShoppingBag size={36} aria-hidden="true" />
      </div>
      <h3 className="font-display text-lg font-bold text-ink">سلتك فارغة</h3>
      <p className="mt-1 text-sm text-ink-mute">ابدأ التسوّق وأضف منتجاتك المفضّلة.</p>
      <button
        onClick={onClose}
        className="mt-6 min-h-[44px] cursor-pointer rounded-full bg-trust px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-trust-800"
      >
        متابعة التسوّق
      </button>
    </div>
  );
}

function CartLineRow({
  line,
  onQty,
  onRemove,
}: {
  line: CartLine;
  onQty: (q: number) => void;
  onRemove: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  return (
    <li className="flex gap-3 rounded-xl border border-line bg-surface p-2.5">
      <Link
        href={`/products/${line.product.handle}`}
        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-surface-sunken"
      >
        {!imgError ? (
          <Image
            src={line.product.image}
            alt={line.product.title}
            fill
            sizes="80px"
            className="object-contain p-1.5"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center px-1 text-center text-[9px] text-ink-mute">
            {line.product.title}
          </div>
        )}
      </Link>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="text-[10px] uppercase tracking-wide text-ink-mute">
          {line.product.brand}
        </div>
        <Link
          href={`/products/${line.product.handle}`}
          className="clamp-2 text-[13px] font-medium leading-snug text-ink-soft transition-colors duration-200 hover:text-brand"
        >
          {line.product.title}
        </Link>

        <div className="mt-auto flex items-center justify-between gap-2 pt-1.5">
          <div className="flex items-center rounded-full border border-line">
            <button
              onClick={() => onQty(line.qty - 1)}
              className="grid h-8 w-8 cursor-pointer place-items-center text-ink-soft transition-colors duration-200 hover:text-brand"
              aria-label="نقص الكمية"
            >
              <Minus size={13} aria-hidden="true" />
            </button>
            <span className="min-w-6 text-center text-xs font-bold" aria-label={`الكمية ${line.qty}`}>
              {line.qty}
            </span>
            <button
              onClick={() => onQty(line.qty + 1)}
              className="grid h-8 w-8 cursor-pointer place-items-center text-ink-soft transition-colors duration-200 hover:text-brand"
              aria-label="زيادة الكمية"
            >
              <Plus size={13} aria-hidden="true" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-trust">
              {formatPrice(line.product.price * line.qty)}
            </span>
            <button
              onClick={onRemove}
              className="grid h-8 w-8 cursor-pointer place-items-center text-ink-mute transition-colors duration-200 hover:text-accent-600"
              aria-label={`حذف ${line.product.title}`}
            >
              <Trash2 size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
