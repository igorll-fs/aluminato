import { MessageCircle } from 'lucide-react'
import { company } from '../data/content'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="whatsapp-float fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-15 md:h-15 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle size={26} />
    </a>
  )
}
