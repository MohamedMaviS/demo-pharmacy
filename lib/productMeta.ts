/**
 * Stable, deterministic "social proof" metadata derived from a product handle.
 * Using a hash (not Math.random) keeps server and client output identical,
 * so there are no hydration mismatches in the statically generated pages.
 */

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0; // force 32-bit
  }
  return Math.abs(h);
}

export type ProductMeta = {
  rating: number; // 3.7 .. 5.0 (one decimal)
  reviews: number; // 8 .. 487
  stock: number; // 2 .. 29
  sold: number; // 20 .. 519
  lowStock: boolean; // stock <= 6
};

export function getProductMeta(handle: string): ProductMeta {
  const h = hashString(handle);
  const rating = Math.min(5, Math.round((3.7 + (h % 14) / 10) * 10) / 10);
  const reviews = 8 + (h % 480);
  const stock = 2 + (h % 28);
  const sold = 20 + ((h >> 3) % 500);
  return { rating, reviews, stock, sold, lowStock: stock <= 6 };
}

export type Review = {
  name: string;
  rating: number;
  date: string;
  text: string;
  helpful: number;
};

const REVIEW_NAMES = [
  'أحمد محمد',
  'سارة علي',
  'محمد حسن',
  'نور إبراهيم',
  'يوسف خالد',
  'منى سمير',
  'كريم فؤاد',
  'هبة ماهر',
  'عمر طارق',
  'دينا رأفت',
  'مصطفى سعيد',
  'ريم وائل',
];

const REVIEW_TEXTS = [
  'منتج ممتاز ووصل بسرعة، أنصح بيه بشدة.',
  'جودة عالية وسعره مناسب جدًا مقارنة بالأماكن التانية.',
  'تجربة شراء سهلة والتوصيل كان أسرع من المتوقع.',
  'المنتج أصلي ١٠٠٪ وفعّال، راضي تمامًا.',
  'التغليف كان ممتاز والمنتج مطابق للوصف بالظبط.',
  'خدمة عملاء محترمة ومنتج رائع، هكرر الطلب أكيد.',
  'أفضل سعر لقيته للمنتج ده، وجه ممتاز.',
  'كنت متردد بس بصراحة المنتج فاق توقعاتي.',
];

const REVIEW_DATES = [
  'منذ يومين',
  'منذ ٣ أيام',
  'منذ أسبوع',
  'منذ أسبوعين',
  'منذ ٣ أسابيع',
  'منذ شهر',
];

export function getReviews(handle: string, count = 4): Review[] {
  const base = hashString(handle);
  const out: Review[] = [];
  for (let i = 0; i < count; i++) {
    const h = hashString(`${handle}-${i}`);
    out.push({
      name: REVIEW_NAMES[(base + i * 5) % REVIEW_NAMES.length],
      rating: 4 + ((h >> 2) % 2), // 4 or 5 stars
      date: REVIEW_DATES[h % REVIEW_DATES.length],
      text: REVIEW_TEXTS[h % REVIEW_TEXTS.length],
      helpful: 2 + (h % 38),
    });
  }
  return out;
}

// Deterministic 5→1 star distribution that roughly matches the overall rating.
export function getRatingBreakdown(handle: string): number[] {
  const { rating } = getProductMeta(handle);
  const five = Math.round((rating / 5) * 70 + 10); // 5★ %
  const four = Math.round((100 - five) * 0.6);
  const three = Math.round((100 - five - four) * 0.6);
  const two = Math.round((100 - five - four - three) * 0.6);
  const one = Math.max(0, 100 - five - four - three - two);
  return [five, four, three, two, one];
}
