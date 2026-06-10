'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PackageCheck,
  Boxes,
  Truck,
  Bike,
  Home,
  Search,
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  ShoppingBag,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Step = { label: string; desc: string; Icon: LucideIcon; time: string };

const STEPS: Step[] = [
  { label: 'تم استلام الطلب', desc: 'وصلنا طلبك وجاري تأكيده', Icon: PackageCheck, time: '١٠:٠٢ ص' },
  { label: 'جاري التجهيز', desc: 'بنجهّز منتجاتك في الفرع', Icon: Boxes, time: '١٠:٤٥ ص' },
  { label: 'تم الشحن', desc: 'طلبك خرج من الفرع', Icon: Truck, time: '١٢:١٥ م' },
  { label: 'خرج للتوصيل', desc: 'المندوب في الطريق إليك', Icon: Bike, time: '٣:٢٠ م' },
  { label: 'تم التوصيل', desc: 'استمتع بمنتجاتك', Icon: Home, time: '—' },
];

// demo: order is currently "out for delivery" (index 3 active, 0-2 done)
const CURRENT = 3;

export default function TrackPage() {
  const [order, setOrder] = useState('');
  const [tracked, setTracked] = useState<string | null>(null);

  const track = (e: React.FormEvent) => {
    e.preventDefault();
    setTracked(order.trim() || 'DM-204815');
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-trust-600 via-trust-700 to-blue-800 p-6 text-white shadow-cardHover sm:p-7">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-black/10 blur-3xl" />
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
            <Truck size={28} aria-hidden="true" />
          </span>
          <div>
            <h1 className="font-display text-2xl font-black sm:text-3xl">تتبّع شحنتك</h1>
            <p className="mt-1 text-sm text-white/85">اكتب رقم الطلب وتابع رحلته خطوة بخطوة لحد باب البيت.</p>
          </div>
        </div>

        <form onSubmit={track} className="relative z-10 mt-5 flex gap-2">
          <div className="relative flex-1">
            <Search size={16} aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-trust-700/60" />
            <input
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              placeholder="رقم الطلب (مثال: DM-204815)"
              aria-label="رقم الطلب"
              className="w-full rounded-full border-0 bg-white py-3 pe-3 ps-9 text-sm text-ink outline-none placeholder:text-ink-mute"
            />
          </div>
          <button type="submit" className="shrink-0 cursor-pointer rounded-full bg-white/15 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/30 backdrop-blur-sm transition-colors hover:bg-white/25">
            تتبّع
          </button>
        </form>
      </div>

      {!tracked ? (
        <div className="mt-8 rounded-3xl border border-dashed border-line p-10 text-center">
          <Truck size={40} className="mx-auto text-ink-mute" aria-hidden="true" />
          <p className="mt-3 text-sm text-ink-mute">اكتب رقم طلبك فوق عشان نتتبّعه. (أي رقم يشتغل في الديمو)</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {/* Summary + ETA */}
          <div className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs text-ink-mute">رقم الطلب</div>
                <div className="font-display text-lg font-black text-ink">{tracked}</div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-trust-50 px-3 py-1.5 text-sm font-bold text-trust-700 dark:bg-trust-500/15 dark:text-trust-300">
                <Bike size={15} aria-hidden="true" /> {STEPS[CURRENT].label}
              </span>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl bg-gradient-to-l from-brand-50 to-surface p-4 dark:from-brand-500/10 dark:to-surface">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
                <Clock size={20} aria-hidden="true" />
              </span>
              <div>
                <div className="text-xs text-ink-mute">وقت التوصيل المتوقّع</div>
                <div className="font-display text-base font-black text-ink">اليوم · ٤:٠٠ - ٦:٠٠ مساءً</div>
              </div>
            </div>
          </div>

          {/* Courier */}
          <div className="flex items-center gap-3 rounded-3xl border border-line bg-surface p-5 shadow-card">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface-sunken text-2xl font-black text-brand">م</span>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-bold text-ink">محمود · مندوب التوصيل</div>
              <div className="flex items-center gap-1 text-xs text-ink-mute"><Bike size={12} aria-hidden="true" /> موتوسيكل · لوحة ٧٨٤٥</div>
            </div>
            <a href="tel:+201000000099" className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-700">
              <Phone size={15} aria-hidden="true" /> اتصال
            </a>
          </div>

          {/* Timeline */}
          <div className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6">
            <h3 className="mb-5 font-display text-base font-bold text-ink">رحلة الطلب</h3>
            <ol className="relative">
              {STEPS.map((s, i) => {
                const done = i < CURRENT;
                const current = i === CURRENT;
                const reached = i <= CURRENT;
                const last = i === STEPS.length - 1;
                return (
                  <motion.li
                    key={s.label}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex gap-4 pb-7 last:pb-0"
                  >
                    {/* connector line */}
                    {!last && (
                      <span aria-hidden="true" className={`absolute right-[1.4rem] top-11 h-[calc(100%-1.5rem)] w-0.5 ${done ? 'bg-brand' : 'bg-surface-sunken'}`} />
                    )}
                    {/* node */}
                    <span
                      className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors ${
                        done ? 'bg-brand text-white' : current ? 'bg-trust text-white ring-4 ring-trust-100 dark:ring-trust-500/20' : 'bg-surface-sunken text-ink-mute'
                      }`}
                    >
                      {current && (
                        <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-trust/40" />
                      )}
                      {done ? <CheckCircle2 size={20} aria-hidden="true" /> : <s.Icon size={19} aria-hidden="true" />}
                    </span>
                    {/* text */}
                    <div className="flex flex-1 items-start justify-between gap-2 pt-1">
                      <div>
                        <div className={`text-sm font-bold ${reached ? 'text-ink' : 'text-ink-mute'}`}>{s.label}</div>
                        <div className="text-xs text-ink-mute">{s.desc}</div>
                      </div>
                      <div className={`shrink-0 text-xs ${reached ? 'font-semibold text-ink-soft' : 'text-ink-mute'}`}>{s.time}</div>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>

          {/* Address + actions */}
          <div className="rounded-3xl border border-line bg-surface p-5 shadow-card">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface-sunken text-brand"><MapPin size={18} aria-hidden="true" /></span>
              <div>
                <div className="text-xs text-ink-mute">عنوان التوصيل</div>
                <div className="text-sm font-semibold text-ink">شارع جامعة الدول العربية، المهندسين، الجيزة</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Link href="/account" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-bold text-ink-soft shadow-card transition-colors hover:border-brand hover:text-brand">
              <ShoppingBag size={16} aria-hidden="true" /> كل طلباتي
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-trust px-6 py-3 text-sm font-bold text-white shadow-card transition-colors hover:bg-trust-800">
              متابعة التسوّق
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
