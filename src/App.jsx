import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Services from './components/Services'
import PortfolioReels from './components/PortfolioReels'
import About from './components/About'
import Differences from './components/Differences'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Partners />
      <Services />
      <PortfolioReels />
      <About />
      <Differences />
      <CTASection />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  )
}
