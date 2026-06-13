import { motion } from 'framer-motion'
import { company, milestones } from '../data/content'
import SectionHeader from './SectionHeader'

const BASE = import.meta.env.BASE_URL || '/'

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#0f1419]">
      <div className="section-content">
        <SectionHeader
          label="Nossa História"
          title={`${company.yearsActive} Anos de Legado`}
          subtitle={`Da fundação em ${company.foundedYear} ao reconhecimento como referência no setor, uma trajetória de dedicação e excelência.`}
          light
        />

        {/* Video + first paragraph side by side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-10 flex flex-col lg:flex-row gap-8 items-start"
        >
          <div className="flex-1 min-w-0">
            <p className="text-gray-300 text-lg leading-relaxed">
              Fundada em dezembro de {company.foundedYear} por <strong className="text-white">{company.founders.split(' e ')[0]}</strong>, com a ajuda de seu filho <strong className="text-white">{company.founders.split(' e ')[1]}</strong>,
              a Aluminato (nascida como Barrasul Esquadrias de Alumínio) iniciou suas atividades em Tijucas, Santa Catarina.
            </p>
          </div>
          <div className="w-full lg:w-[240px] flex-shrink-0">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden max-w-[240px] mx-auto lg:mx-0">
              <video
                src={`${BASE}portfolio/videos/frente-empresa.mp4`}
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
                preload="metadata"
                poster={`${BASE}portfolio/photos/frente-aluminato.jpg`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-xs font-medium text-center">Nossa Sede — Tijucas, SC</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              Ao longo de mais de três décadas de evolução constante, consolidamos um moderno parque fabril de {company.factoryArea} (sendo {company.builtArea} de área construída) e formamos uma equipe de cerca de {company.employees} colaboradores altamente qualificados.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Do único Hard Rock Cafe construído sobre o mar no mundo às residências e empreendimentos
              de alto padrão, cada projeto carrega nossa assinatura de qualidade premium e compromisso
              com a durabilidade.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: company.yearsActive, label: 'Anos de história' },
                { value: `${company.projectsCount}+`, label: 'Projetos' },
                { value: company.employees, label: 'Colaboradores' },
                { value: company.statesCount, label: 'Estados' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="font-[Montserrat] font-extrabold text-3xl md:text-4xl text-[#d4af37]">
                    {item.value}
                  </div>
                  <div className="text-gray-500 text-sm uppercase tracking-[0.05em] mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative pl-10 md:pl-12">
              <div className="timeline-line" />
              {milestones.map((m, i) => (
                <div key={i} className="relative pb-8 last:pb-0">
                  <div className="timeline-dot absolute left-[-22px] md:left-[-26px] top-1.5" />
                  <span className="font-[Montserrat] font-bold text-[#d4af37] text-lg">
                    {m.year}
                  </span>
                  <h4 className="text-white text-lg font-semibold mt-1 mb-1.5">{m.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
