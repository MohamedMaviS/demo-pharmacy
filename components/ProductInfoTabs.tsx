'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { FileText, Droplets, Pill, AlertTriangle, ListChecks } from 'lucide-react';
import { useState } from 'react';

import type { Product } from '@/lib/data';
import { getCollection } from '@/lib/data';
import { cn } from '@/lib/utils';

const INGESTIBLE = ['vitamins', 'hair-care', 'medicines', 'baby-milk-food'];
const SKIN = ['skin-care', 'moisturizers', 'sun-care', 'makeup', 'personal-care', 'men-care', 'body-perfumes'];

function buildInfo(product: Product) {
  const c = product.collection;
  const ingestible = INGESTIBLE.includes(c);
  const skin = SKIN.includes(c);

  return {
    overview: `${product.title} من ${product.brand}، منتج أصلي 100% متوفّر في صيدلية ديمو. مناسب للاستخدام اليومي وبأفضل سعر مع توصيل سريع لكل المحافظات. (وصف توضيحي للديمو.)`,
    usage: ingestible
      ? 'يُؤخذ عن طريق الفم حسب إرشادات الطبيب أو الصيدلي، ويُفضّل تناوله بعد الأكل مع كوب من الماء.'
      : skin
        ? 'تُوضع كمية مناسبة على بشرة نظيفة وجافة مع التدليك بلطف حتى الامتصاص الكامل. للاستخدام الخارجي فقط وتجنّب ملامسة العينين.'
        : 'يُستخدم حسب الإرشادات المدوّنة على العبوة.',
    dosage: ingestible
      ? 'الجرعة المعتادة: مرة واحدة يوميًا أو حسب وصف الطبيب. لا تتجاوز الجرعة الموصى بها.'
      : 'يُستخدم مرة إلى مرتين يوميًا حسب الحاجة، أو حسب إرشادات الطبيب.',
    warnings:
      'يُحفظ بعيدًا عن متناول الأطفال في مكان جاف بعيدًا عن أشعة الشمس المباشرة. استشر الطبيب إذا كنتِ حاملًا أو مرضعة، وأوقف الاستخدام فورًا عند ظهور أي تحسّس أو تهيّج.',
    ingredients: skin
      ? 'تركيبة غنية بمكوّنات مرطّبة ومغذّية مناسبة لمعظم أنواع البشرة، وخالية من العطور القاسية.'
      : 'يحتوي على المادة الفعّالة بتركيز مناسب بالإضافة إلى السواغات القياسية المعتمدة.',
  };
}

const TABS = [
  { key: 'overview', label: 'نبذة', Icon: FileText },
  { key: 'usage', label: 'طريقة الاستخدام', Icon: Droplets },
  { key: 'dosage', label: 'الجرعة', Icon: Pill },
  { key: 'warnings', label: 'التحذيرات', Icon: AlertTriangle },
  { key: 'ingredients', label: 'المكوّنات', Icon: ListChecks },
] as const;

export default function ProductInfoTabs({ product }: { product: Product }) {
  const info = buildInfo(product);
  const [tab, setTab] = useState<(typeof TABS)[number]['key']>('overview');
  const collection = getCollection(product.collection);

  const specs = [
    { k: 'العلامة التجارية', v: product.brand },
    { k: 'القسم', v: collection?.title ?? product.collection },
    { k: 'بلد المنشأ', v: 'مستورد' },
    { k: 'الأصالة', v: 'أصلي 100%' },
  ];

  return (
    <section className="mt-12" aria-label="تفاصيل المنتج">
      <div className="mb-5 flex flex-wrap gap-1 border-b border-line">
        {TABS.map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={cn(
                '-mb-px flex cursor-pointer items-center gap-1.5 border-b-2 px-3.5 py-2.5 text-sm font-bold transition-colors duration-200',
                active
                  ? 'border-brand text-brand'
                  : 'border-transparent text-ink-mute hover:text-ink',
              )}
            >
              <t.Icon size={16} aria-hidden="true" />
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl border border-line bg-surface p-5 text-sm leading-relaxed text-ink-soft shadow-card"
          >
            {tab === 'warnings' && (
              <div className="mb-3 flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-300">
                <AlertTriangle size={15} aria-hidden="true" /> اقرأ التحذيرات قبل الاستخدام
              </div>
            )}
            {info[tab]}
          </motion.div>
        </AnimatePresence>

        {/* specs */}
        <div className="rounded-2xl border border-line bg-surface p-5 shadow-card">
          <h3 className="mb-3 font-display text-sm font-bold text-ink">المواصفات</h3>
          <dl className="space-y-2.5">
            {specs.map((s) => (
              <div key={s.k} className="flex items-center justify-between gap-3 text-sm">
                <dt className="text-ink-mute">{s.k}</dt>
                <dd className="font-semibold text-ink">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
