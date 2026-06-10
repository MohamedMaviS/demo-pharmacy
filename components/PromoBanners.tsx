'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

import { getProductsByCollection, type Product } from '@/lib/data';
import { getCategoryIcon } from '@/lib/icons';
import { formatPrice } from '@/lib/utils';

type Tint = 'brand' | 'trust';

type Promo = {
  handle: string;
  title: string;
  blurb: string;
  off: string;
  tint: Tint;
  big?: boolean;
};

/**
 * Clean pharmacy palette: soft green/blue tints on light surfaces with dark
 * ink text. Red appears only as a small functional discount tag.
 */
const PROMOS: Promo[] = [
  { handle: 'sun-care', title: 'الحماية من الشمس', blurb: 'كريمات وبخاخات بعامل حماية عالي تناسب كل أنواع البشرة', off: '٥٠٪', tint: 'brand', big: true },
  { handle: 'hair-care', title: 'العناية بالشعر', blurb: 'فيتامينات وسيرومات لشعر أقوى', off: '٦٠٪', tint: 'brand' },
  { handle: 'mom-baby', title: 'الأم والطفل', blurb: 'كل ما يحتاجه طفلك بأمان', off: '٦٧٪', tint: 'trust' },
  { handle: 'body-perfumes', title: 'العطور', blurb: 'بودي سبلاش وعطور تدوم طويلًا', off: '٤٠٪', tint: 'brand' },
  { handle: 'makeup', title: 'المكياج', blurb: 'ألوان وثبات لإطلالة مميزة', off: '٣٥٪', tint: 'trust' },
];

const TINT = {
  brand: {
    wash: 'bg-gradient-to-l from-brand-50 via-surface to-surface dark:from-brand-500/10 dark:via-surface dark:to-surface',
    card: 'bg-brand-50/70 dark:bg-brand-500/10',
    chip: 'bg-brand-100 text-brand-800 dark:bg-brand-500/15 dark:text-brand-300',
    icon: 'bg-brand-600 text-white',
    glow: 'bg-brand-200/50 dark:bg-brand-500/15',
    link: 'text-brand-700 dark:text-brand-300',
  },
  trust: {
    wash: 'bg-gradient-to-l from-trust-50 via-surface to-surface dark:from-trust-500/10 dark:via-surface dark:to-surface',
    card: 'bg-trust-50/70 dark:bg-trust-500/10',
    chip: 'bg-trust-100 text-trust-800 dark:bg-trust-500/15 dark:text-trust-300',
    icon: 'bg-trust-600 text-white',
    glow: 'bg-trust-200/50 dark:bg-trust-500/15',
    link: 'text-trust-700 dark:text-trust-300',
  },
} as const;

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

/** White product card that reads cleanly on the soft tints. */
function ProductCardMini({ product, withText = false, w = 'w-28' }: { product: Product; withText?: boolean; w?: string }) {
  const pct = discountPct(product);
  return (
    <div className={`relative rounded-2xl border border-line bg-surface p-2.5 shadow-card ${w}`}>
      <div className="relative aspect-square overflow-hidden rounded-xl bg-surface-sunken">
        <Image src={product.image} alt={product.title} fill sizes="220px" className="object-contain p-2.5" />
      </div>
      {pct > 0 && (
        <span className="absolute -left-1.5 -top-1.5 rounded-full bg-accent-600 px-2 py-0.5 text-[10px] font-black text-white shadow-sm">
          -{pct}%
        </span>
      )}
      {withText && (
        <div className="mt-2 px-1">
          <div className="truncate text-[9px] font-bold uppercase tracking-wide text-ink-mute">{product.brand}</div>
          <div className="mt-0.5 flex items-baseline gap-1.5">
            <span className="font-display text-sm font-black text-ink">{formatPrice(product.price)}</span>
            {product.compareAt && <span className="text-[10px] text-ink-mute line-through">{formatPrice(product.compareAt)}</span>}
          </div>
        </div>
      )}
    </div>
  );
}

