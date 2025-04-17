import React from 'react'

const industries = [
    {
      image: '/industries/car-rental.svg',
      title: 'Car Rental Services',
      highlight: 'Car',
      description: 'Vigtas offers comprehensive software solutions for car rental companies, enabling them to manage fleets, bookings, accounts, and billing for a smoother experience.',
    },
    {
      image: '/industries/cleaning.svg',
      title: 'Cleaning Companies',
      highlight: 'Cleaning',
      description: 'Our software streamlines task scheduling, CRM, invoicing, and employee management for cleaning companies to improve service efficiency.',
    },
    {
      image: '/industries/factories.svg',
      title: 'Factories Software Management',
      highlight: 'Factories',
      description: 'We help factories manage production, inventory, and workflows with our customized solutions for better control and efficiency.',
    },
    {
      image: '/industries/real-estate.svg',
      title: 'Real Estate',
      highlight: '',
      description: 'We provide CRM and rental systems to help real estate agents and brokers manage listings, leads, and client interactions efficiently.',
    },
    {
      image: '/industries/ecommerce.svg',
      title: 'E-Commerce',
      highlight: '',
      description: 'We build scalable platforms for online stores, enabling smooth workflows, customer transactions, and business growth.',
    },
    {
      image: '/industries/crm.svg',
      title: 'CRM Solutions',
      highlight: 'CRM',
      description: 'Our customizable CRM systems help businesses manage sales pipelines, support, and client communications effectively.',
    },
  ]

const IndustrySection = () => {
  return (
    <section className="w-full bg-[#f7f8fa] py-16">
    <div className="text-center mb-10 px-4">
      <h2 className="text-3xl font-bold">
        <span className="text-brand-900">Our</span> Industry Experience
      </h2>
      <div className="w-16 h-1 bg-brand-900 mt-3 mx-auto rounded" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
      {industries.map((item, i) => (
        <div key={i} className="bg-white p-5 rounded-xl shadow border border-gray-100">
          <img src={item.image} alt={item.title} className="mb-4 rounded" />
          <h3 className="text-base font-bold mb-2">
            <span className={item.highlight ? 'text-brand-900' : ''}>
              {item.highlight}
            </span>{' '}
            {item.title.replace(item.highlight, '')}
          </h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </section>
  )
}

export default IndustrySection