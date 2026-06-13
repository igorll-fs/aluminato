import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin } from 'lucide-react'
import { projects } from '../data/content'
import SectionHeader from './SectionHeader'

export default function ProjectsGallery() {
  const [selected, setSelected] = useState(null)

  const largeProjects = projects.filter((p) => p.size === 'large')
  const otherProjects = projects.filter((p) => p.size !== 'large')

  return (
    <section id="projetos" className="py-20 md:py-28 bg-white">
      <div className="section-content">
        <SectionHeader
          label="Nosso Portfólio"
          title="Projetos que Transformam Espaços"
          subtitle="Conheça algumas das obras que refletem nossa paixão por excelência e atenção a cada detalhe."
        />

        <div className="mt-16 space-y-4">
          {largeProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-[20px] h-[300px] md:h-[450px]"
              onClick={() => setSelected(project)}
            >
              <img
                src={project.photo}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">{project.name}</h3>
                <div className="flex items-center gap-1.5 text-[#d4af37]">
                  <MapPin size={14} />
                  <span className="text-sm">{project.city}</span>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative group cursor-pointer overflow-hidden rounded-[20px] h-[280px] md:h-[350px]"
                onClick={() => setSelected(project)}
              >
                <img
                  src={project.photo}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-1">{project.name}</h3>
                  <div className="flex items-center gap-1.5 text-[#d4af37]">
                    <MapPin size={13} />
                    <span className="text-xs">{project.city}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[20px] overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[300px] md:h-[400px] flex-shrink-0">
                <img
                  src={selected.photo}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 md:p-8 overflow-y-auto">
                <h3 className="text-2xl md:text-3xl text-[#1a2332] mb-2">{selected.name}</h3>
                <div className="flex items-center gap-1.5 text-[#d4af37] mb-4">
                  <MapPin size={16} />
                  <span className="text-sm">{selected.city}</span>
                </div>
                {selected.client && (
                  <p className="text-gray-500 text-sm mb-4">Cliente: {selected.client}</p>
                )}
                <p className="text-gray-600 leading-relaxed">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
