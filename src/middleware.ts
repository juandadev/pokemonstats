import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { NextAuthRequest } from 'next-auth';

const protectedPaths = ['/app'];
const redirectedRoutes = ['/auth/signin', '/auth/signup'];

function middleware(request: NextAuthRequest) {
  const url = request.nextUrl.clone();
  const isProtected =
    protectedPaths.includes(request.nextUrl.pathname) && !request.auth?.user;

  if (isProtected) {
    url.pathname = '/';

    return NextResponse.redirect(url);
  }

  const shouldRedirect =
    redirectedRoutes.includes(request.nextUrl.pathname) && request.auth?.user;

  if (shouldRedirect) {
    url.pathname = '/app';

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export default auth(middleware);
