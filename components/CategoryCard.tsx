'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

import type { Collection } from '@/lib/data';
import { getCategoryImage, getCollectionCount } from '@/lib/data';
import { getCategoryIcon } from '@/lib/icons';
import Tilt from './Tilt';

export default function CategoryCard({ collection }: { collection: Collection }) {
  const [imgError, setImgError] = useState(false);
  const Icon = getCategoryIcon(collection.handle);
  const image = getCategoryImage(collection.handle);
  const count = getCollectionCount(collection.handle);

  return (
    <Tilt className="h-full" max={10}>
      <Link
        href={`/collections/${collection.handle}`}
        className="group block h-full overflow-hidden rounded-3xl border border-line bg-surface shadow-card transition-shadow duration-200 [transform-style:preserve-3d] hover:shadow-cardHover"
        aria-label={`${collection.title} (${count} منتج)`}
      >
        {/* Visual: representative product floating on a soft tint */}
        <div className="relative aspect-[5/4] overflow-hidden bg-gradient-to-br from-surface-soft to-surface-sunken">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-brand-300/25 blur-2xl dark:bg-brand-500/15"
          />
          {image && !imgError ? (
            <Image
              src={image}
              alt={collection.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-contain p-6 transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transform-none"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="grid h-full place-items-center">
              <Icon size={48} strokeWidth={1.4} className="text-brand/40" aria-hidden="true" />
            </div>
          )}

          {/* Icon badge — floats forward in 3D space */}
          <span
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-2xl bg-surface/90 text-brand shadow-soft ring-1 ring-black/5 backdrop-blur dark:bg-slate-900/70"
            style={{ transform: 'translateZ(38px)' }}
          >
            <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
          </span>
        </div>

        {/* Label */}
        <div className="flex items-center justify-between gap-2 p-4">
          <div className="min-w-0">
            <div className="truncate font-display text-sm font-bold text-ink sm:text-base">
              {collection.title}
            </div>
            <div className="text-[11px] text-ink-mute sm:text-xs">{count} منتج</div>
          </div>
          <ArrowLeft
            size={18}
            aria-hidden="true"
            className="shrink-0 -translate-x-1 text-brand opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
          />
        </div>
      </Link>
    </Tilt>
  );
}
