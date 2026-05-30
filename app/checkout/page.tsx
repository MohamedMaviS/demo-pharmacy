'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ChevronLeft,
  MapPin,
  CreditCard,
  ClipboardCheck,
  CheckCircle2,
  ShoppingBag,
  Truck,
  Wallet,
  Banknote,
  User,
  Phone,
  Home,
  ShieldCheck,
  Tag,
  Lock,
  Check,
  Calendar,
  Pencil,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

import { useCart, type CartLine } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';
import Confetti from '@/components/Confetti';

const GOVERNORATES = [
  'القاهرة', 'الجيزة', 'الإسكندرية', 'القليوبية', 'الدقهلية', 'الشرقية',
  'الغربية', 'المنوفية', 'البحيرة', 'كفر الشيخ', 'دمياط', 'بورسعيد',
  'الإسماعيلية', 'السويس', 'أسيوط', 'سوهاج', 'المنيا', 'بني سويف',
  'الفيوم', 'أسوان', 'الأقصر', 'قنا',
];

const STEPS = [
  { key: 'shipping', label: 'الشحن', hint: 'بيانات التوصيل', Icon: MapPin },
  { key: 'payment', label: 'الدفع', hint: 'طريقة الدفع', Icon: CreditCard },
  { key: 'review', label: 'المراجعة', hint: 'تأكيد الطلب', Icon: ClipboardCheck },
] as const;

const PAYMENTS = [
  { id: 'cod', label: 'الدفع عند الاستلام', desc: 'ادفع كاش لما يوصلك الطلب', Icon: Banknote },
  { id: 'card', label: 'بطاقة ائتمان / ميزة', desc: 'فيزا، ماستركارد، ميزة', Icon: CreditCard },
  { id: 'wallet', label: 'محفظة إلكترونية', desc: 'فودافون كاش، انستاباي', Icon: Wallet },
];

