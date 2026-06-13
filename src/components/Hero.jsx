import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { company } from '../data/content'

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 15, 24, 0.75), rgba(10, 15, 24, 0.85)), url('/aluminato/frente-aluminato.jpg')`,
      }}
    >
      <div className="section-content text-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#d4af37]/30 rounded-full px-5 py-2 mb-8"
        >
          <span className="text-[#d4af37] text-base">★</span>
          <span className="text-white/80 text-sm md:text-base font-medium">
            Desde {company.foundedYear} — {company.yearsActive} anos de excelência
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="text-white mb-6 max-w-5xl mx-auto"
        >
          Esquadrias de Alumínio com
          <br className="hidden md:block" />
          {' '}
          <span className="text-[#d4af37]">Excelência Premium</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Projetos sob medida para residências e empreendimentos de alto padrão.
          Mais de 500 obras entregues com o compromisso de fazer melhor, fazer bem feito, fazer para sempre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('#contato')}
            className="bg-[#d4af37] hover:bg-[#c19b2e] text-[#1a2332] font-semibold text-base px-8 py-3.5 rounded-full transition-colors w-full sm:w-auto"
          >
            Solicitar Orçamento
          </button>
          <button
            onClick={() => scrollTo('#projetos')}
            className="border-2 border-white/30 hover:border-white/60 text-white font-semibold text-base px-8 py-3.5 rounded-full transition-colors w-full sm:w-auto"
          >
            Ver Projetos
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 bounce-arrow cursor-pointer"
        onClick={() => scrollTo('#numeros')}
      >
        <ArrowDown size={24} className="text-[#d4af37]" />
      </motion.div>
    </section>
  )
}
