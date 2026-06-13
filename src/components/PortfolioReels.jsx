import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolioItems } from '../data/portfolio'
import SectionHeader from './SectionHeader'

function VideoCard({ item, onClick }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [poster, setPoster] = useState(null)

  const handlePlay = useCallback((e) => {
    e.stopPropagation()
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }, [isPlaying])

  return (
    <div
      className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <video
        ref={videoRef}
        src={item.video}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        poster={item.photo || undefined}
      />
      {/* Play button overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
            <Play size={28} className="text-white ml-1" fill="white" />
          </div>
        </div>
      )}
      {/* Project name */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
        <p className="text-white font-semibold text-sm tracking-wide">{item.name}</p>
      </div>
    </div>
  )
}

function PhotoCard({ item, onClick }) {
  return (
    <div
      className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={item.photo}
        alt={item.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-semibold text-sm tracking-wide">{item.name}</p>
      </div>
    </div>
  )
}

function LightboxModal({ item, onClose, onNext, onPrev, hasNext, hasPrev }) {
  const isVideo = !!item.video

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <X size={20} className="text-white" />
      </button>

      {/* Navigation */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>
      )}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 z-50 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={20} className="text-white" />
        </button>
      )}

      {/* Content */}
      <motion.div
        key={item.id}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo ? (
          <video
            src={item.video}
            className="max-h-[85vh] rounded-xl object-contain"
            controls
            autoPlay
            playsInline
            loop
          />
        ) : (
          <img
            src={item.photo}
            alt={item.name}
            className="max-h-[85vh] rounded-xl object-contain"
          />
        )}
        <div className="text-center mt-3">
          <p className="text-white font-semibold text-lg">{item.name}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function PortfolioReels() {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const scrollRef = useRef(null)

  const openLightbox = (index) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goNext = () => {
    if (selectedIndex < portfolioItems.length - 1) setSelectedIndex(selectedIndex + 1)
  }
  const goPrev = () => {
    if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1)
  }

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = 300
      scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
    }
  }

  return (
    <section id="projetos" className="py-20 md:py-28 bg-[#0d1520]">
      <div className="section-content">
        <SectionHeader
          label="Portfólio"
          title="Nossos Projetos"
          subtitle="Mais de 500 projetos entregues em 7 estados brasileiros. Conheça algumas de nossas obras mais recentes."
          light
        />

        {/* Horizontal scroll — reels style */}
        <div className="relative mt-16 group">
          {/* Scroll arrows */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#d4af37]/80 items-center justify-center hover:bg-[#d4af37] transition-colors -ml-5 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={20} className="text-[#1a2332]" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#d4af37]/80 items-center justify-center hover:bg-[#d4af37] transition-colors -mr-5 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={20} className="text-[#1a2332]" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.6) }}
                className="flex-shrink-0 w-[200px] md:w-[240px] snap-start"
              >
                {item.video ? (
                  <VideoCard item={item} onClick={() => openLightbox(i)} />
                ) : (
                  <PhotoCard item={item} onClick={() => openLightbox(i)} />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project count */}
        <div className="text-center mt-8">
          <p className="text-white/40 text-sm">
            {portfolioItems.length} obras em destaque • Arraste para explorar
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <LightboxModal
            item={portfolioItems[selectedIndex]}
            onClose={closeLightbox}
            onNext={goNext}
            onPrev={goPrev}
            hasNext={selectedIndex < portfolioItems.length - 1}
            hasPrev={selectedIndex > 0}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
