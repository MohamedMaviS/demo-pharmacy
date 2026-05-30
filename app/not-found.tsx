import Link from 'next/link';
import { Home, Search, Plus, ArrowLeft } from 'lucide-react';

import { COLLECTIONS } from '@/lib/data';

export default function NotFound() {
  const quick = COLLECTIONS.slice(0, 6);
  return (
    <div className="mx-auto flex min-h-[62vh] max-w-xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="relative mb-2">
        <div className="font-display text-[7.5rem] font-black leading-none text-brand/15">٤٠٤</div>
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_14px_30px_-10px_rgb(34_197_94/0.6)]">
            <Plus size={32} strokeWidth={3} aria-hidden="true" />
          </span>
        </span>
      </div>

      <h1 className="font-display text-2xl font-black text-ink sm:text-3xl">الصفحة دي مش موجودة</h1>
      <p className="mx-auto mt-2 max-w-sm text-sm text-ink-mute">
        يمكن الرابط اتغيّر أو المنتج خلص من المخزون. تعالى نرجّعك لمكان مفيد.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-trust px-6 py-3 text-sm font-bold text-white shadow-card transition-colors duration-200 hover:bg-trust-800"
        >
          <Home size={16} aria-hidden="true" /> الرئيسية
        </Link>
        <Link
          href="/search"
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-sm font-bold text-ink-soft shadow-card transition-colors duration-200 hover:border-brand hover:text-brand"
        >
          <Search size={16} aria-hidden="true" /> ابحث عن منتج
        </Link>
      </div>

      <div className="mt-9 w-full">
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-ink-mute">تصفّح الأقسام</div>
        <div className="flex flex-wrap justify-center gap-2">
          {quick.map((c) => (
            <Link
              key={c.handle}
              href={`/collections/${c.handle}`}
              className="group inline-flex items-center gap-1 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold text-ink-soft transition-colors duration-200 hover:border-brand hover:text-brand"
            >
              {c.title}
              <ArrowLeft size={12} aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
