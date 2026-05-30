'use client';

import { animate, useInView, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Package, Award, LayoutGrid, Headphones } from 'lucide-react';

const STATS = [
  { Icon: Package, to: 180, suffix: '+', label: 'منتج متاح' },
  { Icon: Award, to: 50, suffix: '+', label: 'علامة عالمية' },
  { Icon: LayoutGrid, to: 13, suffix: '', label: 'قسم متنوّع' },
  { Icon: Headphones, to: 24, suffix: '/7', label: 'دعم العملاء' },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

export default function StatsBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8" aria-label="إحصائيات">
      <div className="relative overflow-hidden rounded-4xl border border-line bg-surface p-6 shadow-card sm:p-8">
        {/* soft decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-300/20 blur-3xl dark:bg-brand-500/10"
        />
        <div className="relative grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map(({ Icon, to, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm">
                <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
              </span>
              <div>
                <div className="font-display text-2xl font-black tracking-tight text-ink sm:text-3xl">
                  <Counter to={to} suffix={suffix} />
                </div>
                <div className="text-xs text-ink-mute sm:text-sm">{label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
