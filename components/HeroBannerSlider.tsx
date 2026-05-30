'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { HERO_SLIDES } from '@/lib/data';

const AUTOPLAY_MS = 5000;

export default function HeroBannerSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = HERO_SLIDES.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [next, paused]);

  const slide = HERO_SLIDES[index];

  return (
    <section
      className="mx-auto max-w-7xl px-4 pt-5 sm:pt-7"
      aria-roledescription="carousel"
      aria-label="عروض الصيدلية"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-surface-sunken shadow-soft ring-1 ring-black/5 sm:aspect-[16/6]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} من ${total}`}
          >
            <Link href={slide.href} className="block h-full w-full" tabIndex={-1}>
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
                priority={index === 0}
              />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* "Shop now" CTA */}
        <Link
          href={slide.href}
          className="group absolute bottom-5 right-5 z-20 inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-bold text-brand-800 shadow-cardHover backdrop-blur transition-transform duration-200 hover:-translate-y-0.5"
        >
          تسوّق الآن
          <ArrowLeft size={15} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-0.5" />
        </Link>

        {/* Arrows */}
        <button
          type="button"
          aria-label="السابق"
          onClick={prev}
          className="absolute right-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/85 text-ink shadow-card ring-1 ring-black/5 backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white sm:h-12 sm:w-12"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="التالي"
          onClick={next}
          className="absolute left-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/85 text-ink shadow-card ring-1 ring-black/5 backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white sm:h-12 sm:w-12"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5" role="tablist">
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`الشريحة ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 cursor-pointer rounded-full shadow-sm transition-all duration-300 ${
                i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/90'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
