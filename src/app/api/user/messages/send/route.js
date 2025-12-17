import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import { verifyUser } from '@/lib/auth';

export async function POST(request) {
  try {
    const auth = await verifyUser(request);
    if (!auth.valid) {
      return NextResponse.json(
        { error: 'دسترسی غیرمجاز' },
        { status: 401 }
      );
    }

    await connectDB();
    const { content } = await request.json();
    const userId = auth.user.id;

    if (!content) {
      return NextResponse.json(
        { error: 'محتوای پیام الزامی است' },
        { status: 400 }
      );
    }

    const message = new Message({
      from: userId,
      to: 'admin',
      content: content,
      isFromAdmin: false,
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

