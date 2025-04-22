import React from 'react'
import adaptability from '@/public/assets/icons/about/values/adaptability.svg'
import collaboration from '@/public/assets/icons/about/values/collaboration.svg'
import customer from '@/public/assets/icons/about/values/customer.svg'
import excellence from '@/public/assets/icons/about/values/excellence.svg'
import growth from '@/public/assets/icons/about/values/growth.svg'
import innovation from '@/public/assets/icons/about/values/innovation.svg'
import integrity from '@/public/assets/icons/about/values/integrity.svg'
import Image from 'next/image'

const values = [
  {
    title: 'Innovation',
    icon: innovation,
    description:
      'We believe in pushing the boundaries of technology. We strive to create forward-thinking solutions that keep our clients ahead in a rapidly changing digital world.',
  },
  {
    title: 'Excellence',
    icon: excellence,
    description:
      'We are committed to delivering the highest quality in every project we undertake. From concept to execution, excellence is at the core of everything we do.',
  },
  {
    title: 'Customer-Centricity',
    icon: customer,
    description:
      'Our clients are our priority. We focus on understanding their needs and providing solutions that drive their success, building lasting partnerships through trust and collaboration.',
  },
  {
    title: 'Commitment To Growth',
    icon: growth,
    description:
      'We are dedicated to the continuous improvement of our team, solutions, and services, empowering both our clients and ourselves to grow and succeed.',
  },
  {
    title: 'Integrity',
    icon: integrity,
    description:
      'We operate with transparency and honesty in all our dealings, ensuring that ethical principles guide our decision-making and business practices.',
  },
  {
    title: 'Collaboration',
    icon: collaboration,
    description:
      'We foster a culture of teamwork, both within our company and with our clients, to achieve the best results. Collaboration enables us to leverage collective expertise and creativity.',
  },
  {
    title: 'Adaptability',
    icon: adaptability,
    description:
      'In an ever-evolving industry, flexibility is key. We embrace change and continuously adapt our strategies to stay relevant and effective in meeting tomorrow’s challenges.',
  },
]

const ValuesSection = () => {
  return (
    <section className="w-full bg-[#f7f8fa] py-16">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold">
          <span className="text-red-600">Our</span> Core Values
        </h2>
        <div className="w-16 h-1 bg-red-600 mt-3 mx-auto rounded" />
      </div>

      <div className="px-10 ">
        {/* Top Row - 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {values.slice(0, 4).map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center h-full min-h-[300px]"
            >
              <Image src={value.icon} alt={value.title} className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-bold mb-2">{value.title}</h3>
              <p className="text-base text-gray-600 leading-9">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 3 Cards Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-auto lg:max-w-[75%]">
          {values.slice(4).map((value, index) => (
            <div
              key={index + 4}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center h-full min-h-[300px]"
            >
              <Image src={value.icon} alt={value.title} className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-bold mb-2">{value.title}</h3>
              <p className="text-base text-gray-600 leading-9">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection
