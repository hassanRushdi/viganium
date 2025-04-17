import React from 'react';
import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <div className="bg-[#F5F5F5] w-16 h-16 rounded-md flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 5h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4z" />
            <circle cx="19" cy="4" r="2" />
          </svg>
        </div>
      ),
      title: "Software Development",
      description: "We Specialize In Custom Software Development, Delivering Tailored Solutions That Address The Unique Needs Of Businesses Across Various Industries.",
    },
    {
      icon: (
        <div className="bg-red-100 w-16 h-16 rounded-md flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
          </svg>
        </div>
      ),
      title: "Web & Mobile App Development",
      description: "Viganium Creates Powerful Mobile Applications That Offer Seamless User Experiences.",
    },
    {
      icon: (
        <div className="bg-red-100 w-16 h-16 rounded-md flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 11.5v-1c0-.8-.7-1.5-1.5-1.5H16v-2h1.5c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5h-5c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5H14v2H9.5C8.7 9 8 9.7 8 10.5v1c0 .8.7 1.5 1.5 1.5H12v2h-1.5c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5h5c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5H14v-2h4.5c.8 0 1.5-.7 1.5-1.5z" />
          </svg>
        </div>
      ),
      title: "AI Automation",
      description: "Thing You Need Start Yiur Bussiness With Every Thing You Need Start Yiur Bussiness With Every",
    },
    {
      icon: (
        <div className="bg-red-100 w-16 h-16 rounded-md flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 13h-5v5h5v-5zM6 13h5v5H6v-5zm0-7h5v5H6V6zm12 0h-5v5h5V6z" />
          </svg>
        </div>
      ),
      title: "Marketing",
      description: "Strategically Allocating Media Budgets For Optimal Results. And Managing Your Brand's Message Is Effectively Communicated Across All Platforms To Achieve.",
    },
  ];

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
        {/* Section header */}
        <div className="mb-10 text-center relative">
          <h2 className="text-4xl font-bold text-gray-900">Services</h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-[#F0D5D4] rounded-lg shadow-sm overflow-hidden  flex flex-col h-full hover:bg-[#222641] hover:text-white transition-all">
              <div className="p-6 flex-grow ">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-7 mb-7">{service.description}</p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/contact">
                  <button className="w-full py-3 bg-brand-900 hover:bg-red-600 text-white rounded font-medium transition-colors duration-200">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Get More Services button */}
        <div className="mt-10 md:text-left text-center">
          <button className="px-6 py-3 btn-gray ">
            Get More Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;