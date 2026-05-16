import { Link } from 'react-router-dom'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import KiwiAnimation from './KiwiAnimation'

const HeroSection = () => (
  <section className="relative w-full h-screen min-h-[700px] bg-[#faf6f2] p-0 overflow-hidden">

    {/* ── Content Container (Video + Text) ── */}
    <div className="relative w-full h-full bg-[#3f4d46] z-10">

      {/* ── Video Background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        src="/videos/hero-video.mp4"
      >
        Your browser does not support HTML5 video.
      </video>

      {/* ── Overlay gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3f4d46]/70 via-transparent to-[#3f4d46]/90" />

      {/* ── Text Content ── */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0ebe4]/10 backdrop-blur-md text-[#f0ebe4] text-xs font-semibold tracking-widest uppercase mb-6 border border-[#cda67c]/30">
          ✨ Premium Baby Care
        </span>

        <h1 className="font-display font-extrabold text-[#faf6f2] leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl drop-shadow-lg">
          Growing Together,<br />
          <span className="text-[#cda67c]">Flowing for Life.</span>
        </h1>

        <p className="mt-6 text-[#d6d0c5] text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
          Everything your little one needs — from baby essentials and room décor to health products and family services.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#cda67c] hover:bg-[#b5884b] text-[#3f4d46] font-bold text-base transition-all duration-300 shadow-lg hover:scale-105"
          >
            <ShoppingBag size={18} />
            Shop Now
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-transparent hover:bg-[#f0ebe4]/10 border border-[#f0ebe4]/30 text-[#faf6f2] font-semibold text-base transition-all duration-300 hover:scale-105"
          >
            Explore Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* ── Kiwi Animation ── */}
      <KiwiAnimation />
    </div>
  </section>
)

export default HeroSection
