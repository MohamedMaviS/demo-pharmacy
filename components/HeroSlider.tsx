'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { HERO_SLIDES } from '@/lib/data';

const AUTOPLAY_MS = 5000;

export default function HeroSlider() {
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
      className="relative mx-auto max-w-7xl px-4 pt-4"
      aria-roledescription="carousel"
      aria-label="عروض البانر الرئيسية"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 shadow-cardHover ring-1 ring-black/5 sm:aspect-[16/6.2]">
        {/* Slides — shown clean and vivid (banners carry their own design/text) */}
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
            aria-label={`الشريحة ${index + 1} من ${total}: ${slide.title}`}
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
            {/* Subtle bottom scrim only — keeps dots/controls legible without washing the art */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next — z-20 so they sit ABOVE the slide link layer */}
        <button
          type="button"
          aria-label="الشريحة السابقة"
          onClick={prev}
          className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/85 text-ink shadow-cardHover ring-1 ring-black/5 backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white sm:h-12 sm:w-12"
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="الشريحة التالية"
          onClick={next}
          className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-white/85 text-ink shadow-cardHover ring-1 ring-black/5 backdrop-blur transition-all duration-200 hover:scale-105 hover:bg-white sm:h-12 sm:w-12"
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>

        {/* Dots */}
        <div
          className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2"
          role="tablist"
          aria-label="انتقل إلى الشريحة"
        >
          {HERO_SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`الانتقال للشريحة ${i + 1}`}
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
