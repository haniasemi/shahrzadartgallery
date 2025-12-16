import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import HomePageSettings from '@/models/HomePageSettings';
import { verifyAdmin } from '@/lib/auth';

export async function GET() {
  try {
    await connectDB();
    let settings = await HomePageSettings.findOne();
    
    if (!settings) {
      // Create default settings
      settings = new HomePageSettings();
      await settings.save();
    }

    return NextResponse.json({ success: true, settings });
  } catch (error) {
    console.error('Get homepage settings error:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت تنظیمات' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
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

    let settings = await HomePageSettings.findOne();
    if (!settings) {
      settings = new HomePageSettings(data);
    } else {
      Object.assign(settings, data);
    }
    
    await settings.save();

    return NextResponse.json({
      success: true,
      message: 'تنظیمات با موفقیت به‌روزرسانی شد',
      settings
    });
  } catch (error) {
    console.error('Update homepage settings error:', error);
    return NextResponse.json(
      { error: 'خطا در به‌روزرسانی تنظیمات' },
      { status: 500 }
    );
  }
}



