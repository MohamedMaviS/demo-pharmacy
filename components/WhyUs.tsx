'use client';

import { motion } from 'framer-motion';
import { Truck, ShieldCheck, CreditCard, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Tilt from './Tilt';

type Feature = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  from: string;
  to: string;
};

const FEATURES: Feature[] = [
  {
    Icon: Truck,
    title: 'شحن سريع',
    desc: 'توصيل خلال ١ إلى ٣ أيام لكل المحافظات، ومجاني فوق ٥٠٠ جنيه.',
    from: 'from-emerald-500',
    to: 'to-emerald-700',
  },
  {
    Icon: ShieldCheck,
    title: 'منتجات أصلية',
    desc: '١٠٠٪ أصلية من الموزّعين المعتمدين مع ضمان الجودة.',
    from: 'from-teal-500',
    to: 'to-teal-700',
  },
  {
    Icon: CreditCard,
    title: 'دفع آمن ومرن',
    desc: 'ادفع كاش عند الاستلام أو أونلاين بكل أمان وسهولة.',
    from: 'from-sky-500',
    to: 'to-sky-700',
  },
  {
    Icon: Headphones,
    title: 'دعم ٢٤/٧',
    desc: 'فريقنا في خدمتك طوال الأسبوع للرد على استفساراتك.',
    from: 'from-indigo-500',
    to: 'to-indigo-700',
  },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12" aria-label="مميزاتنا">
      <SectionHeader
        eyebrow="مميزاتنا"
        title="ليه تتسوّق معانا؟"
        subtitle="تجربة تسوّق صحية مريحة من أول الطلب لحد باب بيتك"
        align="center"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Tilt className="h-full" max={8}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-surface p-6 shadow-card transition-shadow duration-300 [transform-style:preserve-3d] hover:shadow-cardHover">
                {/* glow that reveals on hover */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${f.from} ${f.to} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20`}
                />
                <span
                  className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${f.from} ${f.to} text-white shadow-soft transition-transform duration-300 group-hover:scale-110`}
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <f.Icon size={26} strokeWidth={1.9} aria-hidden="true" />
                </span>
                <h3
                  className="relative mt-5 font-display text-lg font-extrabold text-ink"
                  style={{ transform: 'translateZ(22px)' }}
                >
                  {f.title}
                </h3>
                <p className="relative mt-1.5 text-sm leading-relaxed text-ink-mute">
                  {f.desc}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
