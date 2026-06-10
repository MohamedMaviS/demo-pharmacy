export type Product = {
  handle: string;
  title: string;
  brand: string;
  price: number;
  compareAt?: number;
  image: string;
  collection: string;
  tags?: string[];
};

export type Collection = {
  handle: string;
  title: string;
  subtitle?: string;
  banner: string;
};

const CDN = 'https://nourpharmacies.com/cdn/shop/files';

export const SITE = {
  name: 'Demo Pharmacy',
  nameAr: 'صيدلية ديمو',
  url: 'https://demo-ivory-phi-w8pxd9gzxe.vercel.app',
  tagline: 'صيدليتك أونلاين، نسخة ديمو للعرض فقط',
  email: 'mohamedmavis79@gmail.com',
  emailDisplay: 'mohamedmavis79@gmail.com',
  whatsapp: 'https://wa.me/+201017790091',
  whatsappLabel: '+20 101 779 0091 (ديمو)',
  phone: '+20 101 779 0091 (ديمو)',
  phoneTel: '+201017790091',
  address: 'القاهرة، مصر (عنوان ديمو)',
};

export const DEVELOPER = {
  name: 'MohamedMaviS',
  fullName: 'Mohamed Mavi S',
  role: 'AI Content Creator & Web Developer',
  location: 'Cairo, Egypt',
  website: 'https://mohamedmavis.com/',
  email: 'mohamedmavis79@gmail.com',
  tagline: "I don't just create content. I craft experiences.",
  // Condensed to the most relevant channels, each shown with its real brand logo.
  socials: [
    { label: 'Website', href: 'https://mohamedmavis.com/', kind: 'website' as const, color: '#15803D' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/mohamedmavis/', kind: 'linkedin' as const, color: '#0A66C2' },
    { label: 'Behance', href: 'https://behance.net/MohamedMaviS1', kind: 'behance' as const, color: '#1769FF' },
    { label: 'Instagram', href: 'https://instagram.com/mohamedmavis/', kind: 'instagram' as const, color: '#E4405F' },
    { label: 'TikTok', href: 'https://tiktok.com/@mohamedmavis', kind: 'tiktok' as const, color: '#111827' },
    { label: 'Facebook', href: 'https://facebook.com/MohamedMaviS/', kind: 'facebook' as const, color: '#1877F2' },
  ],
};

export const COLLECTIONS: Collection[] = [
  {
    handle: 'skin-care',
    title: 'العناية بالبشرة',
    subtitle: 'سيرومات، كريمات، وغسولات لكل أنواع البشرة',
    banner: `${CDN}/546eead2b227232888bc1bfc295ce074.jpg?v=1779379693`,

  },
  {
    handle: 'moisturizers',
    title: 'المرطبات',
    subtitle: 'أفضل مرطبات الوجه والجسم',
    banner: `${CDN}/9e79543c2c48563784f56bdf53859fed.jpg?v=1779379264`,

  },
  {
    handle: 'sun-care',
    title: 'الحماية من الشمس',
    subtitle: 'واقيات شمس بمعاملات حماية عالية',
    banner: `${CDN}/ca7c35a8b38435d754023816a5c127e5.jpg?v=1779378384`,

  },
  {
    handle: 'hair-care',
    title: 'العناية بالشعر',
    subtitle: 'فيتامينات وعلاجات للشعر',
    banner: `${CDN}/a5254a35b115efb069cba013bddc8edd.jpg?v=1779379360`,

  },
  {
    handle: 'makeup',
    title: 'المكياج',
    subtitle: 'أحدث منتجات المكياج بأفضل الأسعار',
    banner: `${CDN}/42b092e0da9affa5010a2bba18bb77cc.jpg?v=1779379482`,

  },
  {
    handle: 'vitamins',
    title: 'الفيتامينات والمكملات',
    subtitle: 'فيتامينات أساسية ومكملات غذائية',
    banner: `${CDN}/b49f77c0130c47fbe5d078059a46021e.jpg?v=1779378371`,

  },
  {
    handle: 'personal-care',
    title: 'العناية الشخصية',
    subtitle: 'صابون، شامبو، غسول جسم، ومزيلات عرق',
    banner: `${CDN}/9e79543c2c48563784f56bdf53859fed.jpg?v=1779379264`,

  },
  {
    handle: 'men-care',
    title: 'العناية بالرجل',
    subtitle: 'عطور، ديو، وعناية شخصية',
    banner: `${CDN}/6959f87a696f7b2b18899ff8e6d703e8.jpg?v=1779379438`,

  },
  {
    handle: 'body-perfumes',
    title: 'العطور والبادي سبلاش',
    subtitle: 'روائح منعشة طوال اليوم',
    banner: `${CDN}/42b092e0da9affa5010a2bba18bb77cc.jpg?v=1779379482`,

  },
  {
    handle: 'baby-milk-food',
    title: 'حليب وطعام الأطفال',
    subtitle: 'تغذية متكاملة لكل المراحل',
    banner: `${CDN}/9e79543c2c48563784f56bdf53859fed.jpg?v=1779379264`,

  },
  {
    handle: 'mom-baby',
    title: 'الأم والطفل',
    subtitle: 'حفاضات، عناية بالأطفال، وعناية بالأم',
    banner: `${CDN}/9e79543c2c48563784f56bdf53859fed.jpg?v=1779379264`,

  },
  {
    handle: 'medical-devices',
    title: 'الأجهزة الطبية',
    subtitle: 'أجهزة قياس الضغط والسكر وغيرها',
    banner: `${CDN}/ca7c35a8b38435d754023816a5c127e5.jpg?v=1779378384`,

  },
  {
    handle: 'medicines',
    title: 'الأدوية',
    subtitle: 'مسكنات، أدوية برد، وأدوية بدون وصفة',
    banner: `${CDN}/b49f77c0130c47fbe5d078059a46021e.jpg?v=1779378371`,

  },
];

export const HERO_SLIDES = [
  {
    id: 'slide-1',
    image: `${CDN}/ca7c35a8b38435d754023816a5c127e5.jpg?v=1779378384`,
    href: '/collections/sun-care',
    alt: 'عروض الحماية من الشمس',
    title: 'صيف بلا قلق',
    subtitle: 'خصومات تصل لـ 50% على واقيات الشمس',
    cta: 'تسوّق الآن',
  },
  {
    id: 'slide-2',
    image: `${CDN}/b49f77c0130c47fbe5d078059a46021e.jpg?v=1779378371`,
    href: '/collections/vitamins',
    alt: 'فيتامينات ومكملات',
    title: 'صحة كل يوم',
    subtitle: 'فيتاميناتك ومكملاتك بأفضل الأسعار',
    cta: 'استكشف',
  },
  {
    id: 'slide-3',
    image: `${CDN}/546eead2b227232888bc1bfc295ce074.jpg?v=1779379693`,
    href: '/collections/skin-care',
    alt: 'العناية بالبشرة',
    title: 'بشرة صحية',
    subtitle: 'أحدث منتجات العناية من أكبر الماركات',
    cta: 'اكتشف',
  },
];

export const BRAND_CHIPS = [
  { label: 'La Roche-Posay', image: `${CDN}/1nzrTV_HSyt3emtjg35QQg2CepfGDtQ7b.jpg?v=1776599856`, href: '/collections/skin-care' },
  { label: 'CeraVe', image: `${CDN}/1Xw_o7LJ4e6HcKGqbKZw3mhs9hIYl2fFJ.jpg?v=1776599460`, href: '/collections/moisturizers' },
  { label: 'Now', image: `${CDN}/1ICPYaP6N66yTemgWBkGDHknEUtCqDlxK.jpg?v=1772890345`, href: '/collections/vitamins' },
  { label: 'Perfectil', image: `${CDN}/download_876ec7aa-0890-4f38-be2f-4cae2b0fe440.jpg?v=1776350043`, href: '/collections/hair-care' },
  { label: 'ZAC', image: `${CDN}/download_d4d0ad57-9ce9-42ba-89e0-da1a494aa873.jpg?v=1772893605`, href: '/collections/men-care' },
  { label: 'Voila', image: `${CDN}/1bZu3Uh1vyVBavn-Q4KEfL5csAMLZfqw1_4bba55d6-c945-41b5-8ccd-af7c1884714d.png?v=1776599611`, href: '/collections/body-perfumes' },
];

export const QUICK_LINKS = [
  { label: 'كل المنتجات', href: '/search' },
  { label: 'العناية بالبشرة', href: '/collections/skin-care' },
  { label: 'المرطبات', href: '/collections/moisturizers' },
  { label: 'الحماية من الشمس', href: '/collections/sun-care' },
  { label: 'العناية بالشعر', href: '/collections/hair-care' },
  { label: 'المكياج', href: '/collections/makeup' },
  { label: 'الفيتامينات', href: '/collections/vitamins' },
  { label: 'العناية الشخصية', href: '/collections/personal-care' },
  { label: 'العناية بالرجل', href: '/collections/men-care' },
  { label: 'العطور', href: '/collections/body-perfumes' },
  { label: 'الأم والطفل', href: '/collections/mom-baby' },
  { label: 'حليب الأطفال', href: '/collections/baby-milk-food' },
  { label: 'الأجهزة الطبية', href: '/collections/medical-devices' },
  { label: 'الأدوية', href: '/collections/medicines' },
];

export const MAIN_MENU = [
  { label: 'العناية بالبشرة', href: '/collections/skin-care' },
  { label: 'المرطبات', href: '/collections/moisturizers' },
  { label: 'الحماية من الشمس', href: '/collections/sun-care' },
  { label: 'العناية بالشعر', href: '/collections/hair-care' },
  { label: 'المكياج', href: '/collections/makeup' },
  { label: 'الفيتامينات', href: '/collections/vitamins' },
  { label: 'العناية الشخصية', href: '/collections/personal-care' },
  { label: 'العناية بالرجل', href: '/collections/men-care' },
  { label: 'العطور', href: '/collections/body-perfumes' },
  { label: 'الأم والطفل', href: '/collections/mom-baby' },
  { label: 'الأجهزة الطبية', href: '/collections/medical-devices' },
  { label: 'الأدوية', href: '/collections/medicines' },
];

// Image URLs are reused intentionally across multiple products so the demo always renders something.
const IMG = {
  // Skincare / La Roche-Posay style
  lrp1: `${CDN}/1nzrTV_HSyt3emtjg35QQg2CepfGDtQ7b.jpg?v=1776599856`,
  lrp2: `${CDN}/download_770cee54-ac6d-4caa-914c-14da23ca0271.jpg?v=1776599864`,
  lrp3: `${CDN}/download_c9dfad5c-b5f5-4f1b-9640-780802947d34.jpg?v=1776351911`,
  lrp4: `${CDN}/download_44107998-2661-49c3-afd3-2a7a08e7cef6.jpg?v=1776599847`,
  lrp5: `${CDN}/download_a19595eb-4506-46b1-8a88-b48d6e7d4288.jpg?v=1776351930`,
  lrp6: `${CDN}/download_a7bb22fa-af78-48f9-9f07-a0d854b9c103.jpg?v=1776351939`,
  lrp7: `${CDN}/download_c281ef88-14d5-4b8d-9842-c685942909cd.jpg?v=1776599848`,
  lrp8: `${CDN}/download_815b9124-93f5-42a2-94c5-cbf3bbc276ba.jpg?v=1776599859`,
  // Moisturizers / Cerave / generic
  m1: `${CDN}/1D-ClhNfIvjRIkhViyEUGRRKRaewfnqJE.png?v=1776599314`,
  m2: `${CDN}/1Xw_o7LJ4e6HcKGqbKZw3mhs9hIYl2fFJ.jpg?v=1776599460`,
  m3: `${CDN}/1GLDTE_ECUqDyb0vy2tG9pK_ZwQTOMG_b.jpg?v=1776599472`,
  m4: `${CDN}/download_0b809e35-8962-4b47-b0d6-c4ad8f2c8662.jpg?v=1776596807`,
  m5: `${CDN}/1fyEL44bRhJ4nD0F7dzBIdmqtAMPxstfQ.png?v=1776007852`,
  m6: `${CDN}/download_160da031-c43e-4a9f-ac1d-ef6c73163a09.jpg?v=1776598987`,
  // Hair vitamins
  h1: `${CDN}/1ICPYaP6N66yTemgWBkGDHknEUtCqDlxK.jpg?v=1772890345`,
  h2: `${CDN}/download_876ec7aa-0890-4f38-be2f-4cae2b0fe440.jpg?v=1776350043`,
  h3: `${CDN}/1KtOUdc2lssHTOkz8dreVHTfO2Nmp_Whe.jpg?v=1772891438`,
  h4: `${CDN}/16eKRv2ME6P8LlrZm4Di0ci0Wfb-agHsG.jpg?v=1776008548`,
  h5: `${CDN}/1SdqkxVFKzjnfIYz0lXhl6YdzYuZ1mo_t.jpg?v=1776268799`,
  h6: `${CDN}/download_b2cf84bf-5185-4fa8-9bbf-e3e85368db0f.jpg?v=1776597813`,
  // Men perfumes
  mn1: `${CDN}/download_d4d0ad57-9ce9-42ba-89e0-da1a494aa873.jpg?v=1772893605`,
  mn2: `${CDN}/download_30eafc2a-2315-4f01-a5f6-025b2c09364d.jpg?v=1772893602`,
  mn3: `${CDN}/download_cc56e6d5-7423-4746-866c-a29ed1569969.jpg?v=1772893605`,
  mn4: `${CDN}/download_1bdd9afd-c460-4114-884a-0975fffb6ec2.jpg?v=1776010185`,
  mn5: `${CDN}/download_9a11713c-bd2a-42db-a427-bb9f0e56cf03.jpg?v=1773193203`,
  // Splashes
  s1: `${CDN}/download_8b80483c-9fc1-4053-b7ea-a8463b84de4a.jpg?v=1776351661`,
  s2: `${CDN}/1bZu3Uh1vyVBavn-Q4KEfL5csAMLZfqw1_4bba55d6-c945-41b5-8ccd-af7c1884714d.png?v=1776599611`,
  s3: `${CDN}/1Uy-zLg50OUeEmcKUMR_SP2-TdguHe_t.png?v=1776599611`,
  s4: `${CDN}/download_4ab76379-b215-4dd7-bc7c-9ab206732037.jpg?v=1776351667`,
  s5: `${CDN}/download_c040b794-a395-45fc-9d5b-5c90dde36886.jpg?v=1772893054`,
};

export const PRODUCTS: Product[] = [
  // ============= SKIN CARE (12) =============
  { handle: 'lrp-suncare-oil-control-50', title: 'لاروش بوزيه صن أويل كنترول فلويد SPF50 - 50مل', brand: 'La Roche-Posay', price: 1050, image: IMG.lrp1, collection: 'skin-care', tags: ['sunscreen', 'oily'] },
  { handle: 'lrp-mela-b3-serum-30', title: 'لاروش بوزيه ميلا B3 سيرم للبقع الداكنة - 30مل', brand: 'La Roche-Posay', price: 1980, image: IMG.lrp2, collection: 'skin-care', tags: ['serum'] },
  { handle: 'lrp-626-serum-b5', title: 'لاروش بوزيه 626 سيرم B5 لتجديد البشرة', brand: 'La Roche-Posay', price: 1430, image: IMG.lrp3, collection: 'skin-care', tags: ['serum'] },
  { handle: 'lrp-effaclar-gel-200', title: 'لاروش بوزيه ايفاكلار غسول وجه للبشرة الدهنية - 200مل', brand: 'La Roche-Posay', price: 790, image: IMG.lrp5, collection: 'skin-care', tags: ['cleanser', 'oily'] },
  { handle: 'lrp-effaclar-mat-40', title: 'لاروش بوزيه ايفاكلار مات كريم مرطب مطفي - 40مل', brand: 'La Roche-Posay', price: 920, image: IMG.lrp6, collection: 'skin-care', tags: ['cream', 'oily'] },
  { handle: 'lrp-retinol-serum-30', title: 'لاروش بوزيه ريتينول B3 سيرم مضاد للتجاعيد - 30مل', brand: 'La Roche-Posay', price: 1590, image: IMG.lrp7, collection: 'skin-care', tags: ['serum', 'anti-aging'] },
  { handle: 'lrp-toleriane-40', title: 'لاروش بوزيه توليرين مرطب للبشرة الحساسة - 40مل', brand: 'La Roche-Posay', price: 970, image: IMG.lrp8, collection: 'skin-care', tags: ['cream', 'sensitive'] },
  { handle: 'lrp-anthelios-50', title: 'لاروش بوزيه أنثيليوس كريم مرطب SPF50+ - 50مل', brand: 'La Roche-Posay', price: 1130, image: IMG.lrp4, collection: 'skin-care', tags: ['sunscreen'] },
  { handle: 'vichy-mineral-89-50', title: 'فيشي مينيرال 89 سيرم بحمض الهيالورونيك - 50مل', brand: 'Vichy', price: 1290, image: IMG.lrp3, collection: 'skin-care', tags: ['serum'] },
  { handle: 'avene-cleanance-200', title: 'أفين كلينانس غسول للبشرة الدهنية - 200مل', brand: 'Avène', price: 580, image: IMG.lrp5, collection: 'skin-care', tags: ['cleanser', 'oily'] },
  { handle: 'avene-hydrance-40', title: 'أفين هيدرانس كريم مرطب يومي - 40مل', brand: 'Avène', price: 690, image: IMG.lrp6, collection: 'skin-care', tags: ['cream'] },
  { handle: 'pure-rose-water', title: 'بيور بخاخ ماء ورد طبيعي للوجه', brand: 'Pure', price: 15, image: IMG.m6, collection: 'skin-care', tags: ['toner'] },

  // ============= MOISTURIZERS (10) =============
  { handle: 'der-cream-200', title: 'دير كريم مرطب للجسم - 200جم', brand: 'Der', price: 144, compareAt: 360, image: IMG.m1, collection: 'moisturizers', tags: ['sale'] },
  { handle: 'cerave-gel-cream-oily', title: 'سيرافي جل كريم مرطب للبشرة الدهنية', brand: 'CeraVe', price: 660, image: IMG.m2, collection: 'moisturizers', tags: ['oily'] },
  { handle: 'cerave-lotion-236', title: 'سيرافي لوشن مرطب للبشرة الجافة - 236مل', brand: 'CeraVe', price: 640, image: IMG.m3, collection: 'moisturizers', tags: ['dry'] },
  { handle: 'cerave-foaming-236', title: 'سيرافي غسول رغوي للبشرة الدهنية - 236مل', brand: 'CeraVe', price: 720, compareAt: 850, image: IMG.m2, collection: 'moisturizers', tags: ['cleanser', 'sale'] },
  { handle: 'cerave-hydrating-236', title: 'سيرافي غسول مرطب للبشرة الجافة - 236مل', brand: 'CeraVe', price: 690, image: IMG.m3, collection: 'moisturizers', tags: ['cleanser', 'dry'] },
  { handle: 'infinity-panthenol-50', title: 'إنفينيتي بانثينول 5% كريم مرطب - 50جم', brand: 'Infinity', price: 60, image: IMG.m4, collection: 'moisturizers' },
  { handle: 'panthenol-u-richi-50', title: 'بانثينول U ريتشي أدفانس كريم جل - 50جم', brand: 'Panthenol U', price: 110, image: IMG.m5, collection: 'moisturizers' },
  { handle: 'panthenol-u-50', title: 'بانثينول U كريم مرطب يومي - 50جم', brand: 'Panthenol U', price: 95, image: IMG.m5, collection: 'moisturizers' },
  { handle: 'eucerin-aquaphor-50', title: 'يوسرين أكوافور بلسم مرطب متعدد الاستخدامات - 50جم', brand: 'Eucerin', price: 280, image: IMG.m4, collection: 'moisturizers' },
  { handle: 'bioderma-atoderm-500', title: 'بيوديرما أتوديرم لوشن مرطب للجسم - 500مل', brand: 'Bioderma', price: 590, image: IMG.m3, collection: 'moisturizers', tags: ['dry'] },

  // ============= SUN CARE (8) =============
  { handle: 'lrp-uvmune-spf50', title: 'لاروش بوزيه أنثيليوس UVMUNE 400 SPF50+', brand: 'La Roche-Posay', price: 1290, image: IMG.lrp1, collection: 'sun-care' },
  { handle: 'lrp-anthelios-tinted', title: 'لاروش بوزيه أنثيليوس كريم بلون SPF50+', brand: 'La Roche-Posay', price: 1450, image: IMG.lrp4, collection: 'sun-care' },
  { handle: 'sun-spray-200', title: 'صن بروتكت بخاخ واقي شمس SPF50 - 200مل', brand: 'SunCare', price: 320, compareAt: 480, image: IMG.lrp1, collection: 'sun-care', tags: ['sale'] },
  { handle: 'after-sun-aloe', title: 'جل ما بعد الشمس بالألوفيرا - 200مل', brand: 'AloeFresh', price: 140, image: IMG.m6, collection: 'sun-care' },
  { handle: 'kids-sun-spf50', title: 'واقي شمس للأطفال SPF50+ مقاوم للماء', brand: 'KidSafe', price: 380, image: IMG.m1, collection: 'sun-care' },
  { handle: 'avene-sun-spf50', title: 'أفين واقي شمس SPF50+ للبشرة الحساسة', brand: 'Avène', price: 850, image: IMG.lrp4, collection: 'sun-care', tags: ['sensitive'] },
  { handle: 'sun-stick-spf50', title: 'ستيك واقي شمس SPF50 للوجه', brand: 'SunCare', price: 160, image: IMG.lrp1, collection: 'sun-care' },
  { handle: 'tinted-sun-bb', title: 'كريم BB بلون مع واقي شمس SPF30', brand: 'GlowSun', price: 240, compareAt: 320, image: IMG.lrp4, collection: 'sun-care', tags: ['sale', 'makeup'] },

  // ============= HAIR CARE (10) =============
  { handle: 'now-biotin-120', title: 'ناو فودز بيوتين 10000 ميكروجرام - 120 كبسولة', brand: 'Now', price: 1600, image: IMG.h1, collection: 'hair-care' },
  { handle: 'perfectil-hair-60', title: 'بيرفكتل هير إكسترا للشعر - 60 قرص', brand: 'Perfectil', price: 700, image: IMG.h2, collection: 'hair-care' },
  { handle: 'vee-hair-60', title: 'في هير فيتامين شعر شامل - 60 كبسولة', brand: 'Vee', price: 560, image: IMG.h3, collection: 'hair-care' },
  { handle: 'vee-biotin-60', title: 'في بيوتين 10000 ميكروجرام - 60 كبسولة', brand: 'Vee', price: 499, image: IMG.h4, collection: 'hair-care' },
  { handle: 'hairskino-30', title: 'هيرسكينو للشعر والبشرة والأظافر - 30 قرص', brand: 'Hairskino', price: 370, image: IMG.h5, collection: 'hair-care' },
  { handle: 'perfectil-30', title: 'بيرفكتل أوريجينال - 30 قرص', brand: 'Perfectil', price: 350, image: IMG.h6, collection: 'hair-care' },
  { handle: 'biotin-shampoo-300', title: 'شامبو البيوتين لتقوية الشعر - 300مل', brand: 'BioCare', price: 220, compareAt: 280, image: IMG.h3, collection: 'hair-care', tags: ['sale'] },
  { handle: 'anti-fall-serum-100', title: 'سيرم منع تساقط الشعر - 100مل', brand: 'HairLab', price: 410, image: IMG.h5, collection: 'hair-care' },
  { handle: 'keratin-mask-500', title: 'ماسك الكيراتين لإصلاح الشعر التالف - 500مل', brand: 'KeraGold', price: 350, image: IMG.h6, collection: 'hair-care' },
  { handle: 'argan-hair-oil-100', title: 'زيت الأرجان للشعر الجاف - 100مل', brand: 'ArganPro', price: 195, image: IMG.h3, collection: 'hair-care' },

  // ============= MAKEUP (10) =============
  { handle: 'sheglam-matte-foundation', title: 'شيجلام فاونديشن مات يدوم 24 ساعة', brand: 'Sheglam', price: 380, image: IMG.s2, collection: 'makeup' },
  { handle: 'sheglam-concealer', title: 'شيجلام كونسيلر مغطّي عيوب البشرة', brand: 'Sheglam', price: 245, compareAt: 320, image: IMG.s3, collection: 'makeup', tags: ['sale'] },
  { handle: 'sheglam-lipstick-velvet', title: 'شيجلام أحمر شفاه فيلفت ماط', brand: 'Sheglam', price: 180, image: IMG.s2, collection: 'makeup' },
  { handle: 'mascara-volume', title: 'ماسكارا فولوم للرموش الطويلة', brand: 'GlamLash', price: 220, image: IMG.s5, collection: 'makeup' },
  { handle: 'eyeshadow-palette-12', title: 'باليت ظلال عيون 12 لون نيود', brand: 'GlamLab', price: 410, image: IMG.s3, collection: 'makeup' },
  { handle: 'blush-on-peach', title: 'بلاش بودرة بلون الخوخ', brand: 'GlamLab', price: 165, image: IMG.s2, collection: 'makeup' },
  { handle: 'eyeliner-liquid-black', title: 'آيلاينر سائل أسود ضد الماء', brand: 'GlamLash', price: 130, compareAt: 180, image: IMG.s5, collection: 'makeup', tags: ['sale'] },
  { handle: 'setting-spray-100', title: 'سبراي تثبيت المكياج - 100مل', brand: 'GlamLab', price: 290, image: IMG.s1, collection: 'makeup' },
  { handle: 'makeup-remover-200', title: 'مزيل مكياج للوجه والعينين - 200مل', brand: 'GlowClean', price: 145, image: IMG.m6, collection: 'makeup' },
  { handle: 'highlighter-gold', title: 'هايلايتر بودرة بلمسة ذهبية', brand: 'GlamLab', price: 210, image: IMG.s2, collection: 'makeup' },

  // ============= VITAMINS (12) =============
  { handle: 'vitamin-d3-2000-90', title: 'فيتامين D3 - 2000 وحدة دولية - 90 كبسولة', brand: 'VitaMax', price: 320, image: IMG.h1, collection: 'vitamins' },
  { handle: 'vitamin-c-1000-60', title: 'فيتامين C - 1000 ملجم - 60 قرص', brand: 'VitaMax', price: 180, compareAt: 240, image: IMG.h2, collection: 'vitamins', tags: ['sale'] },
  { handle: 'omega-3-1000-90', title: 'أوميجا 3 زيت السمك - 1000 ملجم - 90 كبسولة', brand: 'NordicFish', price: 520, image: IMG.h6, collection: 'vitamins' },
  { handle: 'multi-women-60', title: 'ملتي فيتامين للنساء - 60 قرص', brand: 'WomenCare', price: 410, image: IMG.h5, collection: 'vitamins' },
  { handle: 'multi-men-60', title: 'ملتي فيتامين للرجال - 60 قرص', brand: 'MenCare', price: 410, image: IMG.h3, collection: 'vitamins' },
  { handle: 'zinc-50-60', title: 'زنك 50 ملجم - 60 قرص', brand: 'VitaMax', price: 150, image: IMG.h4, collection: 'vitamins' },
  { handle: 'cal-mag-90', title: 'كالسيوم + ماغنسيوم + D3 - 90 قرص', brand: 'BoneStrong', price: 380, compareAt: 500, image: IMG.h1, collection: 'vitamins', tags: ['sale'] },
  { handle: 'magnesium-200-60', title: 'ماغنسيوم سترات 200 ملجم - 60 كبسولة', brand: 'VitaMax', price: 220, image: IMG.h6, collection: 'vitamins' },
  { handle: 'collagen-300', title: 'كولاجين بيبتايد بودر - 300جم', brand: 'GlowCol', price: 690, image: IMG.lrp1, collection: 'vitamins' },
  { handle: 'iron-folic-60', title: 'حديد + حمض فوليك - 60 قرص', brand: 'VitaMax', price: 195, image: IMG.h2, collection: 'vitamins' },
  { handle: 'b-complex-60', title: 'فيتامين B كومبلكس - 60 قرص', brand: 'VitaMax', price: 240, image: IMG.h4, collection: 'vitamins' },
  { handle: 'prenatal-multi-60', title: 'فيتامينات الحامل المتكاملة - 60 قرص', brand: 'WomenCare', price: 480, image: IMG.h5, collection: 'vitamins' },

  // ============= PERSONAL CARE (10) =============
  { handle: 'dove-soap-bar-100', title: 'دوف صابون مرطب بربع كريم - 100جم', brand: 'Dove', price: 35, image: IMG.m1, collection: 'personal-care' },
  { handle: 'dove-body-wash-500', title: 'دوف غسول جسم مرطب - 500مل', brand: 'Dove', price: 145, compareAt: 180, image: IMG.m1, collection: 'personal-care', tags: ['sale'] },
  { handle: 'nivea-deodorant-150', title: 'نيفيا مزيل عرق بخاخ - 150مل', brand: 'Nivea', price: 75, image: IMG.mn4, collection: 'personal-care' },
  { handle: 'nivea-roll-on-50', title: 'نيفيا مزيل عرق رول أون - 50مل', brand: 'Nivea', price: 65, image: IMG.mn5, collection: 'personal-care' },
  { handle: 'shampoo-shine-400', title: 'شامبو يومي للمعان الشعر - 400مل', brand: 'HairLab', price: 95, image: IMG.h3, collection: 'personal-care' },
  { handle: 'conditioner-soft-400', title: 'بلسم لنعومة الشعر - 400مل', brand: 'HairLab', price: 95, image: IMG.h6, collection: 'personal-care' },
  { handle: 'oral-toothpaste-100', title: 'معجون أسنان بتبييض - 100جم', brand: 'OralCare', price: 45, image: IMG.m5, collection: 'personal-care' },
  { handle: 'mouthwash-500', title: 'غسول فم منعش - 500مل', brand: 'OralCare', price: 85, image: IMG.m3, collection: 'personal-care' },
  { handle: 'hand-sanitizer-500', title: 'معقم اليدين الكحولي 70% - 500مل', brand: 'CleanPro', price: 60, image: IMG.m6, collection: 'personal-care' },
  { handle: 'wet-wipes-72', title: 'مناديل مبللة معطرة - 72 منديل', brand: 'CleanPro', price: 40, image: IMG.m6, collection: 'personal-care' },

  // ============= MEN CARE (8) =============
  { handle: 'zac-hustler-150', title: 'زاك إنتنس عطر هوستلر للرجال - 150مل', brand: 'ZAC', price: 445, image: IMG.mn1, collection: 'men-care' },
  { handle: 'zac-black-tobacco-150', title: 'زاك إنتنس عطر بلاك توباكو للرجال - 150مل', brand: 'ZAC', price: 425, image: IMG.mn2, collection: 'men-care' },
  { handle: 'zac-rider-red-150', title: 'زاك إنتنس عطر رايدر الأحمر للرجال - 150مل', brand: 'ZAC', price: 425, image: IMG.mn3, collection: 'men-care' },
  { handle: 'zac-champion-175', title: 'زاك سبراي شامبيون مزيل عرق للرجال - 175مل', brand: 'ZAC', price: 265, image: IMG.mn4, collection: 'men-care' },
  { handle: 'zac-gentleman-175', title: 'زاك سبراي جينتل مان مزيل عرق - 175مل', brand: 'ZAC', price: 265, image: IMG.mn5, collection: 'men-care' },
  { handle: 'mens-charcoal-wash-150', title: 'غسول وجه للرجال بالفحم النشط - 150مل', brand: 'MenLab', price: 145, compareAt: 220, image: IMG.lrp5, collection: 'men-care', tags: ['sale'] },
  { handle: 'shave-foam-200', title: 'كريم حلاقة منعش للرجال - 200مل', brand: 'BarberX', price: 95, image: IMG.mn1, collection: 'men-care' },
  { handle: 'after-shave-100', title: 'بلسم ما بعد الحلاقة - 100مل', brand: 'BarberX', price: 120, image: IMG.mn2, collection: 'men-care' },

  // ============= BODY PERFUMES (8) =============
  { handle: 'flair-oud-250', title: 'فلير بادي سبلاش بخلاصة العود - 250مل', brand: 'Flair', price: 400, image: IMG.s1, collection: 'body-perfumes' },
  { handle: 'voila-vanilla-250', title: 'فوالا بادي سبلاش بالفانيليا - 250مل', brand: 'Voila', price: 220, compareAt: 440, image: IMG.s2, collection: 'body-perfumes', tags: ['sale'] },
  { handle: 'voila-dark-kiss-250', title: 'فوالا بادي سبلاش دارك كيس - 250مل', brand: 'Voila', price: 220, compareAt: 440, image: IMG.s3, collection: 'body-perfumes', tags: ['sale'] },
  { handle: 'voila-oud-250', title: 'فوالا بادي سبلاش بخلاصة العود - 250مل', brand: 'Voila', price: 220, compareAt: 440, image: IMG.s4, collection: 'body-perfumes', tags: ['sale'] },
  { handle: 'telovel-midnight-250', title: 'تيلوفيل بادي ميست ميدنايت - 250مل', brand: 'Telovel', price: 280, image: IMG.s5, collection: 'body-perfumes' },
  { handle: 'fresh-roses-100', title: 'عطر فريش روزز للنساء - 100مل', brand: 'FreshRose', price: 320, image: IMG.s2, collection: 'body-perfumes' },
  { handle: 'flair-coconut-250', title: 'فلير بادي سبلاش بجوز الهند - 250مل', brand: 'Flair', price: 380, compareAt: 450, image: IMG.s1, collection: 'body-perfumes', tags: ['sale'] },
  { handle: 'arabic-musk-100', title: 'عطر المسك العربي الفاخر - 100مل', brand: 'OudMaster', price: 580, image: IMG.s4, collection: 'body-perfumes' },

  // ============= BABY MILK & FOOD (8) =============
  { handle: 'baby-formula-stage1-400', title: 'حليب أطفال مرحلة 1 - 400جم', brand: 'NutriBaby', price: 290, image: IMG.m5, collection: 'baby-milk-food' },
  { handle: 'baby-formula-stage2-400', title: 'حليب أطفال مرحلة 2 - 400جم', brand: 'NutriBaby', price: 310, image: IMG.m5, collection: 'baby-milk-food' },
  { handle: 'baby-formula-stage3-400', title: 'حليب أطفال مرحلة 3 - 400جم', brand: 'NutriBaby', price: 295, image: IMG.m5, collection: 'baby-milk-food' },
  { handle: 'baby-cereal-rice-250', title: 'سيريال أطفال بالأرز للفطام - 250جم', brand: 'NutriBaby', price: 95, image: IMG.m4, collection: 'baby-milk-food' },
  { handle: 'baby-cereal-fruits-250', title: 'سيريال أطفال بالفواكه - 250جم', brand: 'NutriBaby', price: 105, image: IMG.m4, collection: 'baby-milk-food' },
  { handle: 'baby-jar-veggies-100', title: 'برطمان أطفال خضار مهروس - 100جم', brand: 'BabyFresh', price: 35, image: IMG.m4, collection: 'baby-milk-food' },
  { handle: 'baby-juice-apple-200', title: 'عصير تفاح للأطفال - 200مل', brand: 'BabyFresh', price: 25, image: IMG.m6, collection: 'baby-milk-food' },
  { handle: 'baby-water-500', title: 'مياه معدنية للأطفال - 500مل', brand: 'BabyFresh', price: 18, image: IMG.m6, collection: 'baby-milk-food' },

  // ============= MOM & BABY (10) =============
  { handle: 'baby-diapers-jumbo-60', title: 'حفاضات أطفال - عبوة جامبو 60 حفاضة', brand: 'BabyDry', price: 240, compareAt: 320, image: IMG.m1, collection: 'mom-baby', tags: ['sale'] },
  { handle: 'baby-wipes-72-3', title: 'مناديل أطفال مبللة - 3 عبوات', brand: 'BabyDry', price: 145, image: IMG.m6, collection: 'mom-baby' },
  { handle: 'baby-shampoo-500', title: 'شامبو أطفال خالي من الدموع - 500مل', brand: 'BabyDry', price: 95, image: IMG.m2, collection: 'mom-baby' },
  { handle: 'baby-lotion-300', title: 'لوشن مرطب للأطفال - 300مل', brand: 'BabyDry', price: 120, image: IMG.m3, collection: 'mom-baby' },
  { handle: 'baby-rash-cream-100', title: 'كريم لعلاج التسلخات للأطفال - 100جم', brand: 'BabyDry', price: 75, image: IMG.m4, collection: 'mom-baby' },
  { handle: 'baby-bottle-anti-colic-260', title: 'رضّاعة أطفال مضادة للمغص - 260مل', brand: 'BabyDry', price: 180, image: IMG.m1, collection: 'mom-baby' },
  { handle: 'baby-pacifier-soft', title: 'لهاية سيليكون طرية للأطفال', brand: 'BabyDry', price: 65, image: IMG.m5, collection: 'mom-baby' },
  { handle: 'pregnancy-pillow', title: 'وسادة للحامل بشكل U', brand: 'MomCare', price: 480, compareAt: 590, image: IMG.m3, collection: 'mom-baby', tags: ['sale'] },
  { handle: 'nursing-pads-30', title: 'فوط امتصاص الرضاعة - 30 قطعة', brand: 'MomCare', price: 95, image: IMG.m4, collection: 'mom-baby' },
  { handle: 'stretch-mark-oil-100', title: 'زيت لعلاج علامات التمدد - 100مل', brand: 'MomCare', price: 220, image: IMG.m6, collection: 'mom-baby' },

  // ============= MEDICAL DEVICES (8) =============
  { handle: 'thermometer-digital', title: 'ميزان حرارة رقمي للجسم', brand: 'MediCheck', price: 95, image: IMG.h2, collection: 'medical-devices' },
  { handle: 'infrared-thermometer', title: 'ميزان حرارة بالأشعة تحت الحمراء بدون لمس', brand: 'MediCheck', price: 480, compareAt: 650, image: IMG.h1, collection: 'medical-devices', tags: ['sale'] },
  { handle: 'bp-monitor-arm', title: 'جهاز قياس ضغط الدم للذراع', brand: 'MediCheck', price: 890, image: IMG.h6, collection: 'medical-devices' },
  { handle: 'bp-monitor-wrist', title: 'جهاز قياس ضغط الدم للمعصم', brand: 'MediCheck', price: 520, image: IMG.h5, collection: 'medical-devices' },
  { handle: 'glucose-meter', title: 'جهاز قياس السكر في الدم', brand: 'MediCheck', price: 650, image: IMG.h4, collection: 'medical-devices' },
  { handle: 'glucose-strips-50', title: 'شرائط قياس السكر - 50 شريحة', brand: 'MediCheck', price: 280, image: IMG.h3, collection: 'medical-devices' },
  { handle: 'pulse-oximeter', title: 'جهاز قياس نسبة الأكسجين في الدم', brand: 'MediCheck', price: 320, compareAt: 420, image: IMG.h2, collection: 'medical-devices', tags: ['sale'] },
  { handle: 'nebulizer-compact', title: 'جهاز استنشاق بخار للربو والحساسية', brand: 'MediCheck', price: 1290, image: IMG.h1, collection: 'medical-devices' },

  // ============= MEDICINES (OTC only) =============
  { handle: 'panadol-extra-24', title: 'بانادول إكسترا مسكن وخافض حرارة - 24 قرص', brand: 'Panadol', price: 35, image: IMG.h2, collection: 'medicines' },
  { handle: 'panadol-cold-flu-24', title: 'بانادول للبرد والإنفلونزا - 24 قرص', brand: 'Panadol', price: 45, image: IMG.h2, collection: 'medicines' },
  { handle: 'brufen-400-30', title: 'بروفين 400 ملجم مسكن - 30 قرص', brand: 'Brufen', price: 28, image: IMG.h6, collection: 'medicines' },
  { handle: 'congestal-cold-20', title: 'كونجستال لعلاج أعراض البرد - 20 قرص', brand: 'Congestal', price: 22, image: IMG.h4, collection: 'medicines' },
  { handle: 'rhinathiol-syrup-125', title: 'رينازيول شراب طارد للبلغم - 125مل', brand: 'Rhinathiol', price: 48, image: IMG.h5, collection: 'medicines' },
  { handle: 'farcosolvin-syrup-120', title: 'فاركوسولفين شراب للسعال - 120مل', brand: 'Farcosolvin', price: 35, image: IMG.h5, collection: 'medicines' },
  { handle: 'cetal-syrup-125', title: 'سيتال شراب خافض حرارة للأطفال - 125مل', brand: 'Cetal', price: 18, image: IMG.h3, collection: 'medicines' },
  { handle: 'maalox-syrup-355', title: 'مالوكس شراب مضاد للحموضة - 355مل', brand: 'Maalox', price: 65, image: IMG.h6, collection: 'medicines' },
  { handle: 'antinal-12', title: 'أنتينال لعلاج النزلات المعوية - 12 كبسولة', brand: 'Antinal', price: 32, image: IMG.h4, collection: 'medicines' },
  { handle: 'vitamin-c-effervescent-20', title: 'فيتامين C فوار للمناعة - 20 قرص', brand: 'Redoxon', price: 75, compareAt: 95, image: IMG.h1, collection: 'medicines', tags: ['sale'] },

  // ============= EXTRA SKIN CARE =============
  { handle: 'vichy-liftactiv-serum-30', title: 'فيشي ليفت أكتيف سيرم فيتامين C - 30مل', brand: 'Vichy', price: 1180, compareAt: 1390, image: IMG.lrp2, collection: 'skin-care', tags: ['sale', 'serum'] },
  { handle: 'vichy-normaderm-gel-200', title: 'فيشي نورماديرم غسول للبشرة المختلطة - 200مل', brand: 'Vichy', price: 540, image: IMG.lrp5, collection: 'skin-care', tags: ['cleanser'] },
  { handle: 'avene-thermal-water-300', title: 'أفين ماء حراري ملطّف للبشرة - 300مل', brand: 'Avène', price: 420, image: IMG.m6, collection: 'skin-care' },
  { handle: 'ordinary-niacinamide-30', title: 'ذا أورديناري نياسيناميد 10% + زنك - 30مل', brand: 'The Ordinary', price: 360, compareAt: 450, image: IMG.lrp3, collection: 'skin-care', tags: ['sale', 'serum'] },
  { handle: 'ordinary-haialuronic-30', title: 'ذا أورديناري حمض الهيالورونيك 2% - 30مل', brand: 'The Ordinary', price: 380, image: IMG.lrp7, collection: 'skin-care', tags: ['serum'] },
  { handle: 'eucerin-dermopure-gel-200', title: 'يوسرين ديرموبيور غسول للبشرة المعرضة للحبوب - 200مل', brand: 'Eucerin', price: 610, image: IMG.lrp5, collection: 'skin-care', tags: ['cleanser', 'oily'] },
  { handle: 'garnier-micellar-400', title: 'غارنييه ماء ميسيلار منظّف للوجه - 400مل', brand: 'Garnier', price: 195, compareAt: 250, image: IMG.m6, collection: 'skin-care', tags: ['sale', 'cleanser'] },
  { handle: 'beesline-whitening-roll-50', title: 'بيزلين رول أون مفتّح للمناطق الحساسة - 50مل', brand: 'Beesline', price: 280, image: IMG.m4, collection: 'skin-care' },

  // ============= EXTRA MOISTURIZERS =============
  { handle: 'cerave-sa-cream-340', title: 'سيرافي SA كريم مرطب للبشرة الخشنة - 340جم', brand: 'CeraVe', price: 820, image: IMG.m2, collection: 'moisturizers' },
  { handle: 'cerave-night-cream-48', title: 'سيرافي كريم ليلي مجدد للبشرة - 48مل', brand: 'CeraVe', price: 750, compareAt: 890, image: IMG.m3, collection: 'moisturizers', tags: ['sale'] },
  { handle: 'nivea-soft-cream-200', title: 'نيفيا سوفت كريم مرطب منعش - 200مل', brand: 'Nivea', price: 120, image: IMG.m1, collection: 'moisturizers' },
  { handle: 'nivea-body-lotion-400', title: 'نيفيا لوشن مرطب للجسم - 400مل', brand: 'Nivea', price: 165, image: IMG.m1, collection: 'moisturizers' },
  { handle: 'bioderma-sebium-gel-200', title: 'بيوديرما سيبيوم غسول للبشرة الدهنية - 200مل', brand: 'Bioderma', price: 560, image: IMG.m2, collection: 'moisturizers', tags: ['oily'] },
  { handle: 'eucerin-aquaphor-cream-99', title: 'يوسرين أكوافور كريم إصلاحي - 99جم', brand: 'Eucerin', price: 340, image: IMG.m4, collection: 'moisturizers' },

  // ============= EXTRA SUN CARE =============
  { handle: 'vichy-capital-soleil-50', title: 'فيشي كابيتال سوليل واقي شمس SPF50+ - 50مل', brand: 'Vichy', price: 980, compareAt: 1150, image: IMG.lrp4, collection: 'sun-care', tags: ['sale'] },
  { handle: 'garnier-ambre-solaire-200', title: 'غارنييه أمبر سولير بخاخ واقي شمس SPF50', brand: 'Garnier', price: 280, image: IMG.lrp1, collection: 'sun-care' },
  { handle: 'eucerin-sun-oil-control-50', title: 'يوسرين واقي شمس أويل كنترول SPF50+ - 50مل', brand: 'Eucerin', price: 720, image: IMG.lrp1, collection: 'sun-care', tags: ['oily'] },
  { handle: 'lip-balm-spf30', title: 'مرطب شفاه بحماية من الشمس SPF30', brand: 'SunCare', price: 85, image: IMG.m5, collection: 'sun-care' },

  // ============= EXTRA HAIR CARE =============
  { handle: 'now-collagen-hair-90', title: 'ناو فودز كولاجين للشعر والبشرة - 90 كبسولة', brand: 'Now', price: 1250, image: IMG.h1, collection: 'hair-care' },
  { handle: 'capixyl-serum-100', title: 'كابيكسيل سيرم تكثيف الشعر - 100مل', brand: 'Capixy', price: 480, compareAt: 600, image: IMG.h5, collection: 'hair-care', tags: ['sale'] },
  { handle: 'minoxidil-5-60', title: 'مينوكسيديل 5% بخاخ لإنبات الشعر - 60مل', brand: 'HairLab', price: 320, image: IMG.h3, collection: 'hair-care' },
  { handle: 'biotin-gummies-60', title: 'علكات البيوتين للشعر بطعم الفراولة - 60 علكة', brand: 'Vee', price: 420, image: IMG.h4, collection: 'hair-care' },
  { handle: 'nanotreat-mask-300', title: 'نانو تريت ماسك إصلاح الشعر التالف - 300مل', brand: 'Nano Treat', price: 290, compareAt: 360, image: IMG.h6, collection: 'hair-care', tags: ['sale'] },
  { handle: 'caffeine-shampoo-200', title: 'شامبو الكافيين لتقوية بصيلات الشعر - 200مل', brand: 'BioCare', price: 185, image: IMG.h3, collection: 'hair-care' },

  // ============= EXTRA MAKEUP =============
  { handle: 'sheglam-bronzer', title: 'شيجلام برونزر طبيعي للوجه', brand: 'Sheglam', price: 210, compareAt: 270, image: IMG.s2, collection: 'makeup', tags: ['sale'] },
  { handle: 'sheglam-lip-gloss', title: 'شيجلام لمعان شفاه مرطّب', brand: 'Sheglam', price: 150, image: IMG.s3, collection: 'makeup' },
  { handle: 'glamlab-bb-cream-40', title: 'جلام لاب BB كريم مرطّب بلون - 40مل', brand: 'GlamLab', price: 260, image: IMG.s2, collection: 'makeup' },
  { handle: 'glamlab-brow-pencil', title: 'جلام لاب قلم تحديد الحواجب', brand: 'GlamLab', price: 110, image: IMG.s5, collection: 'makeup' },
  { handle: 'glamlash-lash-serum', title: 'جلام لاش سيرم إطالة الرموش', brand: 'GlamLash', price: 320, compareAt: 410, image: IMG.s5, collection: 'makeup', tags: ['sale'] },
  { handle: 'glamlab-primer-30', title: 'جلام لاب برايمر أساس المكياج - 30مل', brand: 'GlamLab', price: 240, image: IMG.s1, collection: 'makeup' },

  // ============= EXTRA VITAMINS =============
  { handle: 'now-vitamin-e-100', title: 'ناو فودز فيتامين E - 100 كبسولة', brand: 'Now', price: 480, image: IMG.h1, collection: 'vitamins' },
  { handle: 'omega-3-kids-60', title: 'أوميجا 3 للأطفال بطعم الفواكه - 60 علكة', brand: 'NordicFish', price: 360, image: IMG.h6, collection: 'vitamins' },
  { handle: 'probiotics-30', title: 'بروبيوتيك لصحة الجهاز الهضمي - 30 كبسولة', brand: 'GutHealth', price: 540, compareAt: 680, image: IMG.h4, collection: 'vitamins', tags: ['sale'] },
  { handle: 'vitamin-d3-k2-60', title: 'فيتامين D3 + K2 - 60 كبسولة', brand: 'VitaMax', price: 420, image: IMG.h2, collection: 'vitamins' },
  { handle: 'biotin-5000-90', title: 'بيوتين 5000 ميكروجرام - 90 قرص', brand: 'VitaMax', price: 260, image: IMG.h5, collection: 'vitamins' },
  { handle: 'ashwagandha-60', title: 'أشواجاندا للاسترخاء والطاقة - 60 كبسولة', brand: 'HerbLife', price: 380, image: IMG.h3, collection: 'vitamins' },

  // ============= EXTRA MEN CARE =============
  { handle: 'zac-perfume-ocean-150', title: 'زاك إنتنس عطر أوشن أزرق للرجال - 150مل', brand: 'ZAC', price: 425, image: IMG.mn3, collection: 'men-care' },
  { handle: 'mens-hair-wax-100', title: 'واكس تصفيف الشعر للرجال - 100جم', brand: 'BarberX', price: 130, image: IMG.mn4, collection: 'men-care' },
  { handle: 'mens-beard-oil-50', title: 'زيت العناية باللحية - 50مل', brand: 'BarberX', price: 180, compareAt: 230, image: IMG.mn1, collection: 'men-care', tags: ['sale'] },
  { handle: 'mens-roll-on-50', title: 'مزيل عرق رول أون للرجال - 50مل', brand: 'MenLab', price: 75, image: IMG.mn5, collection: 'men-care' },

  // ============= EXTRA BODY PERFUMES =============
  { handle: 'voila-splash-cotton-250', title: 'فوالا بادي سبلاش كوتون - 250مل', brand: 'Voila', price: 220, compareAt: 440, image: IMG.s2, collection: 'body-perfumes', tags: ['sale'] },
  { handle: 'flair-splash-peach-250', title: 'فلير بادي سبلاش بالخوخ - 250مل', brand: 'Flair', price: 380, image: IMG.s1, collection: 'body-perfumes' },
  { handle: 'telovel-mist-rose-250', title: 'تيلوفيل بادي ميست روز - 250مل', brand: 'Telovel', price: 280, image: IMG.s5, collection: 'body-perfumes' },
  { handle: 'oudmaster-spray-200', title: 'عطر العود الفاخر بخاخ للجسم - 200مل', brand: 'OudMaster', price: 320, compareAt: 400, image: IMG.s4, collection: 'body-perfumes', tags: ['sale'] },

  // ============= EXTRA PERSONAL CARE =============
  { handle: 'dettol-soap-3pack', title: 'ديتول صابون مضاد للبكتيريا - 3 قطع', brand: 'Dettol', price: 65, image: IMG.m1, collection: 'personal-care' },
  { handle: 'listerine-mouthwash-500', title: 'ليسترين غسول فم بالنعناع - 500مل', brand: 'Listerine', price: 110, compareAt: 140, image: IMG.m3, collection: 'personal-care', tags: ['sale'] },
  { handle: 'oral-b-toothbrush', title: 'أورال بي فرشاة أسنان متوسطة', brand: 'Oral-B', price: 45, image: IMG.m5, collection: 'personal-care' },
  { handle: 'cotton-pads-100', title: 'قطن مكياج دائري - 100 قطعة', brand: 'CleanPro', price: 35, image: IMG.m6, collection: 'personal-care' },
  { handle: 'shower-gel-vanilla-500', title: 'جل استحمام بالفانيليا - 500مل', brand: 'Dove', price: 130, image: IMG.m1, collection: 'personal-care' },

  // ============= EXTRA MOM & BABY =============
  { handle: 'baby-diapers-newborn-40', title: 'حفاضات حديثي الولادة - 40 حفاضة', brand: 'BabyDry', price: 160, image: IMG.m1, collection: 'mom-baby' },
  { handle: 'baby-bath-500', title: 'غسول استحمام للأطفال 2 في 1 - 500مل', brand: 'BabyDry', price: 110, compareAt: 145, image: IMG.m2, collection: 'mom-baby', tags: ['sale'] },
  { handle: 'baby-oil-200', title: 'زيت أطفال مرطّب - 200مل', brand: 'BabyDry', price: 70, image: IMG.m6, collection: 'mom-baby' },
  { handle: 'baby-thermometer', title: 'ميزان حرارة للأطفال سريع', brand: 'MediCheck', price: 130, image: IMG.h2, collection: 'mom-baby' },

  // ============= EXTRA BABY MILK & FOOD =============
  { handle: 'baby-formula-premium-800', title: 'حليب أطفال بريميوم مرحلة 1 - 800جم', brand: 'NutriBaby', price: 520, compareAt: 620, image: IMG.m5, collection: 'baby-milk-food', tags: ['sale'] },
  { handle: 'baby-cereal-wheat-250', title: 'سيريال أطفال بالقمح والعسل - 250جم', brand: 'NutriBaby', price: 110, image: IMG.m4, collection: 'baby-milk-food' },
  { handle: 'baby-snack-puffs-50', title: 'سناكس الأطفال بالخضار - 50جم', brand: 'BabyFresh', price: 45, image: IMG.m4, collection: 'baby-milk-food' },

  // ============= EXTRA MEDICAL DEVICES =============
  { handle: 'weight-scale-digital', title: 'ميزان رقمي لقياس الوزن', brand: 'MediCheck', price: 380, compareAt: 480, image: IMG.h6, collection: 'medical-devices', tags: ['sale'] },
  { handle: 'first-aid-kit', title: 'حقيبة إسعافات أولية متكاملة', brand: 'MediCheck', price: 250, image: IMG.h5, collection: 'medical-devices' },
  { handle: 'heating-pad', title: 'كمّادة كهربائية للعلاج الحراري', brand: 'MediCheck', price: 420, image: IMG.h4, collection: 'medical-devices' },

  // ============= EXTRA MEDICINES =============
  { handle: 'fevadol-extra-20', title: 'فيفادول إكسترا مسكن للصداع - 20 قرص', brand: 'Fevadol', price: 30, image: IMG.h2, collection: 'medicines' },
  { handle: 'strepsils-lozenges-24', title: 'ستربسلز أقراص استحلاب للحلق - 24 قرص', brand: 'Strepsils', price: 55, image: IMG.h4, collection: 'medicines' },
  { handle: 'eye-drops-10', title: 'قطرة مرطّبة للعين - 10مل', brand: 'OptiCare', price: 40, image: IMG.h5, collection: 'medicines' },
  { handle: 'nasal-spray-15', title: 'بخاخ أنف لاحتقان الجيوب - 15مل', brand: 'Rhinathiol', price: 38, image: IMG.h6, collection: 'medicines' },
];

// ============= HELPERS =============

export function getCollectionCount(handle: string): number {
  return PRODUCTS.filter((p) => p.collection === handle).length;
}

// A clean representative product image for a category (used in category cards).
const CATEGORY_IMAGES: Record<string, string[]> = {
  "skin-care": [
    "https://nourpharmacies.com/cdn/shop/files/1nzrTV_HSyt3emtjg35QQg2CepfGDtQ7b.jpg?v=1776599856",
    "https://nourpharmacies.com/cdn/shop/files/download_770cee54-ac6d-4caa-914c-14da23ca0271.jpg?v=1776599864",
    "https://nourpharmacies.com/cdn/shop/files/download_c9dfad5c-b5f5-4f1b-9640-780802947d34.jpg?v=1776351911",
    "https://nourpharmacies.com/cdn/shop/files/download_a19595eb-4506-46b1-8a88-b48d6e7d4288.jpg?v=1776351930",
    "https://nourpharmacies.com/cdn/shop/files/download_44107998-2661-49c3-afd3-2a7a08e7cef6.jpg?v=1776599847",
    "https://nourpharmacies.com/cdn/shop/files/download_aeb002a6-d3ca-4098-82ac-bfcfa3976550.jpg?v=1776351905",
    "https://nourpharmacies.com/cdn/shop/files/download_a7bb22fa-af78-48f9-9f07-a0d854b9c103.jpg?v=1776351939",
    "https://nourpharmacies.com/cdn/shop/files/1D-ClhNfIvjRIkhViyEUGRRKRaewfnqJE.png?v=1776599314",
    "https://nourpharmacies.com/cdn/shop/files/download_b19d511b-a995-4930-8713-acd7bbaa7e43.jpg?v=1776351936",
    "https://nourpharmacies.com/cdn/shop/files/download_c281ef88-14d5-4b8d-9842-c685942909cd.jpg?v=1776599848",
    "https://nourpharmacies.com/cdn/shop/files/download_815b9124-93f5-42a2-94c5-cbf3bbc276ba.jpg?v=1776599859",
    "https://nourpharmacies.com/cdn/shop/files/download_0a85c28d-b591-46bb-98cf-76f39f224df4.jpg?v=1776599860",
    "https://nourpharmacies.com/cdn/shop/files/1Xw_o7LJ4e6HcKGqbKZw3mhs9hIYl2fFJ.jpg?v=1776599460",
    "https://nourpharmacies.com/cdn/shop/files/download_4b7b2001-81ef-43f1-8e52-213c78f70ffa.jpg?v=1776351935",
    "https://nourpharmacies.com/cdn/shop/files/download_0b809e35-8962-4b47-b0d6-c4ad8f2c8662.jpg?v=1776596807",
    "https://nourpharmacies.com/cdn/shop/files/download_bfd59bba-7f45-45a5-8130-2052fe6a7db3.jpg?v=1776599312",
  ],
  "moisturizers": [
    "https://nourpharmacies.com/cdn/shop/files/download_4901d161-d460-46b0-b9cc-4bc54c956e1f.jpg?v=1776599346",
    "https://nourpharmacies.com/cdn/shop/files/1G_iDIH9HtG3GbymyM7o-4etewXBtwfY_c2bac865-d7b4-475f-adcf-ee5e34eec48a.png?v=1776599000",
    "https://nourpharmacies.com/cdn/shop/files/download_559adbef-70fb-4d48-a81f-a77b72b0f0c9.jpg?v=1776009548",
    "https://nourpharmacies.com/cdn/shop/files/1h_msD19h3amCyjjXCg0IVfY_26KnBCGs_3bb7fa70-18fd-4a87-bd30-a2b184822759.png?v=1776595772",
    "https://nourpharmacies.com/cdn/shop/files/download_8f16fd5e-090b-4563-b1a4-ec43a917d76b.png?v=1776596528",
    "https://nourpharmacies.com/cdn/shop/files/1_3t0Obz2YaicfPV5DUnGeCGLUfVqJS3z.jpg?v=1776010151",
    "https://nourpharmacies.com/cdn/shop/files/download_ee2b0904-5018-41be-95c1-3697ff341195.webp?v=1772890931",
    "https://nourpharmacies.com/cdn/shop/files/download_bb0f89ce-412c-4005-8905-ef86b0e0f47b.png?v=1776596825",
    "https://nourpharmacies.com/cdn/shop/files/download_f63314ef-1025-4307-a57e-3166fc25f662.webp?v=1776006871",
    "https://nourpharmacies.com/cdn/shop/files/1EilYEvrrJziV7ev5CCNQ6CVnflyU6fJQ.png?v=1776598020",
    "https://nourpharmacies.com/cdn/shop/files/download_45b7b64f-c56b-4c83-a6bd-8f7e8156f410.jpg?v=1776599550",
    "https://nourpharmacies.com/cdn/shop/files/download_9f1475e9-7bc7-4822-83a9-03e147cf6d19.jpg?v=1776599558",
    "https://nourpharmacies.com/cdn/shop/files/download_f6c7b79c-6231-4fcb-ae0c-5b802afc8eb8.webp?v=1771977315",
    "https://nourpharmacies.com/cdn/shop/files/17jcIH7Aq4HxEJ06FNDsSq7RrA5f4PcpD.png?v=1772890434",
    "https://nourpharmacies.com/cdn/shop/files/1BxdtRj0Y6IT6k8_MUsMLYKyxpkngjkF8.png?v=1772893299",
    "https://nourpharmacies.com/cdn/shop/files/download_424050ed-d710-4bd8-a411-9dfc3de70852.jpg?v=1772891814",
  ],
  "sun-care": [
    "https://nourpharmacies.com/cdn/shop/files/18AybEaiU_tnLKxBckPmlp_fiPfiYawiz_fd3cd311-ee4e-4da5-bda4-9eaec892a4dd.jpg?v=1771982755",
    "https://nourpharmacies.com/cdn/shop/files/1IaV89R-mO_SyLF3cwzEPKUtESzmfLG0u.png?v=1771976777",
    "https://nourpharmacies.com/cdn/shop/files/download_1044ca38-50ee-4eff-a50d-9756d8c55b27.jpg?v=1771976820",
    "https://nourpharmacies.com/cdn/shop/files/download_f1e0a198-6b39-4feb-a04a-9f6d6b128cfb.jpg?v=1771977314",
    "https://nourpharmacies.com/cdn/shop/files/download_28c00559-b3fd-4aa4-879c-a26e5b15fdff.jpg?v=1771977323",
    "https://nourpharmacies.com/cdn/shop/files/download_abfa607a-4a44-440d-8733-bfe958817133.webp?v=1779025519",
    "https://nourpharmacies.com/cdn/shop/files/download_4c4600e2-9554-4a06-a57b-752756b9fdd5.webp?v=1779025519",
    "https://nourpharmacies.com/cdn/shop/files/download_289f1001-a555-4c1a-978e-c7abd6d7d7aa.webp?v=1779025524",
    "https://nourpharmacies.com/cdn/shop/files/download_afa94aed-7605-4e33-8b8f-ad89ce63032d.webp?v=1779025520",
    "https://nourpharmacies.com/cdn/shop/files/1IgPJ0wOcTekLTFUJNhG4yqInWPNcu9ey.jpg?v=1779099491",
    "https://nourpharmacies.com/cdn/shop/files/38493.webp?v=1779100460",
    "https://nourpharmacies.com/cdn/shop/files/12c1FoNIGd6ZVwDlj6DA5apHqdM3PUPQ8.jpg?v=1779099491",
    "https://nourpharmacies.com/cdn/shop/files/download_e9b50b34-ade7-4163-9551-2f620d0cde50.jpg?v=1776349873",
    "https://nourpharmacies.com/cdn/shop/files/1BJOFz7a0ipWATOj8Xqg7YsUd5fY0Zx0s.jpg?v=1776597283",
    "https://nourpharmacies.com/cdn/shop/files/download_8b8817f2-48b8-483b-ad3a-f37dcd70f410.jpg?v=1776597292",
    "https://nourpharmacies.com/cdn/shop/files/1QaBl3OIrvhZN_H76x4mTdQdniHc0pA_0.jpg?v=1776598965",
  ],
  "hair-care": [
    "https://nourpharmacies.com/cdn/shop/files/download_d3eca1e5-e03b-4ed4-b68c-5e5da858d702.jpg?v=1776599320",
    "https://nourpharmacies.com/cdn/shop/files/download_5a03a9b5-b699-4d3a-b2ed-5ed6e18aa941.jpg?v=1776597259",
    "https://nourpharmacies.com/cdn/shop/files/download_110f8bce-7ba9-4244-beb6-f9282e74e401.jpg?v=1776351189",
    "https://nourpharmacies.com/cdn/shop/files/download_930d3759-1412-4b6a-a528-d0ef2d16a2fa.jpg?v=1776599316",
    "https://nourpharmacies.com/cdn/shop/files/download_948dd793-8aa8-4d0a-ab23-00f0fcc2c9a9.jpg?v=1776599007",
    "https://nourpharmacies.com/cdn/shop/files/1V1-CbRcNM4DinlspUB1DKtal6sNSbtMs.jpg?v=1776599313",
    "https://nourpharmacies.com/cdn/shop/files/download_d915eb8d-b194-4509-80cd-be83a5c13d21.jpg?v=1776598596",
    "https://nourpharmacies.com/cdn/shop/files/download_45a94a0f-d859-47ad-bff5-756d80481ac9.jpg?v=1776351197",
    "https://nourpharmacies.com/cdn/shop/files/download_4901d161-d460-46b0-b9cc-4bc54c956e1f.jpg?v=1776599346",
    "https://nourpharmacies.com/cdn/shop/files/download_4bf06b76-4f99-44ef-b615-d63b8a49d3c7.jpg?v=1776599003",
    "https://nourpharmacies.com/cdn/shop/files/download_0a915ec9-ad40-40fc-8a5b-dd4ce801149f.jpg?v=1776350933",
    "https://nourpharmacies.com/cdn/shop/files/1G_iDIH9HtG3GbymyM7o-4etewXBtwfY_c2bac865-d7b4-475f-adcf-ee5e34eec48a.png?v=1776599000",
    "https://nourpharmacies.com/cdn/shop/files/download_7c4fd980-7600-4ca6-bb4b-746c974553b9.png?v=1776349288",
    "https://nourpharmacies.com/cdn/shop/files/10lsTd_nhEF6nESkO_yFTa5AQxc43hZzn.jpg?v=1776597256",
    "https://nourpharmacies.com/cdn/shop/files/download_559adbef-70fb-4d48-a81f-a77b72b0f0c9.jpg?v=1776009548",
    "https://nourpharmacies.com/cdn/shop/files/download_33739204-9ee5-4d57-bc58-2ba24bcbec93.jpg?v=1776351196",
  ],
  "makeup": [
    "https://nourpharmacies.com/cdn/shop/files/download_ba52b13a-b58a-4e34-8109-807954ecc68f.jpg?v=1776599793",
    "https://nourpharmacies.com/cdn/shop/files/download_6ff0cc98-3423-4f37-b0e8-f6be84368e18.jpg?v=1776351878",
    "https://nourpharmacies.com/cdn/shop/files/1EMztQJZzPHXoouUu1b0dCMwAEZXjY-2Q.jpg?v=1776598624",
    "https://nourpharmacies.com/cdn/shop/files/1yUideXp2jMRSa34wVaYIBh6BSd-Ki8Pg.jpg?v=1777553229",
    "https://nourpharmacies.com/cdn/shop/files/1w5BW0jk3zz_is2vtLlfBJketCmWnzWi2.jpg?v=1777553143",
    "https://nourpharmacies.com/cdn/shop/files/download_a6c3dd5d-6e6d-4a5b-bea2-797ecd05fe12.jpg?v=1773193231",
    "https://nourpharmacies.com/cdn/shop/files/1hv_-OFvstooLMC_psGz262mj8_9vTwal.png?v=1776268331",
    "https://nourpharmacies.com/cdn/shop/files/download_16c2ca70-2ac2-46c1-854f-f82d18bf04a3.jpg?v=1776598631",
    "https://nourpharmacies.com/cdn/shop/files/download_cd6b5fed-9af0-469a-a116-554a516303db.jpg?v=1772891918",
    "https://nourpharmacies.com/cdn/shop/files/download_51bbd3b9-5478-428e-84f3-1071750b02bb.jpg?v=1772891927",
    "https://nourpharmacies.com/cdn/shop/files/1KLchRlrRJPS-S2JRZxmPmNi8jS0DJksZ.png?v=1772891935",
    "https://nourpharmacies.com/cdn/shop/files/download_e3978b4d-c8f7-4a82-92d4-8361b77879bd.webp?v=1779025655",
    "https://nourpharmacies.com/cdn/shop/files/1UvIJH4VbvwVnklUGiuyrtdIYEjLn8k-y.jpg?v=1777553229",
    "https://nourpharmacies.com/cdn/shop/files/1pAF7DjsuCAEI0-f9xY2oT_NAoUQPxrsf.jpg?v=1777553224",
    "https://nourpharmacies.com/cdn/shop/files/1JmjuQpIX05kJp_0N3hOFvgfRuI7_yVO8.jpg?v=1777553224",
    "https://nourpharmacies.com/cdn/shop/files/1zLKSOOy5gQxDiU8qgJQcFQvgP3S4JTPp.jpg?v=1777553228",
  ],
  "vitamins": [
    "https://nourpharmacies.com/cdn/shop/files/1SCAJ_5W4UcL-zUcsWnuZWae3dtH6i0GE.png?v=1776857513",
    "https://nourpharmacies.com/cdn/shop/files/1ICPYaP6N66yTemgWBkGDHknEUtCqDlxK.jpg?v=1772890345",
    "https://nourpharmacies.com/cdn/shop/files/download_f33972e0-fa76-46d5-be95-a244ca0cc54a.jpg?v=1776007465",
    "https://nourpharmacies.com/cdn/shop/files/1aWy-f2xjFIQ_cVJAZaE-9qGhFz7b0nlt.jpg?v=1776005695",
    "https://nourpharmacies.com/cdn/shop/files/download_526a12de-6eda-47ce-946a-a4e3d327a59f.jpg?v=1779025519",
    "https://nourpharmacies.com/cdn/shop/files/download_78412c59-2672-435c-a9f2-54f2b3efcd03.webp?v=1771978981",
    "https://nourpharmacies.com/cdn/shop/files/download_837ca2d9-483c-42b7-8845-df13305a1929.jpg?v=1771978076",
    "https://nourpharmacies.com/cdn/shop/files/download_f95b55b3-47ab-4e67-bf8a-21ca376a9dc4.jpg?v=1776595820",
    "https://nourpharmacies.com/cdn/shop/files/1y4mIFw7R9mqg2rMwUATElRTztDDjTaGl.png?v=1772890349",
    "https://nourpharmacies.com/cdn/shop/files/1mizJfJ8Cvn-_ubJkY9HLK1AzGariISLA.png?v=1776349532",
    "https://nourpharmacies.com/cdn/shop/files/1G_FezDg2Ac2mDYW7wK4ktcw4xCx5_HrQ.jpg?v=1772891158",
    "https://nourpharmacies.com/cdn/shop/files/1nCSp0TT1uOmwJcsfzxt8mNx8KBJ6C8Ox.jpg?v=1771978981",
    "https://nourpharmacies.com/cdn/shop/files/1X9WV8SIste6lFl8UF1gsCBWQWjefsEd4.jpg?v=1771983043",
    "https://nourpharmacies.com/cdn/shop/files/download_876ec7aa-0890-4f38-be2f-4cae2b0fe440.jpg?v=1776350043",
    "https://nourpharmacies.com/cdn/shop/files/1P4MFKsrVCJxoIiZxKbweobULbE_ihc6y.png?v=1776595936",
    "https://nourpharmacies.com/cdn/shop/files/download_46f28d90-00ab-4500-a028-02fed109db65.png?v=1772890396",
  ],
  "personal-care": [
    "https://nourpharmacies.com/cdn/shop/files/download_5f73d54b-6cb8-408f-b56b-83d955f04347.jpg?v=1772891871",
    "https://nourpharmacies.com/cdn/shop/files/14lXIz3R1_Pa0UspglE3NZAzg4Ig7vrcI.jpg?v=1776599816",
    "https://nourpharmacies.com/cdn/shop/files/download_bdfe78e8-c191-4a46-a858-2c4ff4305e8e.jpg?v=1776599806",
    "https://nourpharmacies.com/cdn/shop/files/download_d02913d1-82e3-416a-a100-5384e0f5e0bc.jpg?v=1776010822",
    "https://nourpharmacies.com/cdn/shop/files/download_72a0bc3c-888d-41c3-b0a6-89e85c93e575.jpg?v=1776600025",
    "https://nourpharmacies.com/cdn/shop/files/download_47ff2a47-b5b6-4ec8-bc07-9e05c0a14fc7.jpg?v=1776600026",
    "https://nourpharmacies.com/cdn/shop/files/download_6806f856-48bb-465d-9c61-092e762f1247.jpg?v=1776011105",
    "https://nourpharmacies.com/cdn/shop/files/download_4bc39953-e598-4cb5-ad9b-f66588e4aa03.jpg?v=1776600020",
    "https://nourpharmacies.com/cdn/shop/files/download_84ed6c31-92ce-405f-8fbb-cf0adf9dc8c2.jpg?v=1776598928",
    "https://nourpharmacies.com/cdn/shop/files/download_641ae027-e054-4843-b16b-b189172f910e.jpg?v=1776599493",
    "https://nourpharmacies.com/cdn/shop/files/1S9K9ZjMNZvo5v2qakHIDXrI-Ej99fL2v.jpg?v=1773319024",
    "https://nourpharmacies.com/cdn/shop/files/1SntBgEjEYNrvmOeVXENsfa-yNVl6o6Dd.jpg?v=1772893137",
    "https://nourpharmacies.com/cdn/shop/files/1s0JnS_DFVxnd7gExAbf0ua_5bPdkkCdS.jpg?v=1776010503",
    "https://nourpharmacies.com/cdn/shop/files/1sAd2awNrXoDuMnyIYHMkS6HcALQIjKdy.jpg?v=1772894758",
    "https://nourpharmacies.com/cdn/shop/files/download_3ac1b071-fc04-404c-8852-dc84470995b3.jpg?v=1772894740",
    "https://nourpharmacies.com/cdn/shop/files/download_359adb32-70d9-4e6d-86af-1e94585eb9da.jpg?v=1772893132",
  ],
  "men-care": [
    "https://nourpharmacies.com/cdn/shop/files/118WkCmLD7DdOcfjWIQtOcZ6s3YMFsIn6.jpg?v=1776596510",
    "https://nourpharmacies.com/cdn/shop/files/12qIyBBzc2zvzHDJgNSrgHUltoUuJC5tt.jpg?v=1772892942",
    "https://nourpharmacies.com/cdn/shop/files/1DpxX6ZjJdG7DQB5pVgH0NJlNE7ZRPH6G_a54abca4-204e-4d31-9c28-70670615ab80.jpg?v=1772893137",
    "https://nourpharmacies.com/cdn/shop/files/1sfCMCSvTD-uhTfvppHZgkzeoEHu55m3c.jpg?v=1776599915",
    "https://nourpharmacies.com/cdn/shop/files/1epGtjArdW4DPDGC7CQl8kIWUa1_ntkDp.jpg?v=1772894880",
    "https://nourpharmacies.com/cdn/shop/files/16lYd2UP6WcvO6jnSaskPNKBpNapSj3OW.jpg?v=1772894241",
    "https://nourpharmacies.com/cdn/shop/files/1r6CJQCVMuzVLQpj3WQT4XyuQgsv4cfuY.jpg?v=1776010956",
    "https://nourpharmacies.com/cdn/shop/files/1lvb0hZgK7Pc1PkxgwbKdMbeiPRgdcteS.jpg?v=1776599915",
    "https://nourpharmacies.com/cdn/shop/files/1LXcqw4KEMjteJZsaCkwt0OZk6TPnlDPO.jpg?v=1772895488",
    "https://nourpharmacies.com/cdn/shop/files/1vfKoNxZilvO4RX4g4tx5TnMBmVqd0A24.png?v=1776598027",
    "https://nourpharmacies.com/cdn/shop/files/download_e25d1981-f1a2-487d-a254-55692bfb362f.jpg?v=1776599895",
    "https://nourpharmacies.com/cdn/shop/files/download_c0eb4572-cfeb-4550-9329-7dbc2449f576.jpg?v=1772894967",
    "https://nourpharmacies.com/cdn/shop/files/download_d84da77b-9011-4950-b1aa-d6459e538a06.jpg?v=1772894740",
    "https://nourpharmacies.com/cdn/shop/files/download_43d87f9c-dade-4662-ad4e-4951cbd8d646.jpg?v=1772893403",
    "https://nourpharmacies.com/cdn/shop/files/download_6dbef485-d1a8-4496-b26d-6dc463d07cfc.jpg?v=1772893408",
    "https://nourpharmacies.com/cdn/shop/files/download_d8b2965e-fdc5-4e5b-bb33-5a39375e993c.jpg?v=1776598719",
  ],
  "body-perfumes": [
    "https://nourpharmacies.com/cdn/shop/files/download_8b80483c-9fc1-4053-b7ea-a8463b84de4a.jpg?v=1776351661",
    "https://nourpharmacies.com/cdn/shop/files/1bZu3Uh1vyVBavn-Q4KEfL5csAMLZfqw1_4bba55d6-c945-41b5-8ccd-af7c1884714d.png?v=1776599611",
    "https://nourpharmacies.com/cdn/shop/files/1Uy-zLg50OUeEmcKUMR_SP2-TdguHe_t.png?v=1776599611",
    "https://nourpharmacies.com/cdn/shop/files/download_4ab76379-b215-4dd7-bc7c-9ab206732037.jpg?v=1776351667",
    "https://nourpharmacies.com/cdn/shop/files/1SJVuQc-Tb2j8-hvNN-wlfd2V64nazC6l_0838a1f7-e433-4a7b-9c30-903c9760f4bc.png?v=1776351663",
    "https://nourpharmacies.com/cdn/shop/files/15qsz4lXeq9SpwEJzn839XK0MF6ZPDSHD.png?v=1776351663",
    "https://nourpharmacies.com/cdn/shop/files/download_c040b794-a395-45fc-9d5b-5c90dde36886.jpg?v=1772893054",
    "https://nourpharmacies.com/cdn/shop/files/download_fa148a59-0680-4cf2-a9aa-df2457294d04.jpg?v=1772893055",
    "https://nourpharmacies.com/cdn/shop/files/download_02ae2265-4d6d-4b84-a813-dd0966002719.jpg?v=1772893055",
    "https://nourpharmacies.com/cdn/shop/files/download_e05279fd-cfd3-4179-afb5-ecb163ed8549.jpg?v=1776598645",
    "https://nourpharmacies.com/cdn/shop/files/download_10cc973d-c31d-435f-ace0-86791cbb67c0.jpg?v=1776009224",
    "https://nourpharmacies.com/cdn/shop/files/download_3327edff-20c3-45c9-bfcd-546a67c5705c.jpg?v=1776598646",
    "https://nourpharmacies.com/cdn/shop/files/download_eda863b6-e840-4c1c-8720-f74d99d0d142.jpg?v=1776598646",
    "https://nourpharmacies.com/cdn/shop/files/download_126dbc64-5050-43c3-83d2-6d6df9618229.jpg?v=1772892001",
    "https://nourpharmacies.com/cdn/shop/files/download_91060de3-ca21-4b4a-8bfb-eea3e20f6d7b.jpg?v=1772895785",
    "https://nourpharmacies.com/cdn/shop/files/download_ffb16c2e-d85c-413f-b0c0-8bcedac55b67.jpg?v=1776600016",
  ],
  "baby-milk-food": [
    "https://nourpharmacies.com/cdn/shop/files/download_768b3eb0-8dcb-4ff2-9588-a5f1606bdbbf.jpg?v=1776596736",
    "https://nourpharmacies.com/cdn/shop/files/download_6de00922-935c-442d-adc8-25e2bd3e3014.jpg?v=1776596736",
    "https://nourpharmacies.com/cdn/shop/files/download_75064cc2-320c-43ac-a3f8-7053ccc80b86.png?v=1776596936",
    "https://nourpharmacies.com/cdn/shop/files/15hBTDCGuko9flNiXYFLRd7BluvxSf3gL.jpg?v=1772890550",
    "https://nourpharmacies.com/cdn/shop/files/download_daa0d8e6-5310-43ed-be21-b60286da0748.jpg?v=1776597225",
    "https://nourpharmacies.com/cdn/shop/files/download_b3b544e7-bb66-4c3d-9953-4b1f4f405f06.jpg?v=1776596732",
    "https://nourpharmacies.com/cdn/shop/files/download_409199f4-64b6-4817-b52b-ad8248ce884f.jpg?v=1776595834",
    "https://nourpharmacies.com/cdn/shop/files/1V5Uu67VUz7YrAhY9R1RWwZ8UxtKmlUGt.png?v=1776348394",
    "https://nourpharmacies.com/cdn/shop/files/1nurnGe0mYsNGo2GFRbB_O0tT1PMLo-yI.png?v=1776598043",
    "https://nourpharmacies.com/cdn/shop/files/download_145b116d-cf40-4597-bb65-eef84e688a86.jpg?v=1776010392",
    "https://nourpharmacies.com/cdn/shop/files/1Xw8HR_RJjC-jUYOzTlF9EfGDORZBk1O.jpg?v=1771984012",
    "https://nourpharmacies.com/cdn/shop/files/download_9c0cdf99-4245-4dd1-97b5-d308ec710d11.png?v=1776596929",
    "https://nourpharmacies.com/cdn/shop/files/download_7619542b-5e9a-406d-9f5b-e31cd0ab7724.jpg?v=1776595831",
    "https://nourpharmacies.com/cdn/shop/files/1_RMy2Bgl0unS9PJvZRukIcZ2F9Izxf1R.jpg?v=1776595379",
    "https://nourpharmacies.com/cdn/shop/files/download_ca7cf377-4027-44be-8bc7-9cc364608070.png?v=1772889789",
    "https://nourpharmacies.com/cdn/shop/files/1FPNmI_ai2ScGUHom34GZO4d2yHuXLLvT.png?v=1776599737",
  ],
  "mom-baby": [
    "https://nourpharmacies.com/cdn/shop/files/1rJKzsZH7523mc4haDBM9w5pMTOMlgtPx.jpg?v=1776598465",
    "https://nourpharmacies.com/cdn/shop/files/download_8f18a139-c681-418b-b0d7-4939f9e798be.jpg?v=1776598468",
    "https://nourpharmacies.com/cdn/shop/files/download_8cbfd150-10f1-4609-915e-4f25ee10f2b6.jpg?v=1776599038",
    "https://nourpharmacies.com/cdn/shop/files/download_5589c867-8e4d-456c-96e5-3ad844a093e6.jpg?v=1776009976",
    "https://nourpharmacies.com/cdn/shop/files/download_12f7e52e-2bdf-4a92-8eb0-8262de1b9c86.jpg?v=1776598472",
    "https://nourpharmacies.com/cdn/shop/files/1kSrcBAvuhLNykROGakHFUPZpII9KCn6X_0c748a3e-d3b6-4997-98cf-de3d029983db.png?v=1776595452",
    "https://nourpharmacies.com/cdn/shop/files/download_ac03764e-12e8-492e-b98b-5fe09bd7d81c.jpg?v=1776599042",
    "https://nourpharmacies.com/cdn/shop/files/download_08d02041-f5b1-4572-90cf-58c2d81a9ce4.jpg?v=1773193261",
    "https://nourpharmacies.com/cdn/shop/files/1osqbq6o3NdMTzZ09gUS_XbaOOiwuqG5r.jpg?v=1776600073",
    "https://nourpharmacies.com/cdn/shop/files/download_6abe07c8-60e4-4111-9c40-75bd2645d4c9.jpg?v=1776598980",
    "https://nourpharmacies.com/cdn/shop/files/download_d4e4c518-3e1c-4890-9643-eb3453416ae3.jpg?v=1772894158",
    "https://nourpharmacies.com/cdn/shop/files/download_17da3dda-69ff-41cb-a1f8-7689b356c761.jpg?v=1776598888",
    "https://nourpharmacies.com/cdn/shop/files/download_d735a68e-7845-4c99-b3bb-727800aa7a12.jpg?v=1776352149",
    "https://nourpharmacies.com/cdn/shop/files/download_ff922460-08d9-4440-baf3-cdbd8185b42a.jpg?v=1776599037",
    "https://nourpharmacies.com/cdn/shop/files/download_5087e04d-736a-487d-826c-fa1fc0df9dc9.jpg?v=1776011159",
    "https://nourpharmacies.com/cdn/shop/files/download_c4289b28-1999-471d-a962-37720ae7cf24.jpg?v=1776598818",
  ],
  "medical-devices": [
    "https://nourpharmacies.com/cdn/shop/files/download_5946f987-0520-4ca3-948e-94d4daf3ad42.jpg?v=1776599408",
    "https://nourpharmacies.com/cdn/shop/files/download_a5b8b45c-d349-44c6-810a-e83fc795c97e.jpg?v=1776599401",
    "https://nourpharmacies.com/cdn/shop/files/download_1c84ac49-3654-4f34-897d-318db1208c3b.jpg?v=1776599902",
    "https://nourpharmacies.com/cdn/shop/files/1r-PpQqncYfZEWqpMLp8uTdwfjkfQ8Erl.jpg?v=1776599730",
    "https://nourpharmacies.com/cdn/shop/files/1KH90Nz3nUZEq7mnd5Ubwq8--a11sGp-8.jpg?v=1776010350",
    "https://nourpharmacies.com/cdn/shop/files/1q0Q2yF1uVTwCHVvNuJubMDSkglrSR_eq.png?v=1776599723",
    "https://nourpharmacies.com/cdn/shop/files/download_fcc849f3-8979-429b-a31c-739cc96f8a27.jpg?v=1776599274",
    "https://nourpharmacies.com/cdn/shop/files/download_aefbf911-7beb-4748-b899-a6ce52d9c50a.jpg?v=1776599475",
    "https://nourpharmacies.com/cdn/shop/files/1-s_acWnzCCJFZoYi3UZ-WwGtzlfvGyJs.jpg?v=1776599480",
    "https://nourpharmacies.com/cdn/shop/files/1ciFihVUhs2OTi9ygruwWJx3y6q7WpLQq.jpg?v=1776599476",
    "https://nourpharmacies.com/cdn/shop/files/1npF06L12VKKBFK30LbrH9b6_n4xCQg-8_64aa73f4-f259-4edc-8716-28455da27f1c.png?v=1776599726",
    "https://nourpharmacies.com/cdn/shop/files/1ivLXiHKgEIleXZBt_Yt1ReWhIzX7HANv.png?v=1776599726",
    "https://nourpharmacies.com/cdn/shop/files/1eCAsAwedlK-jBREs7o8kJTMjUPevxjNL.jpg?v=1776599004",
    "https://nourpharmacies.com/cdn/shop/files/1AdGgj-fNKqfi506i64r9RsqT0uhWbUP9.jpg?v=1772893328",
    "https://nourpharmacies.com/cdn/shop/files/download_14c079cd-99c5-43b7-a89a-d69bef9a526e.jpg?v=1776599405",
    "https://nourpharmacies.com/cdn/shop/files/download_2e0ca135-c216-4c47-b258-770f9c0500dc.jpg?v=1776599733",
  ],
  "medicines": [
    "https://nourpharmacies.com/cdn/shop/files/download_feaffae4-4615-4359-9548-4d20074ad22d.jpg?v=1777801665",
    "https://nourpharmacies.com/cdn/shop/files/1rJKzsZH7523mc4haDBM9w5pMTOMlgtPx.jpg?v=1776598465",
    "https://nourpharmacies.com/cdn/shop/files/download_06369339-9d9d-4d4e-8244-63ac2abc88a6.jpg?v=1776598323",
    "https://nourpharmacies.com/cdn/shop/files/10ucwRV_zbkzWXtaaGHhtBA1N37KSMx2T.jpg?v=1776596900",
    "https://nourpharmacies.com/cdn/shop/files/download_8f18a139-c681-418b-b0d7-4939f9e798be.jpg?v=1776598468",
    "https://nourpharmacies.com/cdn/shop/files/1gO0913cO4P6Qvwymz_AB5tNMq9GfwLpw.png?v=1776595780",
    "https://nourpharmacies.com/cdn/shop/files/1hprscrvtS1xmIyuKCiCm0bmCArIyYHft.jpg?v=1771983342",
    "https://nourpharmacies.com/cdn/shop/files/1EEMzmyKz16LCycZMbvVJPnJm_VmrnAFw.png?v=1776595953",
    "https://nourpharmacies.com/cdn/shop/files/18yhkcJj47jBQ97wQrHnsdPL9NjtKWgB1.png?v=1776597318",
    "https://nourpharmacies.com/cdn/shop/files/1ogiDLSpf0oBfwGiBCjZRXHrSkSLEE4o.jpg?v=1776597542",
    "https://nourpharmacies.com/cdn/shop/files/download_22a5fa96-75dc-4b27-beb8-d82f726c787b.jpg?v=1776598208",
    "https://nourpharmacies.com/cdn/shop/files/download_e397bbe7-c9db-4f50-8695-6ab84d4dc66c.jpg?v=1776595441",
    "https://nourpharmacies.com/cdn/shop/files/1lNpwhAwBmV31I0zbj3RKdV6H8ZS-nfdm.png?v=1776598473",
    "https://nourpharmacies.com/cdn/shop/files/16Ii22LWpQQGYXgilJFHFvI-P0YKYvHOj.png?v=1776597766",
    "https://nourpharmacies.com/cdn/shop/files/download_a79d36f0-fa07-4840-b583-32820dbc260c.jpg?v=1776597805",
    "https://nourpharmacies.com/cdn/shop/files/download_12f7e52e-2bdf-4a92-8eb0-8262de1b9c86.jpg?v=1776598472",
  ],
};

// Give every product a distinct, category-matched photo (avoids repetition).
(function assignProductImages() {
  const seen: Record<string, number> = {};
  for (const p of PRODUCTS) {
    const pool = CATEGORY_IMAGES[p.collection];
    if (!pool || pool.length === 0) continue;
    const i = seen[p.collection] ?? 0;
    p.image = pool[i % pool.length];
    seen[p.collection] = i + 1;
  }
})();

export function getCategoryImage(handle: string): string {
  const withCompare = PRODUCTS.find((p) => p.collection === handle && p.compareAt);
  const first = withCompare ?? PRODUCTS.find((p) => p.collection === handle);
  return first?.image ?? COLLECTIONS.find((c) => c.handle === handle)?.banner ?? '';
}

export function getProductsByCollection(handle: string): Product[] {
  return PRODUCTS.filter((p) => p.collection === handle);
}

export function getProductByHandle(handle: string): Product | undefined {
  return PRODUCTS.find((p) => p.handle === handle);
}

export function getCollection(handle: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.handle === handle);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return PRODUCTS.filter(
    (p) => p.collection === product.collection && p.handle !== product.handle,
  ).slice(0, limit);
}

export function getOnSaleProducts(): Product[] {
  return PRODUCTS.filter((p) => p.compareAt && p.compareAt > p.price);
}

export function getFeaturedProducts(limit = 12): Product[] {
  const sale = getOnSaleProducts();
  const others = PRODUCTS.filter((p) => !sale.includes(p));
  return [...sale, ...others].slice(0, limit);
}

export function getBrandsInCollection(handle: string): string[] {
  const brands = new Set<string>();
  for (const p of PRODUCTS) {
    if (p.collection === handle) brands.add(p.brand);
  }
  return Array.from(brands).sort();
}

export function getPriceRange(handle?: string): { min: number; max: number } {
  const list = handle ? PRODUCTS.filter((p) => p.collection === handle) : PRODUCTS;
  if (list.length === 0) return { min: 0, max: 0 };
  let min = Infinity;
  let max = 0;
  for (const p of list) {
    if (p.price < min) min = p.price;
    if (p.price > max) max = p.price;
  }
  return { min: Math.floor(min), max: Math.ceil(max) };
}
