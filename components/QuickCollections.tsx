import Link from 'next/link';
import { QUICK_LINKS } from '@/lib/data';

export default function QuickCollections() {
  return (
    <nav
      aria-label="الفئات السريعة"
      className="border-b border-gray-100 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {QUICK_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="cursor-pointer whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-ink-soft transition-colors duration-200 hover:border-brand hover:bg-brand-50 hover:text-brand sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
