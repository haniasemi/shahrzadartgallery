import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
import { verifyAdmin } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    const auth = await verifyAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { error: 'دسترسی غیرمجاز' },
        { status: 401 }
      );
    }

    await connectDB();
    
    const userId = params.userId;
    
    // Get all messages between admin and this user
    const messages = await Message.find({
      $or: [
        { from: userId, to: 'admin' },
        { from: 'admin', to: userId }
      ]
    }).sort({ createdAt: 1 });

    // Mark messages as read
    await Message.updateMany(
      { from: userId, to: 'admin', read: false },
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

