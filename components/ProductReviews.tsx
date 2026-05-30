'use client';

import { motion } from 'framer-motion';
import { ThumbsUp, BadgeCheck } from 'lucide-react';
import { toast } from 'sonner';

import { getProductMeta, getReviews, getRatingBreakdown } from '@/lib/productMeta';
import Stars from './Stars';
import SectionHeader from './SectionHeader';

export default function ProductReviews({ handle }: { handle: string }) {
  const meta = getProductMeta(handle);
  const reviews = getReviews(handle, 4);
  const breakdown = getRatingBreakdown(handle);

  return (
    <section className="mt-14" aria-labelledby="reviews-heading">
      <SectionHeader eyebrow="آراء العملاء" title="التقييمات والمراجعات" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr]">
        {/* Summary */}
        <div className="rounded-3xl border border-line bg-surface p-6 shadow-card lg:sticky lg:top-44 lg:self-start">
          <div className="text-center">
            <div className="font-display text-5xl font-black text-ink">
              {meta.rating.toFixed(1)}
            </div>
            <div className="mt-2 flex justify-center">
              <Stars rating={meta.rating} size={18} showCount={false} />
            </div>
            <div className="mt-1.5 text-xs text-ink-mute">
              بناءً على {meta.reviews} تقييم
            </div>
          </div>

          <div className="mt-5 space-y-1.5">
            {breakdown.map((pct, i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <span className="w-3 text-ink-mute">{5 - i}</span>
                <span className="text-amber-400">★</span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-sunken">
                  <div
                    className="h-full rounded-full bg-amber-400"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-8 text-left text-ink-mute">{pct}%</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => toast.info('ده ديمو للعرض فقط')}
            className="mt-5 min-h-[44px] w-full cursor-pointer rounded-full border border-trust py-2.5 text-sm font-bold text-trust transition-colors duration-200 hover:bg-trust hover:text-white"
          >
            اكتب تقييمك
          </button>
        </div>

        {/* Review list */}
        <div className="space-y-3">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-line bg-surface p-4 shadow-card"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-ink">
                      {r.name}
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-brand-50 px-1.5 py-0.5 text-[9px] font-semibold text-brand-700 dark:bg-slate-800 dark:text-brand-300">
                        <BadgeCheck size={10} aria-hidden="true" />
                        مشترٍ
                      </span>
                    </div>
                    <div className="text-[11px] text-ink-mute">{r.date}</div>
                  </div>
                </div>
                <Stars rating={r.rating} size={13} showCount={false} />
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{r.text}</p>

              <button
                onClick={() => toast.success('شكرًا لتقييمك')}
                className="mt-3 inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-mute transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                <ThumbsUp size={13} aria-hidden="true" />
                مفيد ({r.helpful})
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
