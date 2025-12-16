import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

// This route should be protected or removed after creating the first admin
export async function POST(request) {
  try {
    await connectDB();
    const { username, email, password } = await request.json();

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ $or: [{ username }, { email }] });
    if (existingAdmin) {
      return NextResponse.json(
        { error: 'این نام کاربری یا ایمیل قبلاً استفاده شده است' },
        { status: 400 }
      );
    }

    const admin = new Admin({ username, email, password, role: 'superadmin' });
    await admin.save();

    return NextResponse.json({
      success: true,
      message: 'مدیر با موفقیت ایجاد شد'
    });
  } catch (error) {
    console.error('Create admin error:', error);
    return NextResponse.json(
      { error: 'خطا در ایجاد مدیر' },
      { status: 500 }
    );
  }
}



