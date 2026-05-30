'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

import { getProductsByCollection, type Product } from '@/lib/data';
import { getCategoryIcon } from '@/lib/icons';
import { formatPrice } from '@/lib/utils';

const SPARKLES = [
  { left: '16%', top: '24%', delay: 0 },
  { left: '74%', top: '30%', delay: 0.6 },
  { left: '28%', top: '70%', delay: 1.1 },
  { left: '82%', top: '64%', delay: 1.7 },
  { left: '52%', top: '14%', delay: 0.9 },
];

type Promo = {
  handle: string;
  title: string;
  blurb: string;
  off: string;
  /** Tailwind gradient stops — literal tokens for JIT. Coordinated cool spectrum. */
  grad: string;
  big?: boolean;
};

/**
 * One coordinated cool spectrum (teal → blue → violet → rose) so the cards read
 * as a single premium family. Reading RTL: teal · blue · purple · rose.
 */
const PROMOS: Promo[] = [
  {
    handle: 'sun-care',
    title: 'الحماية من الشمس',
    blurb: 'كريمات وبخاخات بعامل حماية عالي تناسب كل أنواع البشرة',
    off: '٥٠٪',
    grad: 'from-violet-600 via-indigo-600 to-indigo-800',
    big: true,
  },
  { handle: 'hair-care', title: 'العناية بالشعر', blurb: 'فيتامينات وسيرومات لشعر أقوى', off: '٦٠٪', grad: 'from-emerald-500 to-teal-600' },
  { handle: 'mom-baby', title: 'الأم والطفل', blurb: 'كل ما يحتاجه طفلك بأمان', off: '٦٧٪', grad: 'from-sky-500 to-blue-600' },
  { handle: 'body-perfumes', title: 'العطور', blurb: 'بودي سبلاش وعطور تدوم طويلًا', off: '٤٠٪', grad: 'from-fuchsia-500 to-purple-600' },
  { handle: 'makeup', title: 'المكياج', blurb: 'ألوان وثبات لإطلالة مميزة', off: '٣٥٪', grad: 'from-pink-500 to-rose-600' },
];

function pickProducts(handle: string, n: number): Product[] {
  const seen = new Set<string>();
  const out: Product[] = [];
  for (const p of getProductsByCollection(handle)) {
    if (seen.has(p.image)) continue;
    seen.add(p.image);
    out.push(p);
    if (out.length === n) break;
  }
  return out;
}

function discountPct(p: Product): number {
  return p.compareAt && p.compareAt > p.price
    ? Math.round(((p.compareAt - p.price) / p.compareAt) * 100)
    : 0;
}

function Decor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/15" />
      <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full bg-white/12 blur-2xl" />
      <div className="absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-black/10 blur-3xl" />
    </div>
  );
}

/** Always-white product card (correct in dark mode via fixed slate colors). */
function ProductCardMini({ product, withText = false, w = 'w-28' }: { product: Product; withText?: boolean; w?: string }) {
  return (
    <div className={`rounded-[1.4rem] bg-white p-2.5 shadow-[0_26px_55px_-20px_rgba(0,0,0,0.7)] ring-1 ring-black/5 ${w}`}>
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50">
        <Image src={product.image} alt={product.title} fill sizes="240px" className="object-contain p-2.5" />
      </div>
      {withText && (
        <div className="mt-2 px-1">
          <div className="truncate text-[9px] font-bold uppercase tracking-wide text-slate-400">{product.brand}</div>
          <div className="mt-0.5 flex items-baseline gap-1.5">
            <span className="font-display text-sm font-black text-slate-900">{formatPrice(product.price)}</span>
            {product.compareAt && <span className="text-[10px] text-slate-400 line-through">{formatPrice(product.compareAt)}</span>}
          </div>
        </div>
      )}
    </div>
  );
}

