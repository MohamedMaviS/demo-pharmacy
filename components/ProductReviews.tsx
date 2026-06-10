'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ThumbsUp, BadgeCheck, Camera, X, ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import { useMemo, useState } from 'react';

import { getProductMeta, getReviews, getRatingBreakdown, type Review } from '@/lib/productMeta';
import { getProductByHandle, getRelatedProducts } from '@/lib/data';
import { cn } from '@/lib/utils';
import Stars from './Stars';
import SectionHeader from './SectionHeader';

type RevWithPhotos = Review & { photos: string[] };
type SortKey = 'helpful' | 'rating' | 'recent';

const SORTS: { key: SortKey; label: string }[] = [
  { key: 'helpful', label: 'الأكثر إفادة' },
  { key: 'rating', label: 'الأعلى تقييمًا' },
  { key: 'recent', label: 'الأحدث' },
];

export default function ProductReviews({ handle }: { handle: string }) {
  const meta = getProductMeta(handle);
  const breakdown = getRatingBreakdown(handle); // [5★%, 4★%, 3★%, 2★%, 1★%]
  const recommend = Math.min(99, breakdown[0] + breakdown[1]);

  const photoPool = useMemo(() => {
    const p = getProductByHandle(handle);
    const pool: string[] = [];
    if (p) {
      pool.push(p.image);
      for (const r of getRelatedProducts(p, 6)) pool.push(r.image);
    }
    return Array.from(new Set(pool));
  }, [handle]);

  const reviews: RevWithPhotos[] = useMemo(() => {
    const base = getReviews(handle, 8);
    return base.map((r, i) => ({
      ...r,
      photos:
        photoPool.length >= 2 && i % 2 === 0
          ? [photoPool[(i + 1) % photoPool.length], ...(i % 4 === 0 ? [photoPool[(i + 2) % photoPool.length]] : [])]
          : [],
    }));
  }, [handle, photoPool]);

  const allPhotos = useMemo(
    () => Array.from(new Set(reviews.flatMap((r) => r.photos))).slice(0, 6),
    [reviews],
  );
  const available = useMemo(() => new Set(reviews.map((r) => r.rating)), [reviews]);

  const [star, setStar] = useState<number | null>(null);
  const [sort, setSort] = useState<SortKey>('helpful');
  const [visible, setVisible] = useState(4);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [sortOpen, setSortOpen] = useState(false);

  const shown = useMemo(() => {
    let list = star ? reviews.filter((r) => r.rating === star) : [...reviews];
    if (sort === 'helpful') list = [...list].sort((a, b) => b.helpful - a.helpful);
    else if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [reviews, star, sort]);

  return (
    <section className="mt-14" aria-labelledby="reviews-heading">
      <SectionHeader eyebrow="آراء العملاء" title="التقييمات والمراجعات" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr]">
        {/* Summary */}
        <div className="rounded-3xl border border-line bg-surface p-6 shadow-card lg:sticky lg:top-44 lg:self-start">
          <div className="text-center">
            <div className="font-display text-5xl font-black text-ink">{meta.rating.toFixed(1)}</div>
            <div className="mt-2 flex justify-center"><Stars rating={meta.rating} size={18} showCount={false} /></div>
            <div className="mt-1.5 text-xs text-ink-mute">بناءً على {meta.reviews} تقييم</div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-brand-50 py-2.5 text-xs font-bold text-brand-800 dark:bg-brand-500/10 dark:text-brand-300">
            <BadgeCheck size={14} aria-hidden="true" /> {recommend}٪ ينصحون بالمنتج
          </div>

          <div className="mt-5 space-y-1.5">
            {breakdown.map((pct, i) => {
              const s = 5 - i;
              const can = available.has(s);
              const activeStar = star === s;
              return (
                <button
                  key={i}
                  disabled={!can}
                  onClick={() => setStar(activeStar ? null : s)}
                  className={cn(
                    'flex w-full items-center gap-2 rounded-lg px-1.5 py-1 text-xs transition-colors',
                    can ? 'cursor-pointer hover:bg-surface-sunken' : 'cursor-default opacity-60',
                    activeStar && 'bg-amber-50 dark:bg-amber-500/10',
                  )}
                >
                  <span className="w-3 text-ink-mute">{s}</span>
                  <span className="text-amber-400">★</span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface-sunken">
                    <span className="block h-full rounded-full bg-amber-400" style={{ width: `${pct}%` }} />
                  </span>
                  <span className="w-8 text-left text-ink-mute">{pct}%</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => toast.info('ده ديمو للعرض فقط')}
            className="mt-5 min-h-[44px] w-full cursor-pointer rounded-full border border-trust py-2.5 text-sm font-bold text-trust transition-colors duration-200 hover:bg-trust hover:text-white"
          >
            اكتب تقييمك
          </button>
        </div>

        {/* Review list */}
        <div>
          {/* Customer photos strip */}
          {allPhotos.length > 0 && (
            <div className="mb-5 rounded-2xl border border-line bg-surface p-4 shadow-card">
              <div className="mb-2.5 flex items-center gap-2 text-sm font-bold text-ink">
                <Camera size={16} className="text-brand" aria-hidden="true" /> صور من العملاء
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {allPhotos.map((src) => (
                  <button
                    key={src}
                    onClick={() => setLightbox(src)}
                    className="relative h-16 w-16 shrink-0 cursor-pointer overflow-hidden rounded-xl border border-line bg-surface-sunken transition-transform hover:-translate-y-0.5"
                    aria-label="عرض الصورة"
                  >
                    <Image src={src} alt="" fill sizes="64px" className="object-contain p-1.5" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Toolbar: active star filter + sort */}
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-ink-mute">
              <span aria-live="polite">{shown.length} مراجعة</span>
              {star && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 font-bold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                  {star} نجوم
                  <button onClick={() => setStar(null)} aria-label="إلغاء الفلتر" className="cursor-pointer"><X size={11} aria-hidden="true" /></button>
                </span>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setSortOpen((o) => !o)}
                className="flex cursor-pointer items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-bold text-ink-soft transition-colors hover:border-trust hover:text-trust"
              >
                {SORTS.find((s) => s.key === sort)?.label}
                <ChevronDown size={13} aria-hidden="true" className={cn('transition-transform', sortOpen && 'rotate-180')} />
              </button>
              {sortOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setSortOpen(false)} aria-hidden="true" />
                  <ul className="absolute left-0 top-full z-40 mt-1.5 w-44 overflow-hidden rounded-xl border border-line bg-surface p-1 shadow-cardHover">
                    {SORTS.map((s) => (
                      <li key={s.key}>
                        <button
                          onClick={() => { setSort(s.key); setSortOpen(false); }}
                          className={cn('w-full cursor-pointer rounded-lg px-3 py-2 text-right text-xs transition-colors', sort === s.key ? 'bg-surface-soft font-bold text-brand' : 'text-ink-soft hover:bg-surface-sunken')}
                        >
                          {s.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {shown.length === 0 ? (
            <p className="rounded-2xl border border-line bg-surface p-8 text-center text-sm text-ink-mute shadow-card">لا توجد مراجعات بهذا التقييم.</p>
          ) : (
            <div className="space-y-3">
              {shown.slice(0, visible).map((r, i) => (
                <motion.div
                  key={`${r.name}-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: Math.min(i, 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-line bg-surface p-4 shadow-card"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">{r.name.charAt(0)}</span>
                      <div>
                        <div className="flex items-center gap-1.5 text-sm font-bold text-ink">
                          {r.name}
                          <span className="inline-flex items-center gap-0.5 rounded-full bg-brand-50 px-1.5 py-0.5 text-[9px] font-semibold text-brand-700 dark:bg-slate-800 dark:text-brand-300">
                            <BadgeCheck size={10} aria-hidden="true" /> مشترٍ موثّق
                          </span>
                        </div>
                        <div className="text-[11px] text-ink-mute">{r.date}</div>
                      </div>
                    </div>
                    <Stars rating={r.rating} size={13} showCount={false} />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{r.text}</p>

                  {r.photos.length > 0 && (
                    <div className="mt-3 flex gap-2">
                      {r.photos.map((src) => (
                        <button key={src} onClick={() => setLightbox(src)} className="relative h-16 w-16 cursor-pointer overflow-hidden rounded-lg border border-line bg-surface-sunken transition-transform hover:-translate-y-0.5" aria-label="عرض الصورة">
                          <Image src={src} alt="" fill sizes="64px" className="object-contain p-1.5" />
                        </button>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => toast.success('شكرًا لتقييمك')}
                    className="mt-3 inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-mute transition-colors duration-200 hover:border-brand hover:text-brand"
                  >
                    <ThumbsUp size={13} aria-hidden="true" /> مفيد ({r.helpful})
                  </button>
                </motion.div>
              ))}

              {visible < shown.length && (
                <div className="pt-2 text-center">
                  <button
                    onClick={() => setVisible((v) => v + 4)}
                    className="cursor-pointer rounded-full border border-line bg-surface px-6 py-2.5 text-sm font-bold text-ink-soft shadow-card transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
                  >
                    عرض مراجعات أكثر ({shown.length - visible})
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative h-[70vh] max-h-[28rem] w-full max-w-md overflow-hidden rounded-3xl bg-white p-4 shadow-cardHover"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightbox} alt="" fill sizes="28rem" className="object-contain p-6" />
              <button onClick={() => setLightbox(null)} aria-label="إغلاق" className="absolute left-3 top-3 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200">
                <X size={18} aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
