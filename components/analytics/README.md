# Analytics Integration

This directory contains all analytics integrations for the 3D Designer application.

## Included Analytics Platforms

### 1. Google Analytics (GA4)
- **Tracking ID**: G-YWJWZFQ5N8
- **Purpose**: Website traffic and user behavior analysis
- **Privacy**: Configured with anonymized IP and disabled ad personalization

### 2. Microsoft Clarity
- **Project ID**: t6utovvl34
- **Purpose**: User session recordings and heatmaps
- **Features**: Session replay, heatmaps, user interaction insights

### 3. Google Search Console
- **Verification Code**: v710gPOOkJTEFwB8wtW4hD6Tbn2kcJe2NPgM2zrZoo4
- **Purpose**: SEO monitoring and search performance
- **Integration**: Added via Next.js metadata

### 4. Vercel Analytics
- **Purpose**: Performance monitoring and web vitals
- **Features**: Core Web Vitals, page views, unique visitors

## Configuration

All analytics are configured to:
- Only run in production environment (except Vercel Analytics)
- Respect user privacy with anonymized tracking
- Load asynchronously to not impact page performance
- Use Next.js Script component for optimal loading

## Environment-based Enabling

- **Development**: Only Vercel Analytics enabled
- **Production**: All analytics platforms enabled

## Files Structure

```
components/analytics/
├── index.tsx           # Main analytics component
├── google-analytics.tsx # Google Analytics implementation
├── clarity.tsx         # Microsoft Clarity implementation
├── config.ts           # Configuration and environment settings
└── README.md           # This documentation
```

## Usage

The analytics are automatically included in the root layout and will work without any additional setup. 