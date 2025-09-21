import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export function Logo({ size = 24, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "currentColor", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "currentColor", stopOpacity: 0.8}} />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "currentColor", stopOpacity: 0.9}} />
          <stop offset="100%" style={{stopColor: "currentColor", stopOpacity: 0.7}} />
        </linearGradient>
      </defs>
      
      {/* Main 3D cube structure */}
      <path d="M8 12L16 8L24 12V20L16 24L8 20V12Z" fill="url(#gradient1)" />
      <path d="M8 12L16 8L16 16L8 20V12Z" fill="url(#gradient2)" opacity="0.8" />
      <path d="M16 8L24 12L16 16L8 12L16 8Z" fill="url(#gradient1)" />
      
      {/* Accent lines for 3D effect */}
      <path d="M16 8V16M8 12L16 16L24 12" stroke="currentColor" strokeWidth="1" opacity="0.4" fill="none" />
      
      {/* Small design elements */}
      <circle cx="6" cy="10" r="1.5" fill="currentColor" opacity="0.6" />
      <circle cx="26" cy="22" r="1" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
