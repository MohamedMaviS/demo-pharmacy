'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/lib/data';
import { formatPrice, BLUR_DATA_URL } from '@/lib/utils';

type Props = {
  products: Product[];
  speed?: 'slow' | 'normal' | 'fast';
  reverse?: boolean;
  eyebrow?: string;
  heading?: string;
  subheading?: string;
};

export default function ProductMarquee({
  products,
  speed = 'normal',
  reverse = false,
  eyebrow,
  heading,
  subheading,
}: Props) {
  if (!products || products.length === 0) return null;

  // Card + gap width in px (w-56/sm:w-60 ≈ 240 + 16 gap).
  const cardWidth = 256;
  const minTrackWidth = 1800 * 2; // ensure the strip always overflows ≥2× viewport
  const baseWidth = products.length * cardWidth;

  // Repeat enough times to fill the viewport. MUST be even so a -50% translate
  // lands on an identical frame (seamless loop with no jump).
  let repeats = Math.max(2, Math.ceil(minTrackWidth / Math.max(1, baseWidth)));
  if (repeats % 2 !== 0) repeats += 1;

  const loop: Product[] = [];
  for (let i = 0; i < repeats; i++) loop.push(...products);

  // Drive duration from a CONSTANT pixel speed so the scroll feels the same
  // regardless of how many products are in the strip. Lower px/s = calmer.
  const pxPerSec = speed === 'slow' ? 28 : speed === 'fast' ? 60 : 40;
  const distancePx = 0.5 * repeats * baseWidth; // the track travels 50% of its width
  const durationSec = Math.max(30, Math.round(distancePx / pxPerSec));
  const duration = `${durationSec}s`;

  return (
    <section
      className="relative overflow-hidden py-8"
      aria-roledescription="marquee"
      aria-label={heading ?? 'منتجات مميزة'}
    >
      {heading && (
        <div className="mx-auto mb-5 flex max-w-7xl items-end justify-between gap-3 px-4">
          <div className="min-w-0">
            {eyebrow && (
              <span className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300">
                <span className="h-px w-5 rounded-full bg-brand-400/70" />
                {eyebrow}
              </span>
            )}
            <h2 className="mt-1.5 font-display text-2xl font-black tracking-tight text-ink sm:text-[1.95rem]">
              {heading}
            </h2>
            {subheading && (
              <p className="mt-1 text-sm text-ink-mute">{subheading}</p>
            )}
          </div>
          <Link
            href="/search"
            className="group hidden shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-bold text-ink-soft shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:bg-brand-50 hover:text-brand dark:hover:bg-slate-800 sm:inline-flex"
          >
            عرض الكل
            <ArrowLeft
              size={15}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
          </Link>
        </div>
      )}

      {/*
        CRITICAL: dir="ltr" must be on the OVERFLOW WRAPPER (not just the track).
        In an RTL page, a block-level `w-max` flex anchors to the right edge and
        overflows leftward off-screen — so the visible (right) area renders empty.
        Forcing LTR here anchors the track to the left so items are visible from t=0
        and scroll seamlessly. Card content stays RTL via dir="rtl" on each card.
      */}
      <div
        dir="ltr"
        className="group relative w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div
          className="marquee-track flex w-max gap-4 px-4 group-hover:[animation-play-state:paused] motion-reduce:!animate-none"
          style={{
            animationName: 'marqueeX',
            animationDuration: duration,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            animationDirection: reverse ? 'reverse' : 'normal',
            willChange: 'transform',
          }}
        >
          {loop.map((p, i) => (
            <MarqueeCard key={`${p.handle}-${i}`} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);
  const onSale = product.compareAt && product.compareAt > product.price;
  return (
    <Link
      href={`/products/${product.handle}`}
      dir="rtl"
      className="group/card flex w-56 shrink-0 flex-col rounded-2xl border border-line bg-surface p-3 shadow-card transition-shadow duration-200 hover:shadow-cardHover sm:w-60"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-surface-sunken">
        {!imgError ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="240px"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-contain p-3 transition-transform duration-500 ease-out group-hover/card:scale-110 motion-reduce:transform-none"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center px-2 text-center text-[10px] text-ink-mute">
            {product.title}
          </div>
        )}
        {onSale && (
          <span className="absolute right-2 top-2 rounded-full bg-accent-600 px-2 py-0.5 text-[10px] font-bold text-white">
            عرض
          </span>
        )}
      </div>
      <div className="mt-3 flex-1">
        <div className="text-[10px] font-medium uppercase tracking-wide text-ink-mute">
          {product.brand}
        </div>
        <div className="clamp-2 mt-0.5 min-h-[2.4rem] text-sm font-medium text-ink-soft">
          {product.title}
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span
            className={`text-sm font-bold ${onSale ? 'text-accent-600' : 'text-trust'}`}
          >
            {formatPrice(product.price)}
          </span>
          {onSale && product.compareAt && (
            <span className="text-[10px] text-gray-400 line-through">
              {formatPrice(product.compareAt)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