function BigBanner({ promo }: { promo: Promo }) {
  const Icon = getCategoryIcon(promo.handle);
  const reduce = useReducedMotion();
  const products = useMemo(() => pickProducts(promo.handle, 4), [promo.handle]);
  const [idx, setIdx] = useState(0);

  // auto-cycle the featured product
  useEffect(() => {
    if (reduce || products.length <= 1) return;
    const id = setInterval(() => setIdx((p) => (p + 1) % products.length), 3200);
    return () => clearInterval(id);
  }, [reduce, products.length]);

  const hero = products[idx] ?? products[0];
  const pct = hero ? discountPct(hero) : 0;

  return (
    <Link
      href={`/collections/${promo.handle}`}
      className={`group relative flex min-h-[240px] items-stretch overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${promo.grad} text-white shadow-cardHover ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 sm:min-h-[280px]`}
    >
      <Decor />

      {/* slowly drifting glows — living background */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-8 top-6 h-40 w-40 rounded-full bg-white/10 blur-3xl"
            animate={{ x: [0, 28, 0], y: [0, 18, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-1/3 h-40 w-40 rounded-full bg-black/10 blur-3xl"
            animate={{ x: [0, -22, 0], y: [0, -14, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {/* Copy zone */}
      <div className="relative z-10 flex flex-1 flex-col justify-center p-6 sm:p-9">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold backdrop-blur-sm ring-1 ring-white/25">
          <Icon size={14} strokeWidth={2.4} aria-hidden="true" />
          عرض الموسم
        </span>
        <h3 className="mt-3 font-display text-[1.7rem] font-black leading-tight drop-shadow-sm sm:text-[2.6rem]">{promo.title}</h3>
        <p className="mt-2 max-w-xs text-[13px] text-white/85 sm:text-sm">{promo.blurb}</p>
        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-baseline gap-1.5 rounded-2xl bg-white px-3.5 py-2 font-display font-black text-ink shadow-lg">
            <span className="text-[11px] font-bold text-ink-soft">خصم حتى</span>
            <span className="text-xl sm:text-2xl">{promo.off}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur-sm ring-1 ring-white/30 transition-colors duration-200 group-hover:bg-white/25">
            تسوّق الآن
            <ArrowLeft size={15} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-0.5" />
          </span>
        </div>
      </div>

      {/* Animated product showcase */}
      <div className="relative z-10 flex w-[44%] shrink-0 items-center justify-center sm:w-[42%]">
        {/* pulsing halo */}
        <motion.div
          aria-hidden="true"
          className="absolute h-44 w-44 rounded-full bg-white/25 blur-3xl sm:h-60 sm:w-60"
          animate={reduce ? undefined : { scale: [1, 1.18, 1], opacity: [0.45, 0.72, 0.45] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* rotating dashed ring */}
        <motion.div
          aria-hidden="true"
          className="absolute hidden h-60 w-60 rounded-full border border-dashed border-white/20 sm:block sm:h-72 sm:w-72"
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        />
        <div aria-hidden="true" className="absolute h-44 w-44 rounded-full border border-white/12 sm:h-56 sm:w-56" />

        {/* twinkling sparkles */}
        {!reduce &&
          SPARKLES.map((s, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              className="absolute h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              style={{ left: s.left, top: s.top }}
              animate={{ opacity: [0, 1, 0], scale: [0.4, 1, 0.4], y: [0, -9, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
            />
          ))}

        {/* floating + cycling product card */}
        <motion.div
          className="relative h-56 w-40 sm:h-72 sm:w-52"
          animate={reduce ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <AnimatePresence>
            {hero && (
              <motion.div
                key={hero.handle}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8, y: 16, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: -3 }}
                exit={{ opacity: 0, scale: 0.82, y: -16, rotate: 5 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative">
                  <ProductCardMini product={hero} withText w="w-32 sm:w-48" />
                  {pct > 0 && (
                    <motion.span
                      className="absolute -right-3 -top-3 grid h-12 w-12 place-items-center rounded-full bg-rose-500 font-display text-xs font-black text-white shadow-lg ring-4 ring-white/30 sm:h-14 sm:w-14 sm:text-sm"
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 280, damping: 14 }}
                    >
                      -{pct}%
                    </motion.span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* progress dots */}
        {products.length > 1 && (
          <div aria-hidden="true" className="absolute bottom-3 flex gap-1.5">
            {products.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

function SmallBanner({ promo, index }: { promo: Promo; index: number }) {
  const Icon = getCategoryIcon(promo.handle);
  const reduce = useReducedMotion();
  const [product] = pickProducts(promo.handle, 1);

  return (
    <Link
      href={`/collections/${promo.handle}`}
      className={`group relative flex min-h-[148px] items-center gap-3 overflow-hidden rounded-3xl bg-gradient-to-br ${promo.grad} p-4 text-white shadow-card ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover sm:p-5`}
    >
      <Decor />
      <div className="relative z-10 flex-1">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/18 px-2.5 py-0.5 text-[10px] font-bold backdrop-blur-sm ring-1 ring-white/25">
          <Icon size={12} strokeWidth={2.6} aria-hidden="true" />
          خصم حتى {promo.off}
        </span>
        <h3 className="mt-2 font-display text-lg font-black leading-tight drop-shadow-sm sm:text-xl">{promo.title}</h3>
        <p className="mt-0.5 line-clamp-1 text-[11px] text-white/80">{promo.blurb}</p>
        <span className="mt-2.5 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-ink shadow transition-transform duration-200 group-hover:-translate-y-0.5">
          تسوّق الآن
          <ArrowLeft size={12} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-0.5" />
        </span>
      </div>
      {product && (
        <div className="relative z-10 shrink-0">
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 rounded-[1.4rem] bg-white/30 blur-2xl"
            animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="relative"
            animate={reduce ? { rotate: -3 } : { y: [0, -7, 0], rotate: -3 }}
            transition={{ duration: 3.4 + index * 0.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
          >
            <ProductCardMini product={product} w="w-24 sm:w-28" />
          </motion.div>
        </div>
      )}
    </Link>
  );
}

export default function PromoBanners() {
  const [big, ...rest] = PROMOS;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8" aria-label="عروض الأقسام">
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <BigBanner promo={big} />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((p, i) => (
            <motion.div
              key={p.handle}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <SmallBanner promo={p} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
