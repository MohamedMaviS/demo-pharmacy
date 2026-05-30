'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, ShoppingBag, Trash2, Tag, ShieldCheck, Truck, Lock, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';

import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const {
    lines, setQty, remove, subtotal, discount, coupon, applyCoupon, removeCoupon, count, clear,
  } = useCart();
  const [code, setCode] = useState('');
  const shippingThreshold = 500;
  const freeShipping = subtotal >= shippingThreshold;
  const shipping = freeShipping ? 0 : 50;
  const grandTotal = Math.max(0, subtotal - discount) + shipping;
  const saved =
    lines.reduce((a, l) => a + ((l.product.compareAt ?? l.product.price) - l.product.price) * l.qty, 0) + discount;
  const pct = Math.min(100, Math.round((subtotal / shippingThreshold) * 100));

  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-surface-soft text-brand">
          <ShoppingBag size={36} aria-hidden="true" />
        </div>
        <h1 className="font-display text-2xl font-bold text-ink">سلتك فارغة</h1>
        <p className="mt-2 text-sm text-ink-mute">ابدأ التسوّق وأضف منتجاتك المفضّلة.</p>
        <Link href="/" className="mt-6 inline-block cursor-pointer rounded-full bg-trust px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-trust-800">
          ابدأ التسوّق
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-1 font-display text-3xl font-black tracking-tight text-ink">سلة التسوّق</h1>
      <p className="mb-6 text-sm text-ink-mute">{count} منتج في سلتك</p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-3">
          {/* Free shipping progress */}
          <div className={`rounded-2xl border p-4 shadow-card ${freeShipping ? 'border-brand-100 bg-brand-50 dark:border-brand-500/20 dark:bg-brand-500/10' : 'border-line bg-surface'}`}>
            <div className="mb-2 flex items-center gap-2 text-sm">
              <Truck size={17} className="shrink-0 text-brand" aria-hidden="true" />
              {freeShipping ? (
                <span className="font-bold text-brand-800 dark:text-brand-300">مبروك! حصلت على شحن مجاني</span>
              ) : (
                <span className="text-ink-soft">
                  أضف <span className="font-bold text-ink">{formatPrice(shippingThreshold - subtotal)}</span> للحصول على شحن مجاني
                </span>
              )}
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-surface-sunken" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
              <div className="h-full rounded-full bg-gradient-to-l from-brand-400 to-brand-600 transition-all duration-500 ease-out" style={{ width: `${pct}%` }} />
            </div>
          </div>

          {lines.map((line) => (
            <CartLineRow key={line.product.handle} line={line} onQty={(q) => setQty(line.product.handle, q)} onRemove={() => remove(line.product.handle)} />
          ))}

          <div className="flex items-center justify-between pt-1">
            <button
              onClick={() => { clear(); toast.success('تم تفريغ السلة'); }}
              className="cursor-pointer text-xs font-medium text-ink-mute underline transition-colors duration-200 hover:text-accent-600"
            >
              تفريغ السلة
            </button>
            <Link href="/" className="group flex items-center gap-1 text-xs font-bold text-trust hover:text-trust-800">
              <ArrowLeft size={14} aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5" />
              متابعة التسوّق
            </Link>
          </div>
        </div>

        <aside aria-label="ملخّص الطلب" className="rounded-3xl border border-line bg-surface p-5 shadow-card lg:sticky lg:top-24 lg:self-start">
          <h2 className="mb-4 font-display text-base font-bold text-ink">ملخّص الطلب</h2>

          {/* Coupon */}
          {coupon ? (
            <div className="mb-4 flex items-center justify-between rounded-xl bg-brand-50 px-3 py-2 dark:bg-slate-800">
              <span className="flex items-center gap-1.5 text-xs font-bold text-brand-800 dark:text-brand-300">
                <Tag size={13} aria-hidden="true" /> {coupon.code} · {coupon.label}
              </span>
              <button onClick={() => { removeCoupon(); toast.success('تم إلغاء كود الخصم'); }} className="cursor-pointer text-xs text-ink-mute underline hover:text-accent-600">إلغاء</button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); const res = applyCoupon(code); res.ok ? toast.success(res.message) : toast.error(res.message); if (res.ok) setCode(''); }}
              className="mb-4 flex gap-2"
            >
              <label htmlFor="cart-coupon" className="sr-only">كود الخصم</label>
              <input id="cart-coupon" value={code} onChange={(e) => setCode(e.target.value)} placeholder="كود الخصم (جرّب DEMO10)" className="min-w-0 flex-1 rounded-full border border-line bg-surface px-3 py-2 text-xs text-ink outline-none focus:border-trust" />
              <button type="submit" className="shrink-0 cursor-pointer rounded-full border border-trust px-4 py-2 text-xs font-bold text-trust transition-colors duration-200 hover:bg-trust hover:text-white">تطبيق</button>
            </form>
          )}

          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink-mute">الإجمالي الفرعي</dt>
              <dd className="font-semibold text-ink">{formatPrice(subtotal)}</dd>
            </div>
            {discount > 0 && (
              <div className="flex justify-between">
                <dt className="text-brand">الخصم</dt>
                <dd className="font-semibold text-brand">- {formatPrice(discount)}</dd>
              </div>
            )}
            <div className="flex justify-between">
              <dt className="text-ink-mute">الشحن</dt>
              <dd className="font-semibold">{freeShipping ? <span className="text-brand">مجاني</span> : formatPrice(50)}</dd>
            </div>
            <div className="my-3 h-px bg-line" />
            <div className="flex items-baseline justify-between">
              <dt className="font-display text-base font-bold text-ink">الإجمالي</dt>
              <dd className="font-display text-xl font-black text-trust">{formatPrice(grandTotal)}</dd>
            </div>
          </dl>

          {saved > 0 && (
            <div className="mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-accent-50 py-2 text-xs font-bold text-accent-700 dark:bg-accent-500/10">
              <Tag size={13} aria-hidden="true" /> وفّرت {formatPrice(saved)} في الطلب ده
            </div>
          )}

          <Link
            href="/checkout"
            className="mt-5 flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-trust py-3 text-sm font-bold text-white shadow-card transition-all duration-200 hover:bg-trust-800 hover:shadow-cardHover"
          >
            إتمام الطلب
            <ArrowLeft size={16} aria-hidden="true" />
          </Link>

          {/* Trust badges */}
          <ul className="mt-5 space-y-2 border-t border-line pt-4">
            {[
              { Icon: ShieldCheck, text: 'منتجات أصلية ١٠٠٪' },
              { Icon: Truck, text: 'توصيل سريع لكل المحافظات' },
              { Icon: Lock, text: 'دفع آمن ومشفّر' },
            ].map((t) => (
              <li key={t.text} className="flex items-center gap-2 text-xs text-ink-soft">
                <t.Icon size={15} className="shrink-0 text-brand" aria-hidden="true" />
                {t.text}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

function CartLineRow({
  line, onQty, onRemove,
}: {
  line: ReturnType<typeof useCart>['lines'][number];
  onQty: (q: number) => void;
  onRemove: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const onSale = line.product.compareAt && line.product.compareAt > line.product.price;
  return (
    <div className="flex gap-3 rounded-2xl border border-line bg-surface p-3 shadow-card transition-shadow duration-200 hover:shadow-cardHover sm:gap-4 sm:p-4">
      <Link href={`/products/${line.product.handle}`} className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-line bg-surface-sunken sm:h-28 sm:w-28">
        {!imgError ? (
          <Image src={line.product.image} alt={line.product.title} fill sizes="112px" className="object-contain p-2 transition-transform duration-300 hover:scale-105" onError={() => setImgError(true)} />
        ) : (
          <div className="flex h-full items-center justify-center px-1 text-center text-[10px] text-ink-mute">{line.product.title}</div>
        )}
        {onSale && (
          <span className="absolute right-1.5 top-1.5 rounded-full bg-accent-600 px-1.5 py-0.5 text-[9px] font-bold text-white">عرض</span>
        )}
      </Link>

      <div className="flex flex-1 flex-col">
        <div className="text-[11px] font-medium uppercase tracking-wide text-ink-mute">{line.product.brand}</div>
        <Link href={`/products/${line.product.handle}`} className="clamp-2 mt-0.5 cursor-pointer text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-brand">
          {line.product.title}
        </Link>
        <div className="mt-1 flex items-baseline gap-1.5">
          <span className="text-sm font-bold text-ink">{formatPrice(line.product.price)}</span>
          {onSale && line.product.compareAt && (
            <span className="text-[11px] text-ink-mute line-through">{formatPrice(line.product.compareAt)}</span>
          )}
        </div>

        <div className="mt-auto flex items-end justify-between pt-2">
          <div className="flex items-center rounded-full border border-line bg-surface">
            <button onClick={() => onQty(line.qty - 1)} className="grid h-9 w-9 cursor-pointer place-items-center text-ink-soft transition-colors duration-200 hover:text-brand" aria-label="نقص الكمية">
              <Minus size={14} aria-hidden="true" />
            </button>
            <span className="min-w-6 text-center text-xs font-bold text-ink" aria-label={`الكمية ${line.qty}`}>{line.qty}</span>
            <button onClick={() => onQty(line.qty + 1)} className="grid h-9 w-9 cursor-pointer place-items-center text-ink-soft transition-colors duration-200 hover:text-brand" aria-label="زيادة الكمية">
              <Plus size={14} aria-hidden="true" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-display text-base font-black text-trust">{formatPrice(line.product.price * line.qty)}</span>
            <button onClick={onRemove} className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg text-ink-mute transition-colors duration-200 hover:bg-accent-50 hover:text-accent-600" aria-label={`حذف ${line.product.title}`}>
              <Trash2 size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
