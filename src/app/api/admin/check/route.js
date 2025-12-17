import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

// این route برای تست و بررسی مشکلات استفاده می‌شود
export async function GET(request) {
  try {
    // Test MongoDB connection
    await connectDB();
    
    // Check if any admin exists
    const adminCount = await Admin.countDocuments();
    const admins = await Admin.find({}).select('username email role createdAt').limit(5);
    
    return NextResponse.json({
      success: true,
      mongodb: 'connected',
      adminCount,
      admins: admins.map(a => ({
        username: a.username,
        email: a.email,
        role: a.role,
        createdAt: a.createdAt
      })),
      message: adminCount === 0 
        ? 'هیچ ادمینی در دیتابیس وجود ندارد. لطفاً از /admin/create-admin استفاده کنید.'
        : `${adminCount} ادمین در دیتابیس وجود دارد.`
    });
  } catch (error) {
    console.error('Check error:', error);
    return NextResponse.json({
      success: false,
      mongodb: 'disconnected',
      error: error.message,
      message: 'خطا در اتصال به دیتابیس'
    }, { status: 500 });
  }
}


