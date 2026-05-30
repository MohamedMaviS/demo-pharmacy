'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  href?: string;
  hrefLabel?: string;
  align?: 'start' | 'center';
  Icon?: LucideIcon;
  className?: string;
};

/**
 * Section header with a clear pharmacy identity:
 * a gradient icon tile (with soft glow), a small kicker, a large display title,
 * a connecting hairline rule, supporting subtitle and an optional "view all" CTA.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  href,
  hrefLabel = 'عرض الكل',
  align = 'start',
  Icon,
  className = '',
}: Props) {
  const centered = align === 'center';

  const Tile = Icon ? (
    <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_12px_26px_-8px_rgb(34_197_94/0.65)] ring-1 ring-white/25 sm:h-[3.25rem] sm:w-[3.25rem]">
      <span aria-hidden="true" className="absolute inset-x-2 top-1.5 h-1/3 rounded-full bg-white/30 blur-[2px]" />
      <Icon size={24} strokeWidth={2.2} aria-hidden="true" />
    </span>
  ) : null;

  const Kicker = eyebrow ? (
    <span
      className={`flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-300 ${
        centered ? 'justify-center' : ''
      }`}
    >
      <span className="h-px w-5 rounded-full bg-brand-400/70" />
      {eyebrow}
      {centered && <span className="h-px w-5 rounded-full bg-brand-400/70" />}
    </span>
  ) : null;

  /* ---------- centered (e.g. WhyUs) ---------- */
  if (centered) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-70px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`mb-9 flex flex-col items-center text-center ${className}`}
      >
        {Tile && <div className="mb-4">{Tile}</div>}
        {Kicker}
        <h2 className="mt-2 font-display text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">
          {title}
        </h2>
        <span className="mt-3 block h-1.5 w-16 rounded-full bg-gradient-to-l from-brand-400 to-brand-700" />
        {subtitle && (
          <p className="mt-3 max-w-xl text-sm text-ink-mute sm:text-base">{subtitle}</p>
        )}
      </motion.div>
    );
  }

  /* ---------- start (rows + connecting rule) ---------- */
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-7 ${className}`}
    >
      <div className="flex items-center gap-3.5 sm:gap-4">
        {Tile}
        <div className="min-w-0 shrink-0">
          {Kicker}
          <h2 className="mt-1 font-display text-2xl font-black leading-tight tracking-tight text-ink sm:text-[1.95rem]">
            {title}
          </h2>
        </div>

        {/* connecting hairline rule */}
        <span
          aria-hidden="true"
          className="hidden h-px flex-1 bg-gradient-to-l from-line via-line to-transparent sm:block"
        />

        {href && (
          <Link
            href={href}
            className="group hidden shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-bold text-ink-soft shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:bg-brand-50 hover:text-brand dark:hover:bg-slate-800 sm:inline-flex"
          >
            {hrefLabel}
            <ArrowLeft
              size={15}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
          </Link>
        )}
      </div>

      {subtitle && (
        <p className="mt-2.5 text-sm text-ink-mute sm:ps-[4.25rem]">{subtitle}</p>
      )}
    </motion.div>
  );
}
