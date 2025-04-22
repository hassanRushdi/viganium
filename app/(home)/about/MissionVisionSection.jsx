import React from "react";
import { useTranslations } from "next-intl";

const MissionVisionSection = () => {
  const t = useTranslations("aboutVision");

  return (
    <div>
      <section className="w-[85%] mx-auto py-16 px-6 md:px-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div>
            <h2 className="text-3xl font-semibold mb-2">{t("missionTitle")}</h2>
            <div className="w-12 h-1 bg-red-600 mb-4" />
            <p className="text-gray-700 leading-relaxed text-justify">
              {t("missionDescription")}
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-3xl font-semibold mb-2">{t("visionTitle")}</h2>
            <div className="w-12 h-1 bg-red-600 mb-4" />
            <p className="text-gray-700 leading-relaxed text-justify">
              {t("visionDescription")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVisionSection;
