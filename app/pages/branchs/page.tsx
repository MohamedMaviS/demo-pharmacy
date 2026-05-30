import { MapPin, Phone, Clock } from 'lucide-react';

const BRANCHES = [
  {
    name: 'فرع المهندسين',
    address: 'شارع جامعة الدول العربية، المهندسين، الجيزة',
    phone: '+20 100 000 0001',
    hours: '٩ صباحًا - ١ صباحًا',
  },
  {
    name: 'فرع مدينة نصر',
    address: 'شارع عباس العقاد، مدينة نصر، القاهرة',
    phone: '+20 100 000 0002',
    hours: '٢٤ ساعة',
  },
  {
    name: 'فرع الإسكندرية',
    address: 'شارع أبو قير، سموحة، الإسكندرية',
    phone: '+20 100 000 0003',
    hours: '٩ صباحًا - ١٢ منتصف الليل',
  },
  {
    name: 'فرع المعادي',
    address: 'شارع 9، المعادي، القاهرة',
    phone: '+20 100 000 0004',
    hours: '٩ صباحًا - ١٢ منتصف الليل',
  },
];

export default function BranchesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="mb-2 font-display text-2xl font-bold text-ink sm:text-3xl">فروعنا</h1>
      <p className="mb-8 text-sm text-ink-mute">قائمة افتراضية بالفروع (جزء من الديمو).</p>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {BRANCHES.map((b) => (
          <li
            key={b.name}
            className="rounded-2xl border border-line bg-surface p-5 shadow-card transition-shadow duration-200 hover:shadow-cardHover"
          >
            <h2 className="font-display text-base font-bold text-ink">{b.name}</h2>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <span>{b.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand" aria-hidden="true" />
                <a
                  href={`tel:${b.phone}`}
                  className="cursor-pointer transition-colors duration-200 hover:text-brand"
                >
                  {b.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-brand" aria-hidden="true" />
                <span>{b.hours}</span>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
