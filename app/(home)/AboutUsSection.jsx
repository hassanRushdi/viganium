"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import innovation from "@/public/assets/icons/home/mission/innovation.svg";
import excellence from "@/public/assets/icons/home/mission/excellence.svg";
import adaptability from "@/public/assets/icons/home/mission/adaptability.svg";
import collaboration from "@/public/assets/icons/home/mission/collaboration.svg";
import serviceIcon from "@/public/assets/icons/home/vision/service.svg";
import requirementsIcon from "@/public/assets/icons/home/vision/requirements.svg";
import solutionsIcon from "@/public/assets/icons/home/vision/solutions.svg";
import normalShape from "@/public/assets/shapes/normalShape.svg";
import hoverShape from "@/public/assets/shapes/hoverShape.svg";
import polygon from "@/public/assets/shapes/polygon.svg";
import Link from "next/link";

const AboutCard = ({ icon, title, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full h-[100px] shadow-md bg-white overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-full h-[65px] z-10">
        <Image
          src={isHovered ? hoverShape : normalShape}
          alt="shape"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-30 flex items-center h-full px-4">
        {/* Icon - always visually left */}
        <div className="absolute left-4 top-[15px] flex items-center justify-center z-30">
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            className={`transition-all ${
              isHovered ? "brightness-0 invert" : ""
            }`}
          />
        </div>

        {/* Text - always visually right */}
        <div className="flex-1 flex items-end h-full pb-4 pr-2 justify-end ltr:justify-end rtl:justify-start">
          <span className="text-black font-semibold text-lg">{title}</span>
        </div>
      </div>
    </div>
  );
};

const VisionIconCard = ({ icon, title }) => (
  <div className="text-center space-y-2">
    <div className="relative w-[80px] h-[80px] mx-auto">
      <Image
        src={polygon}
        alt="polygon shape"
        fill
        className="object-contain"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src={icon} alt={title} width={32} height={32} />
      </div>
    </div>
    <p className="font-medium text-sm text-gray-800">{title}</p>
  </div>
);

const AboutUsSection = () => {
  const t = useTranslations("about");

  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl ">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
        {t("heading")}
      </h1>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 ">
        {/* Mission */}
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              <span className="text-brand-900">
                {t("mission.title").split(" ")[0]}
              </span>{" "}
              {t("mission.title").split(" ").slice(1).join(" ")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("mission.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  md:gap-6 lg:gap-8">
            <AboutCard
              icon={innovation}
              title={t("mission.values.innovation")}
            />
            <AboutCard
              icon={excellence}
              title={t("mission.values.excellence")}
            />
            <AboutCard
              icon={adaptability}
              title={t("mission.values.adaptability")}
            />
            <AboutCard
              icon={collaboration}
              title={t("mission.values.collaboration")}
            />
          </div>

          <button className="w-full sm:w-auto px-8 font-semibold py-2 rounded-lg bg-[#4B4B4B] text-white hover:bg-black transition-colors duration-300">
            <Link href='/about'>
            {t("mission.cta")}
            </Link>
          </button>
        </div>

        {/* Vision */}
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              <span className="text-brand-900">
                {t("vision.title").split(" ")[0]}
              </span>{" "}
              {t("vision.title").split(" ").slice(1).join(" ")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("vision.description")}
            </p>
          </div>

          <div className="flex justify-evenly sm:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-8">
            <VisionIconCard
              icon={serviceIcon}
              title={t("vision.points.service")}
            />
            <VisionIconCard
              icon={requirementsIcon}
              title={t("vision.points.requirements")}
            />
            <VisionIconCard
              icon={solutionsIcon}
              title={t("vision.points.solutions")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
