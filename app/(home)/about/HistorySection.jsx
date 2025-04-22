import React from "react";
import { useTranslations } from "next-intl";

const HistorySection = () => {
  const t = useTranslations("aboutVision");

  return (
    <section className="py-16 px-6 md:px-1">
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-2">{t("historyTitle")}</h2>
        <div className="w-12 h-1 bg-red-600 mb-6 mx-auto" />
        <p className="text-gray-700 text-lg leading-7 text-justify">
          {t("historyDescription")}
        </p>
      </div>
    </section>
  );
};

export default HistorySection;
