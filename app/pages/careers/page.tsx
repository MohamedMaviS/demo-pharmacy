'use client';

import { Briefcase } from 'lucide-react';
import { toast } from 'sonner';

const ROLES = [
  { title: 'صيدلي/ة', location: 'القاهرة' },
  { title: 'كاشير', location: 'الإسكندرية' },
  { title: 'سائق توصيل', location: 'الجيزة' },
  { title: 'خدمة عملاء', location: 'عن بُعد' },
];

export default function CareersPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8 flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-surface-soft text-brand">
          <Briefcase size={22} aria-hidden="true" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">وظائف</h1>
          <p className="text-sm text-ink-mute">انضم لفريقنا في الديمو</p>
        </div>
      </div>

      <ul className="space-y-3">
        {ROLES.map((r) => (
          <li
            key={r.title}
            className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-surface p-4 shadow-card transition-shadow duration-200 hover:shadow-cardHover"
          >
            <div>
              <h3 className="font-display text-base font-bold">{r.title}</h3>
              <p className="text-xs text-ink-mute">{r.location}</p>
            </div>
            <button
              onClick={() => toast.info('ده ديمو للعرض فقط')}
              className="min-h-[44px] cursor-pointer rounded-full bg-trust px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-trust-800"
            >
              تقديم
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
