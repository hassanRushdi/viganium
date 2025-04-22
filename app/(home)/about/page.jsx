import React from 'react'
import AboutHeaderSection from './AboutHeaderSection'
import MissionVisionSection from './MissionVisionSection'
import HistorySection from './HistorySection'
import TechSection from './TechSection'
import ValuesSection from './ValuesSection'
import PartnershipsSection from './PartnershipsSection'
import IndustrySection from './IndustrySection'

const AboutPage = () => {
  return (
    <>
    <div className='w-[85%] mx-auto'>
      <AboutHeaderSection />
      </div>
      <div className="bg-[#f8f9fa]">
      <MissionVisionSection />
      </div>
    <div className='w-[85%] mx-auto'>
      <HistorySection />
    </div>
    <TechSection />
    <ValuesSection />
    <PartnershipsSection />
    <IndustrySection />
    </>
  )
}

export default AboutPage