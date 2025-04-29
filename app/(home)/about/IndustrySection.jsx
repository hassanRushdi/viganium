import React from "react";
import ecommerce from "@/public/assets/images/about/ecommerce.png";
import carRental from "@/public/assets/images/about/car-rental.png";
import crm from "@/public/assets/images/about/crm.png";
import cleaning from "@/public/assets/images/about/cleaning.png";
import factories from "@/public/assets/images/about/factories.png";
import realstate from "@/public/assets/images/about/realstate.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const IndustrySection = () => {
  const t = useTranslations('IndustrySection');

  // Helper function to highlight first word
  const highlightFirstWord = (text) => {
    if (!text) return text;
    
    // Split by first space in Arabic text
    const firstSpaceIndex = text.indexOf(' ');
    if (firstSpaceIndex === -1) {
      return <span className="text-brand-900">{text}</span>;
    }
    
    const firstWord = text.substring(0, firstSpaceIndex);
    const remainingText = text.substring(firstSpaceIndex);
    
    return (
      <>
        <span className="text-brand-900">{firstWord}</span>
        {remainingText}
      </>
    );
  };

  const industries = [
    {
      image: carRental,
      title: t("industries.carRental.title"),
      description: t("industries.carRental.description"),
    },
    {
      image: cleaning,
      title: t("industries.cleaning.title"),
      description: t("industries.cleaning.description"),
    },
    {
      image: factories,
      title: t("industries.factories.title"),
      description: t("industries.factories.description"),
    },
    {
      image: realstate,
      title: t("industries.realstate.title"),
      description: t("industries.realstate.description"),
    },
    {
      image: ecommerce,
      title: t("industries.ecommerce.title"),
      description: t("industries.ecommerce.description"),
    },
    {
      image: crm,
      title: t("industries.crm.title"),
      description: t("industries.crm.description"),
    },
  ];

  return (
    <section className="bg-[#f7f8fa] py-16" dir={t("dir")}>
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl font-bold">
            <span className="text-brand-900">{t("heading.prefix")}</span>
            {t("heading.suffix")}
          </h2>
          <div className="w-16 h-1 bg-brand-900 mt-3 mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((item, i) => (
            <div
              key={i}
              className="rounded-lg min-h-[480px] flex flex-col p-3"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={383}
                height={215}
                priority
                className="w-full h-[215px] object-cover border border-brand-800 rounded-xl mb-6"
              />
              <h3 className="text-[32px] font-semibold mb-4" dir="rtl">
                {highlightFirstWord(item.title)}
              </h3>
              <p className="text-[16px] 2xl:text-[20px] leading-[32px] text-[#616161] flex-grow" dir="rtl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;