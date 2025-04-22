'use client'
import innovation from '@/public/assets/icons/home/mission/innovation.svg'
import excellence from '@/public/assets/icons/home/mission/excellence.svg' 
import adaptability from '@/public/assets/icons/home/mission/adaptability.svg' 
import collaboration from '@/public/assets/icons/home/mission/collaboration.svg' 
import { LightbulbIcon, AwardIcon, Users, FileText, Hexagon, Pentagon, Octagon } from "lucide-react";
import Image from 'next/image';

const AboutCard = ({ icon, title, className = "" }) => {
  return (
    <div className={`relative bg-white shadow-md rounded-md overflow-hidden w-[280px] h-[100px] ${className}`}>
      {/* Slanted Top Background */}
      <div className="absolute top-0 left-0 w-full h-[50%] bg-gray-100">
        <div className="absolute bottom-0 left-0 w-[60px] h-[20px] bg-white" />
        <div className="absolute bottom-0 left-[60px] w-[20px] h-[20px] bg-gray-100 transform skew-x-[40deg]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 gap-4">
        {/* Icon */}
        <div className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 rounded shadow-sm">
          {icon}
        </div>
        {/* Title */}
        <span className="text-black font-semibold text-lg">{title}</span>
      </div>
    </div>
  );
};

const AboutUsSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <h1 className="text-4xl font-bold text-center mb-16">About Us</h1>
      
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <span className="text-brand-900">Our</span> Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Leading Software Development Company At The Forefront Of The Digital Revolution. With A Passion For Innovation And A Commitment To Excellence, We Specialize In Web And Mobile Developments, AI, Blockchain, Machine Learning, And Mobile App Management Solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <AboutCard 
              icon={<LightbulbIcon className="w-6 h-6" />}
              title="Innovation"
            />
            <AboutCard 
              icon={<AwardIcon className="w-6 h-6" />}
              title="Excellence"
            />
            <AboutCard 
              icon={<FileText className="w-6 h-6" />}
              title="Adaptability"
            />
            <AboutCard 
              icon={<Users className="w-6 h-6" />}
              title="Collaboration"
            />
          </div>

          <button  className="w-full sm:w-auto px-8 py-2 bg-gray-700 text-white hover:bg-gray-800">
            Get More Information
          </button>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <span className="text-brand-900">Our</span> Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Vision Is To Lead The Charge In Digital Transformation By Developing Pioneering Solutions That Shape The Future. We Envision A World Where Our Expertise In Web And Mobile Developments, AI, Blockchain, Machine Learning, And Mobile App Management Empowers Businesses Across Industries To Embrace Innovation, Optimize Operations, And Create Lasting Value. By Fostering A Culture Of Continuous Learning And Adaptability, We Aim To Be At The Forefront Of Emerging Technologies, Driving Positive Change For Our Clients And Society At Large.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-8">
            <div className="text-center space-y-2">
              <div className="bg-gray-100 p-4 rounded-lg inline-flex items-center justify-center hover:bg-gray-200 transition-colors relative">
                <Hexagon className="w-8 h-8 text-gray-700" />
                <FileText className="w-5 h-5 text-gray-700 absolute" />
              </div>
              <p className="font-medium text-sm text-gray-800">Service</p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-gray-100 p-4 rounded-lg inline-flex items-center justify-center hover:bg-gray-200 transition-colors relative">
                <Pentagon className="w-8 h-8 text-gray-700" />
                <FileText className="w-5 h-5 text-gray-700 absolute" />
              </div>
              <p className="font-medium text-sm text-gray-800">Requirements</p>
            </div>
            <div className="text-center space-y-2">
              <div className="bg-gray-100 p-4 rounded-lg inline-flex items-center justify-center hover:bg-gray-200 transition-colors relative">
                <Octagon className="w-8 h-8 text-gray-700" />
                <LightbulbIcon className="w-5 h-5 text-gray-700 absolute" />
              </div>
              <p className="font-medium text-sm text-gray-800">Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
