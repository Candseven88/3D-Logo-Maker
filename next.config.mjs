/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用实验性功能
  experimental: {
    // optimizeCss: true, // 暂时禁用，需要额外依赖
  },

  // 输出文件跟踪配置
  outputFileTracingRoot: process.cwd(),

  // 跳过构建时的类型检查（Vercel会单独运行类型检查）
  typescript: {
    ignoreBuildErrors: true,
  },

  // 跳过构建时的ESLint检查
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 图片优化配置
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // 压缩配置
  compress: true,

  // 静态文件优化
  generateEtags: true,

  // 环境变量配置
  env: {
    CUSTOM_KEY: 'production',
  },

  // 重定向配置（如果需要）
  async redirects() {
    return [
      // 可以在这里添加重定向规则
    ];
  },

  // Headers配置
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
