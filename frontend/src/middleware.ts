import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function getRoleFromToken(token: string): string | null {
  try {
    const payloadBase64 = token.split('.')[1];
    if (!payloadBase64) return null;
    const decodedJson = atob(payloadBase64);
    const decoded = JSON.parse(decodedJson);
    return decoded.role || null;
  } catch (e) {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('accessToken')?.value;
  const role = token ? getRoleFromToken(token) : null;

  // 1. Unauthenticated users trying to access protected routes -> Redirect to login
  if (!token) {
    if (pathname.startsWith('/institute/dashboard')) {
      const loginUrl = new URL('/institute/login', request.url);
      loginUrl.searchParams.set('redirectTo', pathname);
      return NextResponse.redirect(loginUrl);
    }
    if (pathname.startsWith('/dashboard')) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirectTo', pathname);
      return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
  }

  // If token exists, handle role-based redirection

  // 2. AGENCY routing logic
  if (role === 'AGENCY') {
    // If accessing USER dashboard, landing page, or any auth pages -> redirect to institute dashboard
    const isUserDashboard = pathname.startsWith('/dashboard') && !pathname.startsWith('/institute/dashboard');
    const isInstituteAuth = pathname === '/institute/login' || pathname === '/institute/register';
    const isUserAuth = pathname === '/login' || pathname === '/register';
    const isLandingPages = pathname === '/' || pathname === '/institute';

    if (isUserDashboard || isInstituteAuth || isUserAuth || isLandingPages) {
      return NextResponse.redirect(new URL('/institute/dashboard', request.url));
    }
    return NextResponse.next();
  }

  // 3. USER routing logic (default)
  if (role === 'USER' || !role) {
    const isInstituteDashboard = pathname.startsWith('/institute/dashboard');
    const isInstituteAuth = pathname === '/institute/login' || pathname === '/institute/register';
    const isUserAuth = pathname === '/login' || pathname === '/register';
    const isLandingPages = pathname === '/' || pathname === '/institute';

    if (isInstituteDashboard || isInstituteAuth || isUserAuth || isLandingPages) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  // Run middleware on all routes except Next.js internals and static files
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
