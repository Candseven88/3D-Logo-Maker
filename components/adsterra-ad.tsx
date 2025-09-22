"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface AdProps {
  className?: string;
  position?: "inline" | "sidebar" | "floating";
  size?: "small" | "medium" | "large";
  closable?: boolean;
}

export function AdsterraAd({ className, position = "inline", size = "medium", closable = false }: AdProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isClosed) {
    return null;
  }

  const sizeClasses = {
    small: "px-4 py-2 text-xs",
    medium: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base"
  };

  const positionClasses = {
    inline: "flex justify-center my-8",
    sidebar: "fixed right-4 top-1/2 transform -translate-y-1/2 z-40",
    floating: "fixed bottom-4 right-4 z-50"
  };

  return (
    <div className={cn(positionClasses[position], className)}>
      <div className="relative">
        <a
          href="https://www.revenuecpmgate.com/fjcjac55ws?key=fb645c1f59a109d1817789d95fb1c6ef"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={cn(
            "inline-block bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border border-blue-200 hover:border-blue-300 rounded-lg text-blue-700 font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 dark:from-blue-900/20 dark:to-indigo-900/20 dark:border-blue-800 dark:text-blue-300 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30",
            sizeClasses[size]
          )}
        >
          🚀 Premium Tools & Resources
        </a>
        {closable && (
          <button
            onClick={() => setIsClosed(true)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center text-xs transition-colors duration-200"
            aria-label="Close advertisement"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
}

export function AdsterraBanner({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isClosed) {
    return null;
  }

  return (
    <div className={cn("w-full max-w-4xl mx-auto my-8 text-center relative", className)}>
      <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-900/10 dark:via-blue-900/10 dark:to-indigo-900/10" />
        <a
          href="https://www.revenuecpmgate.com/fjcjac55ws?key=fb645c1f59a109d1817789d95fb1c6ef"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="relative block w-full h-24 flex items-center justify-center text-gray-700 dark:text-gray-300 transition-all duration-300 hover:bg-white/50 dark:hover:bg-gray-800/50 group"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">⭐</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Discover Amazing Tools & Resources
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Click to explore premium content and services
              </div>
            </div>
          </div>
        </a>
        <button
          onClick={() => setIsClosed(true)}
          className="absolute top-2 right-2 w-6 h-6 bg-gray-400 hover:bg-gray-500 text-white rounded-full flex items-center justify-center text-xs transition-colors duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Close advertisement"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

export function AdsterraSidebar({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isClosed) {
    return null;
  }

  return (
    <div className={cn("fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block", className)}>
      <div className="relative">
        <a
          href="https://www.revenuecpmgate.com/fjcjac55ws?key=fb645c1f59a109d1817789d95fb1c6ef"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-32 h-48 bg-gradient-to-b from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border border-green-200 rounded-lg p-4 text-green-700 text-xs font-medium transition-all duration-300 hover:shadow-lg dark:from-green-900/20 dark:to-emerald-900/20 dark:border-green-800 dark:text-green-300"
        >
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-8 h-8 bg-green-500 rounded-full mb-2 flex items-center justify-center">
              <span className="text-white text-sm">💎</span>
            </div>
            <div className="font-semibold mb-1">Premium</div>
            <div className="text-xs opacity-75">Tools & Resources</div>
          </div>
        </a>
        <button
          onClick={() => setIsClosed(true)}
          className="absolute -top-2 -right-2 w-5 h-5 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center text-xs transition-colors duration-200"
          aria-label="Close advertisement"
        >
          <X className="w-2 h-2" />
        </button>
      </div>
    </div>
  );
}

export function AdsterraFloating({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isClosed) {
    return null;
  }

  return (
    <div className={cn("fixed bottom-4 left-4 z-50", className)}>
      <div className="relative animate-bounce">
        <a
          href="https://www.revenuecpmgate.com/fjcjac55ws?key=fb645c1f59a109d1817789d95fb1c6ef"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white text-2xl transform hover:scale-110"
        >
          🎁
        </a>
        <button
          onClick={() => setIsClosed(true)}
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xs transition-colors duration-200"
          aria-label="Close advertisement"
        >
          <X className="w-2 h-2" />
        </button>
      </div>
    </div>
  );
}

export function AdsterraContentAd({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isClosed) {
    return null;
  }

  return (
    <div className={cn("w-full max-w-2xl mx-auto my-12 text-center", className)}>
      <div className="relative bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/10 dark:via-red-900/10 dark:to-pink-900/10 rounded-2xl border border-orange-200 dark:border-orange-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="absolute top-2 left-2">
          <span className="text-xs text-gray-500 dark:text-gray-400 bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded-full">
            Sponsored
          </span>
        </div>
        
        <a
          href="https://www.revenuecpmgate.com/fjcjac55ws?key=fb645c1f59a109d1817789d95fb1c6ef"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block group"
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">🎯</span>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                Boost Your Business
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Discover powerful tools and resources to take your projects to the next level. 
                Professional solutions for modern creators.
              </p>
            </div>
            
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium rounded-full text-sm transition-all duration-300 group-hover:shadow-lg">
              Learn More
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </a>
        
        <button
          onClick={() => setIsClosed(true)}
          className="absolute top-2 right-2 w-6 h-6 bg-gray-400 hover:bg-gray-500 text-white rounded-full flex items-center justify-center text-xs transition-colors duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Close advertisement"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

export function AdsterraNativeAd({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || isClosed) {
    return null;
  }

  return (
    <div className={cn("w-full max-w-md mx-auto my-8", className)}>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
        <div className="absolute top-3 right-3 z-10">
          <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            Ad
          </span>
        </div>
        
        <a
          href="https://www.revenuecpmgate.com/fjcjac55ws?key=fb645c1f59a109d1817789d95fb1c6ef"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block"
        >
          {/* Image placeholder */}
          <div className="h-32 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white text-4xl">✨</span>
          </div>
          
          <div className="p-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Premium Design Tools
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
              Access professional design resources and advanced features to create stunning visuals that stand out.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                Free Trial Available
              </span>
              <span className="text-xs text-blue-600 dark:text-blue-400 group-hover:underline">
                Learn More →
              </span>
            </div>
          </div>
        </a>
        
        <button
          onClick={() => setIsClosed(true)}
          className="absolute top-1 right-1 w-5 h-5 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center text-xs transition-colors duration-200 opacity-0 group-hover:opacity-100"
          aria-label="Close advertisement"
        >
          <X className="w-2 h-2" />
        </button>
      </div>
    </div>
  );
}
