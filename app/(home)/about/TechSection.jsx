"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Import your icons
import flutter from "@/public/assets/icons/about/tech/flutter.svg";
import swift from "@/public/assets/icons/about/tech/swift.svg";
import java from "@/public/assets/icons/about/tech/java.svg";
import react from "@/public/assets/icons/about/tech/react.svg";
import kotlin from "@/public/assets/icons/about/tech/kotlin.svg";
import php from "@/public/assets/icons/about/tech/php.svg";
import python from "@/public/assets/icons/about/tech/python.svg";

const techIcons = {
  React: react,
  Python: python,
  Kotlin: kotlin,
  Swift: swift,
  Flutter: flutter,
  Java: java,
  PHP: php,
};

export default function TechSection() {
  const t = useTranslations("techSection");
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const carousel = useRef(null);
  const speed = 30; // seconds to complete one cycle
  
  const techKeys = Object.keys(techIcons);
  // Create a set of duplicated items for seamless looping
  const loopedKeys = [...techKeys, ...techKeys];
  
  // Calculate container width for animation
  useEffect(() => {
    if (carousel.current) {
      const firstChild = carousel.current.children[0] ;
      if (!firstChild) return;
      
      const cardWidth = firstChild.offsetWidth;
      const cardMargin = parseInt(window.getComputedStyle(firstChild).marginRight);
      const totalWidth = (cardWidth + cardMargin) * techKeys.length;
      
      // Start the animation
      controls.start({
        x: [0, -totalWidth],
        transition: {
          x: {
            duration: speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }
        }
      });
    }
  }, [controls, techKeys.length]);

  // Handle RTL/LTR direction changes
  useEffect(() => {
    const dir = document.documentElement.dir || 'ltr';
    if (dir === 'rtl') {
      controls.set({ x: 0 });
      controls.start({
        x: [0, techKeys.length * 320], 
        transition: {
          x: {
            duration: speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }
        }
      });
    }
  }, [controls, techKeys.length]);

  // Pause animation on hover or drag
  useEffect(() => {
    if (isHovered || isDragging) {
      controls.stop();
    } else {
      controls.start({
        x: [null, document.documentElement.dir === 'rtl' ? techKeys.length * 320 : -techKeys.length * 320],
        transition: {
          x: {
            duration: speed,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }
        }
      });
    }
  }, [isHovered, isDragging, controls, techKeys.length]);

  return (
    <section className="w-full bg-[#006B8F1A] py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-10 px-4">
        <h2 className="text-4xl font-bold">
          <span className="text-red-600">{t("title").split(" ")[0]}</span>{" "}
          {t("title").split(" ").slice(1).join(" ")}
        </h2>
        <div className="w-16 h-1 bg-red-600 mt-3 mx-auto rounded" />
      </div>

      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={carousel}
          className="flex gap-3 w-max cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{
            left: document.documentElement.dir === 'rtl' ? 0 : -techKeys.length * 640,
            right: document.documentElement.dir === 'rtl' ? techKeys.length * 640 : 0
          }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          animate={controls}
        >
          {loopedKeys.map((key, index) => (
            <motion.div
              key={`${key}-${index}`}
              className="w-[20rem] flex-shrink-0 h-[20rem] bg-[#343434] text-white p-6 rounded-xl flex flex-col items-center shadow-lg hover:scale-[1.02] transition-transform mx-1"
              whileHover={{ scale: isDragging ? 1 : 1.02 }}
            >
              <Image
                src={techIcons[key]}
                alt={t(`items.${key}.title`)}
                width={48}
                height={48}
                className="mb-4 mt-5"
              />
              <h3 className="text-lg font-semibold mb-4">{t(`items.${key}.title`)}</h3>
              <p className="text-sm text-center text-gray-300">
                {t(`items.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}