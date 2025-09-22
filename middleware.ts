import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Pages that should trigger IndexNow submissions when visited
const INDEX_NOW_PAGES = [
  '/',
  '/edit',
  '/convert',
  '/features',
  '/gallery',
  '/tutorials',
  '/about',
  '/contact'
];

// Rate limiting for IndexNow submissions
const submissionCache = new Map<string, number>();
const SUBMISSION_COOLDOWN = 60 * 60 * 1000; // 1 hour in milliseconds

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Only process GET requests for main pages
  if (request.method === 'GET' && INDEX_NOW_PAGES.includes(pathname)) {
    const response = NextResponse.next();
    
    // Add IndexNow submission header for client-side processing
    if (shouldSubmitToIndexNow(pathname)) {
      response.headers.set('X-IndexNow-Submit', 'true');
      response.headers.set('X-IndexNow-Path', pathname);
    }
    
    // Add SEO optimization headers
    response.headers.set('X-Robots-Tag', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    return response;
  }
  
  return NextResponse.next();
}

function shouldSubmitToIndexNow(pathname: string): boolean {
  const now = Date.now();
  const lastSubmission = submissionCache.get(pathname) || 0;
  
  // Check if enough time has passed since last submission
  if (now - lastSubmission > SUBMISSION_COOLDOWN) {
    submissionCache.set(pathname, now);
    return true;
  }
  
  return false;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.txt|.*\\.xml|.*\\.json).*)',
  ],
}; 