'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, ArrowLeft, Truck, ShieldCheck, Clock, Sparkles, Flame } from 'lucide-react';
import { useState } from 'react';

import { getOnSaleProducts, PRODUCTS, COLLECTIONS, type Product } from '@/lib/data';
import { formatPrice, BLUR_DATA_URL } from '@/lib/utils';

const DEALS: Product[] = (() => {
  const sale = getOnSaleProducts();
  const pool = sale.length >= 4 ? sale : PRODUCTS;
  const seen = new Set<string>();
  const out: Product[] = [];
  for (const p of pool) {
    if (seen.has(p.image)) continue;
    seen.add(p.image);
    out.push(p);
    if (out.length === 4) break;
  }
  return out;
})();

const PILLS = COLLECTIONS.slice(0, 5);
const TRUST = [
  { Icon: Truck, label: 'شحن مجاني فوق ٥٠٠ ج' },
  { Icon: ShieldCheck, label: 'منتجات أصلية ١٠٠٪' },
  { Icon: Clock, label: 'توصيل سريع' },
];

export default function Hero() {
  const router = useRouter();
  const [q, setQ] = useState('');

  return (
    <section className="mx-auto max-w-7xl px-4 pt-5 sm:pt-7">
      <div className="relative overflow-hidden rounded-4xl border border-line bg-surface shadow-soft">
        {/* soft, airy decorative accents (green/blue) — light, not heavy */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="mesh-blob absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-300/20 blur-3xl dark:bg-brand-500/10" />
          <div
            className="mesh-blob absolute -left-16 top-1/3 h-64 w-64 rounded-full bg-trust-300/15 blur-3xl dark:bg-trust-500/10"
            style={{ animationDelay: '-8s' }}
          />
        </div>

        {/* Top: copy + search (centered, airy, dark text on light) */}
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-7 pt-12 text-center sm:pt-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-700 ring-1 ring-brand-100 dark:bg-slate-800 dark:text-brand-300 dark:ring-white/10"
          >
            <Sparkles size={14} aria-hidden="true" />
            صيدليتك أونلاين · توصيل لكل المحافظات
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-display text-4xl font-black leading-[1.12] tracking-tight text-ink sm:text-6xl"
          >
            كل اللي صحتك محتاجاه،
            <br className="hidden sm:block" />{' '}
            <span className="relative whitespace-nowrap text-brand">
              في مكان واحد
              <svg
                className="absolute -bottom-1.5 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 9C40 3 160 3 198 9" stroke="rgb(34 197 94)" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink-mute sm:text-base"
          >
            أدوية، فيتامينات، ومستحضرات تجميل أصلية من أشهر العلامات العالمية،
            بأفضل الأسعار وأسرع توصيل.
          </motion.p>

          {/* Search */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={(e) => {
              e.preventDefault();
              router.push('/search');
            }}
            className="mt-7 flex w-full max-w-xl items-center gap-2 rounded-full border border-line bg-surface p-1.5 shadow-card focus-within:border-brand"
          >
            <Search size={20} className="ms-3 shrink-0 text-ink-mute" aria-hidden="true" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="ابحث عن دواء، فيتامين، أو منتج..."
              aria-label="ابحث"
              className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-mute"
            />
            <button
              type="submit"
              className="shrink-0 cursor-pointer rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-700"
            >
              بحث
            </button>
          </motion.form>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 flex flex-wrap justify-center gap-2"
          >
            {PILLS.map((c) => (
              <Link
                key={c.handle}
                href={`/collections/${c.handle}`}
                className="cursor-pointer rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold text-ink-soft transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                {c.title}
              </Link>
            ))}
          </motion.div>

          {/* Trust */}
          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2">
            {TRUST.map(({ Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-xs text-ink-mute">
                <Icon size={15} aria-hidden="true" className="text-brand" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom: "top deals" cards row */}
        <div className="relative border-t border-line bg-surface-soft/50 p-5 sm:p-6 dark:bg-slate-900/40">
          <div className="mb-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 font-display text-base font-extrabold text-ink">
              <Flame size={18} className="text-accent-600" aria-hidden="true" />
              أفضل عروض اليوم
            </span>
            <Link
              href="/collections/sale"
              className="group flex items-center gap-1 text-sm font-bold text-brand hover:text-brand-700"
            >
              عرض الكل
              <ArrowLeft size={15} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {DEALS.map((p, i) => {
              const onSale = p.compareAt && p.compareAt > p.price;
              const pct =
                onSale && p.compareAt
                  ? Math.round(((p.compareAt - p.price) / p.compareAt) * 100)
                  : 0;
              return (
                <motion.div
                  key={p.handle}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={`/products/${p.handle}`}
                    className="group block overflow-hidden rounded-2xl border border-line bg-surface p-3 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-cardHover"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-sunken">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 640px) 45vw, 22vw"
                        placeholder="blur"
                        blurDataURL={BLUR_DATA_URL}
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                      />
                      {onSale && (
                        <span className="absolute right-2 top-2 rounded-full bg-accent-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                          -{pct}%
                        </span>
                      )}
                    </div>
                    <div className="mt-2 truncate text-[10px] font-medium uppercase tracking-wide text-ink-mute">
                      {p.brand}
                    </div>
                    <div className="clamp-2 min-h-[2.2rem] text-[11px] font-medium leading-tight text-ink-soft">
                      {p.title}
                    </div>
                    <div className="mt-1 flex items-baseline gap-1.5">
                      <span className={`text-sm font-bold ${onSale ? 'text-accent-600' : 'text-trust'}`}>
                        {formatPrice(p.price)}
                      </span>
                      {onSale && p.compareAt && (
                        <span className="text-[10px] text-gray-400 line-through">
                          {formatPrice(p.compareAt)}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
