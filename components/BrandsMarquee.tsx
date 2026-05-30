'use client';

import Image from 'next/image';
import { useState } from 'react';

/**
 * Continuously scrolling wall of trusted global brand logos.
 * Uses the real public brand-logo images (same CDN as the rest of the demo) on
 * clean white cards so they read well in both light and dark mode.
 * Wrapper is forced dir="ltr" so the strip fills the viewport in an RTL page.
 */

const CDN = 'https://nourpharmacies.com/cdn/shop/files';

type Brand = { name: string; image: string };

const BRANDS: Brand[] = [
  { name: 'La Roche-Posay', image: `${CDN}/IMG-20251019-WA0021_641b655c-d8de-41df-8d02-cb833aa1b5ea.jpg?v=1762002429&width=400` },
  { name: 'Vichy', image: `${CDN}/IMG-20251019-WA0022_6c171533-58a3-4c9f-bae8-577eacf3228a.jpg?v=1762002429&width=400` },
  { name: 'CeraVe', image: `${CDN}/IMG-20251019-WA0023_f5a12c73-d34a-4c03-9741-ac8d76880b64.jpg?v=1762002429&width=400` },
  { name: 'Avène', image: `${CDN}/IMG-20251019-WA0013_c277bc2c-e1f5-4523-a5b7-5a14bdd3250f.jpg?v=1762002429&width=400` },
  { name: 'Beesline', image: `${CDN}/IMG-20251019-WA0014_de3628c0-f1af-47b8-9fc5-1d62cce58d82.jpg?v=1762002429&width=400` },
  { name: 'Sheglam', image: `${CDN}/IMG-20251019-WA0011_0ac48d7e-695c-45d6-b37a-2ad619a20c4d.jpg?v=1762002429&width=400` },
  { name: 'Kolagra', image: `${CDN}/IMG-20251019-WA0018_3082f973-b89e-4fa1-8ce6-ca42fbc7d883.jpg?v=1762002429&width=400` },
  { name: 'Nano Treat', image: `${CDN}/IMG-20251019-WA0017_e9766bb4-b426-4fa6-b2da-206b0b50dbf9.jpg?v=1762002429&width=400` },
  { name: 'Capixy', image: `${CDN}/IMG-20251019-WA0012_6402691a-9055-4935-ad95-7d4dfbfc9bb5.jpg?v=1762002429&width=400` },
  { name: 'Eva', image: `${CDN}/IMG-20251019-WA0019_659f93d5-81cc-4c19-abb9-3122c2c91d9a.jpg?v=1762002429&width=400` },
  { name: 'Hayah', image: `${CDN}/IMG-20251019-WA0025_bf26740d-b947-4187-a925-d65cb247eaef.jpg?v=1762002429&width=400` },
  { name: 'Dear', image: `${CDN}/IMG-20251019-WA0016_27dad214-35ae-4bc9-811d-072d99b15475.jpg?v=1762002429&width=400` },
  { name: 'Clary', image: `${CDN}/IMG-20251019-WA0015_41cd8efb-aa73-450a-9132-7640496eaaf9.jpg?v=1762002429&width=400` },
  { name: 'Glamy Lab', image: `${CDN}/IMG-20251019-WA0027_a9fd3ab0-5837-49b2-bb6e-6f681c622aa0.jpg?v=1762002429&width=400` },
  { name: 'Twist & Go', image: `${CDN}/IMG-20251019-WA0020_c180800a-e0f0-4736-aaa7-2eacb72a5ff4.jpg?v=1762002429&width=400` },
];

export default function BrandsMarquee() {
  // Duplicate so the -50% translate loops seamlessly.
  const loop = [...BRANDS, ...BRANDS];

  return (
    <section
      className="border-t border-line bg-surface py-8"
      aria-label="ماركات عالمية موثوقة"
    >
      <div className="mx-auto mb-5 max-w-7xl px-4 text-center">
        <h2 className="font-display text-base font-bold text-ink sm:text-lg">
          ماركات عالمية موثوقة
        </h2>
        <p className="mt-0.5 text-xs text-ink-mute sm:text-sm">
          نوفّر لك منتجات أصلية من أشهر العلامات العالمية
        </p>
      </div>

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
          className="flex w-max items-center gap-4 px-4 group-hover:[animation-play-state:paused] motion-reduce:!animate-none"
          style={{
            animationName: 'marqueeX',
            animationDuration: '45s',
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
            willChange: 'transform',
          }}
        >
          {loop.map((b, i) => (
            <BrandLogo key={`${b.name}-${i}`} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandLogo({ brand }: { brand: Brand }) {
  const [error, setError] = useState(false);
  return (
    <div
      className="flex h-28 w-52 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cardHover sm:h-32 sm:w-60"
      title={brand.name}
    >
      {!error ? (
        <div className="relative h-full w-full">
          <Image
            src={brand.image}
            alt={brand.name}
            fill
            sizes="240px"
            className="object-contain"
            onError={() => setError(true)}
          />
        </div>
      ) : (
        <span className="text-center text-base font-bold text-ink-mute">{brand.name}</span>
      )}
    </div>
  );
}
