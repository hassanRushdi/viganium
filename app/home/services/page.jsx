import React from 'react'
import softwareDev from '@/public/assets/images/services/software-dev.svg';
import mobileDev from '@/public/assets/images/services/mobile-dev.svg';
import websiteDev from '@/public/assets/images/services/website-development.svg'; 
import aiAgent from '@/public/assets/images/services/ai-agent.svg';
import marketing from '@/public/assets/images/services/marketing.svg';
import testing from '@/public/assets/images/services/testing.svg';
import automation from '@/public/assets/images/services/automation.svg';
import handover from '@/public/assets/images/services/software-handover.svg'; 
import aiVideo from '@/public/assets/images/services/ai-video.svg';
import blockchain from '@/public/assets/images/services/blockchain.svg';
import cybersecurity from '@/public/assets/images/services/cyber-security.svg';
import itServices from '@/public/assets/images/services/it-services.svg';
import cgi from '@/public/assets/images/services/cgi.svg';
import uiUx from '@/public/assets/images/services/ui.svg';
import graphics from '@/public/assets/images/services/graphic.svg';
import projectManagement from '@/public/assets/images/services/project-management.svg';
import saas from '@/public/assets/images/services/saas.svg';
import techConsultation from '@/public/assets/images/services/soft-cons.svg';
import Image from 'next/image';

const services = [
  {
    title: 'Software Development',
    icon: softwareDev,
    description: 'We specialize in custom software development, delivering tailored solutions that address the unique needs of businesses across various industries.'
  },
  {
    title: 'Mobile App Development',
    icon: mobileDev,
    description: 'Vignilum creates powerful mobile applications that offer seamless user experiences.'
  },
  {
    title: 'Website Development',
    icon: websiteDev,
    description: 'Our websites are built to engage users, enhance brand presence, and drive business growth.'
  },
  {
    title: 'AI Agent',
    icon: aiAgent,
    description: 'With the Vignilum AI Agent, businesses can enhance customer service, automate repetitive tasks, and deliver consistent, round-the-clock engagement.'
  },
  {
    title: 'Marketing',
    icon: marketing,
    description: 'Strategically allocating media budgets for optimal results and managing your brand\'s message across all platforms.'
  },
  {
    title: 'Software Testing',
    icon: testing,
    description: 'Our testing process includes functional, performance, and security testing to deliver flawless, reliable products.'
  },
  {
    title: 'AI Automation',
    icon: automation,
    description: 'Vignilum AI Automation service adapts to your unique needs.'
  },
  {
    title: 'Software Handover',
    icon: handover,
    description: 'We manage the entire handover process, ensuring all documentation, data, and systems are transferred securely.'
  },
  {
    title: 'AI Video Production',
    icon: aiVideo,
    description: 'With AI Video Generation, Vignilum transforms your ideas and data into captivating videos, complete with realistic visuals, voiceovers, and branding.'
  },
  {
    title: 'Blockchain Storage',
    icon: blockchain,
    description: 'With Vignrium Blockchain Storage, businesses can benefit from enhanced data security, immutability, and reduced reliance on centralized storage solutions.'
  },
  {
    title: 'Cybersecurity Consultation',
    icon: cybersecurity,
    description: 'Vignrium Cybersecurity Consultation Service is dedicated to helping businesses protect their digital assets and secure their operational environments.'
  },
  {
    title: 'IT Services',
    icon: itServices,
    description: 'Vignrium ensures your IT environment is robust, secure, and aligned with your business objectives.'
  },
  {
    title: 'CGI (Computer-Generated Imagery)',
    icon: cgi,
    description: 'With Vignrium CGI Service, your ideas come to life in vivid detail.'
  },
  {
    title: 'UI/UX Design',
    icon: uiUx,
    description: 'Vignrium excels in crafting intuitive, user-centered interfaces and experiences.'
  },
  {
    title: 'Graphic Design (CI and Outdoor)',
    icon: graphics,
    description: 'We provide creative design solutions for Corporate Identity (CI) and outdoor branding.'
  },
  {
    title: 'Project Management',
    icon: projectManagement,
    description: 'Vignilum\'s Project Management Service is designed to empower businesses to achieve their goals efficiently and effectively.'
  },
  {
    title: 'SaaS Platforms',
    icon: saas,
    description: 'These platforms are designed for ease of use, high availability, and customization to meet specific business requirements.'
  },
  {
    title: 'Software and Technology Consultations',
    icon: techConsultation,
    description: 'Vignrium offers expert consultations to help businesses navigate the complex technology landscape.'
  }
];

const ServicesSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#e3e9ec] to-[#f4f7f9] py-16">
      <div className="w-[85%] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-brand-900">Our</span> Services
          </h2>
          <div className="w-16 h-[3px] bg-brand-900 mt-3 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl px-6 pt-6 pb-8 border-[10px] border-[#0000000D] shadow-[0_4px_16px_rgba(0,0,0,0.06)] h-[539px]"
            >
              <Image
                src={service.icon}
                alt={service.title}
                className="w-30 h-30 object-contain mx-auto mb-6"
              />
              <h3 className="text-[18px] font-semibold text-center mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-[14px] text-gray-600 text-center leading-relaxed mb-5">
                {service.description}
              </p>
              {/* <div className="mt-auto text-center">
                <button className="bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-gray-800 transition">
                  Read More
                </button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
