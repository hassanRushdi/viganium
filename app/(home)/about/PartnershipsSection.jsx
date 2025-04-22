import React from "react";
import aws from "@/public/assets/icons/about/partners/aws.png";
import google from "@/public/assets/icons/about/partners/google.png";
import meta from "@/public/assets/icons/about/partners/meta.png";
import microsoft from "@/public/assets/icons/about/partners/microsoft.png";
import oracle from "@/public/assets/icons/about/partners/oracle.png";
import zoho from "@/public/assets/icons/about/partners/zoho.png";
import Image from "next/image";

const partners = [
  aws,
  meta,
  oracle,
   google,
     microsoft,
       zoho
      ];

const PartnershipsSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl font-bold">
          <span className="text-brand-900">Our</span> Partnerships
        </h2>
        <div className="w-16 h-1 bg-brand-900 mt-3 mx-auto rounded" />
      </div>

      <div className="flex flex-wrap justify-evenly px-4 w-[90%] mx-auto">
        {partners.map((logo, idx) => (
          <Image
            key={idx}
            src={logo}
            alt="partner logo"
            className="h-10 object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default PartnershipsSection;
