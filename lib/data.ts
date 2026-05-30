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
  url: 'https://mavis-demo-maviss-projects-5ce8924f.vercel.app',
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
