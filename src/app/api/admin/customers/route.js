import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
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
    const customers = await User.find({ role: 'user' }).sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      customers
    });
  } catch (error) {
    console.error('Get customers error:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت مشتریان' },
      { status: 500 }
    );
  }
}

