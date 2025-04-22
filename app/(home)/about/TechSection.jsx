"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  const speed = 60; // seconds to complete one cycle
  
  const techKeys = Object.keys(techIcons);
  // Create a set of duplicated items for seamless looping
  const loopedKeys = [...techKeys, ...techKeys, ...techKeys];
  
  // Calculate container width for animation
  useEffect(() => {
    if (carousel.current) {
      // Only measure the first set of items for transition calculation
      const cardWidth = carousel.current.children[0].offsetWidth;
      const cardMargin = parseInt(window.getComputedStyle(carousel.current.children[0]).marginRight);
      setWidth((cardWidth + cardMargin) * techKeys.length);
    }
  }, [techKeys.length]);
  
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
          dragConstraints={{ left: -width * 2, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          animate={{
            x: isDragging || isHovered ? null : -width,
            transition: {
              x: {
                duration: speed,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }
            }
          }}
        >
          {loopedKeys.map((key, index) => (
            <div
              key={`${key}-${index}`}
              className="w-[20rem] flex-shrink-0 h-72 bg-[#343434] text-white p-6 rounded-xl flex flex-col items-center justify-between shadow-lg hover:scale-[1.02] transition-transform mx-1"
            >
              <Image
                src={techIcons[key]}
                alt={t(`items.${key}.title`)}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold">{t(`items.${key}.title`)}</h3>
              <p className="text-sm text-center text-gray-300">
                {t(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}