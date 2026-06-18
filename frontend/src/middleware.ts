import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes that require authentication
const PROTECTED_ROUTES = ['/dashboard'];

// Routes that should redirect authenticated users away (e.g., don't go back to login if already logged in)
const AUTH_ROUTES = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Read the token from cookies (we'll store it in a cookie from the login page)
  const token = request.cookies.get('accessToken')?.value;

  const isProtectedRoute = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));

  // If accessing a protected route without a token → redirect to login
  if (isProtectedRoute && !token) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirectTo', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If accessing login/register or the home page with a token → redirect to dashboard
  if ((isAuthRoute || pathname === '/') && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Run middleware on all routes except Next.js internals and static files
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
