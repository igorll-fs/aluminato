import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { stats } from '../data/content'
import SectionHeader from './SectionHeader'

function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2500
          const start = performance.now()
          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * value))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { once: true }
    )

    observer.observe(node)
    return () => observer.unobserve(node)
  }, [value])

  return (
    <span ref={ref} className="font-[Montserrat] font-extrabold text-5xl md:text-6xl text-[#1a2332]">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section id="numeros" className="py-20 md:py-28 bg-white">
      <div className="section-content">
        <SectionHeader
          label="Números"
          title="Números que falam por nós"
          subtitle="Resultados construídos com dedicação, qualidade e confiança ao longo de mais de três décadas."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-sm md:text-base text-gray-500 uppercase tracking-[0.08em] mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
