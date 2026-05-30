'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BRAND_CHIPS } from '@/lib/data';

export default function BrandChips() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6" aria-label="علامات تجارية مميزة">
      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar sm:justify-center sm:gap-6">
        {BRAND_CHIPS.map((chip, i) => (
          <motion.div
            key={chip.label}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={chip.href}
              className="group flex cursor-pointer flex-col items-center gap-2 text-center"
              aria-label={`عرض منتجات ${chip.label}`}
            >
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-line bg-surface shadow-card transition-shadow duration-200 group-hover:shadow-cardHover sm:h-20 sm:w-20">
                <Image
                  src={chip.image}
                  alt={chip.label}
                  fill
                  sizes="80px"
                  className="object-contain p-2"
                />
              </div>
              <span className="whitespace-nowrap text-xs font-medium text-ink-soft transition-colors duration-200 group-hover:text-brand">
                {chip.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
