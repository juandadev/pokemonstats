import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import crypto from 'crypto';
import { CSRF_TOKEN_NAME, TOKEN_EXPIRY } from '@/types/services';

const allowedHosts =
  process.env.NODE_ENV === 'development'
    ? ['localhost:3000', '127.0.0.1:3000']
    : ['pokemonstats.com', 'www.pokemonstats.com'];

export async function GET(req: NextRequest) {
  const referer = req.headers.get('referer');
  const host = req.headers.get('host');

  if (referer) {
    const refererUrl = new URL(referer);

    if (
      !allowedHosts.some(
        (allowed) =>
          refererUrl.host === allowed || refererUrl.host.endsWith(allowed)
      )
    ) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  } else if (host) {
    if (
      !allowedHosts.some(
        (allowed) => host === allowed || host.endsWith(allowed)
      )
    ) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }
  } else {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  if (!process.env.AUTH_SECRET) {
    throw new Error('AUTH_SECRET must be configured');
  }

  const token = crypto.randomBytes(32).toString('hex');
  const timestamp = Date.now();
  const signature = crypto
    .createHmac('sha256', process.env.AUTH_SECRET)
    .update(`${token}:${timestamp}`)
    .digest('hex');

  const cookieStore = await cookies();
  cookieStore.set(CSRF_TOKEN_NAME, `${token}:${timestamp}:${signature}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: TOKEN_EXPIRY / 1000,
    path: '/',
  });

  return NextResponse.json({ token });
}
