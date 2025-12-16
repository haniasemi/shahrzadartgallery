const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// Import models
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, default: '' },
  price: { type: String, required: true },
  images: [{ type: String, required: true }],
  size: { type: String, default: '' },
  material: { type: String, default: '' },
  style: { type: String, default: '' },
  inStock: { type: Boolean, default: true },
  slug: { type: String, unique: true, sparse: true },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ProductSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, trim: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true, default: 'شهرزاد احمدی' },
  category: { type: String, required: true },
  date: { type: String, required: true },
  readTime: { type: String, required: true, default: '۵ دقیقه' },
  image: { type: String, default: '' },
  views: { type: Number, default: 0 },
  published: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

BlogSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const BannerSchema = new mongoose.Schema({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  image: { type: String, required: true },
  cta: { type: String, default: '' },
  ctaLink: { type: String, default: '' },
  showContent: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

BannerSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const HomePageSettingsSchema = new mongoose.Schema({
  aboutTitle: { type: String, default: 'درباره گالری هنری شهرزاد' },
  aboutContent: { type: String, default: '' },
  statistics: {
    happyCustomers: { type: Number, default: 500 },
    products: { type: Number, default: 1000 },
    yearsExperience: { type: Number, default: 15 },
    satisfactionRate: { type: Number, default: 4.9 }
  },
  featuredProductsTitle: { type: String, default: 'محصولات پرفروش' },
  featuredProductsDescription: { type: String, default: '' },
  testimonialsTitle: { type: String, default: 'نظرات مشتریان' },
  testimonialsDescription: { type: String, default: '' },
  blogTitle: { type: String, default: 'آخرین مقالات و اخبار' },
  blogDescription: { type: String, default: '' },
  ctaTitle: { type: String, default: 'آماده‌اید یه چیز خفن براتون بسازیم؟' },
  ctaDescription: { type: String, default: '' },
  updatedAt: { type: Date, default: Date.now }
});

HomePageSettingsSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
const Banner = mongoose.models.Banner || mongoose.model('Banner', BannerSchema);
const HomePageSettings = mongoose.models.HomePageSettings || mongoose.model('HomePageSettings', HomePageSettingsSchema);

// Helper function to generate slug from title
function generateSlug(title) {
  return title
    .replace(/[^\u0600-\u06FF\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();
}

// Blog posts data
const blogPosts = [
  {
    title: 'هنر آینانتیک: از گذشته تا امروز',
    excerpt: 'یادت میاد که توی خونه مادربزرگت اون آینه‌های قشنگ رو دیدی؟ بذار بگم داستانشون چیه... 😊',
    author: 'شهرزاد احمدی',
    date: '۱۴۰۳/۰۱/۱۵',
    category: 'آینانتیک',
    readTime: '۵ دقیقه',
    image: '/api/placeholder/400/250',
    slug: 'ainantik-art-history',
    content: `<h2>مقدمه</h2><p>حالا که اینجا هستی، باید یه چیز بگم: آینه آنتیک و نقاشی پشت آینه یکی از قشنگ‌ترین هنرهای دستی ماست! 😍 این هنر که ترکیبی از آینه‌کاری سنتی و نقاشی معکوسه، واقعاً خفنه و خیلیا عاشقشون شدن. توی این مقاله می‌خوایم بیشتر براتون بگیم که این هنر چیه و چطور ساخته میشه.</p><h2>تاریخچه آینه آنتیک و نقاشی پشت آینه</h2><p>هنر آینه آنتیک و نقاشی پشت آینه یکی از زیباترین و اصیل‌ترین هنرهای تزئینی ایرانی است که ترکیبی از تکنیک آینه‌کاری و نقاشی سنتی است. این هنر منحصر به فرد که به آن "نقاشی معکوس" نیز گفته می‌شود، تاریخچه‌ای طولانی و پرافتخار در فرهنگ و هنر ایران دارد.</p>`
  },
  {
    title: 'راهنمای انتخاب ظروف سرامیکی مناسب',
    excerpt: 'ظروف سرامیکی خیلی مهمن! نه فقط قشنگن، بلکه باید کارایی هم داشته باشن. بذار بگم چطوری درست انتخاب کنی...',
    author: 'علی رضایی',
    date: '۱۴۰۳/۰۱/۱۰',
    category: 'ظروف سرامیکی',
    readTime: '۷ دقیقه',
    image: '/api/placeholder/400/250',
    slug: 'ceramic-ware-selection-guide',
    content: `<h2>مقدمه</h2><p>خیلیا فکر می‌کنن ظروف سرامیکی فقط باید قشنگ باشن، ولی اشتباه می‌کنن! 😅 انتخاب ظروف سرامیکی مناسب واقعاً مهمه و می‌تونه هم آشپزخونت رو قشنگ کنه و هم کارایی بهتری بده. توی این مقاله می‌خوایم چند تا نکته مهم بهتون بگیم تا بتونید بهترین ظروف رو انتخاب کنید.</p>`
  },
  {
    title: 'فواید شمع‌های ارگانیک برای سلامتی',
    excerpt: 'شمع‌های ارگانیک فقط قشنگ نیستن! یه عالمه فایده هم دارن که احتمالاً نمیدونستی...',
    author: 'فاطمه محمدی',
    date: '۱۴۰۳/۰۱/۰۵',
    category: 'شمع ارگانیک',
    readTime: '۶ دقیقه',
    image: '/api/placeholder/400/250',
    slug: 'organic-candles-health-benefits',
    content: `<h2>مقدمه</h2><p>شمع‌های ارگانیک رو میشناسی؟ اونایی که فقط قشنگ نیستن، بلکه واقعاً مفیدن! 😊 توی این مقاله می‌خوایم بگیم چرا شمع‌های ارگانیک بهترن و چطور می‌تونن به سلامتیت کمک کنن.</p>`
  },
  {
    title: 'تکنیک‌های ساخت پاپیه ماشه',
    excerpt: 'از کاغذ باطله میشه یه اثر هنری قشنگ ساخت؟ بله! اینه قدرت پاپیه ماشه...',
    author: 'محمد کریمی',
    date: '۱۴۰۲/۱۲/۲۸',
    category: 'پاپیه ماشه',
    readTime: '۸ دقیقه',
    image: '/api/placeholder/400/250',
    slug: 'papier-mache-techniques',
    content: `<h2>مقدمه</h2><p>پاپیه ماشه یکی از جذاب‌ترین هنرهاست! با کاغذ باطله و چسب می‌تونی یه اثر هنری فوق‌العاده بسازی! 🎨 این هنر که ریشه در هنرهای سنتی ما داره، این روزها خیلی محبوب شده و خیلیا عاشقش شدن.</p>`
  },
  {
    title: 'دکوراسیون خانه با آثار هنری دست‌ساز',
    excerpt: 'می‌خوای خونت متفاوت باشه؟ بذار بگم چطور با آثار هنری دست‌ساز این کار رو بکنی...',
    author: 'شهرزاد احمدی',
    date: '۱۴۰۲/۱۲/۲۰',
    category: 'دکوری',
    readTime: '۹ دقیقه',
    image: '/api/placeholder/400/250',
    slug: 'home-decoration-handmade-art',
    content: `<h2>مقدمه</h2><p>می‌خوای خونت یه چیز خاص داشته باشه که توی هیچ خونه دیگه‌ای نداشته باشن؟ 🤔 آثار هنری دست‌ساز بهترین راه برای این کارن! این آثار نه فقط قشنگن، بلکه یه انرژی مثبت هم به خونت میدن. توی این مقاله می‌خوایم بگیم چطور ازشون استفاده کنی.</p>`
  },
  {
    title: 'نگهداری و مراقبت از محصولات آینانتیک',
    excerpt: 'اگه محصولات آینه آنتیک داری، باید بدونی چطور ازشون نگهداری کنی. اینجا چند نکته مهم داریم...',
    author: 'علی رضایی',
    date: '۱۴۰۲/۱۲/۱۵',
    category: 'نگهداری',
    readTime: '۵ دقیقه',
    image: '/api/placeholder/400/250',
    slug: 'ainantik-maintenance-tips',
    content: `<h2>مقدمه</h2><p>یافته‌ای یه محصول آینه آنتیک قشنگ و می‌خوای سال‌ها زیبا بمونه؟ 😊 پس باید یاد بگیری چطور ازش نگهداری کنی! توی این مقاله، چند تا نکته مهم بهت می‌گیم که اگه رعایتشون کنی، محصولت همیشه مثل روز اول میمونه.</p>`
  }
];

async function seedDatabase() {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('❌ MONGODB_URI is not set in .env.local');
      process.exit(1);
    }

    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000
    });
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('\n🗑️  Clearing existing data...');
    await Product.deleteMany({});
    await Blog.deleteMany({});
    await Banner.deleteMany({});
    await HomePageSettings.deleteMany({});
    console.log('✅ Existing data cleared');

    // Seed Blogs
    console.log('\n📝 Seeding blogs...');
    const blogs = blogPosts.map(post => ({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author,
      category: post.category,
      date: post.date,
      readTime: post.readTime,
      image: post.image,
      views: 0,
      published: true
    }));
    await Blog.insertMany(blogs);
    console.log(`✅ Inserted ${blogs.length} blogs`);

    // Seed Products
    console.log('\n📦 Seeding products...');
    const products = [
      // تابلوهای آینانتیک
      ...Array.from({ length: 12 }, (_, i) => ({
        title: `تابلو آینانتیک ${i + 1}`,
        description: 'تابلوی زیبا با تکنیک آینانتیک و رنگ‌آمیزی دستی',
        category: 'آینانتیک',
        subCategory: 'تابلو',
        price: ['۲,۵۰۰,۰۰۰', '۳,۲۰۰,۰۰۰', '۱,۸۰۰,۰۰۰', '۲,۸۰۰,۰۰۰', '۳,۵۰۰,۰۰۰', '۲,۲۰۰,۰۰۰', '۲,۶۰۰,۰۰۰', '۳,۰۰۰,۰۰۰', '۲,۴۰۰,۰۰۰', '۳,۳۰۰,۰۰۰', '۲,۹۰۰,۰۰۰', '۳,۶۰۰,۰۰۰'][i],
        images: [`/tabloAine/photo_2025-09-06_08-47-${36 + i}.jpg`].filter(Boolean),
        size: ['۵۰ × ۷۰', '۶۰ × ۸۰', '۴۰ × ۶۰', '۵۵ × ۷۵', '۷۰ × ۹۰', '۴۵ × ۶۵', '۵۰ × ۷۰', '۶۰ × ۸۰', '۵۵ × ۷۵', '۶۵ × ۸۵', '۵۸ × ۷۸', '۷۵ × ۹۵'][i] + ' سانتی‌متر',
        material: 'چوب و رنگ طبیعی',
        style: 'کلاسیک',
        inStock: true,
        slug: generateSlug(`تابلو آینانتیک ${i + 1}`)
      })),

      // گلدان‌های دکوری
      {
        title: 'گلدان سرامیکی کلاسیک',
        description: 'گلدان سرامیکی با طراحی کلاسیک و لعاب محافظ',
        category: 'دکوری',
        subCategory: 'گلدان',
        price: '۳۲۰,۰۰۰',
        images: ['/goldan/photo_2025-09-06_08-48-14.jpg'],
        size: 'ارتفاع ۳۰ سانتی‌متر',
        material: 'سرامیک با لعاب',
        style: 'کلاسیک',
        inStock: true,
        slug: generateSlug('گلدان سرامیکی کلاسیک')
      },
      {
        title: 'گلدان فلزی مدرن',
        description: 'گلدان فلزی با طراحی مدرن و پوشش ضد زنگ',
        category: 'دکوری',
        subCategory: 'گلدان',
        price: '۴۵۰,۰۰۰',
        images: ['/goldan/photo_2025-09-06_08-48-17.jpg'],
        size: 'ارتفاع ۳۵ سانتی‌متر',
        material: 'فلز ضد زنگ',
        style: 'مدرن',
        inStock: true,
        slug: generateSlug('گلدان فلزی مدرن')
      },
      {
        title: 'گلدان شیشه‌ای شفاف',
        description: 'گلدان شیشه‌ای شفاف با طراحی زیبا و کاربردی',
        category: 'دکوری',
        subCategory: 'گلدان',
        price: '۲۸۰,۰۰۰',
        images: ['/goldan/photo_2025-09-06_08-48-20.jpg'],
        size: 'ارتفاع ۲۵ سانتی‌متر',
        material: 'شیشه سکوریت',
        style: 'مدرن',
        inStock: true,
        slug: generateSlug('گلدان شیشه‌ای شفاف')
      },
      {
        title: 'گلدان چوبی طبیعی',
        description: 'گلدان چوبی با طراحی طبیعی و بافت زیبا',
        category: 'دکوری',
        subCategory: 'گلدان',
        price: '۳۸۰,۰۰۰',
        images: ['/goldan/photo_2025-09-06_08-48-22.jpg'],
        size: 'ارتفاع ۲۸ سانتی‌متر',
        material: 'چوب طبیعی',
        style: 'طبیعی',
        inStock: true,
        slug: generateSlug('گلدان چوبی طبیعی')
      },
      {
        title: 'گلدان سنگی لوکس',
        description: 'گلدان سنگی با طراحی لوکس و بافت طبیعی',
        category: 'دکوری',
        subCategory: 'گلدان',
        price: '۶۵۰,۰۰۰',
        images: ['/goldan/photo_2025-09-06_08-48-25.jpg'],
        size: 'ارتفاع ۴۰ سانتی‌متر',
        material: 'سنگ طبیعی',
        style: 'لوکس',
        inStock: true,
        slug: generateSlug('گلدان سنگی لوکس')
      },

      // شمع‌های ارگانیک
      {
        title: 'شمع گل رز دست‌ساز',
        description: 'شمع دست‌ساز به شکل گل رز با موم طبیعی و رایحه خوش گل رز',
        category: 'شمع ارگانیک',
        subCategory: 'دست ساز',
        price: 'قیمت: به زودی',
        images: ['/shamDastSaz/1.jpg', '/shamDastSaz/2.jpg', '/shamDastSaz/3.jpg'],
        size: 'قطر ۱۰ سانتی‌متر',
        material: 'موم طبیعی',
        style: 'ارگانیک',
        inStock: true,
        slug: generateSlug('شمع گل رز دست‌ساز')
      },
      {
        title: 'مجموعه شمع‌های رز',
        description: 'مجموعه زیبای شمع‌های گل رز در کاسه چوبی با رنگ‌های پاستلی',
        category: 'شمع ارگانیک',
        subCategory: 'دست ساز',
        price: 'قیمت: به زودی',
        images: ['/shamDastSaz/4.jpg', '/shamDastSaz/5.jpg', '/shamDastSaz/6.jpg', '/shamDastSaz/7.jpg'],
        size: 'مجموعه کامل',
        material: 'موم طبیعی',
        style: 'ارگانیک',
        inStock: true,
        slug: generateSlug('مجموعه شمع‌های رز')
      },
      {
        title: 'دیوارکوب و سردیس',
        description: 'دیوارکوب و سردیس زیبا با طراحی منحصر به فرد و جزئیات هنری',
        category: 'دکوری',
        subCategory: 'دیوارکوب',
        price: '۲,۵۰۰,۰۰۰',
        images: ['/divarkobVaSardis/photo_2025-09-06_08-48-03.jpg'],
        size: 'متغیر',
        material: 'چوب و رنگ',
        style: 'هنری',
        inStock: true,
        slug: generateSlug('دیوارکوب و سردیس')
      }
    ];

    await Product.insertMany(products);
    console.log(`✅ Inserted ${products.length} products`);

    // Seed Banners
    console.log('\n🖼️  Seeding banners...');
    const banners = [
      {
        title: 'خوش آمدید به گالری هنری شهرزاد',
        subtitle: 'محصولات هنری دست‌ساز با کیفیت بالا',
        image: '/photo_2025-09-06_06-37-29.jpg',
        cta: 'مشاهده محصولات',
        ctaLink: '/#categories',
        showContent: true,
        order: 1,
        active: true
      }
    ];
    await Banner.insertMany(banners);
    console.log(`✅ Inserted ${banners.length} banners`);

    // Seed HomePageSettings
    console.log('\n⚙️  Seeding homepage settings...');
    const homepageSettings = {
      aboutTitle: 'درباره گالری هنری شهرزاد',
      aboutContent: 'خوش اومدین به دنیای هنر و زیبایی! 🎨 با بیش از ده سال تجربه در ساخت آثار هنری و دکوری، ما توی گالری هنری شهرزاد منتظرتونیم تا بهترین محصولات رو براتون بسازیم. هر کدوم از آثارمون با عشق و دقت ساخته میشن و واقعاً منحصر به فردن! به این معنی که اگه یکی از دوستاتون هم بخواد مثل همین رو داشته باشه، باید دوباره به ما سفارش بده 😄',
      statistics: {
        happyCustomers: 500,
        products: 1000,
        yearsExperience: 15,
        satisfactionRate: 4.9
      },
      featuredProductsTitle: 'محصولات پرفروش',
      featuredProductsDescription: 'اینا همون محصولاتی هستن که همه عاشقشون شدن! ❤️ (خیلیا میگن نکنین بفروشینشون چون دیگه نمونده برا ما! 😂)',
      testimonialsTitle: 'نظرات مشتریان',
      testimonialsDescription: 'اینا نظرات واقعی مشتریهامونن! نه اون چیزای ساختگی که توی بعضی سایت‌ها میبینی 😄 وقتی میبینیم چقدر خوشحالن، دل ما هم روشن میشه!',
      blogTitle: 'آخرین مقالات و اخبار',
      blogDescription: 'یه سری مطلب جالب که نوشتیم تا بیشتر از هنرهای دستی بفهمین! 📚 (واقعاً مفیدن، بخونین پشیمون نمیشین 😊)',
      ctaTitle: 'آماده‌اید یه چیز خفن براتون بسازیم؟ 🚀',
      ctaDescription: 'دیگه نیازی نیست دنبال چیزی که می‌خوای بگردی! بگو چی می‌خوای، ما برات می‌سازیمش (تیممون خیلی زرنگن، نگران نباش! 😎)'
    };
    await HomePageSettings.create(homepageSettings);
    console.log('✅ Inserted homepage settings');

    console.log('\n🎉 Database seeding completed successfully!');
    console.log(`\n📊 Summary:`);
    console.log(`   - ${blogs.length} blogs`);
    console.log(`   - ${products.length} products`);
    console.log(`   - ${banners.length} banners`);
    console.log(`   - 1 homepage settings`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
    }
    process.exit(0);
  }
}

seedDatabase();
