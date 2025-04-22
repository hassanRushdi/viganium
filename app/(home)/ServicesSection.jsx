import React from 'react';
import Link from 'next/link';
import { services } from "@/data/services";
import Image from 'next/image';
import mobDev from '@/public/assets/icons/mob-dev.svg'
import software from '@/public/assets/icons/software.svg'
import marketing from '@/public/assets/icons/marketing.svg'

const serviceIcons = {
  "software-development": (
    <div className="bg-[#F5F5F5] w-16 h-16 rounded-md flex items-center justify-center mb-4">
      <Image src={software} alt="Software Development" className="w-10 h-10" />
    </div>
  ),
  "web-mobile-app": (
    <div className="bg-red-100 w-16 h-16 rounded-md flex items-center justify-center mb-4">
      <Image src={mobDev} alt="Web & Mobile App" className="w-10 h-10" />
    </div>
  ),
  "ai-automation": (
    <div className="bg-red-100 w-16 h-16 rounded-md flex items-center justify-center mb-4">
      <Image src={mobDev} alt="AI & Automation" className="w-10 h-10" />
    </div>
  ),
  "marketing": (
    <div className="bg-red-100 w-16 h-16 rounded-md flex items-center justify-center mb-4">
      <Image src={marketing} alt="Marketing" className="w-10 h-10" />
    </div>
  ),
};

const ServicesSection = () => {
  return (
    <section className="py-12 relative bg-[#F5F5F5]">
      {/* Decorative circles */}
      <div className="absolute right-1/4 top-0">
        <div className="h-16 w-16 rounded-full border-2 border-teal-100"></div>
      </div>
      <div className="absolute left-1/3 -top-8">
        <div className="h-24 w-24 rounded-full border-2 border-pink-100"></div>
      </div>

      <div className="w-[90%] mx-auto px-4">
        <div className="mb-10 text-center relative">
          <h2 className="text-4xl font-bold text-gray-900">Services</h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link key={service.id} href={`/service-details/${service.id}`}>
              <div className="cursor-pointer bg-white border border-[#F0D5D4] rounded-lg shadow-sm overflow-hidden flex flex-col h-full hover:bg-[#222641] hover:text-white transition-all">
                <div className="p-6 flex-grow">
                  <div className="mb-4">
                    {serviceIcons[service.id] || <div className="h-16" />} {/* fallback */}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-7 mb-7">
                    {service.subtitle || service.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <button className="w-full py-3 bg-brand-900 hover:bg-red-600 text-white rounded font-medium transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Get More Services button */}
        <div className="mt-10 md:text-left text-center">
          <button className="px-6 py-3 btn-gray">
            Get More Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
