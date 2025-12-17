import { NextResponse } from 'next/server';

export async function GET() {
  const uri = process.env.MONGODB_URI || '';

  // برای امنیت، کل رشته را برنمی‌گردانیم؛ فقط اطلاعات برای دیباگ
  return NextResponse.json({
    hasValue: Boolean(uri),
    length: uri.length,
    startsWithMongo: uri.startsWith('mongodb://'),
    startsWithMongoSrv: uri.startsWith('mongodb+srv://'),
    // چند کاراکتر اول فقط برای بررسی، بدون لو دادن پسورد کامل
    previewStart: uri.slice(0, 30),
  });
}


