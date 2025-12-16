import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Banner from '@/models/Banner';
import { verifyAdmin } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const banner = await Banner.findById(params.id);
    
    if (!banner) {
      return NextResponse.json(
        { error: 'بنر یافت نشد' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, banner });
  } catch (error) {
    console.error('Get banner error:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت بنر' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
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

    const banner = await Banner.findByIdAndUpdate(
      params.id,
      { ...data, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!banner) {
      return NextResponse.json(
        { error: 'بنر یافت نشد' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'بنر با موفقیت به‌روزرسانی شد',
      banner
    });
  } catch (error) {
    console.error('Update banner error:', error);
    return NextResponse.json(
      { error: 'خطا در به‌روزرسانی بنر' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const auth = await verifyAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { error: 'دسترسی غیرمجاز' },
        { status: 401 }
      );
    }

    await connectDB();
    const banner = await Banner.findByIdAndDelete(params.id);

    if (!banner) {
      return NextResponse.json(
        { error: 'بنر یافت نشد' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'بنر با موفقیت حذف شد'
    });
  } catch (error) {
    console.error('Delete banner error:', error);
    return NextResponse.json(
      { error: 'خطا در حذف بنر' },
      { status: 500 }
    );
  }
}

