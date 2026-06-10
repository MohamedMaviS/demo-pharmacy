'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Flame } from 'lucide-react';
import { useEffect, useState } from 'react';

import { getOnSaleProducts, type Product } from '@/lib/data';
import { formatPrice, BLUR_DATA_URL } from '@/lib/utils';
import Tilt from './Tilt';

function useCountdown() {
  const [t, setT] = useState<{ h: string; m: string; s: string } | null>(null);
  useEffect(() => {
    const pad = (n: number) => n.toString().padStart(2, '0');
    const tick = () => {
      const now = new Date();
      const end = new Date(now);
      end.setHours(24, 0, 0, 0);
      let diff = Math.max(0, end.getTime() - now.getTime());
      const h = Math.floor(diff / 3_600_000); diff -= h * 3_600_000;
      const m = Math.floor(diff / 60_000); diff -= m * 60_000;
      const s = Math.floor(diff / 1000);
      setT({ h: pad(h), m: pad(m), s: pad(s) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

/** A two-digit segment whose value flips up when it changes. */
function FlipDigit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-accent-600 text-white shadow-sm sm:h-12 sm:w-12">
        <AnimatePresence initial={false}>
          <motion.span
            key={value}
            initial={{ y: '-110%' }}
            animate={{ y: '0%' }}
            exit={{ y: '110%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 grid place-items-center font-display text-lg font-black tabular-nums sm:text-xl"
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[9px] font-medium text-ink-mute">{label}</span>
    </div>
  );
}

export default function FlashDeal() {
  const products = getOnSaleProducts().slice(0, 6);
  const t = useCountdown();
  const reduce = useReducedMotion();
  if (products.length < 3) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8" aria-label="عرض اليوم">
      <div className="overflow-hidden rounded-[2rem] border border-line bg-surface shadow-card">
        {/* Header — clean card row; red stays only as the functional deal accent */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line p-5 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-600 text-white shadow-sm">
              <Flame size={24} aria-hidden="true" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display text-xl font-black text-ink sm:text-2xl">عرض اليوم</h2>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-2 py-0.5 text-[10px] font-bold text-accent-700 dark:bg-accent-500/10">
                  <span className="relative grid h-2 w-2 place-items-center">
                    {!reduce && <span className="absolute h-2 w-2 animate-ping rounded-full bg-accent-500/70" />}
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-600" />
                  </span>
                  مباشر
                </span>
              </div>
              <p className="text-xs text-ink-mute">خصومات لفترة محدودة تنتهي مع نهاية اليوم</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden text-xs font-semibold text-ink-mute sm:inline">ينتهي خلال</span>
            {t ? (
              <div className="flex items-center gap-1.5">
                <FlipDigit value={t.h} label="ساعة" />
                <span className="-mt-3 font-display text-lg font-black text-ink">:</span>
                <FlipDigit value={t.m} label="دقيقة" />
                <span className="-mt-3 font-display text-lg font-black text-ink">:</span>
                <FlipDigit value={t.s} label="ثانية" />
              </div>
            ) : (
              <div className="h-12 w-40 rounded-xl bg-surface-sunken" />
            )}
          </div>
        </div>

        {/* Products — 3D tilt cards */}
        <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {products.map((p, i) => (
            <motion.div
              key={p.handle}
              className="h-full"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <DealCard product={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DealCard({ product }: { product: Product }) {
  const pct = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : 0;
  return (
    <Tilt max={10} className="h-full">
      <Link
        href={`/products/${product.handle}`}
        className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-2.5 shadow-card transition-shadow duration-200 hover:shadow-cardHover [transform-style:preserve-3d]"
      >
        <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-sunken">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="180px"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none"
          />
        </div>
        {pct > 0 && (
          <span
            style={{ transform: 'translateZ(45px)' }}
            className="absolute right-3.5 top-3.5 rounded-full bg-accent-600 px-2 py-0.5 text-[10px] font-black text-white shadow-sm"
          >
            -{pct}%
          </span>
        )}
        <div style={{ transform: 'translateZ(22px)' }} className="mt-2 flex flex-1 flex-col">
          <div className="clamp-2 min-h-[2.2rem] text-[11px] font-medium leading-tight text-ink-soft">
            {product.title}
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="font-display text-sm font-black text-accent-600">{formatPrice(product.price)}</span>
            {product.compareAt && (
              <span className="text-[10px] text-ink-mute line-through">{formatPrice(product.compareAt)}</span>
            )}
          </div>
        </div>
      </Link>
    </Tilt>
  );
}