export default function CheckoutPage() {
  const {
    lines, subtotal, discount, total, count, clear,
    coupon, applyCoupon, removeCoupon,
  } = useCart();
  const [step, setStep] = useState(0);
  const [payment, setPayment] = useState('cod');
  const [form, setForm] = useState({ name: '', phone: '', gov: 'القاهرة', address: '', notes: '' });
  const [code, setCode] = useState('');
  const [done, setDone] = useState<null | { order: string; lines: CartLine[]; total: number; payment: string }>(null);

  const shipping = subtotal >= 500 ? 0 : 50;
  const grand = total + shipping;
  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const shippingValid = form.name.trim() && form.phone.trim().length >= 10 && form.address.trim();

  const placeOrder = () => {
    const order = `DM-${Date.now().toString().slice(-6)}`;
    setDone({ order, lines, total: grand, payment });
    clear();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ---------- Success ---------- */
  if (done) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <Confetti />
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_18px_40px_-12px_rgb(34_197_94/0.6)]"
        >
          <CheckCircle2 size={56} aria-hidden="true" />
        </motion.div>
        <h1 className="font-display text-3xl font-black text-ink">تم استلام طلبك بنجاح</h1>
        <p className="mt-2 text-sm text-ink-mute">
          شكرًا ليك. رقم طلبك هو{' '}
          <span className="font-bold text-brand">{done.order}</span>
        </p>

        <div className="mx-auto mt-8 max-w-md rounded-3xl border border-line bg-surface p-6 text-right shadow-card">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-ink-mute">عدد المنتجات</span>
            <span className="font-bold text-ink">{done.lines.reduce((a, l) => a + l.qty, 0)}</span>
          </div>
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="text-ink-mute">طريقة الدفع</span>
            <span className="font-bold text-ink">
              {PAYMENTS.find((p) => p.id === done.payment)?.label}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-line pt-3 text-base">
            <span className="font-bold text-ink">الإجمالي</span>
            <span className="font-bold text-trust">{formatPrice(done.total)}</span>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-brand-50 py-3 text-xs font-semibold text-brand-800 dark:bg-slate-800 dark:text-brand-300">
            <Truck size={15} aria-hidden="true" />
            هيوصلك خلال ١ إلى ٣ أيام عمل
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/account"
            className="inline-block cursor-pointer rounded-full border border-line bg-surface px-6 py-3 text-sm font-bold text-ink-soft shadow-card transition-colors duration-200 hover:border-brand hover:text-brand"
          >
            تتبّع الطلب
          </Link>
          <Link
            href="/"
            className="inline-block cursor-pointer rounded-full bg-trust px-7 py-3 text-sm font-bold text-white shadow-card transition-colors duration-200 hover:bg-trust-800"
          >
            متابعة التسوّق
          </Link>
        </div>
      </div>
    );
  }

  /* ---------- Empty cart ---------- */
  if (lines.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-brand-50 text-brand dark:bg-slate-800">
          <ShoppingBag size={36} aria-hidden="true" />
        </div>
        <h1 className="font-display text-2xl font-bold text-ink">سلتك فارغة</h1>
        <p className="mt-2 text-sm text-ink-mute">ضيف منتجات الأول عشان تكمّل الطلب.</p>
        <Link
          href="/"
          className="mt-6 inline-block cursor-pointer rounded-full bg-trust px-6 py-3 text-sm font-bold text-white hover:bg-trust-800"
        >
          ابدأ التسوّق
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex items-center gap-2 text-sm text-ink-mute">
        <Link href="/cart" className="hover:text-brand">السلة</Link>
        <ChevronLeft size={14} aria-hidden="true" />
        <span className="font-semibold text-ink">إتمام الطلب</span>
      </div>
      <h1 className="mb-6 font-display text-3xl font-black tracking-tight text-ink">إتمام الطلب</h1>

      {/* Stepper */}
      <div className="mb-8 rounded-3xl border border-line bg-surface p-4 shadow-card sm:px-6">
        <div className="flex items-center">
          {STEPS.map((s, i) => {
            const doneStep = i < step;
            const active = i === step;
            return (
              <div key={s.key} className="flex flex-1 items-center last:flex-none">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ring-4 transition-all duration-300 ${
                      doneStep
                        ? 'bg-brand text-white ring-brand-100 dark:ring-brand-500/20'
                        : active
                          ? 'bg-trust text-white ring-trust-100 dark:ring-trust-500/20'
                          : 'bg-surface-sunken text-ink-mute ring-transparent'
                    }`}
                  >
                    {doneStep ? <Check size={18} aria-hidden="true" /> : <s.Icon size={18} aria-hidden="true" />}
                  </div>
                  <div className="hidden sm:block">
                    <div className={`text-sm font-bold ${i <= step ? 'text-ink' : 'text-ink-mute'}`}>{s.label}</div>
                    <div className="text-[11px] text-ink-mute">{s.hint}</div>
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="mx-3 h-1 flex-1 overflow-hidden rounded-full bg-surface-sunken">
                    <div
                      className="h-full rounded-full bg-brand transition-all duration-500"
                      style={{ width: i < step ? '100%' : '0%' }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
        <div>
          <AnimatePresence mode="wait">
            {/* Step 1: shipping */}
            {step === 0 && (
              <motion.div
                key="shipping"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-trust-500 to-trust-700 text-white shadow-soft">
                    <MapPin size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold text-ink">عنوان الشحن</h2>
                    <p className="text-xs text-ink-mute">هنوصّلك لحد باب البيت</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  <Field label="الاسم بالكامل" value={form.name} onChange={(v) => set('name', v)} required Icon={User} placeholder="مثال: محمد أحمد" />
                  <Field label="رقم الموبايل" value={form.phone} onChange={(v) => set('phone', v)} type="tel" required Icon={Phone} placeholder="01xxxxxxxxx" />
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-ink-soft">المحافظة</label>
                    <div className="relative">
                      <MapPin size={16} aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-mute" />
                      <select
                        value={form.gov}
                        onChange={(e) => set('gov', e.target.value)}
                        className="w-full appearance-none rounded-xl border border-line bg-surface py-3 pe-3 ps-9 text-sm text-ink outline-none transition-colors focus:border-trust focus:ring-2 focus:ring-trust-100 dark:focus:ring-trust-500/20"
                      >
                        {GOVERNORATES.map((g) => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Field label="العنوان بالتفصيل" value={form.address} onChange={(v) => set('address', v)} required Icon={Home} placeholder="الشارع، رقم المبنى، الدور، شقة" />
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-xs font-bold text-ink-soft">ملاحظات (اختياري)</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => set('notes', e.target.value)}
                      rows={2}
                      placeholder="أي تعليمات إضافية للتوصيل"
                      className="w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-trust focus:ring-2 focus:ring-trust-100 dark:focus:ring-trust-500/20"
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-xl bg-surface-soft px-3.5 py-2.5 text-xs text-ink-soft">
                  <Calendar size={15} className="shrink-0 text-brand" aria-hidden="true" />
                  التوصيل المتوقع خلال <span className="font-bold text-ink">١ إلى ٣ أيام عمل</span>
                </div>

                <button
                  disabled={!shippingValid}
                  onClick={() => setStep(1)}
                  className="mt-5 min-h-[52px] w-full cursor-pointer rounded-full bg-trust text-sm font-bold text-white shadow-card transition-all duration-200 hover:bg-trust-800 hover:shadow-cardHover disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
                >
                  متابعة للدفع
                </button>
              </motion.div>
            )}

            {/* Step 2: payment */}
            {step === 1 && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-trust-500 to-trust-700 text-white shadow-soft">
                    <CreditCard size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold text-ink">طريقة الدفع</h2>
                    <p className="text-xs text-ink-mute">اختار اللي يناسبك</p>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {PAYMENTS.map((p) => {
                    const sel = payment === p.id;
                    return (
                      <label
                        key={p.id}
                        className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-4 transition-all duration-200 ${
                          sel ? 'border-trust bg-trust-50 ring-2 ring-trust-100 dark:bg-slate-800 dark:ring-trust-500/20' : 'border-line hover:border-trust/50'
                        }`}
                      >
                        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${sel ? 'bg-trust text-white' : 'bg-surface-sunken text-trust'}`}>
                          <p.Icon size={20} aria-hidden="true" />
                        </span>
                        <span className="flex-1">
                          <span className="block text-sm font-bold text-ink">{p.label}</span>
                          <span className="block text-xs text-ink-mute">{p.desc}</span>
                        </span>
                        <span className={`grid h-5 w-5 place-items-center rounded-full border-2 transition-colors ${sel ? 'border-trust bg-trust text-white' : 'border-line'}`}>
                          {sel && <Check size={12} aria-hidden="true" />}
                        </span>
                        <input type="radio" name="payment" checked={sel} onChange={() => setPayment(p.id)} className="sr-only" />
                      </label>
                    );
                  })}
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-surface-soft px-3.5 py-2.5 text-xs text-ink-soft">
                  <Lock size={15} className="shrink-0 text-brand" aria-hidden="true" />
                  كل المعاملات مؤمّنة ومشفّرة بالكامل
                </div>
                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => setStep(0)}
                    className="min-h-[52px] flex-1 cursor-pointer rounded-full border border-line text-sm font-bold text-ink-soft transition-colors hover:border-brand hover:text-brand"
                  >
                    رجوع
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className="min-h-[52px] flex-[2] cursor-pointer rounded-full bg-trust text-sm font-bold text-white shadow-card transition-all hover:bg-trust-800 hover:shadow-cardHover"
                  >
                    مراجعة الطلب
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: review */}
            {step === 2 && (
              <motion.div
                key="review"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h2 className="font-display text-lg font-bold text-ink">عنوان الشحن</h2>
                    <button onClick={() => setStep(0)} className="flex items-center gap-1 text-xs font-bold text-trust hover:text-trust-800">
                      <Pencil size={12} aria-hidden="true" /> تعديل
                    </button>
                  </div>
                  <div className="space-y-1.5 text-sm text-ink-soft">
                    <div className="flex items-center gap-2"><User size={14} className="text-ink-mute" aria-hidden="true" />{form.name}</div>
                    <div className="flex items-center gap-2"><Phone size={14} className="text-ink-mute" aria-hidden="true" />{form.phone}</div>
                    <div className="flex items-center gap-2"><Home size={14} className="text-ink-mute" aria-hidden="true" />{form.address} - {form.gov}</div>
                    <div className="flex items-center gap-2"><CreditCard size={14} className="text-ink-mute" aria-hidden="true" />{PAYMENTS.find((p) => p.id === payment)?.label}</div>
                  </div>
                </div>

                <div className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6">
                  <h3 className="mb-3 text-sm font-bold text-ink">المنتجات ({count})</h3>
                  <ul className="space-y-3">
                    {lines.map((l) => (
                      <li key={l.product.handle} className="flex items-center gap-3">
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-line bg-surface-sunken">
                          <Image src={l.product.image} alt={l.product.title} fill sizes="56px" className="object-contain p-1.5" />
                          <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-trust px-1 text-[10px] font-bold text-white">{l.qty}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] font-medium uppercase tracking-wide text-ink-mute">{l.product.brand}</div>
                          <div className="line-clamp-1 text-xs font-medium text-ink-soft">{l.product.title}</div>
                        </div>
                        <span className="text-sm font-bold text-trust">{formatPrice(l.product.price * l.qty)}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="min-h-[54px] flex-1 cursor-pointer rounded-full border border-line text-sm font-bold text-ink-soft transition-colors hover:border-brand hover:text-brand"
                  >
                    رجوع
                  </button>
                  <button
                    onClick={placeOrder}
                    className="min-h-[54px] flex-[2] cursor-pointer rounded-full bg-gradient-to-l from-brand-500 to-brand-700 text-sm font-bold text-white shadow-card transition-all hover:shadow-cardHover hover:brightness-105"
                  >
                    تأكيد الطلب · {formatPrice(grand)}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Summary */}
        <aside className="rounded-3xl border border-line bg-surface p-5 shadow-card lg:sticky lg:top-24 lg:self-start">
          <h2 className="mb-4 font-display text-base font-bold text-ink">ملخّص الطلب</h2>

          {/* Items */}
          <ul className="mb-4 max-h-56 space-y-3 overflow-y-auto pe-1">
            {lines.map((l) => (
              <li key={l.product.handle} className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-line bg-surface-sunken">
                  <Image src={l.product.image} alt={l.product.title} fill sizes="48px" className="object-contain p-1" />
                  <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-trust px-0.5 text-[9px] font-bold text-white">{l.qty}</span>
                </div>
                <span className="line-clamp-2 flex-1 text-[11px] text-ink-soft">{l.product.title}</span>
                <span className="text-xs font-bold text-ink">{formatPrice(l.product.price * l.qty)}</span>
              </li>
            ))}
          </ul>

          {/* Coupon */}
          {coupon ? (
            <div className="mb-4 flex items-center justify-between rounded-xl bg-brand-50 px-3 py-2 dark:bg-slate-800">
              <span className="flex items-center gap-1.5 text-xs font-bold text-brand-800 dark:text-brand-300">
                <Tag size={13} aria-hidden="true" /> {coupon.code}
              </span>
              <button onClick={() => { removeCoupon(); toast.success('تم إلغاء الكود'); }} className="cursor-pointer text-xs text-ink-mute underline hover:text-accent-600">إلغاء</button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); const r = applyCoupon(code); r.ok ? toast.success(r.message) : toast.error(r.message); if (r.ok) setCode(''); }}
              className="mb-4 flex gap-2"
            >
              <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="كود الخصم (جرّب DEMO10)" className="min-w-0 flex-1 rounded-full border border-line bg-surface px-3 py-2 text-xs text-ink outline-none focus:border-trust" />
              <button type="submit" className="shrink-0 cursor-pointer rounded-full border border-trust px-4 py-2 text-xs font-bold text-trust transition-colors hover:bg-trust hover:text-white">تطبيق</button>
            </form>
          )}

          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink-mute">الإجمالي الفرعي</dt>
              <dd className="font-semibold text-ink">{formatPrice(subtotal)}</dd>
            </div>
            {discount > 0 && (
              <div className="flex justify-between">
                <dt className="text-brand">الخصم</dt>
                <dd className="font-semibold text-brand">- {formatPrice(discount)}</dd>
              </div>
            )}
            <div className="flex justify-between">
              <dt className="text-ink-mute">الشحن</dt>
              <dd className="font-semibold">{shipping === 0 ? <span className="text-brand">مجاني</span> : formatPrice(50)}</dd>
            </div>
            <div className="my-3 h-px bg-line" />
            <div className="flex items-baseline justify-between">
              <dt className="font-display text-base font-bold text-ink">الإجمالي</dt>
              <dd className="font-display text-xl font-black text-trust">{formatPrice(grand)}</dd>
            </div>
          </dl>

          {/* Trust badges */}
          <ul className="mt-5 space-y-2 border-t border-line pt-4">
            {[
              { Icon: ShieldCheck, text: 'منتجات أصلية ١٠٠٪' },
              { Icon: Truck, text: 'توصيل خلال ١ إلى ٣ أيام' },
              { Icon: Lock, text: 'دفع آمن ومشفّر' },
            ].map((t) => (
              <li key={t.text} className="flex items-center gap-2 text-xs text-ink-soft">
                <t.Icon size={15} className="shrink-0 text-brand" aria-hidden="true" />
                {t.text}
              </li>
            ))}
          </ul>

          <Link href="/cart" className="mt-4 flex items-center justify-center gap-1 text-xs font-medium text-ink-mute hover:text-brand">
            <ChevronLeft size={13} aria-hidden="true" /> تعديل السلة
          </Link>
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
          className={`w-full rounded-xl border border-line bg-surface py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-trust focus:ring-2 focus:ring-trust-100 dark:focus:ring-trust-500/20 ${Icon ? 'pe-3 ps-9' : 'px-3'}`}
        />
      </div>
    </div>
  );
}
