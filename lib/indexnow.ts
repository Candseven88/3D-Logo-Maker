/**
 * IndexNow Integration for 3D Logo Maker
 * Automatically notifies search engines about content changes
 */

export interface IndexNowConfig {
  host: string;
  key: string;
  keyLocation: string;
}

export interface IndexNowSubmission {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
}

// IndexNow endpoints for different search engines
const INDEXNOW_ENDPOINTS = {
  bing: 'https://api.indexnow.org/indexnow',
  yandex: 'https://yandex.com/indexnow',
  seznam: 'https://search.seznam.cz/indexnow',
  naver: 'https://searchadvisor.naver.com/indexnow',
  // Primary endpoint (recommended)
  primary: 'https://api.indexnow.org/indexnow'
};

// Generate a unique IndexNow key
export function generateIndexNowKey(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 32; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Get IndexNow configuration
export function getIndexNowConfig(): IndexNowConfig {
  const host = process.env.NEXT_PUBLIC_SITE_URL || 'https://3dlogo.site';
  const key = process.env.INDEXNOW_KEY || 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'; // Default fallback
  
  return {
    host: host.replace(/^https?:\/\//, ''), // Remove protocol
    key,
    keyLocation: `${host}/${key}.txt`
  };
}

// Submit URLs to IndexNow
export async function submitToIndexNow(
  urls: string | string[], 
  config?: Partial<IndexNowConfig>
): Promise<{ success: boolean; error?: string; responses?: any[] }> {
  try {
    const indexNowConfig = { ...getIndexNowConfig(), ...config };
    const urlList = Array.isArray(urls) ? urls : [urls];
    
    // Ensure URLs are absolute
    const absoluteUrls = urlList.map(url => {
      if (url.startsWith('http')) return url;
      const baseUrl = `https://${indexNowConfig.host}`;
      return url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`;
    });

    const submission: IndexNowSubmission = {
      host: indexNowConfig.host,
      key: indexNowConfig.key,
      keyLocation: indexNowConfig.keyLocation,
      urlList: absoluteUrls
    };

    // Submit to primary endpoint
    const response = await fetch(INDEXNOW_ENDPOINTS.primary, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': '3D-Logo-Maker/1.3.0'
      },
      body: JSON.stringify(submission)
    });

    if (!response.ok) {
      throw new Error(`IndexNow submission failed: ${response.status} ${response.statusText}`);
    }

    console.log('✅ IndexNow submission successful:', {
      urls: absoluteUrls,
      status: response.status
    });

    return { success: true, responses: [response] };
  } catch (error) {
    console.error('❌ IndexNow submission failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// Submit multiple URLs to multiple search engines
export async function submitToAllEngines(
  urls: string | string[],
  config?: Partial<IndexNowConfig>
): Promise<{ success: boolean; results: Array<{ endpoint: string; success: boolean; error?: string }> }> {
  const indexNowConfig = { ...getIndexNowConfig(), ...config };
  const urlList = Array.isArray(urls) ? urls : [urls];
  
  // Ensure URLs are absolute
  const absoluteUrls = urlList.map(url => {
    if (url.startsWith('http')) return url;
    const baseUrl = `https://${indexNowConfig.host}`;
    return url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`;
  });

  const submission: IndexNowSubmission = {
    host: indexNowConfig.host,
    key: indexNowConfig.key,
    keyLocation: indexNowConfig.keyLocation,
    urlList: absoluteUrls
  };

  const results = await Promise.allSettled(
    Object.entries(INDEXNOW_ENDPOINTS).map(async ([name, endpoint]) => {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'User-Agent': '3D-Logo-Maker/1.3.0'
          },
          body: JSON.stringify(submission),
          signal: AbortSignal.timeout(10000) // 10 second timeout
        });

        return {
          endpoint: name,
          success: response.ok,
          status: response.status,
          error: response.ok ? undefined : `${response.status} ${response.statusText}`
        };
      } catch (error) {
        return {
          endpoint: name,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        };
      }
    })
  );

  const finalResults = results.map((result, index) => {
    const endpointName = Object.keys(INDEXNOW_ENDPOINTS)[index];
    if (result.status === 'fulfilled') {
      return result.value;
    } else {
      return {
        endpoint: endpointName,
        success: false,
        error: result.reason?.message || 'Promise rejected'
      };
    }
  });

  const successCount = finalResults.filter(r => r.success).length;
  
  console.log(`IndexNow submission results: ${successCount}/${finalResults.length} successful`);
  
  return {
    success: successCount > 0,
    results: finalResults
  };
}

// Predefined URL sets for different content types
export const URL_SETS = {
  // Core pages that should always be indexed
  core: [
    '/',
    '/edit',
    '/convert',
    '/features',
    '/gallery',
    '/tutorials',
    '/about',
    '/contact'
  ],
  
  // Legal and utility pages
  legal: [
    '/privacy',
    '/terms'
  ],
  
  // All main pages
  all: [
    '/',
    '/edit',
    '/convert', 
    '/features',
    '/gallery',
    '/tutorials',
    '/about',
    '/contact',
    '/privacy',
    '/terms'
  ]
};

// Convenience functions for common operations
export const IndexNowHelpers = {
  // Submit all core pages
  submitCorePages: () => submitToIndexNow(URL_SETS.core),
  
  // Submit all pages
  submitAllPages: () => submitToIndexNow(URL_SETS.all),
  
  // Submit single page
  submitPage: (path: string) => submitToIndexNow(path),
  
  // Submit homepage
  submitHomepage: () => submitToIndexNow('/'),
  
  // Submit with retry logic
  submitWithRetry: async (urls: string | string[], maxRetries = 3) => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      const result = await submitToIndexNow(urls);
      if (result.success) {
        return result;
      }
      
      if (attempt < maxRetries) {
        // Wait before retry (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
        console.log(`IndexNow retry attempt ${attempt + 1}/${maxRetries}`);
      }
    }
    
    return { success: false, error: 'Max retries exceeded' };
  }
}; 