import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import { verifyUser } from '@/lib/auth';

export async function GET(request) {
  try {
    const auth = await verifyUser(request);
    if (!auth.valid) {
      return NextResponse.json(
        { error: 'دسترسی غیرمجاز' },
        { status: 401 }
      );
    }

    await connectDB();
    const userId = auth.user.id;
    
    // Get all messages between user and admin
    const messages = await Message.find({
      $or: [
        { from: userId, to: 'admin' },
        { from: 'admin', to: userId }
      ]
    }).sort({ createdAt: 1 });

    // Mark admin messages as read
    await Message.updateMany(
      { from: 'admin', to: userId, read: false },
      { read: true }
    );

    return NextResponse.json({
      success: true,
      messages
    });
  } catch (error) {
    console.error('Get messages error:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت پیام‌ها' },
      { status: 500 }
    );
  }
}

