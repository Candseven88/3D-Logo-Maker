"use client";

import { useEffect, useState } from "react";

export function SimpleAd() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex justify-center my-8">
      <a
        href="https://www.revenuecpmgate.com/fjcjac55ws?key=fb645c1f59a109d1817789d95fb1c6ef"
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-block px-6 py-3 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium transition-all duration-300 hover:shadow-md"
      >
        Advertisement
      </a>
    </div>
  );
}

export function SimpleBannerAd() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-8 text-center">
      <a
        href="https://www.revenuecpmgate.com/fjcjac55ws?key=fb645c1f59a109d1817789d95fb1c6ef"
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="block w-full h-20 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg text-gray-600 text-xs transition-all duration-300 hover:shadow-md flex items-center justify-center"
      >
        Advertisement
      </a>
    </div>
  );
}
