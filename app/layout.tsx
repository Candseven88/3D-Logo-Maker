import type React from "react";
import "@/styles/globals.css";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Toaster as SonnerToaster } from "sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { Analytics } from "@/components/analytics";
import { analyticsConfig } from "@/components/analytics/config";
import { IndexNowClient } from "@/components/indexnow-client";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "3D Designer | Free Online 3D Logo Maker & SVG to 3D Converter",
  description: "Create stunning 3D logos instantly with our free online 3D logo maker. Convert SVG files to professional 3D models. No signup required - start designing now!",
  keywords: [
    "3d logo maker",
    "free logo creator",
    "svg to 3d converter",
    "online logo designer",
    "3d model generator",
    "logo design tool",
    "convert svg to 3d",
    "professional logo maker",
    "custom 3d logos",
    "business logo creator",
    "brand identity design",
    "vector to 3d converter"
  ],
  authors: [{ name: "3D Designer Team" }],
  creator: "3D Designer",
  publisher: "3D Designer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://3dlogo.site"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { media: "(prefers-color-scheme: light)", url: "/logo_light.svg" },
      { media: "(prefers-color-scheme: dark)", url: "/logo_dark.svg" },
    ],
  },
  openGraph: {
    title: "3D Designer | Free Online 3D Logo Maker & SVG to 3D Converter",
    description: "Create stunning 3D logos instantly with our free online 3D logo maker. Convert SVG files to professional 3D models. No signup required - start designing now!",
    url: "https://3dlogo.site/",
    siteName: "3D Designer",
    images: [
      {
        url: "/opengraph-image-v1.png",
        width: 1200,
        height: 675,
        alt: "3D Designer - Free Online 3D Logo Maker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Designer | Free Online 3D Logo Maker",
    description: "Create stunning 3D logos instantly. Convert SVG to 3D models for free. No signup required!",
    images: ["/twitter-image-v1.png"],
    creator: "@3ddesigner",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "v710gPOOkJTEFwB8wtW4hD6Tbn2kcJe2NPgM2zrZoo4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://3dlogo.site/" />
      </head>
      <body className={cn(instrumentSans.className, instrumentSerif.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
                  <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
        </div>
          {/* Analytics Components */}
          <Analytics />
          {analyticsConfig.vercel.enabled && <VercelAnalytics />}
          <IndexNowClient enabled={process.env.NODE_ENV === 'production'} />
          <SonnerToaster
            position="top-center"
            richColors
            closeButton
            theme="system"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
