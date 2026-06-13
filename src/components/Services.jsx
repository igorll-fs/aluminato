import { motion } from 'framer-motion'
import { services } from '../data/content'
import SectionHeader from './SectionHeader'
import { createElement, useState } from 'react'
import ServiceModal from './ServiceModal'

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#f5f7fa]">
      <div className="section-content">
        <SectionHeader
          label="O que fazemos"
          title="Nossos Serviços"
          subtitle="Oferecemos soluções completas em esquadrias de alumínio, fachadas e projetos especiais para os mais exigentes padrões arquitetônicos."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => service.fullDescription && setSelectedService(service)}
              className={`group bg-white rounded-[20px] p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 border-b-[3px] border-transparent hover:border-[#d4af37] ${
                service.fullDescription ? 'cursor-pointer' : ''
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-[#d4af37]/10 flex items-center justify-center mb-5">
                {service.fallback && createElement(service.fallback, {
                  size: 28,
                  className: 'text-[#d4af37]',
                  strokeWidth: 1.5,
                })}
              </div>
              <h3 className="text-[#1a2332] mb-3">{service.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
              {service.fullDescription && (
                <span className="inline-block mt-4 text-[#d4af37] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Saiba mais →
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  )
}
