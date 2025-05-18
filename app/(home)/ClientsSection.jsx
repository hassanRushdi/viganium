// app/components/ClientsSection.tsx
'use client'

import Marquee from 'react-fast-marquee'
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const clientLogos = [
    '/assets/images/client/1.png',
    '/assets/images/client/2.png',
    '/assets/images/client/3.png',
    '/assets/images/client/1.png',

]

export default function ClientsSection() {
    const t = useTranslations();
    const logo = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

    return (
        <section className="py-16 bg-red " dir='ltr'>
            <div className="mb-[60px] text-center  ">
                <h2 className="text-4xl font-bold text-gray-900">{t('clients.title')}</h2>
            </div>

            <Marquee
                speed={50}
                gradient={true}
                loop={0}  // 0 = infinite
                play={true}
                direction="right" // اجعلها "right" إذا كنت تريدها من اليمين لليسار (RTL)
            >
                {logo.map((logo, index) => (
                              <div key={index} className="mx-[50px] h-[80px] w-[150px] flex items-center justify-center  ">
                          <Image
                              width={500}
                              height={150}
                              src={logo}
                              alt={`Client ${index + 1}`}
                              className=' !w-full !h-full object-contain'
                          />
                      </div>

                ))}
            </Marquee>


        </section>
    )
} 
 