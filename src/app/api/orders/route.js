import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import { verifyAdmin } from '@/lib/auth';

export async function GET(request) {
  try {
    const auth = await verifyAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { error: 'دسترسی غیرمجاز' },
        { status: 401 }
      );
    }

    await connectDB();
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    let query = {};
    if (status) query.status = status;
    if (startDate || endDate) {
      query.createdAt = {};
      if (startDate) query.createdAt.$gte = new Date(startDate);
      if (endDate) query.createdAt.$lte = new Date(endDate);
    }

    const orders = await Order.find(query)
      .populate('products.productId')
      .sort({ createdAt: -1 });

    // Calculate total revenue
    const totalRevenue = orders.reduce((sum, order) => {
      return sum + parseFloat(order.totalAmount.replace(/,/g, '') || 0);
    }, 0);

    return NextResponse.json({
      success: true,
      orders,
      totalRevenue: totalRevenue.toLocaleString('fa-IR')
    });
  } catch (error) {
    console.error('Get orders error:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت سفارشات' },
      { status: 500 }
    );
  }
}




