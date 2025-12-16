import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';
import jwt from 'jsonwebtoken';

// Fix for ES modules
const jwtSign = jwt.sign;
const jwtVerify = jwt.verify;

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function POST(request) {
  try {
    await connectDB();
    const { username, password } = await request.json();

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return NextResponse.json(
        { error: 'نام کاربری یا رمز عبور اشتباه است' },
        { status: 401 }
      );
    }

    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'نام کاربری یا رمز عبور اشتباه است' },
        { status: 401 }
      );
    }

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id.toString(), username: admin.username, role: admin.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const response = NextResponse.json({
      success: true,
      message: 'ورود موفقیت‌آمیز بود',
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        role: admin.role
      }
    });

    // Set HTTP-only cookie
    response.cookies.set('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'خطا در ورود به سیستم' },
      { status: 500 }
    );
  }
}

