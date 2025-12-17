import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { verifyAdmin } from '@/lib/auth';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const blog = await Blog.findOne({ slug: params.id }) || await Blog.findById(params.id);
    
    if (!blog) {
      return NextResponse.json(
        { error: 'مقاله یافت نشد' },
        { status: 404 }
      );
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error('Get blog error:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت مقاله' },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
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

    const blog = await Blog.findByIdAndUpdate(
      params.id,
      { ...data, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!blog) {
      return NextResponse.json(
        { error: 'مقاله یافت نشد' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'مقاله با موفقیت به‌روزرسانی شد',
      blog
    });
  } catch (error) {
    console.error('Update blog error:', error);
    return NextResponse.json(
      { error: 'خطا در به‌روزرسانی مقاله' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const auth = await verifyAdmin(request);
    if (!auth.valid) {
      return NextResponse.json(
        { error: 'دسترسی غیرمجاز' },
        { status: 401 }
      );
    }

    await connectDB();
    const blog = await Blog.findByIdAndDelete(params.id);

    if (!blog) {
      return NextResponse.json(
        { error: 'مقاله یافت نشد' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'مقاله با موفقیت حذف شد'
    });
  } catch (error) {
    console.error('Delete blog error:', error);
    return NextResponse.json(
      { error: 'خطا در حذف مقاله' },
      { status: 500 }
    );
  }
}




