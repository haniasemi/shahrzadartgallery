import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export async function POST(request) {
  try {
    await connectDB();
    const { username, email, password, fullName } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: 'نام کاربری، ایمیل و رمز عبور الزامی است' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [{ username }, { email }] 
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'این نام کاربری یا ایمیل قبلاً استفاده شده است' },
        { status: 400 }
      );
    }

    const user = new User({
      username,
      email,
      password,
      fullName: fullName || '',
      role: 'user'
    });

    await user.save();

    const token = jwt.sign(
      { id: user._id.toString(), username: user.username, role: 'user', type: 'user' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    const response = NextResponse.json({
      success: true,
      message: 'ثبت نام با موفقیت انجام شد',
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
    console.error('Register error:', error);
    return NextResponse.json(
      { error: 'خطا در ثبت نام' },
      { status: 500 }
    );
  }
}

