'use client';

import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Search } from 'lucide-react';

type Branch = {
  name: string;
  area: string;
  address: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
  open24?: boolean;
};

const BRANCHES: Branch[] = [
  { name: 'فرع المهندسين', area: 'الجيزة', address: 'شارع جامعة الدول العربية، المهندسين', phone: '+20 100 000 0001', hours: '٩ ص - ١ ص', lat: 30.0571, lng: 31.2009 },
  { name: 'فرع مدينة نصر', area: 'القاهرة', address: 'شارع عباس العقاد، مدينة نصر', phone: '+20 100 000 0002', hours: '٢٤ ساعة', lat: 30.0606, lng: 31.3389, open24: true },
  { name: 'فرع المعادي', area: 'القاهرة', address: 'شارع ٩، المعادي', phone: '+20 100 000 0003', hours: '٩ ص - ١٢ م', lat: 29.9603, lng: 31.2569 },
  { name: 'فرع التجمع الخامس', area: 'القاهرة الجديدة', address: 'الدوار الأول، التجمع الخامس', phone: '+20 100 000 0004', hours: '٢٤ ساعة', lat: 30.0074, lng: 31.4913, open24: true },
  { name: 'فرع الزمالك', area: 'القاهرة', address: 'شارع ٢٦ يوليو، الزمالك', phone: '+20 100 000 0005', hours: '٩ ص - ١٢ م', lat: 30.061, lng: 31.2197 },
  { name: 'فرع سموحة', area: 'الإسكندرية', address: 'شارع فوزي معاذ، سموحة', phone: '+20 100 000 0006', hours: '٩ ص - ١٢ م', lat: 31.2156, lng: 29.9553 },
];

export default function BranchesPage() {
  const [active, setActive] = useState(0);
  const b = BRANCHES[active];
  const mapSrc = `https://maps.google.com/maps?q=${b.lat},${b.lng}&z=15&hl=ar&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-emerald-800 p-6 text-white shadow-cardHover sm:p-7">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-black/10 blur-3xl" />
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
            <MapPin size={28} aria-hidden="true" />
          </span>
          <div>
            <h1 className="font-display text-2xl font-black sm:text-3xl">فروعنا</h1>
            <p className="mt-1 text-sm text-white/85">{BRANCHES.length} فروع في القاهرة والجيزة والإسكندرية · اختار الفرع لتشوف موقعه على الخريطة.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">
        {/* Branch list */}
        <div className="space-y-3 lg:max-h-[34rem] lg:overflow-y-auto lg:pe-1">
          {BRANCHES.map((br, i) => {
            const sel = i === active;
            return (
              <button
                key={br.name}
                onClick={() => setActive(i)}
                className={`w-full cursor-pointer rounded-2xl border p-4 text-start shadow-card transition-all duration-200 ${
                  sel ? 'border-brand bg-brand-50 ring-2 ring-brand-100 dark:bg-brand-500/10 dark:ring-brand-500/20' : 'border-line bg-surface hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-cardHover'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-display text-base font-bold text-ink">{br.name}</h2>
                  {br.open24 && (
                    <span className="rounded-full bg-trust-50 px-2 py-0.5 text-[10px] font-bold text-trust-700 dark:bg-trust-500/15 dark:text-trust-300">٢٤ ساعة</span>
                  )}
                </div>
                <div className="mt-2 space-y-1 text-xs text-ink-soft">
                  <div className="flex items-start gap-1.5"><MapPin size={13} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />{br.address} · {br.area}</div>
                  <div className="flex items-center gap-1.5"><Clock size={13} className="shrink-0 text-brand" aria-hidden="true" />{br.hours}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Map + active branch */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
            <iframe
              key={active}
              title={`خريطة ${b.name}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[20rem] w-full border-0 sm:h-[24rem]"
            />
          </div>

          <div className="rounded-3xl border border-line bg-surface p-5 shadow-card">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{b.name}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft"><MapPin size={15} className="text-brand" aria-hidden="true" />{b.address}، {b.area}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft"><Clock size={15} className="text-brand" aria-hidden="true" />{b.hours}</p>
              </div>
              <div className="flex gap-2">
                <a href={`tel:${b.phone}`} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-bold text-ink-soft transition-colors hover:border-brand hover:text-brand">
                  <Phone size={15} aria-hidden="true" /> اتصال
                </a>
                <a href={directions} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-trust px-4 py-2.5 text-sm font-bold text-white shadow-card transition-colors hover:bg-trust-800">
                  <Navigation size={15} aria-hidden="true" /> اتجاهات
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/pharmacy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-line py-3 text-sm font-bold text-ink-mute transition-colors hover:border-brand hover:text-brand"
          >
            <Search size={15} aria-hidden="true" /> ابحث عن أقرب فرع ليك
          </a>
        </div>
      </div>
    </div>
  );
}
