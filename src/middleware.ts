import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { NextAuthRequest } from 'next-auth';

const forbiddenRoutes = ['/app'];

function middleware(request: NextAuthRequest) {
  const url = request.nextUrl.clone();
  const isForbidden =
    forbiddenRoutes.includes(url.pathname) &&
    process.env.NODE_ENV === 'production';

  if (isForbidden || !!request.auth?.user) {
    url.pathname = '/';

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export default auth(middleware);
