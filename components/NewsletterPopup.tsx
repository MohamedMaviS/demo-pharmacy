'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X, Mail, BadgePercent, Copy, Check, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const STORAGE_KEY = 'dm-newsletter-seen';
const CODE = 'DEMO10';

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      seen = false;
    }
    if (seen) return;
    const id = setTimeout(() => setOpen(true), 14000);
    return () => clearTimeout(id);
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setDone(true);
  };

  const copy = () => {
    navigator.clipboard?.writeText(CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="إغلاق"
            onClick={dismiss}
            className="absolute inset-0 cursor-pointer bg-ink/50 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="اشترك في النشرة"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-line bg-surface shadow-cardHover"
          >
            <button
              onClick={dismiss}
              aria-label="إغلاق"
              className="absolute left-3 top-3 z-10 grid h-8 w-8 cursor-pointer place-items-center rounded-full bg-surface/80 text-ink-mute backdrop-blur transition-colors hover:bg-surface-sunken hover:text-ink"
            >
              <X size={16} aria-hidden="true" />
            </button>

            {/* header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-emerald-800 p-7 text-center text-white">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-12 left-1/4 h-40 w-40 rounded-full bg-black/10 blur-3xl" />
              </div>
              <span className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30">
                <BadgePercent size={28} aria-hidden="true" />
              </span>
              <h2 className="relative z-10 mt-3 font-display text-2xl font-black">خصم ١٠٪ على أول طلب</h2>
              <p className="relative z-10 mt-1 text-sm text-white/85">
                اشترك في نشرتنا وخُد العروض والكوبونات أول بأول.
              </p>
            </div>

            {/* body */}
            <div className="p-6">
              {!done ? (
                <form onSubmit={subscribe} className="space-y-3">
                  <div className="relative">
                    <Mail size={16} aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-mute" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="اكتب بريدك الإلكتروني"
                      aria-label="البريد الإلكتروني"
                      className="w-full rounded-xl border border-line bg-surface py-3 pe-3 ps-9 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-brand focus:ring-2 focus:ring-brand-100 dark:focus:ring-brand-500/20"
                    />
                  </div>
                  <button
                    type="submit"
                    className="min-h-[48px] w-full cursor-pointer rounded-full bg-gradient-to-l from-brand-500 to-brand-700 text-sm font-bold text-white shadow-card transition-all duration-200 hover:shadow-cardHover hover:brightness-105"
                  >
                    فعّل الخصم
                  </button>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="w-full cursor-pointer text-center text-xs font-medium text-ink-mute hover:text-ink"
                  >
                    لا شكرًا، أكمل التصفّح
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-brand-50 text-brand dark:bg-slate-800">
                    <Sparkles size={24} aria-hidden="true" />
                  </div>
                  <p className="text-sm text-ink-soft">تمام! استخدم الكود ده عند الدفع:</p>
                  <button
                    onClick={copy}
                    className="mx-auto mt-3 flex items-center gap-2 rounded-xl border-2 border-dashed border-brand bg-brand-50 px-5 py-3 font-display text-lg font-black tracking-widest text-brand-700 transition-colors hover:bg-brand-100 dark:bg-slate-800 dark:text-brand-300"
                  >
                    {CODE}
                    {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                  </button>
                  <button
                    onClick={dismiss}
                    className="mt-4 w-full cursor-pointer rounded-full bg-trust py-3 text-sm font-bold text-white transition-colors hover:bg-trust-800"
                  >
                    ابدأ التسوّق
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
