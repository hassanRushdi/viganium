'use client'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

export default function ClientsSection() {
  const t = useTranslations('clients')
  const [clients, setClients] = useState([])

  useEffect(() => {
    // Ensure it's only called in client side
    setClients(t.raw('list'))
  }, [t])

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl flex gap-2 justify-center font-bold">
          <span className="text-brand-900">{t('heading.prefix')}</span>
          {t('heading.suffix')}
        </h2>
        <div className="w-16 h-1 bg-brand-900 mt-3 mx-auto rounded" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md p-4 text-center shadow-sm hover:shadow-md transition"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-16 mx-auto mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold mb-2">{client.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{client.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
