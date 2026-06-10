'use client';

import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  X,
  Percent,
  Truck,
  ShieldCheck,
  Tag,
  FileText,
  Sparkles,
  HeartPulse,
  Clock,
  ArrowLeft,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

type Notif = {
  Icon: LucideIcon;
  tile: string; // gradient tokens
  title: string;
  msg: string;
  href?: string;
  cta?: string;
};

// Calm pharmacy palette: brand green / trust blue, red only for offers.
const NOTIFS: Notif[] = [
  { Icon: Percent, tile: 'from-accent-500 to-accent-700', title: 'خصومات تصل ٦٧٪', msg: 'وفّر على مستحضرات العناية والأم والطفل', href: '/collections/mom-baby', cta: 'اكتشف العروض' },
  { Icon: Truck, tile: 'from-brand-500 to-brand-700', title: 'شحن مجاني', msg: 'لكل الطلبات فوق ٥٠٠ ج ولكل المحافظات' },
  { Icon: ShieldCheck, tile: 'from-trust-500 to-trust-700', title: 'منتجات أصلية ١٠٠٪', msg: 'من موزّعين معتمدين وبضمان الجودة' },
  { Icon: Tag, tile: 'from-accent-500 to-accent-700', title: 'كود خصم DEMO10', msg: 'استخدمه عند الدفع واحصل على خصم فوري', href: '/cart', cta: 'استخدم الكود' },
  { Icon: FileText, tile: 'from-brand-500 to-brand-700', title: 'عندك روشتة؟', msg: 'ارفعها وصيدلي معتمد هيراجعها ويوصّلك دواك', href: '/prescription', cta: 'ارفع روشتتك' },
  { Icon: Sparkles, tile: 'from-trust-500 to-trust-700', title: 'وصل حديثًا', msg: 'تشكيلة جديدة من الفيتامينات والعناية', href: '/collections/vitamins', cta: 'تسوّق الجديد' },
  { Icon: HeartPulse, tile: 'from-brand-500 to-brand-700', title: 'اسأل الصيدلي', msg: 'استشارة مجانية عن أدويتك ومنتجاتك', href: '/ask-pharmacist', cta: 'ابدأ الاستشارة' },
  { Icon: Clock, tile: 'from-trust-500 to-trust-700', title: 'توصيل سريع', msg: 'طلبك يوصلك خلال ١ إلى ٣ أيام عمل' },
];

/** Stop nudging after a few appearances — calm, not nagging. */
const MAX_SHOWS = 4;

const FIRST_MS = 7000;
const CYCLE_MS = 30000;
const SHOW_MS = 7000;

export default function NotificationToasts() {
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState<Notif | null>(null);
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const iRef = useRef(0);
  const hideRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const scheduleHide = (ms: number) => {
      if (hideRef.current) clearTimeout(hideRef.current);
      hideRef.current = setTimeout(() => setOpen(false), ms);
    };
    const show = () => {
      if (pausedRef.current) return; // don't swap while the user is reading
      if (iRef.current >= MAX_SHOWS) return; // calm: stop after a few nudges
      setCurrent(NOTIFS[iRef.current % NOTIFS.length]);
      iRef.current += 1;
      setOpen(true);
      scheduleHide(SHOW_MS);
    };
    const first = setTimeout(show, FIRST_MS);
    const cycle = setInterval(show, CYCLE_MS);
    return () => {
      clearTimeout(first);
      clearInterval(cycle);
      if (hideRef.current) clearTimeout(hideRef.current);
    };
  }, []);

  const onEnter = () => {
    pausedRef.current = true;
    setPaused(true);
    if (hideRef.current) clearTimeout(hideRef.current);
  };
  const onLeave = () => {
    pausedRef.current = false;
    setPaused(false);
    if (hideRef.current) clearTimeout(hideRef.current);
    hideRef.current = setTimeout(() => setOpen(false), 2800);
  };
  const close = () => {
    if (hideRef.current) clearTimeout(hideRef.current);
    setOpen(false);
  };

  return (
    <div className="pointer-events-none fixed bottom-[150px] left-4 z-40 w-[19rem] max-w-[calc(100vw-2rem)] lg:bottom-24 lg:left-6">
      <AnimatePresence>
        {open && current && (
          <motion.div
            key={current.title}
            role="status"
            aria-live="polite"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: -120, scale: 0.92 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: -120, scale: 0.92 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto relative overflow-hidden rounded-2xl border border-line bg-surface/95 p-3.5 shadow-cardHover backdrop-blur-md supports-[backdrop-filter]:bg-surface/85"
          >
            <button
              onClick={close}
              aria-label="إغلاق"
              className="absolute left-2 top-2 grid h-6 w-6 cursor-pointer place-items-center rounded-full text-ink-mute transition-colors hover:bg-surface-sunken hover:text-ink"
            >
              <X size={13} aria-hidden="true" />
            </button>

            <div className="flex items-start gap-3 pe-4">
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${current.tile} text-white shadow-soft`}>
                <current.Icon size={20} aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <h4 className="text-sm font-bold leading-tight text-ink">{current.title}</h4>
                <p className="mt-0.5 text-xs leading-snug text-ink-mute">{current.msg}</p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[10px] font-medium text-ink-mute">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    صيدلية ديمو · الآن
                  </span>
                  {current.href && current.cta && (
                    <Link
                      href={current.href}
                      onClick={close}
                      className="group inline-flex items-center gap-1 text-[11px] font-bold text-brand hover:text-brand-700"
                    >
                      {current.cta}
                      <ArrowLeft size={12} aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* auto-dismiss countdown bar */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-surface-sunken">
              <div
                key={current.title}
                className={`h-full origin-left bg-gradient-to-l from-brand-400 to-brand-600 ${reduce ? 'hidden' : ''}`}
                style={{
                  animation: `barShrink ${SHOW_MS}ms linear forwards`,
                  animationPlayState: paused ? 'paused' : 'running',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
