// Analytics configuration
export const analyticsConfig = {
  // Google Analytics
  googleAnalytics: {
    trackingId: "G-YWJWZFQ5N8",
    enabled: process.env.NODE_ENV === "production",
  },
  
  // Microsoft Clarity
  clarity: {
    projectId: "t6utovvl34",
    enabled: process.env.NODE_ENV === "production",
  },

  // Google Search Console verification
  googleSearchConsole: {
    verificationCode: "v710gPOOkJTEFwB8wtW4hD6Tbn2kcJe2NPgM2zrZoo4",
  },

  // Vercel Analytics
  vercel: {
    enabled: true, // Always enabled as it works well in both dev and prod
  },
}; 