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
      {/* Simple dark background */}
      <div className="absolute inset-0 bg-gray-900" />

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
          d="M0,450 C200,400 400,500 600,420 C800,480 900,430 1000,450 L1000,1000 L0,1000 Z"
          fill="url(#greenGradient)"
          animate={{
            d: [
              "M0,450 C200,400 400,500 600,420 C800,480 900,430 1000,450 L1000,1000 L0,1000 Z",
              "M0,480 C200,520 400,420 600,500 C800,420 900,480 1000,460 L1000,1000 L0,1000 Z",
              "M0,420 C200,380 400,460 600,380 C800,520 900,400 1000,440 L1000,1000 L0,1000 Z",
              "M0,460 C200,500 400,380 600,480 C800,400 900,460 1000,470 L1000,1000 L0,1000 Z",
              "M0,450 C200,400 400,500 600,420 C800,480 900,430 1000,450 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 15,
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
            <stop offset="25%" stopColor="rgba(99, 102, 241, 0.4)" />
            <stop offset="50%" stopColor="rgba(139, 69, 19, 0.7)" />
            <stop offset="75%" stopColor="rgba(147, 51, 234, 0.6)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,400 C180,360 350,440 550,380 C750,460 850,400 1000,420 L1000,1000 L0,1000 Z"
          fill="url(#blueGradient)"
          animate={{
            d: [
              "M0,400 C180,360 350,440 550,380 C750,460 850,400 1000,420 L1000,1000 L0,1000 Z",
              "M0,440 C180,480 350,360 550,460 C750,380 850,440 1000,400 L1000,1000 L0,1000 Z",
              "M0,380 C180,420 350,320 550,400 C750,500 850,360 1000,440 L1000,1000 L0,1000 Z",
              "M0,420 C180,340 350,480 550,340 C750,420 850,480 1000,380 L1000,1000 L0,1000 Z",
              "M0,400 C180,360 350,440 550,380 C750,460 850,400 1000,420 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
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
          d="M0,350 C220,320 420,380 620,340 C820,400 920,360 1000,370 L1000,1000 L0,1000 Z"
          fill="url(#purpleGradient)"
          animate={{
            d: [
              "M0,350 C220,320 420,380 620,340 C820,400 920,360 1000,370 L1000,1000 L0,1000 Z",
              "M0,380 C220,420 420,320 620,400 C820,340 920,390 1000,350 L1000,1000 L0,1000 Z",
              "M0,320 C220,360 420,280 620,360 C820,440 920,320 1000,390 L1000,1000 L0,1000 Z",
              "M0,370 C220,300 420,430 620,310 C820,370 920,420 1000,340 L1000,1000 L0,1000 Z",
              "M0,350 C220,320 420,380 620,340 C820,400 920,360 1000,370 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
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
          d="M0,300 C150,280 300,320 450,290 C600,340 750,300 1000,310 L1000,1000 L0,1000 Z"
          fill="url(#electricGradient)"
          animate={{
            d: [
              "M0,300 C150,280 300,320 450,290 C600,340 750,300 1000,310 L1000,1000 L0,1000 Z",
              "M0,330 C150,350 300,280 450,340 C600,290 750,330 1000,290 L1000,1000 L0,1000 Z",
              "M0,280 C150,320 300,260 450,310 C600,370 750,280 1000,330 L1000,1000 L0,1000 Z",
              "M0,320 C150,260 300,360 450,270 C600,320 750,350 1000,280 L1000,1000 L0,1000 Z",
              "M0,300 C150,280 300,320 450,290 C600,340 750,300 1000,310 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.svg>

      {/* Enhanced Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(14, 165, 233, 0.3) 25%,
            rgba(168, 85, 247, 0.3) 50%, 
            rgba(34, 197, 94, 0.3) 75%,
            transparent 100%
          )`,
          width: "300%"
        }}
        animate={{
          x: ["-150%", "150%"]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Content area */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}

// Code string for copying
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
      {/* Simple dark background */}
      <div className="absolute inset-0 bg-gray-900" />

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
          d="M0,450 C200,400 400,500 600,420 C800,480 900,430 1000,450 L1000,1000 L0,1000 Z"
          fill="url(#greenGradient)"
          animate={{
            d: [
              "M0,450 C200,400 400,500 600,420 C800,480 900,430 1000,450 L1000,1000 L0,1000 Z",
              "M0,480 C200,520 400,420 600,500 C800,420 900,480 1000,460 L1000,1000 L0,1000 Z",
              "M0,420 C200,380 400,460 600,380 C800,520 900,400 1000,440 L1000,1000 L0,1000 Z",
              "M0,460 C200,500 400,380 600,480 C800,400 900,460 1000,470 L1000,1000 L0,1000 Z",
              "M0,450 C200,400 400,500 600,420 C800,480 900,430 1000,450 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 15,
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
            <stop offset="25%" stopColor="rgba(99, 102, 241, 0.4)" />
            <stop offset="50%" stopColor="rgba(139, 69, 19, 0.7)" />
            <stop offset="75%" stopColor="rgba(147, 51, 234, 0.6)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,400 C180,360 350,440 550,380 C750,460 850,400 1000,420 L1000,1000 L0,1000 Z"
          fill="url(#blueGradient)"
          animate={{
            d: [
              "M0,400 C180,360 350,440 550,380 C750,460 850,400 1000,420 L1000,1000 L0,1000 Z",
              "M0,440 C180,480 350,360 550,460 C750,380 850,440 1000,400 L1000,1000 L0,1000 Z",
              "M0,380 C180,420 350,320 550,400 C750,500 850,360 1000,440 L1000,1000 L0,1000 Z",
              "M0,420 C180,340 350,480 550,340 C750,420 850,480 1000,380 L1000,1000 L0,1000 Z",
              "M0,400 C180,360 350,440 550,380 C750,460 850,400 1000,420 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
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
          d="M0,350 C220,320 420,380 620,340 C820,400 920,360 1000,370 L1000,1000 L0,1000 Z"
          fill="url(#purpleGradient)"
          animate={{
            d: [
              "M0,350 C220,320 420,380 620,340 C820,400 920,360 1000,370 L1000,1000 L0,1000 Z",
              "M0,380 C220,420 420,320 620,400 C820,340 920,390 1000,350 L1000,1000 L0,1000 Z",
              "M0,320 C220,360 420,280 620,360 C820,440 920,320 1000,390 L1000,1000 L0,1000 Z",
              "M0,370 C220,300 420,430 620,310 C820,370 920,420 1000,340 L1000,1000 L0,1000 Z",
              "M0,350 C220,320 420,380 620,340 C820,400 920,360 1000,370 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 7
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
          d="M0,300 C150,280 300,320 450,290 C600,340 750,300 1000,310 L1000,1000 L0,1000 Z"
          fill="url(#electricGradient)"
          animate={{
            d: [
              "M0,300 C150,280 300,320 450,290 C600,340 750,300 1000,310 L1000,1000 L0,1000 Z",
              "M0,330 C150,350 300,280 450,340 C600,290 750,330 1000,290 L1000,1000 L0,1000 Z",
              "M0,280 C150,320 300,260 450,310 C600,370 750,280 1000,330 L1000,1000 L0,1000 Z",
              "M0,320 C150,260 300,360 450,270 C600,320 750,350 1000,280 L1000,1000 L0,1000 Z",
              "M0,300 C150,280 300,320 450,290 C600,340 750,300 1000,310 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.svg>

      {/* Enhanced Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          background: \`linear-gradient(90deg, 
            transparent 0%, 
            rgba(14, 165, 233, 0.3) 25%,
            rgba(168, 85, 247, 0.3) 50%, 
            rgba(34, 197, 94, 0.3) 75%,
            transparent 100%
          )\`,
          width: "300%"
        }}
        animate={{
          x: ["-150%", "150%"]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

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