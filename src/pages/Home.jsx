import HeroSection from '../components/home/HeroSection'
import CategoryGrid from '../components/home/CategoryGrid'
import TrustBar from '../components/home/TrustBar'
import Testimonials from '../components/home/Testimonials'

/**
 * Home page — structured with Hero, Category Grid, Trust Bar, and Testimonials.
 */
const Home = () => (
  <div className="flex flex-col">
    <HeroSection />
    <TrustBar />
    <CategoryGrid />
    <Testimonials />
    
    {/* ── Call to Action ── */}
    <section className="py-24 bg-[#3f4d46] px-6 text-center overflow-hidden relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-display font-black text-3xl md:text-5xl text-[#faf6f2] mb-6">
          Join our growing family.
        </h2>
        <p className="text-[#f0ebe4]/60 text-lg mb-10">
          Subscribe to get early access to new collections and exclusive parent guides.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-6 py-4 rounded-[4px] bg-white border-none focus:ring-2 focus:ring-[#cda67c] outline-none"
          />
          <button className="bg-[#cda67c] hover:bg-[#b5884b] text-[#3f4d46] px-8 py-4 rounded-[4px] font-black uppercase tracking-widest text-xs transition-all">
            Join Now
          </button>
        </div>
      </div>
    </section>
  </div>
)

export default Home
