import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { CSRF_TOKEN_NAME, TOKEN_EXPIRY } from '@/types/services';
import crypto from 'crypto';

export async function validateCSRFToken(
  request: NextRequest
): Promise<boolean> {
  const clientToken = request.headers.get('x-csrf-token');

  if (!clientToken) return false;

  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(CSRF_TOKEN_NAME)?.value;

  if (!cookieValue) return false;

  const [token, timestamp, signature] = cookieValue.split(':');

  if (!token || !timestamp || !signature) return false;

  if (clientToken !== token) return false;

  const now = Date.now();
  const tokenTime = parseInt(timestamp);

  if (now - tokenTime > TOKEN_EXPIRY) return false;

  const expectedSignature = crypto
    .createHmac('sha256', process.env.AUTH_SECRET!)
    .update(`${token}:${timestamp}`)
    .digest('hex');

  return signature === expectedSignature;
}
