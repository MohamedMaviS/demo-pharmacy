'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  User,
  Package,
  MapPin,
  Heart,
  LogOut,
  CheckCircle2,
  Truck,
  Plus,
  Wallet,
  RotateCcw,
  ChevronLeft,
  Pencil,
  Trash2,
  Phone,
  Mail,
  Headset,
  BadgeCheck,
} from 'lucide-react';
import { toast } from 'sonner';

import ProductCard from '@/components/ProductCard';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { PRODUCTS, SITE, type Product } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

const TABS = [
  { key: 'overview', label: 'نظرة عامة', Icon: User },
  { key: 'orders', label: 'طلباتي', Icon: Package },
  { key: 'addresses', label: 'عناويني', Icon: MapPin },
  { key: 'wishlist', label: 'المفضلة', Icon: Heart },
] as const;

type StatusKey = 'delivered' | 'shipping' | 'processing';

const STATUS: Record<StatusKey, { label: string; Icon: typeof Truck; cls: string; step: number }> = {
  delivered: { label: 'تم التوصيل', Icon: CheckCircle2, cls: 'bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300', step: 4 },
  shipping: { label: 'قيد الشحن', Icon: Truck, cls: 'bg-trust-50 text-trust-700 dark:bg-trust-500/15 dark:text-trust-300', step: 3 },
  processing: { label: 'قيد التجهيز', Icon: Package, cls: 'bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300', step: 2 },
};

type Order = { id: string; date: string; statusKey: StatusKey; total: number; products: Product[] };

const ORDERS: Order[] = [
  { id: 'DM-204815', date: '٢٤ مايو ٢٠٢٦', statusKey: 'shipping', total: 1240, products: [PRODUCTS[2], PRODUCTS[9], PRODUCTS[16]] },
  { id: 'DM-204790', date: '١٨ مايو ٢٠٢٦', statusKey: 'delivered', total: 565, products: [PRODUCTS[24], PRODUCTS[31]] },
  { id: 'DM-204731', date: '٢ مايو ٢٠٢٦', statusKey: 'delivered', total: 320, products: [PRODUCTS[40]] },
];

const TIMELINE = ['تم الطلب', 'التجهيز', 'الشحن', 'التوصيل'];

const ADDRESSES = [
  { label: 'المنزل', name: 'محمد', phone: '+20 100 000 0000', text: 'شارع جامعة الدول العربية، المهندسين، الجيزة', primary: true },
  { label: 'العمل', name: 'محمد', phone: '+20 100 000 0001', text: 'شارع عباس العقاد، مدينة نصر، القاهرة', primary: false },
];

const WALLET = 150;

