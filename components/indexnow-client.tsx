"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface IndexNowClientProps {
  enabled?: boolean;
  delay?: number;
}

export function IndexNowClient({ enabled = true, delay = 3000 }: IndexNowClientProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    // Check if IndexNow submission is suggested by middleware
    const shouldSubmit = document.querySelector('meta[name="x-indexnow-submit"]')?.getAttribute('content') === 'true';
    
    if (!shouldSubmit) return;

    const timer = setTimeout(async () => {
      try {
        // Submit current page to IndexNow
        const response = await fetch('/api/indexnow', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            urls: [pathname],
            action: 'submit'
          }),
        });

        if (response.ok) {
          console.log('✅ IndexNow: Page submitted successfully:', pathname);
        } else {
          console.warn('⚠️ IndexNow: Submission failed for:', pathname);
        }
      } catch (error) {
        console.error('❌ IndexNow: Submission error:', error);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [pathname, enabled, delay]);

  // This component doesn't render anything
  return null;
}

// Hook version for manual control
export function useIndexNowAutoSubmit(enabled: boolean = true, delay: number = 3000) {
  const pathname = usePathname();

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const timer = setTimeout(async () => {
      try {
        const response = await fetch('/api/indexnow', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            urls: [pathname],
            action: 'submit'
          }),
        });

        if (response.ok) {
          console.log('✅ IndexNow: Auto-submitted page:', pathname);
        }
      } catch (error) {
        console.error('❌ IndexNow: Auto-submit error:', error);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [pathname, enabled, delay]);
} 