import { useState, useCallback } from 'react';

interface IndexNowHookResult {
  isSubmitting: boolean;
  error: string | null;
  success: boolean;
  submitUrls: (urls: string | string[], options?: SubmitOptions) => Promise<void>;
  submitCurrentPage: () => Promise<void>;
  submitAllPages: () => Promise<void>;
  submitCorePages: () => Promise<void>;
  clearStatus: () => void;
}

interface SubmitOptions {
  action?: 'submit' | 'submit-all' | 'submit-core' | 'submit-with-retry';
  engines?: 'primary' | 'all';
}

export function useIndexNow(): IndexNowHookResult {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const clearStatus = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  const submitUrls = useCallback(async (
    urls: string | string[], 
    options: SubmitOptions = {}
  ) => {
    setIsSubmitting(true);
    clearStatus();

    try {
      const response = await fetch('/api/indexnow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          urls,
          action: options.action || 'submit',
          engines: options.engines || 'primary'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        console.log('✅ IndexNow submission successful:', data);
      } else {
        throw new Error(data.error || 'Submission failed');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      console.error('❌ IndexNow submission failed:', errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }, [clearStatus]);

  const submitCurrentPage = useCallback(async () => {
    const currentUrl = window.location.pathname;
    await submitUrls(currentUrl);
  }, [submitUrls]);

  const submitAllPages = useCallback(async () => {
    await submitUrls([], { action: 'submit-all' });
  }, [submitUrls]);

  const submitCorePages = useCallback(async () => {
    await submitUrls([], { action: 'submit-core' });
  }, [submitUrls]);

  return {
    isSubmitting,
    error,
    success,
    submitUrls,
    submitCurrentPage,
    submitAllPages,
    submitCorePages,
    clearStatus,
  };
}

// Utility hook for automatic submission on page load
export function useAutoIndexNow(
  enabled: boolean = true,
  delay: number = 2000
) {
  const { submitCurrentPage } = useIndexNow();

  useState(() => {
    if (!enabled || typeof window === 'undefined') return;

    const timer = setTimeout(() => {
      submitCurrentPage();
    }, delay);

    return () => clearTimeout(timer);
  });
} 