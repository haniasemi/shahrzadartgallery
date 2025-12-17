import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import { verifyAdmin } from '@/lib/auth';

export async function POST(request) {
  try {
    const auth = await verifyAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { error: 'دسترسی غیرمجاز' },
        { status: 401 }
      );
    }

    await connectDB();
    const { to, content } = await request.json();

    if (!to || !content) {
      return NextResponse.json(
        { error: 'گیرنده و محتوای پیام الزامی است' },
        { status: 400 }
      );
    }

    const message = new Message({
      from: 'admin',
      to: to,
      content: content,
      isFromAdmin: true,
      read: false
    });

    await message.save();

    return NextResponse.json({
      success: true,
      message: 'پیام با موفقیت ارسال شد',
      messageData: message
    });
  } catch (error) {
    console.error('Send message error:', error);
    return NextResponse.json(
      { error: 'خطا در ارسال پیام' },
      { status: 500 }
    );
  }
}

