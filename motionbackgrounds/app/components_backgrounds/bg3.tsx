"use client";
import { motion } from "framer-motion";

interface AuroraBorealisBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
}

export default function AuroraBorealisBackground({
  children,
  className = "",
  fullScreen = false
}: AuroraBorealisBackgroundProps) {

  return (
    <div className={`relative overflow-hidden ${fullScreen ? 'min-h-screen' : 'w-full h-full'} ${className}`}>
      {/* Dark gradient background instead of black */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-indigo-950" />

      {/* Aurora SVG Layer 1 - Bright Green */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
            <stop offset="30%" stopColor="rgba(34, 197, 94, 0.5)" />
            <stop offset="50%" stopColor="rgba(16, 185, 129, 0.8)" />
            <stop offset="70%" stopColor="rgba(34, 197, 94, 0.5)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,500 C200,370 400,520 600,520 C800,520 700,390 1000,400 L1000,1000 L0,1000 Z"
          fill="url(#greenGradient)"
          animate={{
            d: [
              "M0,500 C200,370 400,520 600,520 C800,520 700,390 1000,400 L1000,1000 L0,1000 Z",
              "M0,450 C200,420 400,520 600,520 C700,520 700,390 1000,400 L1000,1000 L0,1000 Z",
              "M0,530 C300,320 400,520 600,520 C700,520 800,390 1000,400 L1000,1000 L0,1000 Z",
              "M0,500 C200,370 400,520 600,520 C800,520 700,390 1000,400 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.svg>

      {/* Aurora SVG Layer 2 - Deep Blue/Purple */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="30%" stopColor="rgba(99, 102, 241, 0.4)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.7)" />
            <stop offset="70%" stopColor="rgba(99, 102, 241, 0.4)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,450 C200,320 400,470 600,470 C800,470 700,340 1000,350 L1000,1000 L0,1000 Z"
          fill="url(#blueGradient)"
          animate={{
            d: [
              "M0,450 C200,320 400,470 600,470 C800,470 700,340 1000,350 L1000,1000 L0,1000 Z",
              "M0,400 C200,370 400,470 600,470 C700,470 700,340 1000,350 L1000,1000 L0,1000 Z",
              "M0,480 C300,270 400,470 600,470 C700,470 800,340 1000,350 L1000,1000 L0,1000 Z",
              "M0,450 C200,320 400,470 600,470 C800,470 700,340 1000,350 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
      </motion.svg>

      {/* Aurora SVG Layer 3 - Vibrant Purple/Teal */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
            <stop offset="30%" stopColor="rgba(168, 85, 247, 0.4)" />
            <stop offset="50%" stopColor="rgba(14, 165, 233, 0.6)" />
            <stop offset="70%" stopColor="rgba(6, 182, 212, 0.5)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,400 C200,270 400,420 600,420 C800,420 700,290 1000,300 L1000,1000 L0,1000 Z"
          fill="url(#purpleGradient)"
          animate={{
            d: [
              "M0,400 C200,270 400,420 600,420 C800,420 700,290 1000,300 L1000,1000 L0,1000 Z",
              "M0,350 C200,320 400,420 600,420 C700,420 700,290 1000,300 L1000,1000 L0,1000 Z",
              "M0,430 C300,220 400,420 600,420 C700,420 800,290 1000,300 L1000,1000 L0,1000 Z",
              "M0,400 C200,270 400,420 600,420 C800,420 700,290 1000,300 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4
          }}
        />
      </motion.svg>

      {/* Aurora SVG Layer 4 - Electric Blue */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="electricGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0)" />
            <stop offset="35%" stopColor="rgba(14, 165, 233, 0.3)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
            <stop offset="65%" stopColor="rgba(14, 165, 233, 0.3)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,350 C200,220 400,370 600,370 C800,370 700,240 1000,250 L1000,1000 L0,1000 Z"
          fill="url(#electricGradient)"
          animate={{
            d: [
              "M0,350 C200,220 400,370 600,370 C800,370 700,240 1000,250 L1000,1000 L0,1000 Z",
              "M0,300 C200,270 400,370 600,370 C700,370 700,240 1000,250 L1000,1000 L0,1000 Z",
              "M0,380 C300,170 400,370 600,370 C700,370 800,240 1000,250 L1000,1000 L0,1000 Z",
              "M0,350 C200,220 400,370 600,370 C800,370 700,240 1000,250 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        />
      </motion.svg>

      {/* Content area */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

export const auroraBorealisBackgroundCode = `"use client";
import { motion } from "framer-motion";

interface AuroraBorealisBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
}

export default function AuroraBorealisBackground({
  children,
  className = "",
  fullScreen = false
}: AuroraBorealisBackgroundProps) {

  return (
    <div className={\`relative overflow-hidden \${fullScreen ? 'min-h-screen' : 'w-full h-full'} \${className}\`}>
      {/* Dark gradient background instead of black */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-indigo-950" />

      {/* Aurora SVG Layer 1 - Bright Green */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0)" />
            <stop offset="30%" stopColor="rgba(34, 197, 94, 0.5)" />
            <stop offset="50%" stopColor="rgba(16, 185, 129, 0.8)" />
            <stop offset="70%" stopColor="rgba(34, 197, 94, 0.5)" />
            <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,500 C200,370 400,520 600,520 C800,520 700,390 1000,400 L1000,1000 L0,1000 Z"
          fill="url(#greenGradient)"
          animate={{
            d: [
              "M0,500 C200,370 400,520 600,520 C800,520 700,390 1000,400 L1000,1000 L0,1000 Z",
              "M0,450 C200,420 400,520 600,520 C700,520 700,390 1000,400 L1000,1000 L0,1000 Z",
              "M0,530 C300,320 400,520 600,520 C700,520 800,390 1000,400 L1000,1000 L0,1000 Z",
              "M0,500 C200,370 400,520 600,520 C800,520 700,390 1000,400 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.svg>

      {/* Aurora SVG Layer 2 - Deep Blue/Purple */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="30%" stopColor="rgba(99, 102, 241, 0.4)" />
            <stop offset="50%" stopColor="rgba(147, 51, 234, 0.7)" />
            <stop offset="70%" stopColor="rgba(99, 102, 241, 0.4)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,450 C200,320 400,470 600,470 C800,470 700,340 1000,350 L1000,1000 L0,1000 Z"
          fill="url(#blueGradient)"
          animate={{
            d: [
              "M0,450 C200,320 400,470 600,470 C800,470 700,340 1000,350 L1000,1000 L0,1000 Z",
              "M0,400 C200,370 400,470 600,470 C700,470 700,340 1000,350 L1000,1000 L0,1000 Z",
              "M0,480 C300,270 400,470 600,470 C700,470 800,340 1000,350 L1000,1000 L0,1000 Z",
              "M0,450 C200,320 400,470 600,470 C800,470 700,340 1000,350 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
      </motion.svg>

      {/* Aurora SVG Layer 3 - Vibrant Purple/Teal */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
            <stop offset="30%" stopColor="rgba(168, 85, 247, 0.4)" />
            <stop offset="50%" stopColor="rgba(14, 165, 233, 0.6)" />
            <stop offset="70%" stopColor="rgba(6, 182, 212, 0.5)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,400 C200,270 400,420 600,420 C800,420 700,290 1000,300 L1000,1000 L0,1000 Z"
          fill="url(#purpleGradient)"
          animate={{
            d: [
              "M0,400 C200,270 400,420 600,420 C800,420 700,290 1000,300 L1000,1000 L0,1000 Z",
              "M0,350 C200,320 400,420 600,420 C700,420 700,290 1000,300 L1000,1000 L0,1000 Z",
              "M0,430 C300,220 400,420 600,420 C700,420 800,290 1000,300 L1000,1000 L0,1000 Z",
              "M0,400 C200,270 400,420 600,420 C800,420 700,290 1000,300 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4
          }}
        />
      </motion.svg>

      {/* Aurora SVG Layer 4 - Electric Blue */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="electricGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(14, 165, 233, 0)" />
            <stop offset="35%" stopColor="rgba(14, 165, 233, 0.3)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
            <stop offset="65%" stopColor="rgba(14, 165, 233, 0.3)" />
            <stop offset="100%" stopColor="rgba(14, 165, 233, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,350 C200,220 400,370 600,370 C800,370 700,240 1000,250 L1000,1000 L0,1000 Z"
          fill="url(#electricGradient)"
          animate={{
            d: [
              "M0,350 C200,220 400,370 600,370 C800,370 700,240 1000,250 L1000,1000 L0,1000 Z",
              "M0,300 C200,270 400,370 600,370 C700,370 700,240 1000,250 L1000,1000 L0,1000 Z",
              "M0,380 C300,170 400,370 600,370 C700,370 800,240 1000,250 L1000,1000 L0,1000 Z",
              "M0,350 C200,220 400,370 600,370 C800,370 700,240 1000,250 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        />
      </motion.svg>

      {/* Content area */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

/* 
USAGE EXAMPLES:

// Full screen aurora
<AuroraBorealisBackground fullScreen>
  <div className="flex items-center justify-center h-full">
    <h1 className="text-5xl font-bold text-white">Northern Lights</h1>
  </div>
</AuroraBorealisBackground>

// Section with aurora
<section className="h-96">
  <AuroraBorealisBackground className="rounded-xl">
    <div className="flex items-center justify-center h-full p-8">
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Aurora Borealis</h2>
        <p className="text-xl">Magical dancing lights</p>
      </div>
    </div>
  </AuroraBorealisBackground>
</section>

// Card with aurora background
<div className="h-80">
  <AuroraBorealisBackground>
    <div className="p-10 text-center text-white">
      <h3 className="text-2xl font-bold mb-4">Mystical Aurora</h3>
      <p>Nature's light show</p>
    </div>
  </AuroraBorealisBackground>
</div>
*/`;