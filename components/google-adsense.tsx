"use client";

import { useEffect, useRef } from "react";

interface GoogleAdSenseProps {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export function GoogleAdSense({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  className = "",
  style = { display: "block" }
}: GoogleAdSenseProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client="ca-pub-9816094922761343"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive.toString()}
    />
  );
}

// Predefined ad components for common use cases
export function AdSenseBanner({ className }: { className?: string }) {
  return (
    <div className={`w-full max-w-4xl mx-auto my-8 text-center ${className || ""}`}>
      <GoogleAdSense
        adSlot="1234567890" // Replace with your actual ad slot ID
        adFormat="auto"
        className="w-full"
        style={{ display: "block", minHeight: "90px" }}
      />
    </div>
  );
}

export function AdSenseSidebar({ className }: { className?: string }) {
  return (
    <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block ${className || ""}`}>
      <GoogleAdSense
        adSlot="1234567891" // Replace with your actual ad slot ID
        adFormat="vertical"
        className="w-32"
        style={{ display: "block", width: "160px", height: "600px" }}
      />
    </div>
  );
}

export function AdSenseSquare({ className }: { className?: string }) {
  return (
    <div className={`w-full max-w-md mx-auto my-8 ${className || ""}`}>
      <GoogleAdSense
        adSlot="1234567892" // Replace with your actual ad slot ID
        adFormat="rectangle"
        className="w-full"
        style={{ display: "block", width: "300px", height: "250px" }}
      />
    </div>
  );
}

export function AdSenseInFeed({ className }: { className?: string }) {
  return (
    <div className={`w-full max-w-2xl mx-auto my-12 ${className || ""}`}>
      <div className="text-xs text-gray-500 mb-2 text-center">Advertisement</div>
      <GoogleAdSense
        adSlot="1234567893" // Replace with your actual ad slot ID
        adFormat="auto"
        className="w-full"
        style={{ display: "block", minHeight: "200px" }}
      />
    </div>
  );
}
