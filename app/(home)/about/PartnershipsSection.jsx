import React from "react";
import aws from "@/public/assets/icons/about/partners/aws.png";
import google from "@/public/assets/icons/about/partners/google.png";
import meta from "@/public/assets/icons/about/partners/meta.png";
import microsoft from "@/public/assets/icons/about/partners/microsoft.png";
import oracle from "@/public/assets/icons/about/partners/oracle.png";
import zoho from "@/public/assets/icons/about/partners/zoho.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const partners = [
  { logo: aws, name: "aws" },
  { logo: meta, name: "meta" },
  { logo: oracle, name: "oracle" },
  { logo: google, name: "google" },
  { logo: microsoft, name: "microsoft" },
  { logo: zoho, name: "zoho" }
];

const PartnershipsSection = () => {
  const t = useTranslations('Partnerships');

  return (
    <section className="w-full bg-white py-16">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl font-bold">
          <span className="text-brand-900">{t("heading.prefix")}</span>{t("heading.suffix")}
        </h2>
        <div className="w-16 h-1 bg-brand-900 mt-3 mx-auto rounded" />
      </div>

      <div className="flex flex-wrap justify-evenly px-4 w-[90%] mx-auto gap-8">
        {partners.map((partner, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <Image
              src={partner.logo}
              alt={t(`partners.${partner.name}.alt`)}
              className="h-10 object-contain"
              width={120}
              height={40}
            />
            <span className="mt-2 text-sm text-gray-600">
              {t(`partners.${partner.name}.name`)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnershipsSection;