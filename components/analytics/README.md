# Analytics Integration

This directory contains the analytics integration for the 3D Designer application, including Google Analytics, Microsoft Clarity, Google Search Console, and Vercel Analytics.

## 📊 Platforms Integrated

### Google Analytics (GA4)
- **Tracking ID**: `G-YWJWZFQ5N8`
- **Features**: Page views, user behavior, conversion tracking
- **Privacy**: Configured with anonymized IP and disabled ad personalization

### Microsoft Clarity
- **Project ID**: `t6utovvl34` 
- **Features**: Session recordings, heatmaps, user behavior insights
- **Benefits**: Understand how users interact with the 3D editor

### Google Search Console
- **Verification Code**: `v710gPOOkJTEFwB8wtW4hD6Tbn2kcJe2NPgM2zrZoo4`
- **Purpose**: SEO monitoring, search performance tracking

### Vercel Analytics
- **Features**: Web vitals, performance monitoring
- **Integration**: Built-in with Vercel deployment

## 🏗️ Architecture

```
components/analytics/
├── index.tsx           # Main Analytics component
├── google-analytics.tsx # GA4 implementation  
├── clarity.tsx         # Microsoft Clarity implementation
├── config.ts           # Configuration with hardcoded values
└── README.md           # This documentation
```

## 🚀 Usage

The analytics are automatically included in the app layout:

```tsx
import { Analytics } from '@/components/analytics';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
```

## ⚙️ Configuration

All configuration is hardcoded in `config.ts` for simplicity:

```tsx
export const analyticsConfig = {
  googleAnalytics: {
    trackingId: "G-YWJWZFQ5N8",
    enabled: true,
  },
  clarity: {
    projectId: "t6utovvl34", 
    enabled: true,
  },
  // ... other configs
};
```

## 🔒 Privacy & Performance

- **Privacy-first**: Anonymized IP tracking, no ad personalization
- **Performance**: Scripts load with `afterInteractive` strategy
- **User-friendly**: No impact on initial page load
- **GDPR-ready**: Privacy-compliant configurations

## 📈 What Gets Tracked

- Page views and navigation
- 3D model interactions
- Export button clicks  
- User engagement metrics
- Performance and web vitals
- Search engine performance (via Search Console) 