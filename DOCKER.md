# راهنمای Docker برای گالری هنری شهرزاد

## ساخت و اجرای Docker Image

### روش 1: استفاده از Dockerfile

```bash
# ساخت image
docker build -t shahrzadartgallery .

# اجرای container
docker run -p 3000:3000 shahrzadartgallery
```

### روش 2: استفاده از Docker Compose

```bash
# ساخت و اجرای سرویس
docker-compose up --build

# اجرای در background
docker-compose up -d --build

# توقف سرویس
docker-compose down
```

## دستورات مفید

```bash
# مشاهده logs
docker-compose logs -f

# ورود به container
docker exec -it <container_id> sh

# حذف image
docker rmi shahrzadartgallery

# حذف تمام containers متوقف شده
docker container prune
```

## پورت‌ها

- **3000**: پورت اصلی اپلیکیشن Next.js

## متغیرهای محیطی

- `NODE_ENV`: production
- `PORT`: 3000
- `HOSTNAME`: 0.0.0.0

## نکات مهم

1. اپلیکیشن در پورت 3000 اجرا می‌شود
2. از standalone output استفاده می‌کند که برای production بهینه است
3. تصاویر به صورت unoptimized تنظیم شده‌اند
4. از user غیر root برای امنیت استفاده می‌کند
