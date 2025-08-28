import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getUserLoginRoutePath } from './routes/routes';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value;
  const { pathname } = request.nextUrl;

  // Define protected routes
  const protectedRoutes = ['/']; 

  // Check if user is trying to access a protected route
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));

  // If route is protected and no token, redirect to login
  if (isProtected && !token) {
    const loginUrl = new URL(getUserLoginRoutePath(), request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If token exists or route is not protected, allow
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
