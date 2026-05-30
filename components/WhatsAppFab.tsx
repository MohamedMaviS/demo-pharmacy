'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { SITE } from '@/lib/data';

function WhatsAppIcon({ size = 30 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.788-.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
    </svg>
  );
}

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-[88px] right-4 z-40 flex flex-col items-end gap-3 lg:bottom-6 lg:right-6">
      {/* Mini chat card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-64 overflow-hidden rounded-2xl border border-line bg-surface shadow-cardHover"
          >
            <div className="flex items-center gap-2 bg-[#25D366] px-4 py-3 text-white">
              <WhatsAppIcon size={20} />
              <div className="text-sm font-bold">تواصل معنا</div>
            </div>
            <div className="p-4">
              <p className="text-sm leading-relaxed text-ink-soft">
                عايز تطلب أو عندك استفسار؟ كلّمنا على الواتساب وهنرد عليك فورًا.
              </p>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex min-h-[44px] w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-bold text-white transition-colors duration-200 hover:bg-[#1ebe5b]"
              >
                <WhatsAppIcon size={18} />
                ابدأ المحادثة
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'إغلاق محادثة واتساب' : 'تواصل عبر واتساب'}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative grid h-14 w-14 cursor-pointer place-items-center rounded-full bg-[#25D366] text-white shadow-cardHover"
      >
        {/* pulsing ripple rings */}
        {!open && (
          <>
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40"
              style={{ animationDuration: '2.4s' }}
            />
            <span
              aria-hidden="true"
              className="absolute -inset-1 animate-ping rounded-full bg-[#25D366] opacity-20"
              style={{ animationDuration: '2.4s', animationDelay: '0.6s' }}
            />
          </>
        )}

        {/* gentle breathing of the icon */}
        <motion.span
          className="relative"
          animate={open ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          {open ? <X size={26} aria-hidden="true" /> : <WhatsAppIcon size={30} />}
        </motion.span>

        {/* notification dot */}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 grid h-5 w-5 place-items-center rounded-full bg-accent-600 text-[10px] font-bold text-white ring-2 ring-[#25D366]">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
}
