'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { MAIN_MENU, SITE } from '@/lib/data';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.25 }}
            className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-surface shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="القائمة"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="text-base font-bold">القائمة</h2>
              <button
                onClick={onClose}
                aria-label="إغلاق القائمة"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-lg text-ink-soft transition-colors duration-200 hover:bg-surface-soft hover:text-brand"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="قائمة التنقل" className="flex-1 overflow-y-auto p-2">
              {MAIN_MENU.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block min-h-[44px] cursor-pointer rounded-lg px-3 py-3 text-base font-medium text-ink-soft transition-colors duration-200 hover:bg-surface-soft hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-2 h-px bg-surface-sunken" />
              <div className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-wider text-ink-mute">
                خدماتنا
              </div>
              {[
                { label: 'اسأل الصيدلي', href: '/ask-pharmacist' },
                { label: 'تتبّع طلبك', href: '/track' },
                { label: 'الأسئلة الشائعة', href: '/faq' },
                { label: 'فروعنا', href: '/pages/branchs' },
                { label: 'وظائف', href: '/pages/careers' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block min-h-[44px] cursor-pointer rounded-lg px-3 py-3 text-base font-medium text-ink-soft transition-colors duration-200 hover:bg-surface-soft hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-2 border-t border-line p-4">
              <Link
                href="/prescription"
                onClick={onClose}
                className="flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-700"
              >
                ارفع روشتتك
              </Link>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-semibold text-ink-soft transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                <MessageCircle size={18} aria-hidden="true" />
                تواصل واتساب
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