function BigBanner({ promo }: { promo: Promo }) {
  const Icon = getCategoryIcon(promo.handle);
  const t = TINT[promo.tint];
  const reduce = useReducedMotion();
  const products = useMemo(() => pickProducts(promo.handle, 4), [promo.handle]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduce || products.length <= 1) return;
    const id = setInterval(() => setIdx((p) => (p + 1) % products.length), 3800);
    return () => clearInterval(id);
  }, [reduce, products.length]);

  const hero = products[idx] ?? products[0];

  return (
    <Link
      href={`/collections/${promo.handle}`}
      className={`group relative flex min-h-[230px] items-stretch overflow-hidden rounded-[1.75rem] border border-line ${t.wash} shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cardHover sm:min-h-[250px]`}
    >
      {/* Copy */}
      <div className="relative z-10 flex flex-1 flex-col justify-center p-6 sm:p-9">
        <span className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold ${t.chip}`}>
          <Icon size={14} strokeWidth={2.4} aria-hidden="true" />
          عرض الموسم
        </span>
        <h3 className="mt-3 font-display text-[1.7rem] font-black leading-tight text-ink sm:text-[2.4rem]">
          {promo.title}
        </h3>
        <p className="mt-2 max-w-sm text-[13px] text-ink-mute sm:text-sm">{promo.blurb}</p>

        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-baseline gap-1.5 rounded-xl bg-accent-600 px-3.5 py-2 text-white shadow-sm">
            <span className="text-[11px] font-bold text-white/85">خصم حتى</span>
            <span className="font-display text-xl font-black sm:text-2xl">{promo.off}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-card transition-all duration-200 group-hover:bg-brand-700">
            تسوّق الآن
            <ArrowLeft size={15} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-0.5" />
          </span>
        </div>
      </div>

      {/* Product showcase — soft glow + crossfading clean cards */}
      <div className="relative z-10 hidden w-[40%] shrink-0 items-center justify-center sm:flex">
        <div aria-hidden="true" className={`absolute h-56 w-56 rounded-full blur-3xl ${t.glow}`} />
        <div className="relative h-60 w-44">
          <AnimatePresence>
            {hero && (
              <motion.div
                key={hero.handle}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductCardMini product={hero} withText w="w-40 sm:w-44" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {products.length > 1 && (
          <div aria-hidden="true" className="absolute bottom-4 flex gap-1.5">
            {products.map((_, i) => (
              <span key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'w-5 bg-brand' : 'w-1.5 bg-ink-mute/30'}`} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

function SmallBanner({ promo }: { promo: Promo }) {
  const Icon = getCategoryIcon(promo.handle);
  const t = TINT[promo.tint];
  const [product] = pickProducts(promo.handle, 1);

  return (
    <Link
      href={`/collections/${promo.handle}`}
      className={`group relative flex min-h-[148px] items-center gap-3 overflow-hidden rounded-3xl border border-line ${t.card} p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover sm:p-5`}
    >
      <div className="relative z-10 flex-1">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${t.chip}`}>
          <Icon size={12} strokeWidth={2.6} aria-hidden="true" />
          خصم حتى {promo.off}
        </span>
        <h3 className="mt-2 font-display text-lg font-black leading-tight text-ink sm:text-xl">{promo.title}</h3>
        <p className="mt-0.5 line-clamp-1 text-[11px] text-ink-mute">{promo.blurb}</p>
        <span className={`mt-2.5 inline-flex items-center gap-1 text-xs font-bold ${t.link}`}>
          تسوّق الآن
          <ArrowLeft size={13} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-0.5" />
        </span>
      </div>

      {product && (
        <div className="relative z-10 shrink-0 transition-transform duration-300 group-hover:-translate-y-1">
          <ProductCardMini product={product} w="w-24 sm:w-28" />
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
              <SmallBanner promo={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
