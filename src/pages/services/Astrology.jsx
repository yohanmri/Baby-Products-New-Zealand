import PageHero from '../../components/common/PageHero'
import { Moon, Star, Sparkles, MapPin, Calendar, Clock } from 'lucide-react'

const Astrology = () => {
  return (
    <div className="bg-[#faf6f2] min-h-screen pb-20">
      <PageHero 
        title="Astrology & Birth Charts" 
        subtitle="Exploring the celestial influence on your child's journey."
        bg="from-indigo-900 to-purple-900"
      />

      <div className="max-w-screen-xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-[#b5884b] text-xs font-black uppercase tracking-[0.3em] mb-4 block">
              Celestial Wisdom
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#3f4d46] mb-6 leading-tight">
              Understanding Your Child's <span className="text-[#cda67c]">Cosmic Blueprint</span>
            </h2>
            <p className="text-[#3f4d46]/70 text-lg leading-relaxed mb-8">
              At Grow & Flow, we combine ancient traditional wisdom with modern insights to help you understand your child's unique personality, strengths, and potential from the moment they take their first breath.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Character Analysis', desc: 'Identify innate talents and temperament.' },
                { title: 'Educational Path', desc: 'Guidance on learning styles and environments.' },
                { title: 'Health & Wellness', desc: 'Astrological insights into physical constitution.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#cda67c]">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3f4d46]">{item.title}</h4>
                    <p className="text-sm text-[#3f4d46]/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1532667449560-72a95c8d3314?auto=format&fit=crop&q=80&w=800" 
                alt="Astrology" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[40px] shadow-xl max-w-xs border border-[#f0ebe4]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                  <Moon size={24} />
                </div>
                <div className="font-display font-bold text-[#3f4d46]">Night Sky Analysis</div>
              </div>
              <p className="text-xs text-[#3f4d46]/60 leading-relaxed">
                Our readings are based on precise planetary alignments at the exact moment of birth.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing/Packages Section */}
        <div className="bg-white rounded-[50px] p-12 md:p-20 shadow-sm border border-[#f0ebe4]">
          <div className="text-center mb-16">
            <h3 className="font-display font-extrabold text-3xl text-[#3f4d46] mb-4">Consultation Packages</h3>
            <p className="text-[#3f4d46]/60">Select the depth of insight you need for your child's journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Basic Chart', price: '149', features: ['Birth Chart Creation', 'Core Personality Traits', '20-min Call'] },
              { name: 'Growth Guide', price: '299', features: ['Basic Chart + Education', 'Yearly Milestone Forecast', '45-min Deep Dive'] },
              { name: 'Premium Life Path', price: '499', features: ['Full Growth Guide', 'Parent-Child Compatibility', 'Name Consultation', 'Priority Support'] }
            ].map((pkg, i) => (
              <div key={i} className={`p-10 rounded-[40px] border transition-all duration-300 hover:shadow-xl ${i === 1 ? 'bg-[#3f4d46] text-[#f0ebe4] border-[#3f4d46] scale-105' : 'bg-[#faf6f2] border-[#f0ebe4]'}`}>
                <h4 className={`font-bold mb-2 ${i === 1 ? 'text-[#cda67c]' : 'text-[#b5884b]'}`}>{pkg.name}</h4>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-3xl font-black">${pkg.price}</span>
                  <span className="text-sm opacity-60">/session</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <Star size={14} className={i === 1 ? 'text-[#cda67c]' : 'text-[#b5884b]'} fill="currentColor" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-full font-bold transition-colors ${i === 1 ? 'bg-[#cda67c] text-[#3f4d46] hover:bg-[#b5884b]' : 'bg-[#3f4d46] text-[#faf6f2] hover:bg-black'}`}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Astrology
