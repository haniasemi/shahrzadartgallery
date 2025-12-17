import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import { verifyAdmin } from '@/lib/auth';

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

    const order = await Order.findByIdAndUpdate(
      params.id,
      { ...data, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!order) {
      return NextResponse.json(
        { error: 'سفارش یافت نشد' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'سفارش با موفقیت به‌روزرسانی شد',
      order
    });
  } catch (error) {
    console.error('Update order error:', error);
    return NextResponse.json(
      { error: 'خطا در به‌روزرسانی سفارش' },
      { status: 500 }
    );
  }
}




