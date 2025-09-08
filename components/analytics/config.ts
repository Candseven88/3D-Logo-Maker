// Analytics configuration - 直接硬编码配置，避免使用环境变量
export const analyticsConfig = {
  // Google Analytics
  googleAnalytics: {
    trackingId: "G-YWJWZFQ5N8",
    enabled: true, // 直接设置为 true，在生产环境启用
  },

  // Microsoft Clarity
  clarity: {
    projectId: "t6utovvl34", 
    enabled: true, // 直接设置为 true，在生产环境启用
  },

  // Google Search Console verification
  googleSearchConsole: {
    verificationCode: "v710gPOOkJTEFwB8wtW4hD6Tbn2kcJe2NPgM2zrZoo4",
  },

  // Vercel Analytics
  vercel: {
    enabled: true, // 始终启用，在开发和生产环境都工作良好
  },
}; 