export default function AccountPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]['key']>('overview');
  const { items } = useWishlist();
  const { add } = useCart();
  const wished = PRODUCTS.filter((p) => items.includes(p.handle));

  const reorder = (o: Order) => {
    o.products.forEach((p) => add(p, 1, false));
    toast.success(`تمت إضافة ${o.products.length} منتج للسلة`);
  };

  const STATS = [
    { label: 'الطلبات', value: ORDERS.length, Icon: Package, tint: 'text-trust', ring: 'bg-trust-50 dark:bg-trust-500/15' },
    { label: 'المفضلة', value: wished.length, Icon: Heart, tint: 'text-accent-600', ring: 'bg-accent-50 dark:bg-accent-500/15' },
    { label: 'رصيد المحفظة', value: formatPrice(WALLET), Icon: Wallet, tint: 'text-amber-600', ring: 'bg-amber-50 dark:bg-amber-500/15' },
    { label: 'العناوين', value: ADDRESSES.length, Icon: MapPin, tint: 'text-brand', ring: 'bg-brand-50 dark:bg-brand-500/15' },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Profile cover hero */}
      <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
        <div className="relative h-28 bg-gradient-to-l from-brand-600 via-emerald-600 to-teal-600 sm:h-32">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
            <div className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute -bottom-12 left-1/4 h-40 w-40 rounded-full bg-black/10 blur-3xl" />
            <div className="absolute right-8 top-6 h-16 w-16 rounded-full border border-white/20" />
            <div className="absolute left-10 bottom-4 h-10 w-10 rounded-full border border-white/15" />
          </div>
        </div>

        <div className="px-5 pb-5 sm:px-6">
          <div className="flex flex-wrap items-end gap-4">
            <span className="-mt-11 grid h-[5.5rem] w-[5.5rem] shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 text-3xl font-black text-white shadow-soft ring-4 ring-surface">
              ض
            </span>
            <div className="min-w-0 flex-1 pt-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-display text-xl font-black text-ink sm:text-2xl">أهلاً بيك، ضيف</h1>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-bold text-brand-700 ring-1 ring-brand-100 dark:bg-brand-500/15 dark:text-brand-300 dark:ring-white/10">
                  <BadgeCheck size={12} aria-hidden="true" /> حساب موثّق
                </span>
              </div>
              <p className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm text-ink-mute">
                <span>عضو منذ يناير ٢٠٢٥</span>
                <span className="hidden sm:inline">·</span>
                <span className="inline-flex items-center gap-1"><Mail size={13} aria-hidden="true" /> {SITE.email}</span>
              </p>
            </div>
            <Link
              href="/checkout"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-bold text-ink-soft shadow-card transition-colors hover:border-brand hover:text-brand"
            >
              <Truck size={15} aria-hidden="true" /> تتبّع شحنة
            </Link>
          </div>
        </div>
      </div>

      {/* Stat cards */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="group rounded-2xl border border-line bg-surface p-4 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cardHover">
            <div className="flex items-center justify-between">
              <span className={`grid h-10 w-10 place-items-center rounded-xl ${s.ring} ${s.tint}`}>
                <s.Icon size={19} aria-hidden="true" />
              </span>
              <span className="font-display text-2xl font-black text-ink">{s.value}</span>
            </div>
            <div className="mt-2 text-xs font-semibold text-ink-mute">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr]">
        {/* Sidebar tabs */}
        <aside className="rounded-3xl border border-line bg-surface p-3 shadow-card lg:sticky lg:top-24 lg:self-start">
          <nav className="flex gap-2 overflow-x-auto no-scrollbar lg:flex-col lg:gap-1">
            {TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex min-h-[44px] cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-bold transition-colors duration-200 ${
                  tab === t.key ? 'bg-trust text-white shadow-soft' : 'text-ink-soft hover:bg-surface-sunken hover:text-brand'
                }`}
              >
                <t.Icon size={17} aria-hidden="true" />
                {t.label}
                {t.key === 'wishlist' && wished.length > 0 && (
                  <span className={`ms-auto grid h-5 min-w-5 place-items-center rounded-full px-1 text-[10px] font-bold ${tab === t.key ? 'bg-white/25 text-white' : 'bg-accent-600 text-white'}`}>
                    {wished.length}
                  </span>
                )}
              </button>
            ))}
            <div className="my-1 hidden h-px bg-line lg:block" />
            <button
              onClick={() => toast.info('ده ديمو للعرض فقط')}
              className="flex min-h-[44px] cursor-pointer items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-bold text-ink-mute transition-colors duration-200 hover:bg-accent-50 hover:text-accent-600"
            >
              <LogOut size={17} aria-hidden="true" />
              تسجيل خروج
            </button>
          </nav>
        </aside>

        {/* Content */}
        <div>
          {tab === 'overview' && (
            <div className="space-y-5">
              {/* Personal info */}
              <div className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-base font-bold text-ink">بياناتي الشخصية</h3>
                  <button onClick={() => toast.info('ده ديمو للعرض فقط')} className="flex items-center gap-1 text-xs font-bold text-trust hover:text-trust-800">
                    <Pencil size={13} aria-hidden="true" /> تعديل
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { Icon: User, label: 'الاسم', value: 'ضيف' },
                    { Icon: Mail, label: 'البريد الإلكتروني', value: SITE.email },
                    { Icon: Phone, label: 'رقم الموبايل', value: '+20 100 000 0000' },
                  ].map((f) => (
                    <div key={f.label} className="flex items-center gap-3 rounded-2xl border border-line p-3.5 transition-colors hover:border-brand/40">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface-sunken text-brand"><f.Icon size={18} aria-hidden="true" /></span>
                      <div className="min-w-0">
                        <div className="text-[11px] text-ink-mute">{f.label}</div>
                        <div className="truncate text-sm font-bold text-ink">{f.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent orders */}
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-ink">آخر الطلبات</h3>
                  <button onClick={() => setTab('orders')} className="flex items-center gap-1 text-sm font-bold text-trust hover:text-trust-800">
                    عرض الكل <ChevronLeft size={15} aria-hidden="true" />
                  </button>
                </div>
                <div className="space-y-3">
                  {ORDERS.slice(0, 2).map((o) => (
                    <OrderCard key={o.id} order={o} onReorder={() => reorder(o)} />
                  ))}
                </div>
              </div>

              {/* Quick actions */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { label: 'تتبّع شحنة', Icon: Truck },
                  { label: 'الدعم الفني', Icon: Headset },
                  { label: 'تواصل معنا', Icon: Phone },
                ].map((q) => (
                  <button key={q.label} onClick={() => toast.info('ده ديمو للعرض فقط')} className="flex cursor-pointer items-center gap-3 rounded-2xl border border-line bg-surface p-4 text-start shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:shadow-cardHover">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-surface-sunken text-brand"><q.Icon size={18} aria-hidden="true" /></span>
                    <span className="text-sm font-bold text-ink">{q.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {tab === 'orders' && (
            <div className="space-y-3">
              {ORDERS.map((o) => (
                <OrderCard key={o.id} order={o} expanded onReorder={() => reorder(o)} />
              ))}
            </div>
          )}

          {tab === 'addresses' && (
            <div className="space-y-3">
              {ADDRESSES.map((a, i) => (
                <div key={i} className="rounded-3xl border border-line bg-surface p-5 shadow-card">
                  <div className="flex items-start gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-surface-sunken text-brand"><MapPin size={20} aria-hidden="true" /></span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-ink">{a.label}</span>
                        {a.primary && (
                          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-700 dark:bg-slate-800 dark:text-brand-300">افتراضي</span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-ink-soft">{a.text}</p>
                      <p className="text-xs text-ink-mute">{a.name} · {a.phone}</p>
                    </div>
                    <div className="flex shrink-0 gap-1">
                      <button onClick={() => toast.info('ده ديمو للعرض فقط')} aria-label="تعديل" className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg text-ink-mute transition-colors hover:bg-surface-sunken hover:text-trust"><Pencil size={15} aria-hidden="true" /></button>
                      <button onClick={() => toast.info('ده ديمو للعرض فقط')} aria-label="حذف" className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg text-ink-mute transition-colors hover:bg-accent-50 hover:text-accent-600"><Trash2 size={15} aria-hidden="true" /></button>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={() => toast.info('ده ديمو للعرض فقط')}
                className="flex min-h-[56px] w-full cursor-pointer items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-line text-sm font-bold text-ink-mute transition-colors duration-200 hover:border-brand hover:text-brand"
              >
                <Plus size={18} aria-hidden="true" />
                أضف عنوان جديد
              </button>
            </div>
          )}

          {tab === 'wishlist' && (
            wished.length === 0 ? (
              <div className="rounded-3xl border border-line bg-surface p-12 text-center shadow-card">
                <Heart size={40} className="mx-auto text-brand" aria-hidden="true" />
                <p className="mt-3 text-sm text-ink-mute">قائمة المفضلة فاضية.</p>
                <Link href="/" className="mt-4 inline-block rounded-full bg-trust px-5 py-2.5 text-sm font-bold text-white hover:bg-trust-800">تصفّح المنتجات</Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {wished.map((p) => (
                  <ProductCard key={p.handle} product={p} />
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function OrderCard({ order, expanded = false, onReorder }: { order: Order; expanded?: boolean; onReorder: () => void }) {
  const st = STATUS[order.statusKey];
  return (
    <div className="rounded-3xl border border-line bg-surface p-5 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-surface-sunken text-trust"><Package size={20} aria-hidden="true" /></span>
          <div>
            <div className="text-sm font-bold text-ink">{order.id}</div>
            <div className="text-xs text-ink-mute">{order.date} · {order.products.length} منتج</div>
          </div>
        </div>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${st.cls}`}>
          <st.Icon size={14} aria-hidden="true" /> {st.label}
        </span>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {order.products.map((p) => (
          <div key={p.handle} className="relative h-12 w-12 overflow-hidden rounded-xl border border-line bg-surface-sunken">
            <Image src={p.image} alt={p.title} fill sizes="48px" className="object-contain p-1.5" />
          </div>
        ))}
        <div className="ms-auto text-left">
          <div className="text-[11px] text-ink-mute">الإجمالي</div>
          <div className="font-display text-base font-black text-ink">{formatPrice(order.total)}</div>
        </div>
      </div>

      {expanded && order.statusKey !== 'delivered' && (
        <div className="mt-4 flex items-center">
          {TIMELINE.map((t, i) => {
            const reached = i < st.step;
            return (
              <div key={t} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center gap-1">
                  <span className={`grid h-6 w-6 place-items-center rounded-full text-[10px] ${reached ? 'bg-brand text-white' : 'bg-surface-sunken text-ink-mute'}`}>
                    {reached ? <CheckCircle2 size={13} aria-hidden="true" /> : i + 1}
                  </span>
                  <span className={`text-[10px] ${reached ? 'font-bold text-ink' : 'text-ink-mute'}`}>{t}</span>
                </div>
                {i < TIMELINE.length - 1 && (
                  <div className="mx-1 mb-4 h-0.5 flex-1 rounded bg-surface-sunken">
                    <div className="h-full rounded bg-brand" style={{ width: i < st.step - 1 ? '100%' : '0%' }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-4 flex gap-2">
        <button onClick={onReorder} className="flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-700">
          <RotateCcw size={14} aria-hidden="true" /> إعادة الطلب
        </button>
        <button onClick={() => toast.info('ده ديمو للعرض فقط')} className="flex-1 cursor-pointer rounded-full border border-line px-4 py-2.5 text-xs font-bold text-ink-soft transition-colors hover:border-trust hover:text-trust">
          تفاصيل الطلب
        </button>
      </div>
    </div>
  );
}
