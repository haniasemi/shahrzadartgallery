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
    // Connect to database
    await connectDB();
    
    // Parse request body
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: 'نام کاربری و رمز عبور الزامی است' },
        { status: 400 }
      );
    }

    // Find admin
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return NextResponse.json(
        { error: 'نام کاربری یا رمز عبور اشتباه است' },
        { status: 401 }
      );
    }

    // Compare password
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

    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'ورود موفقیت‌آمیز بود',
      admin: {
        id: admin._id.toString(),
        username: admin.username,
        email: admin.email,
        role: admin.role
      }
    });

    // Set HTTP-only cookie
    const isProduction = process.env.NODE_ENV === 'production';
    response.cookies.set('adminToken', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    
    // More detailed error message in development
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? error.message 
      : 'خطا در ورود به سیستم';
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

