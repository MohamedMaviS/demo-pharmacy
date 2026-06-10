import type { Metadata } from 'next';
import { RotateCcw, CalendarCheck, ShieldAlert, BadgeCheck, Wallet } from 'lucide-react';

export const metadata: Metadata = {
  title: 'سياسة الاسترجاع والاستبدال | صيدلية ديمو',
  description: 'شروط ومدة الاسترجاع والاستبدال واسترداد المبالغ في صيدلية ديمو.',
};

const POINTS = [
  { Icon: CalendarCheck, title: 'مدة الاسترجاع', body: 'يمكنك إرجاع أو استبدال المنتج خلال ١٤ يومًا من تاريخ الاستلام، بشرط أن يكون بحالته وغلافه الأصليين.' },
  { Icon: ShieldAlert, title: 'استثناءات صحية', body: 'لا يمكن إرجاع الأدوية، منتجات التبريد، والمستحضرات المفتوحة، حفاظًا على سلامة جميع العملاء وطبقًا للاشتراطات الصحية.' },
  { Icon: BadgeCheck, title: 'منتج تالف أو خاطئ', body: 'لو وصلك منتج تالف أو مختلف عن طلبك، صوّره وتواصل معنا خلال ٤٨ ساعة وسنستبدله أو نردّ قيمته بالكامل فورًا وعلى نفقتنا.' },
  { Icon: Wallet, title: 'استرداد المبلغ', body: 'يُرَدّ المبلغ بنفس طريقة الدفع خلال ٣ إلى ٧ أيام عمل من استلامنا للمنتج المرتجع.' },
];

export default function ReturnsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-emerald-800 p-6 text-white shadow-cardHover sm:p-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-black/10 blur-3xl" />
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
            <RotateCcw size={28} aria-hidden="true" />
          </span>
          <div>
            <h1 className="font-display text-2xl font-black sm:text-3xl">الاسترجاع والاستبدال</h1>
            <p className="mt-1 text-sm text-white/85">سياسة مرنة وواضحة تحمي حقك. (نسخة ديمو للعرض)</p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {POINTS.map((p) => (
          <section key={p.title} className="flex gap-4 rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand dark:bg-brand-500/15">
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
