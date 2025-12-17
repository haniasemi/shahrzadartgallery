import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Banner from '@/models/Banner';
import { verifyAdmin } from '@/lib/auth';

export async function GET() {
  try {
    await connectDB();
    const banners = await Banner.find({ active: true }).sort({ order: 1 });
    return NextResponse.json({ success: true, banners });
  } catch (error) {
    console.error('Get banners error:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت بنرها' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const auth = await verifyAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { error: 'دسترسی غیرمجاز' },
        { status: 401 }
      );
    }

    await connectDB();
    const data = await request.json();

    const banner = new Banner(data);
    await banner.save();

    return NextResponse.json({
      success: true,
      message: 'بنر با موفقیت اضافه شد',
      banner
    });
  } catch (error) {
    console.error('Create banner error:', error);
    return NextResponse.json(
      { error: 'خطا در اضافه کردن بنر' },
      { status: 500 }
    );
  }
}




