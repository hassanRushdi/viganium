"use client";
import Image from "next/image";
import { useState } from "react";
import bg from "@/public/assets/images/home/section1/bg.jpg";
import slider1 from "@/public/assets/images/home/section1/slider1.jpg";
import slider2 from "@/public/assets/images/home/section1/slider2.jpg";
import slider3 from "@/public/assets/images/home/section1/slider3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Software Development",
    description:
      "We Specialize In Custom Software Development, Delivering Tailored Solutions That Address The Unique Needs Of Businesses Across Various Industries.",
    image: slider1,
  },
  {
    title: "Web Applications",
    description:
      "We create scalable and robust web applications that drive efficiency and business growth.",
    image: slider2,
  },
  {
    title: "Mobile Solutions",
    description:
      "Empower your business with cross-platform mobile apps built for performance and usability.",
    image: slider3,
  },
];

export default function SliderSection() {
  const [current, setCurrent] = useState(0);
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
      {/* Main Slider Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Mobile Layout (stacked) */}
        <div className="md:hidden">
          {/* Image */}
          <div className="relative w-full h-64 overflow-hidden">
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          {/* Content */}
          <div className="bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-3">{slides[current].title}</h2>
            <div className="h-1 w-16 bg-red-600 mb-5" />
            <p className="text-gray-700 mb-6 ">{slides[current].description}</p>
            <button className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              Read More
            </button>
          </div>
        </div>

        {/* Desktop Layout with overlapping containers and shifted left container */}
        <div className="hidden md:block relative">
          <div className="flex justify-center ">
            {/* Image Container - Left Side (positioned more to the left) */}
            <div className="relative w-[560px] h-[360px] right-[200px] ">
              <Image
                src={slides[current].image}
                alt={slides[current].title}
                fill
                className="object-cover"
                sizes="60vw"
                priority
              />
            </div>

            {/* Content Container - Right Side (overlapping the image) */}
            <div className="absolute right-[160px] top-[95px] w-[560px] h-[329px] bg-white p-10 shadow-lg flex flex-col">
              <div className="flex-grow">
                {" "}
                {/* This will take up all available space, pushing the button down */}
                <h2 className="text-[28px] font-[500] mb-4">
                  {slides[current].title}
                </h2>
                <div className="h-1 w-16 bg-red-600 mb-6" />
                <p className="text-[#1E1E1E] text-[16px] font-[400] leading-[32px]">
                  {slides[current].description}
                </p>
              </div>
              <button className="bg-black py-2 text-white px-6 rounded w-fit hover:bg-gray-800 transition mt-auto">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="hidden md:flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 justify-between px-8 z-10">
        <button
          onClick={prev}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button
          onClick={next}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition pointer-events-auto"
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
