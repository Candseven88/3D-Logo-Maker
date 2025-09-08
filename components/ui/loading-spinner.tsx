import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 border-2 border-primary/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Inner spinning dot */}
      <motion.div
        className="absolute top-0 left-1/2 w-1 h-1 bg-primary rounded-full transform -translate-x-1/2"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ transformOrigin: "50% 50%" }}
      />
      
      {/* Pulsing center */}
      <motion.div
        className="absolute inset-0 m-auto w-1 h-1 bg-primary/60 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
} 