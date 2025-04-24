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
import { useTranslations } from 'next-intl';

const serviceIcons = [
  softwareDev,
  mobileDev,
  websiteDev,
  aiAgent,
  marketing,
  testing,
  automation,
  handover,
  aiVideo,
  blockchain,
  cybersecurity,
  itServices,
  cgi,
  uiUx,
  graphics,
  projectManagement,
  saas,
  techConsultation
];

const ServicesSection = () => {
  const t = useTranslations('servicesSection');
  const services = t.raw('services');

  return (
    <section className="w-full bg-gradient-to-r from-[#e3e9ec] to-[#f4f7f9] py-16">
      <div className="w-[85%] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-brand-900">{t('heading').split(' ')[0]}</span>{' '}
            {t('heading').split(' ').slice(1).join(' ')}
          </h2>
          <div className="w-16 h-[3px] bg-brand-900 mt-3 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl px-6 pt-6 pb-8 border-[10px] border-[#0000000D] shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex flex-col"
            >
              <Image
                src={serviceIcons[index]}
                alt={service.title}
                className="w-30 h-[183px] object-contain mx-auto mb-6"
              />
              <h3 className="text-[20px] font-[700] mb-3">
                {service.title}
              </h3>
              <p className="text-[16px] text-gray-600 mb-5 leading-[32px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
