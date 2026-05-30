'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Expand, X, ZoomIn } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { BLUR_DATA_URL } from '@/lib/utils';

type Props = {
  image: string;
  title: string;
  badge?: React.ReactNode;
};

export default function ProductGallery({ image, title, badge }: Props) {
  const [imgError, setImgError] = useState(false);
  const [zooming, setZooming] = useState(false);
  const [origin, setOrigin] = useState('50% 50%');
  const [lightbox, setLightbox] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setImgError(false);
  }, [image]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setLightbox(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setOrigin(`${x}% ${y}%`);
  };

  return (
    <>
      <div
        ref={ref}
        onMouseEnter={() => setZooming(true)}
        onMouseLeave={() => setZooming(false)}
        onMouseMove={onMove}
        onClick={() => setLightbox(true)}
        className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-2xl border border-line bg-surface-sunken"
        role="button"
        tabIndex={0}
        aria-label={`تكبير صورة ${title}`}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setLightbox(true)}
      >
        {!imgError ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            onError={() => setImgError(true)}
            className="object-contain p-6 transition-transform duration-200 ease-out motion-reduce:!transform-none"
            style={{
              transform: zooming ? 'scale(1.9)' : 'scale(1)',
              transformOrigin: origin,
            }}
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-ink-mute">
            {title}
          </div>
        )}

        {badge && <div className="pointer-events-none absolute right-4 top-4">{badge}</div>}

        {/* Hint + expand affordances */}
        <span className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-surface/90 px-2.5 py-1 text-[11px] font-medium text-ink-soft shadow-sm ring-1 ring-black/5 transition-opacity duration-200 group-hover:opacity-0">
          <ZoomIn size={13} aria-hidden="true" />
          مرّر للتكبير
        </span>
        <span className="pointer-events-none absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-full bg-surface/90 text-ink-soft shadow-sm ring-1 ring-black/5">
          <Expand size={16} aria-hidden="true" />
        </span>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setLightbox(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`صورة مكبّرة: ${title}`}
          >
            <button
              onClick={() => setLightbox(false)}
              aria-label="إغلاق"
              className="absolute right-4 top-4 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur transition-colors duration-200 hover:bg-white/25"
            >
              <X size={24} aria-hidden="true" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[80vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {!imgError && (
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
