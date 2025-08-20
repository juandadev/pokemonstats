import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { NextAuthRequest } from 'next-auth';

const PUBLIC_ROUTES = [
  '/',
  '/privacy',
  '/terms',
  '/auth/signin',
  '/auth/signup',
];

const startsWith = (path: string, prefix: string) =>
  path === prefix || path.startsWith(prefix + '/');

function middleware(request: NextAuthRequest) {
  const { nextUrl } = request;
  const { pathname } = nextUrl;

  const isAuthed = Boolean(request.auth?.user);
  const isPublic = PUBLIC_ROUTES.includes(pathname);
  const inAuthSection = startsWith(pathname, '/auth');

  if (!isAuthed) {
    if (isPublic) return NextResponse.next();

    const url = nextUrl.clone();

    url.pathname = '/auth/signin';
    url.searchParams.set('callbackUrl', nextUrl.pathname + nextUrl.search);

    return NextResponse.redirect(url);
  }

  if (isAuthed && inAuthSection) {
    const url = nextUrl.clone();

    url.pathname = '/app';

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export default auth(middleware);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
