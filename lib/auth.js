import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export function getTokenFromRequest(request) {
  const cookieHeader = request.headers.get('cookie');
  if (!cookieHeader) return null;

  const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {});

  return cookies.adminToken || null;
}

export async function verifyAdmin(request) {
  const token = getTokenFromRequest(request);
  if (!token) {
    return { valid: false, admin: null };
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return { valid: false, admin: null };
  }

  return { valid: true, admin: decoded };
}



