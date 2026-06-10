import type { Metadata } from 'next';
import { Truck, Clock, MapPin, Wallet, PackageCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'سياسة الشحن والتوصيل | صيدلية ديمو',
  description: 'تفاصيل الشحن والتوصيل في صيدلية ديمو: المواعيد والتكلفة ومناطق التغطية.',
};

const POINTS = [
  { Icon: Clock, title: 'مواعيد التوصيل', body: 'من ١ إلى ٣ أيام عمل لجميع المحافظات. طلبات القاهرة الكبرى قبل الساعة ٢ ظهرًا غالبًا تُسلَّم في نفس اليوم أو اليوم التالي.' },
  { Icon: Wallet, title: 'تكلفة الشحن', body: 'رسوم ثابتة ٥٠ جنيهًا لكل الطلبات، وتُلغى تمامًا (شحن مجاني) إذا تجاوز إجمالي طلبك ٥٠٠ جنيه.' },
  { Icon: MapPin, title: 'مناطق التغطية', body: 'نوصّل لجميع محافظات مصر عبر مناديب الصيدلية وشركات شحن معتمدة.' },
  { Icon: PackageCheck, title: 'استلام الطلب', body: 'افحص الطلب عند الاستلام قبل الدفع. منتجات التبريد تُسلَّم في عبوات مخصّصة حفاظًا على فعاليتها.' },
];

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-trust-600 via-trust-700 to-blue-800 p-6 text-white shadow-cardHover sm:p-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-black/10 blur-3xl" />
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
            <Truck size={28} aria-hidden="true" />
          </span>
          <div>
            <h1 className="font-display text-2xl font-black sm:text-3xl">سياسة الشحن والتوصيل</h1>
            <p className="mt-1 text-sm text-white/85">كل تفاصيل توصيل طلبك لحد باب البيت. (نسخة ديمو للعرض)</p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {POINTS.map((p) => (
          <section key={p.title} className="flex gap-4 rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-trust-50 text-trust dark:bg-trust-500/15">
              <p.Icon size={20} aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-base font-bold text-ink">{p.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-ink-mute">{p.body}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
