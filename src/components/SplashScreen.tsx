'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Check if the user has already visited in this session
    const hasVisited = sessionStorage.getItem('msquare_has_visited');
    
    if (!hasVisited) {
      setShowSplash(true);
      // Let the animation play, then remove the splash screen
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('msquare_has_visited', 'true');
      }, 3000); // 3 seconds total splash time
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Prevent scroll while splash is active
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSplash]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Image
              src="/Images/new-txt-logo.jpg"
              alt="MSquare Software"
              width={280}
              height={100}
              className="object-contain drop-shadow-sm mb-8"
              priority
            />
            {/* Elegant loading line */}
            <div className="w-[200px] h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut"
                }}
                className="w-full h-full bg-[#FF9933] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
