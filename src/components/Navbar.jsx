import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { company, navLinks } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((s) => observer.observe(s))
    return () => sections.forEach((s) => observer.unobserve(s))
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="section-content flex items-center justify-between">
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); scrollTo('#inicio') }}
            className="flex flex-col leading-tight"
          >
            <span className={`font-[Montserrat] font-bold text-lg md:text-xl tracking-tight ${scrolled ? 'text-[#1a2332]' : 'text-white'}`}>
              ALUMINATO
            </span>
            <span className="text-[10px] md:text-[11px] text-[#d4af37] tracking-[0.2em] font-medium uppercase">
              ESQUADRIAS
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative text-sm font-medium transition-colors pb-1 ${
                    isActive ? (scrolled ? 'text-[#1a2332]' : 'text-white') : (scrolled ? 'text-gray-600 hover:text-[#1a2332]' : 'text-white/70 hover:text-white')
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37] rounded-full"
                    />
                  )}
                </button>
              )
            })}
            <button
              onClick={() => scrollTo('#contato')}
              className="bg-[#d4af37] hover:bg-[#c19b2e] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Solicitar Orçamento
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center ${scrolled ? 'text-[#1a2332]' : 'text-white'}`}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-md flex flex-col items-center justify-center gap-6"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center text-[#1a2332]"
              aria-label="Fechar"
            >
              <X size={28} />
            </button>
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className="text-2xl font-medium text-[#1a2332] hover:text-[#d4af37] transition-colors py-2"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => scrollTo('#contato')}
              className="mt-4 bg-[#d4af37] hover:bg-[#c19b2e] text-white text-base font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Solicitar Orçamento
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
