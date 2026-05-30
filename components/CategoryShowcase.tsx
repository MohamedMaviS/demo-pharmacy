'use client';

import { motion } from 'framer-motion';
import { COLLECTIONS } from '@/lib/data';
import SectionHeader from './SectionHeader';
import CategoryCard from './CategoryCard';

export default function CategoryShowcase() {
  const items = COLLECTIONS.slice(0, 8);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:py-12" aria-label="تسوّق حسب القسم">
      <SectionHeader
        eyebrow="الأقسام"
        title="تسوّق حسب القسم"
        subtitle="اختر القسم اللي يناسبك من تشكيلة واسعة"
        href="/search"
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {items.map((c, i) => (
          <motion.div
            key={c.handle}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.3, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <CategoryCard collection={c} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
