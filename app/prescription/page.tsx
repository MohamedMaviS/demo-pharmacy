'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import {
  FileText,
  Upload,
  Camera,
  ShieldCheck,
  Clock,
  CheckCircle2,
  X,
  Phone,
  User,
  MapPin,
  Truck,
  Stethoscope,
  Lock,
  MessageCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

import { SITE } from '@/lib/data';

const GOVERNORATES = [
  'القاهرة', 'الجيزة', 'الإسكندرية', 'القليوبية', 'الدقهلية', 'الشرقية',
  'الغربية', 'المنوفية', 'البحيرة', 'كفر الشيخ', 'أسيوط', 'سوهاج',
  'المنيا', 'بني سويف', 'الفيوم', 'أسوان', 'الأقصر', 'قنا',
];

const STEPS = [
  { Icon: Camera, title: 'صوّر روشتتك', desc: 'صورة واضحة بالموبايل' },
  { Icon: Upload, title: 'ارفعها هنا', desc: 'JPG أو PNG أو PDF' },
  { Icon: Stethoscope, title: 'صيدلي يراجعها', desc: 'ويأكّد التوفّر والأسعار' },
  { Icon: Truck, title: 'يوصلك دواك', desc: 'لحد باب البيت' },
];

type Preview = { name: string; url: string };

