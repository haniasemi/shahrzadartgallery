# راهنمای راه‌اندازی MongoDB برای پروژه

## گزینه 1: استفاده از MongoDB Atlas (پیشنهادی - رایگان)

### مراحل:

1. **ایجاد حساب کاربری:**
   - به آدرس https://www.mongodb.com/cloud/atlas/register بروید
   - یک حساب رایگان بسازید

2. **ایجاد Cluster:**
   - بعد از ورود، روی "Build a Database" کلیک کنید
   - گزینه "FREE" (M0) را انتخاب کنید
   - Cloud Provider و Region را انتخاب کنید (ایران: نزدیک‌ترین منطقه)
   - نام Cluster را بگذارید (مثلاً: Cluster0)
   - روی "Create" کلیک کنید

3. **تنظیم امنیت:**
   - Username و Password برای database user ایجاد کنید (یا از Auto-generate استفاده کنید)
   - در بخش "Network Access"، روی "Add IP Address" کلیک کنید
   - گزینه "Allow Access from Anywhere" (0.0.0.0/0) را انتخاب کنید
   - روی "Finish and Close" کلیک کنید

4. **دریافت Connection String:**
   - روی "Connect" در کنار Cluster کلیک کنید
   - گزینه "Connect your application" را انتخاب کنید
   - Driver را "Node.js" و Version را آخرین نسخه انتخاب کنید
   - Connection String را کپی کنید (مثل این):
     ```
     mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
     ```

5. **به‌روزرسانی فایل .env.local:**
   - فایل `.env.local` را باز کنید
   - Connection String را در `MONGODB_URI` قرار دهید
   - دقت کنید که `<password>` را با password واقعی جایگزین کنید
   - نام دیتابیس را در انتهای URL اضافه کنید (مثلاً: `&appName=shahrzadartgallery` یا `shahrzadartgallery` را بعد از `/` اضافه کنید)
   
   مثال کامل:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/shahrzadartgallery?retryWrites=true&w=majority
   ```

6. **اجرای اسکریپت ایجاد ادمین:**
   ```bash
   npm run create-admin
   ```

## گزینه 2: نصب MongoDB محلی (Windows)

### مراحل:

1. **دانلود MongoDB:**
   - به https://www.mongodb.com/try/download/community بروید
   - نسخه Windows را دانلود کنید

2. **نصب:**
   - فایل installer را اجرا کنید
   - گزینه "Complete" را انتخاب کنید
   - گزینه "Install MongoDB as a Service" را فعال کنید
   - Service Name: MongoDB (پیش‌فرض)
   - Data Directory: C:\Program Files\MongoDB\Server\[version]\data
   - Log Directory: C:\Program Files\MongoDB\Server\[version]\log

3. **بررسی اجرا:**
   - MongoDB به صورت خودکار به عنوان Service اجرا می‌شود
   - می‌توانید با دستور زیر بررسی کنید:
     ```powershell
     Get-Service MongoDB
     ```

4. **اجرای اسکریپت ایجاد ادمین:**
   ```bash
   npm run create-admin
   ```

## گزینه 3: استفاده از Docker (اختیاری)

اگر Docker دارید:

```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

سپس در `.env.local`:
```
MONGODB_URI=mongodb://localhost:27017/shahrzadartgallery
```

---

## پس از راه‌اندازی MongoDB

بعد از اینکه MongoDB آماده شد، اسکریپت ایجاد ادمین را اجرا کنید:

```bash
npm run create-admin
```

این اسکریپت ادمین زیر را ایجاد می‌کند:
- Username: `shahrzadyousefi`
- Email: `shahrzadyousefi.id@gmail.com`
- Password: `shd@Y@1369`
- Role: `superadmin`

سپس می‌توانید به `/admin/login` بروید و وارد شوید.



