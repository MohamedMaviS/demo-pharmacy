'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Stethoscope,
  CheckCircle2,
  Clock,
  Lock,
  ShieldCheck,
  User,
  Phone,
  MessageCircle,
  Send,
} from 'lucide-react';
import { motion } from 'framer-motion';

import { SITE } from '@/lib/data';

const TOPICS = ['دواء وجرعات', 'بشرة وعناية', 'فيتامينات ومكمّلات', 'الأم والطفل', 'استفسار عام'];

export default function AskPharmacistPage() {
  const [form, setForm] = useState({ name: '', phone: '', topic: TOPICS[0], question: '' });
  const [done, setDone] = useState(false);

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const valid = form.name.trim() && form.phone.trim().length >= 10 && form.question.trim().length >= 5;

  if (done) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_18px_40px_-12px_rgb(34_197_94/0.6)]"
        >
          <CheckCircle2 size={56} aria-hidden="true" />
        </motion.div>
        <h1 className="font-display text-3xl font-black text-ink">وصلنا سؤالك</h1>
        <p className="mt-2 text-sm text-ink-mute">صيدلي معتمد هيراجع استفسارك ويرد عليك في أقرب وقت.</p>
        <div className="mx-auto mt-7 flex max-w-md items-center justify-center gap-2 rounded-2xl border border-line bg-surface py-3 text-xs font-semibold text-brand shadow-card">
          <Clock size={15} aria-hidden="true" /> متوسط وقت الرد: أقل من ٣٠ دقيقة
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-card transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle size={16} aria-hidden="true" /> تواصل واتساب
          </a>
          <Link href="/" className="rounded-full border border-line bg-surface px-6 py-3 text-sm font-bold text-ink-soft shadow-card transition-colors hover:border-brand hover:text-brand">
            متابعة التسوّق
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-trust-600 via-trust-700 to-blue-800 p-6 text-white shadow-cardHover sm:p-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-black/10 blur-3xl" />
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
            <Stethoscope size={28} aria-hidden="true" />
          </span>
          <div>
            <h1 className="font-display text-2xl font-black sm:text-3xl">اسأل الصيدلي</h1>
            <p className="mt-1 max-w-lg text-sm text-white/85">
              استشارة مجانية وسرّية مع صيدلي معتمد عن أدويتك ومنتجاتك وجرعاتك.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6">
          <h2 className="mb-4 font-display text-lg font-bold text-ink">اكتب استفسارك</h2>

          <div className="mb-4">
            <label className="mb-1.5 block text-xs font-bold text-ink-soft">موضوع الاستشارة</label>
            <div className="flex flex-wrap gap-2">
              {TOPICS.map((tp) => (
                <button
                  key={tp}
                  type="button"
                  onClick={() => set('topic', tp)}
                  className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors ${
                    form.topic === tp ? 'border-trust bg-trust-50 text-trust-700 dark:bg-slate-800 dark:text-trust-300' : 'border-line text-ink-soft hover:border-trust/50'
                  }`}
                >
                  {tp}
                </button>
              ))}
            </div>
          </div>

          <label className="mb-1.5 block text-xs font-bold text-ink-soft">سؤالك <span className="text-accent-600">*</span></label>
          <textarea
            value={form.question}
            onChange={(e) => set('question', e.target.value)}
            rows={4}
            placeholder="اكتب سؤالك بالتفصيل... مثال: ما الجرعة المناسبة لفيتامين د؟"
            className="w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-trust focus:ring-2 focus:ring-trust-100 dark:focus:ring-trust-500/20"
          />

          <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-bold text-ink-soft">الاسم <span className="text-accent-600">*</span></label>
              <div className="relative">
                <User size={16} aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-mute" />
                <input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="اسمك" className="w-full rounded-xl border border-line bg-surface py-3 pe-3 ps-9 text-sm text-ink outline-none focus:border-trust focus:ring-2 focus:ring-trust-100 dark:focus:ring-trust-500/20" />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold text-ink-soft">الموبايل <span className="text-accent-600">*</span></label>
              <div className="relative">
                <Phone size={16} aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-mute" />
                <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="01xxxxxxxxx" className="w-full rounded-xl border border-line bg-surface py-3 pe-3 ps-9 text-sm text-ink outline-none focus:border-trust focus:ring-2 focus:ring-trust-100 dark:focus:ring-trust-500/20" />
              </div>
            </div>
          </div>

          <button
            disabled={!valid}
            onClick={() => { setDone(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="mt-5 flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-l from-trust-500 to-trust-700 text-sm font-bold text-white shadow-card transition-all duration-200 hover:shadow-cardHover hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
          >
            <Send size={16} aria-hidden="true" /> أرسل الاستشارة
          </button>
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-line bg-surface p-5 shadow-card">
            <h3 className="mb-3 font-display text-base font-bold text-ink">استشارة موثوقة</h3>
            <ul className="space-y-3">
              {[
                { Icon: Stethoscope, text: 'صيادلة معتمدون وذوو خبرة' },
                { Icon: Lock, text: 'سرّية تامة لبياناتك' },
                { Icon: Clock, text: 'رد سريع خلال ٣٠ دقيقة' },
                { Icon: ShieldCheck, text: 'نصائح دوائية موثوقة' },
              ].map((t) => (
                <li key={t.text} className="flex items-center gap-3 text-sm text-ink-soft">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-surface-sunken text-trust"><t.Icon size={17} aria-hidden="true" /></span>
                  {t.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-amber-50 p-4 text-xs text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">
            ملاحظة: الاستشارة لا تُغني عن زيارة الطبيب في الحالات الطارئة.
          </div>
        </aside>
      </div>
    </div>
  );
}
