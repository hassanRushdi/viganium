"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import bg from "@/public/assets/images/home/section1/bg.jpg";
import slider1 from "@/public/assets/images/home/section1/slider1.jpg";
import slider2 from "@/public/assets/images/home/section1/slider2.jpg";
import slider3 from "@/public/assets/images/home/section1/slider3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [slider1, slider2, slider3];

export default function SliderSection() {
  const [current, setCurrent] = useState(0);
  const t = useTranslations("slider");
  const slides = t.raw("slides");

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-10 md:py-16 px-4 md:px-8"
      style={{
        backgroundImage: `url('${bg.src}')`,
        backgroundSize: "cover",
      }}
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src={images[current]}
              alt={slides[current].title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-3">{slides[current].title}</h2>
            <div className="h-1 w-16 bg-red-600 mb-5" />
            <p className="text-gray-700 mb-6">{slides[current].description}</p>
            <button className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              {t("readMore")}
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          <div className="relative flex justify-center h-[450px]">
            <div className="relative max-w-5xl w-full">
              <div className="absolute left-0 w-[55%] h-[360px] z-10">
                <Image
                  src={images[current]}
                  alt={slides[current].title}
                  fill
                  className="object-cover"
                  sizes="55vw"
                  priority
                />
              </div>

              <div className="absolute right-0 top-[95px] w-[55%] h-[329px] bg-white p-8 lg:p-10 shadow-lg flex flex-col justify-between z-20">
                <div>
                  <h2 className="text-2xl lg:text-[28px] font-medium mb-4">
                    {slides[current].title}
                  </h2>
                  <div className="h-1 w-16 bg-red-600 mb-6" />
                  <p className="text-[#1E1E1E] text-base lg:text-[16px] font-normal leading-relaxed lg:leading-[32px] overflow-y-auto max-h-[140px]">
                    {slides[current].description}
                  </p>
                </div>
                <div>
                  <button className="bg-black py-2 text-white px-6 rounded w-fit hover:bg-gray-800 transition">
                    {t("readMore")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="hidden md:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 justify-between px-8 z-30">
        <button
          onClick={prev}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={next}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-8 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-12 rounded-sm transition-all ${
              current === index ? "bg-black" : "bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
