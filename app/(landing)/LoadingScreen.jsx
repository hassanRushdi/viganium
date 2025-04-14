// app/landing/loading.jsx
'use client';

import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full flex-col bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
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
      
      <div className="w-52 h-2 relative">
        <div className="absolute inset-0 bg-[#E8E8E8] dark:bg-gray-700 rounded-full" />
        
        <motion.div
          className="absolute right-0 top-0 h-full w-full bg-red-600 rounded-full"
          initial={{ scaleX: 0, transformOrigin: 'right' }}
          animate={{ scaleX: 1, transformOrigin: 'left' }}
          transition={{ 
            duration: 1.5,
            ease: [0.65, 0, 0.35, 1]
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;