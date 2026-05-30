'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  Truck,
  ShieldCheck,
  Clock,
  Tag,
  CreditCard,
  Headphones,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';

type Announcement = { Icon: LucideIcon; text: string };

const MESSAGES: Announcement[] = [
  { Icon: Truck, text: 'شحن مجاني لجميع الطلبات فوق ٥٠٠ جنيه' },
  { Icon: ShieldCheck, text: 'منتجات أصلية ١٠٠٪ مع ضمان الجودة' },
  { Icon: Clock, text: 'توصيل سريع خلال ١ إلى ٣ أيام لكل المحافظات' },
  { Icon: Tag, text: 'خصومات تصل إلى ٥٠٪ على منتجات مختارة' },
  { Icon: CreditCard, text: 'ادفع كاش عند الاستلام أو أونلاين بأمان' },
  { Icon: Headphones, text: 'دعم العملاء متاح ٢٤ ساعة طوال الأسبوع' },
  { Icon: Sparkles, text: 'نسخة ديمو للعرض فقط — كل البيانات والأسعار وهمية' },
];

const ROTATE_MS = 3500;

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const current = MESSAGES[index];
  const Icon = current.Icon;

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-l from-brand-700 via-brand to-brand-700 text-white"
      role="region"
      aria-label="إعلانات وعروض"
    >
      {/* Decorative moving sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, transparent, transparent 18px, rgba(255,255,255,0.18) 18px, rgba(255,255,255,0.18) 20px)',
        }}
      />
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-center px-4 sm:h-10">
        <div className="relative h-5 w-full max-w-xl overflow-hidden text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center gap-2 text-[11px] font-medium sm:text-sm"
            >
              <Icon size={15} aria-hidden="true" className="shrink-0" />
              <span className="truncate">{current.text}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
