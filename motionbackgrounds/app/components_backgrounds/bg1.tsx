"use client";
import { motion } from "framer-motion";

interface GradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
}

export default function GradientBackground({ 
  children, 
  className = "",
  fullScreen = false 
}: GradientBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${fullScreen ? 'min-h-screen' : 'w-full h-full'} ${className}`}>
      {/* Simple moving gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
        }}
        animate={{
          background: [
            "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
            "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            "linear-gradient(225deg, #4facfe 0%, #00f2fe 100%)",
            "linear-gradient(315deg, #43e97b 0%, #38f9d7 100%)",
            "linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content area */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

// Updated code for copying
export const gradientBackgroundCode = `"use client";
import { motion } from "framer-motion";

interface GradientBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
}

export default function GradientBackground({ 
  children, 
  className = "",
  fullScreen = false 
}: GradientBackgroundProps) {
  return (
    <div className={\`relative overflow-hidden \${fullScreen ? 'min-h-screen' : 'w-full h-full'} \${className}\`}>
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
        }}
        animate={{
          background: [
            "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
            "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            "linear-gradient(225deg, #4facfe 0%, #00f2fe 100%)",
            "linear-gradient(315deg, #43e97b 0%, #38f9d7 100%)",
            "linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

/* 
USAGE EXAMPLES:

// Full screen (like before)
<GradientBackground fullScreen>
  <h1>Full page content</h1>
</GradientBackground>

// Card section
<div className="h-64 w-full">
  <GradientBackground>
    <div className="p-8">
      <h2>Card content</h2>
    </div>
  </GradientBackground>
</div>

// Hero section
<section className="h-96">
  <GradientBackground className="rounded-lg">
    <div className="flex items-center justify-center h-full">
      <h1>Hero content</h1>
    </div>
  </GradientBackground>
</section>
*/`;