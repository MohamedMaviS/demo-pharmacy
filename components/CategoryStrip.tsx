'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { QUICK_LINKS } from '@/lib/data';
import { getCategoryIcon } from '@/lib/icons';
import { LayoutGrid } from 'lucide-react';

export default function CategoryStrip() {
  return (
    <section
      aria-label="الفئات السريعة"
      className="border-b border-line bg-surface"
    >
      <div className="mx-auto max-w-7xl px-2 py-4 sm:px-4">
        {/*
          Edge-fade mask so the categories that overflow the row fade out
          gracefully (signalling "scroll for more") instead of a hard cut.
        */}
        <div
          className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-2.5 overflow-x-auto scroll-px-4 pb-1 sm:gap-4"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 3%, black 97%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 3%, black 97%, transparent)',
          }}
        >
          {QUICK_LINKS.map((item, i) => {
            const handle = item.href.startsWith('/collections/')
              ? item.href.replace('/collections/', '')
              : 'all';
            const Icon = handle === 'all' ? LayoutGrid : getCategoryIcon(handle);

            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                className="snap-start"
              >
                <Link
                  href={item.href}
                  className="group flex w-[4.5rem] cursor-pointer flex-col items-center gap-2 sm:w-24"
                  aria-label={item.label}
                >
                  <div className="relative grid h-16 w-16 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50 to-trust-50 ring-1 ring-brand-100/60 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-cardHover dark:from-slate-800 dark:to-slate-900 dark:ring-white/10 sm:h-[4.5rem] sm:w-[4.5rem]">
                    <Icon
                      size={27}
                      strokeWidth={1.7}
                      aria-hidden="true"
                      className="text-brand transition-colors duration-200 group-hover:text-brand-700 dark:text-brand-400"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-2xl ring-2 ring-transparent transition-all duration-200 group-hover:ring-brand-300 dark:group-hover:ring-brand-500"
                    />
                  </div>
                  <span className="line-clamp-2 text-center text-[11px] font-medium leading-tight text-ink-soft transition-colors duration-200 group-hover:text-brand sm:text-xs">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
