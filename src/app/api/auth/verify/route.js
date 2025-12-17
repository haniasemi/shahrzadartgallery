import { NextResponse } from 'next/server';
import { verifyToken, getTokenFromRequest } from '@/lib/auth';

export async function GET(request) {
  try {
    const token = getTokenFromRequest(request);
    
    if (!token) {
      return NextResponse.json({ valid: false, user: null });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ valid: false, user: null });
    }

    return NextResponse.json({ 
      valid: true, 
      user: decoded 
    });
  } catch (error) {
    return NextResponse.json({ valid: false, user: null });
  }
}

