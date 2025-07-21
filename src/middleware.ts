import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const forbiddenRoutes = ['/app'];

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const isForbidden =
    forbiddenRoutes.includes(url.pathname) &&
    process.env.NODE_ENV === 'production';

  if (isForbidden) {
    url.pathname = '/';

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
