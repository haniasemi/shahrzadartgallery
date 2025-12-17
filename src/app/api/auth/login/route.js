import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function POST(request) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: 'نام کاربری و رمز عبور الزامی است' },
        { status: 400 }
      );
    }

    // First check if it's admin
    const admin = await Admin.findOne({ username });
    if (admin) {
      const isPasswordValid = await admin.comparePassword(password);
      if (isPasswordValid) {
        admin.lastLogin = new Date();
        await admin.save();

        const token = jwt.sign(
          { id: admin._id.toString(), username: admin.username, role: 'admin', type: 'admin' },
          JWT_SECRET,
          { expiresIn: '7d' }
        );

        const response = NextResponse.json({
          success: true,
          message: 'ورود موفقیت‌آمیز بود',
          role: 'admin',
          user: {
            id: admin._id.toString(),
            username: admin.username,
            email: admin.email,
            role: 'admin'
          }
        });

        const isProduction = process.env.NODE_ENV === 'production';
        response.cookies.set('authToken', token, {
          httpOnly: true,
          secure: isProduction,
          sameSite: 'lax',
          maxAge: 60 * 60 * 24 * 7,
          path: '/'
        });

        return response;
      }
    }

    // Check if it's a regular user
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { error: 'نام کاربری یا رمز عبور اشتباه است' },
        { status: 401 }
      );
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'نام کاربری یا رمز عبور اشتباه است' },
        { status: 401 }
      );
    }

    user.lastLogin = new Date();
    await user.save();

    const token = jwt.sign(
      { id: user._id.toString(), username: user.username, role: 'user', type: 'user' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const response = NextResponse.json({
      success: true,
      message: 'ورود موفقیت‌آمیز بود',
      role: 'user',
      user: {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        role: 'user'
      }
    });

    const isProduction = process.env.NODE_ENV === 'production';
    response.cookies.set('authToken', token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/'
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

