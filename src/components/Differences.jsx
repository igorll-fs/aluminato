import { motion } from 'framer-motion'
import { createElement } from 'react'
import { differences } from '../data/content'
import SectionHeader from './SectionHeader'

export default function Differences() {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-[#f5f7fa]">
      <div className="section-content">
        <SectionHeader
          label="Por que nos escolher"
          title="Nossos Diferenciais"
          subtitle="Não entregamos apenas esquadrias. Entregamos confiança, durabilidade e um relacionamento que começa no projeto e dura por décadas."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {differences.map((diff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[20px] p-8 flex gap-5 items-start shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center flex-shrink-0">
                {createElement(diff.icon, {
                  size: 28,
                  className: 'text-[#d4af37]',
                  strokeWidth: 1.5,
                })}
              </div>
              <div>
                <h3 className="text-[#1a2332] text-lg mb-2">{diff.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{diff.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
