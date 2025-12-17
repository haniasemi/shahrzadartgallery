import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { verifyAdmin } from '@/lib/auth';

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const published = searchParams.get('published');

    let query = {};
    if (category) query.category = category;
    if (published !== null) query.published = published === 'true';

    const blogs = await Blog.find(query).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    console.error('Get blogs error:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت مقالات' },
      { status: 500 }
    );
  }
}

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
    const data = await request.json();

    // Generate slug from title if not provided
    if (!data.slug && data.title) {
      data.slug = data.title
        .replace(/[^a-z0-9\u0600-\u06FF]+/gi, '-')
        .toLowerCase()
        .replace(/^-|-$/g, '');
    }

    const blog = new Blog(data);
    await blog.save();

    return NextResponse.json({
      success: true,
      message: 'مقاله با موفقیت اضافه شد',
      blog
    });
  } catch (error) {
    console.error('Create blog error:', error);
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'این مقاله قبلاً ثبت شده است' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'خطا در اضافه کردن مقاله' },
      { status: 500 }
    );
  }
}