export default function PrescriptionPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<Preview[]>([]);
  const [drag, setDrag] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', gov: 'القاهرة', notes: '' });
  const [done, setDone] = useState<null | { ref: string }>(null);

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const valid = files.length > 0 && form.name.trim() && form.phone.trim().length >= 10;

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const next = Array.from(list)
      .filter((f) => f.type.startsWith('image/') || f.type === 'application/pdf')
      .map((f) => ({ name: f.name, url: URL.createObjectURL(f) }));
    setFiles((prev) => [...prev, ...next].slice(0, 4));
  };

  const removeFile = (i: number) => {
    setFiles((prev) => {
      const url = prev[i]?.url;
      if (url) URL.revokeObjectURL(url);
      return prev.filter((_, idx) => idx !== i);
    });
  };

  const submit = () => {
    setDone({ ref: `RX-${Date.now().toString().slice(-6)}` });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        <h1 className="font-display text-3xl font-black text-ink">استلمنا روشتتك</h1>
        <p className="mt-2 text-sm text-ink-mute">
          رقم المرجع <span className="font-bold text-brand">{done.ref}</span> — صيدلي معتمد هيراجعها ويكلّمك خلال ساعة بالتفاصيل والأسعار.
        </p>
        <div className="mx-auto mt-8 max-w-md rounded-3xl border border-line bg-surface p-6 text-right shadow-card">
          <div className="flex items-center justify-center gap-2 rounded-xl bg-brand-50 py-3 text-xs font-semibold text-brand-800 dark:bg-slate-800 dark:text-brand-300">
            <Clock size={15} aria-hidden="true" />
            متوسط وقت الرد: أقل من ٦٠ دقيقة
          </div>
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
          <Link href="/" className="inline-block rounded-full border border-line bg-surface px-6 py-3 text-sm font-bold text-ink-soft shadow-card transition-colors hover:border-brand hover:text-brand">
            متابعة التسوّق
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-emerald-800 p-6 text-white shadow-cardHover sm:p-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-black/10 blur-3xl" />
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
            <FileText size={28} aria-hidden="true" />
          </span>
          <div>
            <h1 className="font-display text-2xl font-black sm:text-3xl">ارفع روشتتك</h1>
            <p className="mt-1 max-w-lg text-sm text-white/85">
              صوّر روشتتك وارفعها، وصيدلي معتمد هيراجعها ويكلّمك بالتوفّر والأسعار ويوصّلك دواك.
            </p>
          </div>
        </div>
        {/* steps */}
        <div className="relative z-10 mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/20 text-[11px] font-black">{i + 1}</span>
                <s.Icon size={18} aria-hidden="true" />
              </div>
              <div className="mt-2 text-sm font-bold">{s.title}</div>
              <div className="text-[11px] text-white/75">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        {/* Form */}
        <div className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6">
          <h2 className="mb-4 font-display text-lg font-bold text-ink">بيانات الطلب</h2>

          {/* Dropzone */}
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
            onDragLeave={() => setDrag(false)}
            onDrop={(e) => { e.preventDefault(); setDrag(false); addFiles(e.dataTransfer.files); }}
            className={`flex w-full cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed p-7 text-center transition-colors ${
              drag ? 'border-brand bg-brand-50 dark:bg-slate-800' : 'border-line hover:border-brand/60'
            }`}
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
              <Upload size={22} aria-hidden="true" />
            </span>
            <span className="text-sm font-bold text-ink">اضغط لرفع صورة الروشتة</span>
            <span className="text-xs text-ink-mute">أو اسحب الصور هنا · JPG / PNG / PDF · حتى ٤ ملفات</span>
            <input
              ref={inputRef}
              type="file"
              accept="image/*,application/pdf"
              multiple
              className="hidden"
              onChange={(e) => addFiles(e.target.files)}
            />
          </button>

          {/* Previews */}
          {files.length > 0 && (
            <div className="mt-3 grid grid-cols-4 gap-2">
              {files.map((f, i) => (
                <div key={i} className="group/preview relative aspect-square overflow-hidden rounded-xl border border-line bg-surface-sunken">
                  {f.url && f.name.toLowerCase().endsWith('.pdf') ? (
                    <div className="grid h-full place-items-center text-ink-mute"><FileText size={22} aria-hidden="true" /></div>
                  ) : (
                    <Image src={f.url} alt={f.name} fill sizes="120px" className="object-cover" unoptimized />
                  )}
                  <button
                    type="button"
                    onClick={() => removeFile(i)}
                    aria-label="حذف الملف"
                    className="absolute left-1 top-1 grid h-6 w-6 cursor-pointer place-items-center rounded-full bg-ink/70 text-white opacity-0 transition-opacity group-hover/preview:opacity-100"
                  >
                    <X size={13} aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Fields */}
          <div className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <Field label="الاسم بالكامل" value={form.name} onChange={(v) => set('name', v)} Icon={User} required placeholder="مثال: محمد أحمد" />
            <Field label="رقم الموبايل" value={form.phone} onChange={(v) => set('phone', v)} Icon={Phone} type="tel" required placeholder="01xxxxxxxxx" />
            <div>
              <label className="mb-1.5 block text-xs font-bold text-ink-soft">المحافظة</label>
              <div className="relative">
                <MapPin size={16} aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-mute" />
                <select
                  value={form.gov}
                  onChange={(e) => set('gov', e.target.value)}
                  className="w-full appearance-none rounded-xl border border-line bg-surface py-3 pe-3 ps-9 text-sm text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand-100 dark:focus:ring-brand-500/20"
                >
                  {GOVERNORATES.map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-bold text-ink-soft">ملاحظات (اختياري)</label>
              <textarea
                value={form.notes}
                onChange={(e) => set('notes', e.target.value)}
                rows={2}
                placeholder="أي تفاصيل أو بدائل تحب نراعيها"
                className="w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-brand focus:ring-2 focus:ring-brand-100 dark:focus:ring-brand-500/20"
              />
            </div>
          </div>

          <button
            disabled={!valid}
            onClick={submit}
            className="mt-5 min-h-[52px] w-full cursor-pointer rounded-full bg-gradient-to-l from-brand-500 to-brand-700 text-sm font-bold text-white shadow-card transition-all duration-200 hover:shadow-cardHover hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
          >
            إرسال الروشتة للمراجعة
          </button>
          <p className="mt-2 text-center text-[11px] text-ink-mute">بإرسالك توافق على مراجعة صيدلي معتمد لبياناتك بسرّية تامة.</p>
        </div>

        {/* Trust aside */}
        <aside className="space-y-4">
          <div className="rounded-3xl border border-line bg-surface p-5 shadow-card">
            <h3 className="mb-3 font-display text-base font-bold text-ink">ليه ترفع روشتتك معانا؟</h3>
            <ul className="space-y-3">
              {[
                { Icon: Stethoscope, text: 'مراجعة صيدلي معتمد لكل روشتة' },
                { Icon: Lock, text: 'سرّية تامة لبياناتك الطبية' },
                { Icon: Clock, text: 'رد سريع خلال ٦٠ دقيقة' },
                { Icon: ShieldCheck, text: 'أدوية أصلية وبدائل بأفضل سعر' },
              ].map((t) => (
                <li key={t.text} className="flex items-center gap-3 text-sm text-ink-soft">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-surface-sunken text-brand"><t.Icon size={17} aria-hidden="true" /></span>
                  {t.text}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-card transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle size={17} aria-hidden="true" /> تفضّل ترسلها واتساب؟
          </a>
        </aside>
      </div>
    </div>
  );
}

function Field({
  label, value, onChange, type = 'text', required, Icon, placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  Icon?: typeof User;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold text-ink-soft">
        {label} {required && <span className="text-accent-600">*</span>}
      </label>
      <div className="relative">
        {Icon && <Icon size={16} aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-mute" />}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-xl border border-line bg-surface py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-brand focus:ring-2 focus:ring-brand-100 dark:focus:ring-brand-500/20 ${Icon ? 'pe-3 ps-9' : 'px-3'}`}
        />
      </div>
    </div>
  );
}
