'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import adaptability from '@/public/assets/icons/about/values/adaptability.svg'
import collaboration from '@/public/assets/icons/about/values/collaboration.svg'
import customer from '@/public/assets/icons/about/values/customer.svg'
import excellence from '@/public/assets/icons/about/values/excellence.svg'
import growth from '@/public/assets/icons/about/values/growth.svg'
import innovation from '@/public/assets/icons/about/values/innovation.svg'
import integrity from '@/public/assets/icons/about/values/integrity.svg'
import Image from 'next/image'

const icons = {
  innovation,
  excellence,
  customer,
  growth,
  integrity,
  collaboration,
  adaptability,
}

const ValuesSection = () => {
  const t = useTranslations('values')

  const values = [
    'innovation',
    'excellence',
    'customer',
    'growth',
    'integrity',
    'collaboration',
    'adaptability',
  ]

  return (
    <section className="w-full bg-[#f7f8fa] py-16">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold">
          <span className="text-red-600">{t('heading.highlight')}</span>{' '}
          {t('heading.rest')}
        </h2>
        <div className="w-16 h-1 bg-red-600 mt-3 mx-auto rounded" />
      </div>

      <div className="px-10">
        {/* Top Row - 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {values.slice(0, 4).map((key, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center h-full min-h-[300px]"
            >
              <Image src={icons[key]} alt={t(`${key}.title`)} className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-bold mb-2">{t(`${key}.title`)}</h3>
              <p className="text-base text-gray-600 leading-9">{t(`${key}.description`)}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 3 Cards Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-auto lg:max-w-[75%]">
          {values.slice(4).map((key, index) => (
            <div
              key={index + 4}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center h-full min-h-[300px]"
            >
              <Image src={icons[key]} alt={t(`${key}.title`)} className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-bold mb-2">{t(`${key}.title`)}</h3>
              <p className="text-base text-gray-600 leading-9">{t(`${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
