import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Message from '@/models/Message';
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
    
    // Get all unique users who have sent messages
    const messages = await Message.find({ to: 'admin' }).distinct('from');
    const conversations = [];

    for (const userId of messages) {
      const user = await User.findById(userId);
      if (user) {
        const unreadCount = await Message.countDocuments({
          from: userId,
          to: 'admin',
          read: false
        });
        
        conversations.push({
          userId: user._id.toString(),
          username: user.username,
          email: user.email,
          unreadCount
        });
      }
    }

    return NextResponse.json({
      success: true,
      conversations
    });
  } catch (error) {
    console.error('Get conversations error:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت گفتگوها' },
      { status: 500 }
    );
  }
}

