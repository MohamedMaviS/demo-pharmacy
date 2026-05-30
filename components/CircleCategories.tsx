'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { COLLECTIONS, getCategoryImage, type Collection } from '@/lib/data';
import { getCategoryIcon } from '@/lib/icons';

export default function CircleCategories() {
  // Duplicate for a seamless -50% loop (even number of copies).
  const loop = [...COLLECTIONS, ...COLLECTIONS];
  const duration = `${Math.max(30, COLLECTIONS.length * 3.4)}s`;

  return (
    <section className="mx-auto max-w-7xl px-4 py-7" aria-label="تصفّح الأقسام">
      <div
        dir="ltr"
        className="group relative w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div
          className="flex w-max items-start gap-5 px-2 group-hover:[animation-play-state:paused] motion-reduce:!animate-none sm:gap-7"
          style={{
            animationName: 'marqueeX',
            animationDuration: duration,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            willChange: 'transform',
          }}
        >
          {loop.map((c, i) => (
            <CircleItem key={`${c.handle}-${i}`} collection={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CircleItem({ collection }: { collection: Collection }) {
  const [error, setError] = useState(false);
  const Icon = getCategoryIcon(collection.handle);
  const image = getCategoryImage(collection.handle);

  return (
    <Link
      href={`/collections/${collection.handle}`}
      dir="rtl"
      className="group/ci flex w-20 shrink-0 cursor-pointer flex-col items-center gap-2 text-center sm:w-24"
      aria-label={collection.title}
    >
      <div className="relative h-20 w-20 overflow-hidden rounded-full border border-line bg-gradient-to-br from-surface-soft to-surface-sunken shadow-card transition-all duration-200 group-hover/ci:-translate-y-1 group-hover/ci:shadow-cardHover group-hover/ci:ring-2 group-hover/ci:ring-brand-300 sm:h-24 sm:w-24">
        {image && !error ? (
          <Image
            src={image}
            alt={collection.title}
            fill
            sizes="96px"
            className="object-contain p-3 transition-transform duration-300 group-hover/ci:scale-110 motion-reduce:transform-none"
            onError={() => setError(true)}
          />
        ) : (
          <div className="grid h-full place-items-center text-brand">
            <Icon size={30} strokeWidth={1.6} aria-hidden="true" />
          </div>
        )}
      </div>
      <span className="line-clamp-2 text-[11px] font-semibold leading-tight text-ink-soft transition-colors duration-200 group-hover/ci:text-brand sm:text-xs">
        {collection.title}
      </span>
    </Link>
  );
}
