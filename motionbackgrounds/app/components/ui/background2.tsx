"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingParticlesBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
}

export default function FloatingParticlesBackground({ 
  children, 
  className = "",
  fullScreen = false 
}: FloatingParticlesBackgroundProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate particles only on client side
    const newParticles = [...Array(25)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 10 + 8
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className={`relative overflow-hidden ${fullScreen ? 'min-h-screen' : 'w-full h-full'} ${className}`}>
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/30"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [`${particle.y}%`, `${particle.y - 20}%`, `${particle.y}%`],
              x: [`${particle.x}%`, `${particle.x + 10}%`, `${particle.x - 5}%`, `${particle.x}%`],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Animated overlay gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)"
        }}
        animate={{
          background: [
            "radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 90%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 12,
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

/* 
USAGE EXAMPLES:

// Full screen
<FloatingParticlesBackground fullScreen>
  <h1>Your content here</h1>
</FloatingParticlesBackground>

// Section
<section className="h-96">
  <FloatingParticlesBackground className="rounded-lg">
    <div className="flex items-center justify-center h-full">
      <h2>Section content</h2>
    </div>
  </FloatingParticlesBackground>
</section>

// Card
<div className="h-64">
  <FloatingParticlesBackground>
    <div className="p-8">
      <h3>Card content</h3>
    </div>
  </FloatingParticlesBackground>
</div>
*/