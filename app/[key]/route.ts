import { NextRequest, NextResponse } from 'next/server';
import { getIndexNowConfig } from '@/lib/indexnow';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ key: string }> }
) {
  const { key: requestedKey } = await params;
  const config = getIndexNowConfig();
  
  // Check if the requested key matches our IndexNow key and ends with .txt
  if (requestedKey === `${config.key}.txt`) {
    return new NextResponse(config.key, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      },
    });
  }
  
  // Return 404 for non-matching keys
  return new NextResponse('Not Found', { status: 404 });
} 