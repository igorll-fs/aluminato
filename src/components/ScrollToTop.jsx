import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-24 right-4 md:bottom-28 md:right-6 z-50 w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#d4af37] text-white flex items-center justify-center shadow-lg hover:bg-[#c19b2e] transition-colors"
    >
      <ArrowUp size={20} />
    </button>
  )
}
