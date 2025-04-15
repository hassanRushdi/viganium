'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingComplete(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {!loadingComplete && (
        <motion.div
          className="flex justify-center items-center h-screen w-full flex-col bg-white dark:bg-gray-900"
          exit={{ opacity: 0 }}
        >
          {/* Logo with scale-up animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              scale: 1.5,
              opacity: 0,
              transition: { 
                duration: 0.8,
                ease: "easeInOut"
              }
            }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src={logo} 
              alt="Logo" 
              width={120} 
              height={120} 
              className="mb-8"
              priority
            />
          </motion.div>

          {/* Progress bar with fly-away animation */}
          <div className="w-52 h-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#E8E8E8] dark:bg-gray-700 rounded-full" />
            
            <motion.div
              className="absolute right-0 top-0 h-full w-full bg-red-600 rounded-full"
              initial={{ scaleX: 0, transformOrigin: 'right' }}
              animate={{ 
                scaleX: 1, 
                transformOrigin: 'left',
              }}
              exit={{
                x: '100%',
                opacity: 0,
                transition: { 
                  duration: 0.6,
                  ease: "easeIn"
                }
              }}
              transition={{ 
                duration: 1.5,
                ease: [0.65, 0, 0.35, 1]
              }}
            />
          </div>

          {/* Completion animation (runs when loadingComplete becomes true) */}
          <AnimatePresence>
            {loadingComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* You can add a completion message or icon here if needed */}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;