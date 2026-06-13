import { motion } from 'framer-motion'
import { partners } from '../data/content'
import SectionHeader from './SectionHeader'

export default function Partners() {
  // Double the partners array to allow seamless infinite scrolling
  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <section id="parcerias" className="py-16 md:py-20 bg-gradient-to-b from-white to-[#f5f7fa] overflow-hidden">
      <div className="section-content">
        <SectionHeader
          label="Parcerias"
          title="Construtoras que Confiam em Nós"
          subtitle="Temos o orgulho de colaborar com as principais incorporadoras e construtoras do Sul do país."
        />

        {/* Infinite Scrolling Logo Marquee */}
        <div className="relative mt-16 w-full flex items-center overflow-hidden py-4">
          {/* Fades on the edges for premium glassmorphism/gradient blending */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#ffffff] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#f5f7fa] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-12 md:gap-20 items-center justify-start flex-nowrap"
            animate={{
              x: [0, -1920], // Infinite scroll offset
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
            style={{ width: 'max-content' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex flex-col items-center justify-center w-28 md:w-36 flex-shrink-0 group"
              >
                <div className="w-full h-20 bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <span className="mt-3 text-xs md:text-sm font-semibold text-gray-500 transition-colors text-center truncate w-full">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
