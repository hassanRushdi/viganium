import React from "react";
import ecommerce from "@/public/assets/images/about/ecommerce.png";
import carRental from "@/public/assets/images/about/car-rental.png";
import crm from "@/public/assets/images/about/crm.png";
import cleaning from "@/public/assets/images/about/cleaning.png";
import factories from "@/public/assets/images/about/factories.png";
import realstate from "@/public/assets/images/about/realstate.png";
import Image from "next/image";

const industries = [
  {
    image: carRental,
    title: "Car Rental Services",
    highlight: "Car",
    description:
      "Vigtas offers comprehensive software solutions for car rental companies, enabling them to manage fleets, bookings, accounts, and billing for a smoother experience.",
  },
  {
    image: cleaning,
    title: "Cleaning Companies",
    highlight: "Cleaning",
    description:
      "Our software streamlines task scheduling, CRM, invoicing, and employee management for cleaning companies to improve service efficiency.",
  },
  {
    image: factories,
    title: "Factories Software Management",
    highlight: "Factories",
    description:
      "We help factories manage production, inventory, and workflows with our customized solutions for better control and efficiency.",
  },
  {
    image: realstate,
    title: "Real Estate",
    highlight: "",
    description:
      "We provide CRM and rental systems to help real estate agents and brokers manage listings, leads, and client interactions efficiently.",
  },
  {
    image: ecommerce,
    title: "E-Commerce",
    highlight: "",
    description:
      "We build scalable platforms for online stores, enabling smooth workflows, customer transactions, and business growth.",
  },
  {
    image: crm,
    title: "CRM Solutions",
    highlight: "CRM",
    description:
      "Our customizable CRM systems help businesses manage sales pipelines, support, and client communications effectively.",
  },
];

const IndustrySection = () => {
  return (
    <section className="bg-[#f7f8fa] py-16">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl font-bold">
            <span className="text-brand-900">Our</span> Industry Experience
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
           <h3 className="text-[32px] font-semibold mb-4">
             {item.highlight ? (
               <>
                 <span className="text-brand-900">{item.highlight}</span>
                 {item.title.replace(item.highlight, "")}
               </>
             ) : (
               item.title
             )}
           </h3>
           <p className="text-[16px] 2xl:text-[20px] leading-[32px] text-[#616161] flex-grow">
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
