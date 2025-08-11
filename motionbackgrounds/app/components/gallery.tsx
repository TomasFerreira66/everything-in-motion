"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoEye, IoCopy, IoCheckmark } from "react-icons/io5";
import GradientBackground, { gradientBackgroundCode } from "../components_backgrounds/bg1";
import FloatingParticlesBackground, { floatingParticlesBackgroundCode } from "../components_backgrounds/bg2";

interface BackgroundItem {
  id: string;
  name: string;
  description: string;
  component: React.ComponentType<any>;
  code: string;
}

export default function Gallery() {
  const [currentBackground, setCurrentBackground] = useState<string | null>(null);
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>({});

  const backgrounds: BackgroundItem[] = [
    {
      id: "gradient-moving",
      name: "Moving Gradient",
      description: "Simple animated gradient background that cycles through beautiful colors",
      component: GradientBackground,
      code: gradientBackgroundCode,
    },
    {
      id: "floating-particles",
      name: "Floating Particles",
      description: "Dark ambient background with floating particles and mouse-following gradient overlay",
      component: FloatingParticlesBackground,
      code: floatingParticlesBackgroundCode,
    },
  ];

  const handlePreview = (backgroundId: string) => {
    setCurrentBackground(backgroundId);
  };

  const handleCopy = async (backgroundId: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedStates(prev => ({ ...prev, [backgroundId]: true }));
      
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [backgroundId]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const BackgroundCard = ({ background }: { background: BackgroundItem }) => {
    const isCopied = copiedStates[background.id];
    const Component = background.component;

    return (
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border-2 border-gray-600 shadow-xl">
        {/* Preview Container */}
        <div className="h-48 overflow-hidden border-b-2 border-gray-600">
          <div className="w-full h-full">
            <Component />
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 bg-gray-800/90 border-t border-gray-600">
          <h3 className="text-xl font-bold text-white mb-2">{background.name}</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{background.description}</p>
          
          {/* Action Buttons */}
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => handlePreview(background.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg border border-blue-400"
            >
              <IoEye className="w-4 h-4" />
              <span>Preview</span>
            </button>
            
            <button
              onClick={() => handleCopy(background.id, background.code)}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg w-24 justify-center ${
                isCopied 
                  ? 'bg-green-500 text-white border border-green-400' 
                  : 'bg-purple-500 text-white border border-purple-400'
              }`}
            >
              {isCopied ? (
                <>
                  <IoCheckmark className="w-4 h-4" />
                  <span>✓</span>
                </>
              ) : (
                <>
                  <IoCopy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          

        </div>
      </div>
    );
  };

  const SelectedComponent = currentBackground ? 
    backgrounds.find(bg => bg.id === currentBackground)?.component : null;

  return (
    <>
      {/* Full page background preview */}
      {SelectedComponent && (
        <div className="fixed inset-0 w-full h-full z-0">
          <SelectedComponent fullScreen />
        </div>
      )}

      {/* Gallery Content */}
      <div className={`min-h-screen w-full z-10 ${currentBackground ? '' : 'bg-gray-900'}`}>
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Motion <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Backgrounds</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Clean, simple animated backgrounds. Copy the code and wrap your content.
              </p>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {backgrounds.map((background, index) => (
                <motion.div
                  key={background.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BackgroundCard background={background} />
                </motion.div>
              ))}
            </div>

            {/* Reset Background Button */}
            {currentBackground && (
              <motion.div
                className="fixed bottom-8 right-8 z-30"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  onClick={() => setCurrentBackground(null)}
                  className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg border-2 border-red-400"
                  whileTap={{ scale: 0.95 }}
                >
                  ✕ Close Preview
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}