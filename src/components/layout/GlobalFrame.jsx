import { useLocation, Link } from 'react-router-dom'
import { Sparkles, Phone, Mail } from 'lucide-react'

const GlobalFrame = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {/* Frame edges - Thinner */}
      <div className="absolute top-0 left-0 right-0 h-3 md:h-4 bg-[#f0ebe4]"></div>
      {isHome && (
        <div className="absolute bottom-0 left-0 right-0 h-3 md:h-4 bg-[#f0ebe4]"></div>
      )}
      <div className="absolute top-0 bottom-0 left-0 w-3 md:w-4 bg-[#f0ebe4]"></div>
      <div className="absolute top-0 bottom-0 right-0 w-3 md:w-4 bg-[#f0ebe4]"></div>

      {/* Top middle shape (Logo container background) */}
      <div className="absolute top-[11px] md:top-[15px] left-1/2 -translate-x-1/2 w-[200px] md:w-[280px] pointer-events-auto">
        <Link to="/" className="relative block">
          <svg viewBox="0 0 500 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-sm">
            <path d="M0,0 L500,0 L492,8 C484,20 475,75 450,75 L50,75 C25,75 16,20 8,8 L0,0 Z" fill="#f0ebe4" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-1 pb-3">
            <span className="font-display font-black text-sm md:text-lg tracking-tighter text-[#3f4d46] leading-none text-center">
              Grow & Flow
            </span>
            <span className="text-[6px] md:text-[8px] font-bold tracking-[0.3em] uppercase text-[#b5884b] -mt-0.5 text-center">
              Family HUB
            </span>
          </div>
        </Link>
      </div>

      {/* Left middle shape - AI Icon */}
      <div className="absolute top-1/2 -translate-y-1/2 left-3 md:left-4 h-[180px] md:h-[220px] w-[30px] md:w-[40px] group pointer-events-auto cursor-pointer">
        <svg viewBox="0 0 40 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,0 L0,300 L12,285 C28,270 40,260 40,220 L40,80 C40,40 28,30 12,15 L0,0 Z" fill="#f0ebe4" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center pr-1.5">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-10 h-10 blur-xl bg-[#cda67c]/60 animate-pulse rounded-full" />
            <Sparkles size={24} className="text-[#3f4d46] relative z-10 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Right middle shape - Contact Icons */}
      <div className="absolute top-1/2 -translate-y-1/2 right-3 md:right-4 h-[180px] md:h-[220px] w-[30px] md:w-[40px] group pointer-events-auto">
        <svg viewBox="0 0 40 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path d="M40,0 L40,300 L28,285 C12,270 0,260 0,220 L0,80 C0,40 12,30 28,15 L40,0 Z" fill="#f0ebe4" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-end justify-center gap-8 pr-0.5">
          <a href="tel:+1234567890" aria-label="Call" className="text-[#3f4d46] hover:text-[#b5884b] transition-all">
            <Phone size={24} strokeWidth={2} />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#3f4d46] hover:text-[#b5884b] transition-all">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a href="mailto:hello@growandflow.com" aria-label="Email" className="text-[#3f4d46] hover:text-[#b5884b] transition-all translate-x-[2px]">
            <Mail size={24} strokeWidth={2} />
          </a>
        </div>
      </div>

      {/* Inner Rounded Corners */}
      <div className="absolute top-3 md:top-4 left-3 md:left-4 w-3 h-3 md:w-4 md:h-4">
        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
          <path d="M0 0 L20 0 C 6 0 0 6 0 20 Z" fill="#f0ebe4" />
        </svg>
      </div>
      <div className="absolute top-3 md:top-4 right-3 md:right-4 w-3 h-3 md:w-4 md:h-4">
        <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
          <path d="M20 0 L0 0 C 14 0 20 6 20 20 Z" fill="#f0ebe4" />
        </svg>
      </div>
      {isHome && (
        <>
          <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 w-3 h-3 md:w-4 md:h-4">
            <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
              <path d="M0 20 L0 0 C 0 6 6 20 20 20 Z" fill="#f0ebe4" />
            </svg>
          </div>
          <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-3 h-3 md:w-4 md:h-4">
            <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
              <path d="M20 20 L20 0 C 20 6 14 20 0 20 Z" fill="#f0ebe4" />
            </svg>
          </div>
        </>
      )}
    </div>
  )
}

export default GlobalFrame
