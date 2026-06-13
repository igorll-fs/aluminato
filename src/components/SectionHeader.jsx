import { motion } from 'framer-motion'

export default function SectionHeader({ label, title, subtitle, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center max-w-3xl mx-auto"
    >
      {label && (
        <span className={`section-label block mb-3 text-[#d4af37]`}>
          {label}
        </span>
      )}
      <h2 className={light ? 'text-white' : 'text-[#1a2332]'}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl mx-auto ${light ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className="gold-line mx-auto mt-6" />
    </motion.div>
  )
}
