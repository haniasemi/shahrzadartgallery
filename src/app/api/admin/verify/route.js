import { NextResponse } from 'next/server';
import { verifyAdmin } from '@/lib/auth';

export async function GET(request) {
  try {
    const auth = await verifyAdmin(request);
    return NextResponse.json({ valid: auth.valid, admin: auth.admin });
  } catch (error) {
    return NextResponse.json({ valid: false, admin: null });
  }
}




