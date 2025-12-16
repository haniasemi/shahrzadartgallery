import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Product from '@/models/Product';
import { verifyAdmin } from '@/lib/auth';

export async function GET(request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const subCategory = searchParams.get('subCategory');

    let query = {};
    if (category) query.category = category;
    if (subCategory) query.subCategory = subCategory;

    const products = await Product.find(query).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error('Get products error:', error);
    return NextResponse.json(
      { error: 'خطا در دریافت محصولات' },
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

    const product = new Product(data);
    await product.save();

    return NextResponse.json({
      success: true,
      message: 'محصول با موفقیت اضافه شد',
      product
    });
  } catch (error) {
    console.error('Create product error:', error);
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'این محصول قبلاً ثبت شده است' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'خطا در اضافه کردن محصول' },
      { status: 500 }
    );
  }
}



