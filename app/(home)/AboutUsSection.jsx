'use client'
import innovation from '@/public/assets/icons/home/mission/innovation.svg'
import excellence from '@/public/assets/icons/home/mission/excellence.svg'
import adaptability from '@/public/assets/icons/home/mission/adaptability.svg'
import collaboration from '@/public/assets/icons/home/mission/collaboration.svg'
import serviceIcon from '@/public/assets/icons/home/vision/service.svg'
import requirementsIcon from '@/public/assets/icons/home/vision/requirements.svg'
import solutionsIcon from '@/public/assets/icons/home/vision/solutions.svg'
import normalShape from '@/public/assets/shapes/normalShape.svg'
import hoverShape from '@/public/assets/shapes/hoverShape.svg'
import polygon from '@/public/assets/shapes/polygon.svg'
import Image from 'next/image'
import React, { useState } from 'react'

const AboutCard = ({ icon, title, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`relative w-full h-[100px] shadow-md bg-white overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* SVG Background Shape */}
      <div className="absolute top-0 left-0 w-full h-[65px] z-10">
        {isHovered ? (
          <Image 
            src={hoverShape}
            alt="hover shape"
            className="w-full h-full object-cover"
            fill
          />
        ) : (
          <Image 
            src={normalShape}
            alt="normal shape"
            className="w-full h-full object-cover"
            fill
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-30 flex items-center justify-between h-full px-4">
        {/* Icon with hover color change */}
        <div className="absolute top-[15px] flex items-center justify-center z-30">
          <Image 
            src={icon} 
            alt={title}
            width={24}
            height={24}
            className={`transition-all ${isHovered ? 'brightness-0 invert' : ''}`}
          />
        </div>

        {/* Title on the right */}
        <div className="flex-1 flex items-end justify-end h-full pb-4 pr-2">
          <span className="text-black font-semibold text-lg">{title}</span>
        </div>
      </div>
    </div>
  )
}

const VisionIconCard = ({ icon, title }) => {
  return (
    <div className="text-center space-y-2">
      <div className="relative w-[80px] h-[80px] mx-auto">
        {/* Polygon background */}
        <Image 
          src={polygon}
          alt="polygon shape"
          className="w-full h-full object-contain"
          fill
        />
        {/* Icon centered in polygon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image 
            src={icon} 
            alt={title}
            width={32}
            height={32}
            className="z-10"
          />
        </div>
      </div>
      <p className="font-medium text-sm text-gray-800">{title}</p>
    </div>
  )
}

const AboutUsSection = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">About Us</h1>
      
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              <span className="text-brand-900">Our</span> Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Leading Software Development Company At The Forefront Of The Digital Revolution. With A Passion For Innovation And A Commitment To Excellence, We Specialize In Web And Mobile Developments, AI, Blockchain, Machine Learning, And Mobile App Management Solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <AboutCard 
              icon={innovation}
              title="Innovation"
            />
            <AboutCard 
              icon={excellence}
              title="Excellence"
            />
            <AboutCard 
              icon={adaptability}
              title="Adaptability"
            />
            <AboutCard 
              icon={collaboration}
              title="Collaboration"
            />
          </div>

          <button className="w-full sm:w-auto px-8 font-semibold py-2 rounded-lg bg-[#4B4B4B] text-white hover:bg-black transition-colors duration-300">
            Get More Information
          </button>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">
              <span className="text-brand-900">Our</span> Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our Vision Is To Lead The Charge In Digital Transformation By Developing Pioneering Solutions That Shape The Future. We Envision A World Where Our Expertise In Web And Mobile Developments, AI, Blockchain, Machine Learning, And Mobile App Management Empowers Businesses Across Industries To Embrace Innovation, Optimize Operations, And Create Lasting Value.
            </p>
          </div>

          <div className="flex justify-evenly sm:grid-cols-3 gap-4 md:gap-8 mt-4 md:mt-8">
  <VisionIconCard 
    icon={serviceIcon}
    title="Service"
  />
  <VisionIconCard 
    icon={requirementsIcon}
    title="Requirements"
  />
  <VisionIconCard 
    icon={solutionsIcon}
    title="Solutions"
  />
</div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsSection