import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, Truck, CreditCard, FileText, RotateCcw, MessageCircle } from 'lucide-react';

import { SITE } from '@/lib/data';

export const metadata: Metadata = {
  title: 'الأسئلة الشائعة | صيدلية ديمو',
  description: 'إجابات عن أكثر الأسئلة شيوعًا حول الطلب والشحن والدفع والاسترجاع في صيدلية ديمو.',
};

const GROUPS = [
  {
    Icon: Truck,
    title: 'الطلب والشحن',
    items: [
      { q: 'كام مدة التوصيل؟', a: 'من ١ إلى ٣ أيام عمل لكل المحافظات، والقاهرة الكبرى غالبًا في نفس اليوم أو اليوم التالي.' },
      { q: 'كام تكلفة الشحن؟', a: '٥٠ جنيه ثابتة، ومجاني تمامًا للطلبات فوق ٥٠٠ جنيه.' },
      { q: 'إزاي أتابع طلبي؟', a: 'من صفحة تتبّع الطلب اكتب رقم طلبك وهتشوف رحلته خطوة بخطوة لحد باب البيت.' },
      { q: 'بتوصّلوا لكل المحافظات؟', a: 'نعم، التوصيل متاح لجميع محافظات مصر.' },
    ],
  },
  {
    Icon: CreditCard,
    title: 'الدفع',
    items: [
      { q: 'إيه طرق الدفع المتاحة؟', a: 'كاش عند الاستلام، بطاقات (فيزا / ماستركارد / ميزة)، والمحافظ الإلكترونية مثل فودافون كاش وانستاباي.' },
      { q: 'في كوبونات خصم؟', a: 'نعم، تابع إشعارات الموقع والنشرة البريدية. جرّب كود DEMO10 على أول طلب.' },
      { q: 'الدفع أونلاين آمن؟', a: 'كل المعاملات مشفّرة بالكامل ولا نخزّن بيانات بطاقتك.' },
    ],
  },
  {
    Icon: FileText,
    title: 'الروشتة والصيدلي',
    items: [
      { q: 'إزاي أطلب أدوية بروشتة؟', a: 'ارفع صورة الروشتة من صفحة "ارفع روشتتك" وصيدلي معتمد هيراجعها ويتواصل معك خلال ساعة بالتوفّر والأسعار.' },
      { q: 'ممكن أستشير صيدلي؟', a: 'نعم، من صفحة "اسأل الصيدلي" تبعت سؤالك ويردّ عليك صيدلي معتمد خلال ٣٠ دقيقة في المتوسط.' },
      { q: 'المنتجات أصلية؟', a: 'كل منتجاتنا أصلية ١٠٠٪ من موزّعين معتمدين وبضمان الجودة.' },
    ],
  },
  {
    Icon: RotateCcw,
    title: 'الاسترجاع والاستبدال',
    items: [
      { q: 'أقدر أرجّع منتج؟', a: 'نعم خلال ١٤ يوم من الاستلام بشرط أن يكون بحالته الأصلية. الأدوية ومنتجات التبريد مستثناة لأسباب صحية.' },
      { q: 'المنتج وصل تالف، أعمل إيه؟', a: 'صوّره وتواصل معنا خلال ٤٨ ساعة وهنستبدله أو نردّ المبلغ فورًا.' },
      { q: 'امتى يرجع المبلغ؟', a: 'خلال ٣ إلى ٧ أيام عمل بنفس طريقة الدفع.' },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-700 to-emerald-800 p-6 text-white shadow-cardHover sm:p-8">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-black/10 blur-3xl" />
        </div>
        <div className="relative z-10 flex items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur-sm">
            <HelpCircle size={28} aria-hidden="true" />
          </span>
          <div>
            <h1 className="font-display text-2xl font-black sm:text-3xl">الأسئلة الشائعة</h1>
            <p className="mt-1 text-sm text-white/85">كل اللي محتاج تعرفه عن الطلب والشحن والدفع والاسترجاع.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {GROUPS.map((g) => (
          <section key={g.title} aria-label={g.title} className="rounded-3xl border border-line bg-surface p-5 shadow-card sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand dark:bg-brand-500/15">
                <g.Icon size={19} aria-hidden="true" />
              </span>
              <h2 className="font-display text-lg font-bold text-ink">{g.title}</h2>
            </div>
            <dl className="space-y-4">
              {g.items.map((it) => (
                <div key={it.q}>
                  <dt className="text-sm font-bold text-ink">{it.q}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink-mute">{it.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-line bg-gradient-to-l from-brand-50 to-surface p-6 shadow-card dark:from-brand-500/10 dark:to-surface">
        <div>
          <h3 className="font-display text-base font-bold text-ink">لسه عندك سؤال؟</h3>
          <p className="text-sm text-ink-mute">فريقنا متاح يرد عليك في أي وقت.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/ask-pharmacist" className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-700">
            اسأل الصيدلي
          </Link>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-bold text-ink-soft transition-colors hover:border-brand hover:text-brand">
            <MessageCircle size={15} aria-hidden="true" /> واتساب
          </a>
        </div>
      </div>
    </div>
  );
}
