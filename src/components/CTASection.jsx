import { motion } from 'framer-motion'
import { MessageCircle, Clock } from 'lucide-react'
import { company } from '../data/content'

export default function CTASection() {
  return (
    <section id="contato" className="py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #1a2332 0%, #0f1419 100%)' }}>
      <div className="section-content text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-white mb-6"
        >
          Pronto para Transformar<br className="hidden md:block" /> seu Projeto?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
        >
          Entre em contato com nossa equipe. Vamos entender seu projeto e apresentar a melhor solução em esquadrias de alumínio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d4af37] hover:bg-[#c19b2e] text-[#1a2332] font-semibold text-base px-8 py-3.5 rounded-full transition-colors inline-flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            Solicitar Orçamento
          </a>
          <a
            href={`tel:${company.phone.replace(/\D/g, '')}`}
            className="border-2 border-white/30 hover:border-white/60 text-white font-semibold text-base px-8 py-3.5 rounded-full transition-colors w-full sm:w-auto text-center"
          >
            {company.phone}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 text-gray-400"
        >
          <Clock size={16} className="text-[#d4af37]" />
          <span className="text-sm">Resposta em até 2 horas úteis</span>
        </motion.div>
      </div>
    </section>
  )
}
