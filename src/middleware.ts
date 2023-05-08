import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { origin, pathname } = req.nextUrl;
  if (pathname === '/') return NextResponse.redirect(`${origin}/info`);
}
