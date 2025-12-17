# راهنمای پنل مدیریت گالری هنری شهرزاد

## نصب و راه‌اندازی

### 1. نصب پکیج‌های مورد نیاز

```bash
npm install
```

### 2. تنظیم متغیرهای محیطی

فایل `.env.local` را در ریشه پروژه ایجاد کرده و محتویات زیر را اضافه کنید:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your-jwt-secret-key
```

### 3. ایجاد ادمین اولیه

برای ایجاد اولین ادمین، به آدرس زیر بروید یا از API استفاده کنید:

```bash
# روش 1: استفاده از صفحه وب (باید ابتدا ساخته شود)
# /admin/create-admin

# روش 2: استفاده از API
curl -X POST http://localhost:3000/api/admin/create-admin \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@example.com",
    "password": "your-password"
  }'
```

### 4. ورود به پنل مدیریت

به آدرس `/admin/login` بروید و با نام کاربری و رمز عبور وارد شوید.

## صفحات پنل مدیریت

### داشبورد (`/admin/dashboard`)
- نمایش آمار کلی
- دسترسی سریع به بخش‌های مختلف

### مدیریت محصولات (`/admin/products`)
- مشاهده لیست تمام محصولات
- افزودن محصول جدید (`/admin/products/new`)
- ویرایش محصول (`/admin/products/[id]`)
- حذف محصول
- فیلتر بر اساس دسته‌بندی

### مدیریت وبلاگ (`/admin/blogs`)
- مشاهده لیست مقالات
- افزودن مقاله جدید (`/admin/blogs/new`)
- ویرایش مقاله (`/admin/blogs/[id]`)
- حذف مقاله

### مدیریت بنرها (`/admin/banners`)
- مشاهده لیست بنرها
- افزودن بنر جدید (`/admin/banners/new`)
- ویرایش بنر (`/admin/banners/[id]`)
- حذف بنر
- تنظیم ترتیب نمایش

### تنظیمات صفحه خانه (`/admin/homepage`)
- ویرایش تمام بخش‌های صفحه اصلی:
  - بخش درباره ما
  - آمار و دستاوردها
  - محصولات پرفروش
  - نظرات مشتریان
  - مقالات
  - بخش CTA

### مدیریت سفارشات (`/admin/orders`)
- مشاهده تمام سفارشات
- تغییر وضعیت سفارشات
- مشاهده جزئیات هر سفارش

### گزارش مالی (`/admin/reports`)
- نمایش درآمد کل
- آمار سفارشات
- فیلتر بر اساس تاریخ و وضعیت
- لیست کامل سفارشات

## API Endpoints

### Authentication
- `POST /api/admin/login` - ورود به پنل
- `POST /api/admin/logout` - خروج از پنل
- `GET /api/admin/verify` - بررسی اعتبار توکن

### Products
- `GET /api/products` - دریافت لیست محصولات
- `GET /api/products/[id]` - دریافت محصول خاص
- `POST /api/products` - افزودن محصول جدید
- `PUT /api/products/[id]` - به‌روزرسانی محصول
- `DELETE /api/products/[id]` - حذف محصول

### Blogs
- `GET /api/blogs` - دریافت لیست مقالات
- `GET /api/blogs/[id]` - دریافت مقاله خاص
- `POST /api/blogs` - افزودن مقاله جدید
- `PUT /api/blogs/[id]` - به‌روزرسانی مقاله
- `DELETE /api/blogs/[id]` - حذف مقاله

### Banners
- `GET /api/banners` - دریافت لیست بنرها
- `GET /api/banners/[id]` - دریافت بنر خاص
- `POST /api/banners` - افزودن بنر جدید
- `PUT /api/banners/[id]` - به‌روزرسانی بنر
- `DELETE /api/banners/[id]` - حذف بنر

### Homepage Settings
- `GET /api/homepage` - دریافت تنظیمات صفحه خانه
- `PUT /api/homepage` - به‌روزرسانی تنظیمات

### Orders
- `GET /api/orders` - دریافت لیست سفارشات (نیاز به authentication)
- `PUT /api/orders/[id]` - به‌روزرسانی وضعیت سفارش

## مدل‌های دیتابیس

### Product
- title, description, category, subCategory
- price, images (array)
- size, material, style
- inStock, slug
- views, createdAt, updatedAt

### Blog
- title, slug, excerpt, content
- author, category, date, readTime
- image, views
- published, createdAt, updatedAt

### Banner
- title, subtitle, image
- cta, ctaLink
- showContent, order, active
- createdAt, updatedAt

### HomePageSettings
- aboutTitle, aboutContent
- statistics (happyCustomers, products, yearsExperience, satisfactionRate)
- featuredProductsTitle, featuredProductsDescription
- testimonialsTitle, testimonialsDescription
- blogTitle, blogDescription
- ctaTitle, ctaDescription

### Order
- orderNumber, customerName, customerEmail, customerPhone
- products (array of product references)
- totalAmount, status
- shippingAddress, notes
- createdAt, updatedAt

### Admin
- username, email, password (hashed)
- role (admin/superadmin)
- lastLogin, createdAt

## امنیت

- تمام API routes که نیاز به تغییر داده دارند، نیاز به authentication دارند
- رمز عبور ادمین‌ها با bcrypt hash می‌شود
- از JWT برای session management استفاده می‌شود
- توکن در cookie های HTTP-only ذخیره می‌شود

## نکات مهم

1. **اولین ادمین**: بعد از نصب، حتماً یک ادمین ایجاد کنید
2. **JWT Secret**: حتماً JWT_SECRET را در production تغییر دهید
3. **MongoDB**: اطمینان حاصل کنید که MongoDB در دسترس است
4. **Images**: عکس‌ها باید در فولدر `public` قرار گیرند




