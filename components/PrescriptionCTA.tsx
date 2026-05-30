import Link from 'next/link';
import { FileText, ArrowLeft, ShieldCheck, Clock, Stethoscope } from 'lucide-react';

export default function PrescriptionCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8" aria-label="رفع الروشتة">
      <Link
        href="/prescription"
        className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl bg-gradient-to-l from-brand-600 via-brand-700 to-emerald-800 p-6 text-white shadow-cardHover ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 sm:flex-row sm:items-center sm:p-8"
      >
        {/* decor */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
          <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 left-1/3 h-48 w-48 rounded-full bg-black/10 blur-3xl" />
        </div>

        <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
          <FileText size={30} aria-hidden="true" />
        </span>

        <div className="relative z-10 flex-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold ring-1 ring-white/25">
            <Stethoscope size={13} aria-hidden="true" /> خدمة الصيدلي
          </span>
          <h3 className="mt-2 font-display text-xl font-black sm:text-2xl">عندك روشتة؟ ارفعها وسيب الباقي علينا</h3>
          <p className="mt-1 text-sm text-white/85">صيدلي معتمد هيراجعها ويكلّمك بالتوفّر والأسعار، ونوصّلك دواك لحد باب البيت.</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} aria-hidden="true" /> سرّية تامة</span>
            <span className="flex items-center gap-1.5"><Clock size={14} aria-hidden="true" /> رد خلال ٦٠ دقيقة</span>
          </div>
        </div>

        <span className="relative z-10 inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-800 shadow-lg transition-transform duration-200 group-hover:-translate-y-0.5">
          ارفع روشتتك الآن
          <ArrowLeft size={16} aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-x-0.5" />
        </span>
      </Link>
    </section>
  );
}
