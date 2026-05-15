import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import { ArrowRight, Star } from 'lucide-react'

const serviceCategories = [
  {
    id: 'astrology',
    title: 'Astrology',
    subtitle: 'Cosmic Wisdom',
    link: '/services/astrology',
    image: 'https://images.unsplash.com/photo-1532667449560-72a95c8d3314?auto=format&fit=crop&q=80&w=1200',
    description: 'Birth charts and celestial guidance for your child.'
  },
  {
    id: 'food',
    title: 'Food Support',
    subtitle: 'Nutrition & Delivery',
    link: '/services/food',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200',
    description: 'Organic meal delivery and weaning support.'
  },
  {
    id: 'nanny',
    title: 'Professional Care',
    subtitle: 'Nannies & Cleaning',
    link: '/services/nanny',
    image: 'https://images.unsplash.com/photo-1544126592-807daa2b567b?auto=format&fit=crop&q=80&w=1200',
    description: 'Verified caregivers and home organization.'
  },
  {
    id: 'events',
    title: 'Traditional Events',
    subtitle: 'Heritage & Birthdays',
    link: '/services/traditional-events',
    image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1200',
    description: 'Celebrating cultural milestones and birthdays.'
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    subtitle: 'Recovery & Vitality',
    link: '/health-products',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1200',
    description: 'Postpartum recovery and newborn wellness.'
  }
]

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <div className="bg-[#faf6f2] min-h-screen">
      <PageHero 
        title="Our Services" 
        compact={true}
        bg="from-[#3f4d46] to-[#2c3631]"
      />

      <div className="w-full h-[calc(100vh-140px)] flex overflow-hidden border-y border-[#f0ebe4]">
        {serviceCategories.map((service) => (
          <Link
            key={service.id}
            to={service.link}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`relative h-full transition-all duration-700 ease-in-out overflow-hidden group border-r border-[#f0ebe4] last:border-r-0 ${
              hoveredId === service.id ? 'w-[45%]' : hoveredId === null ? 'w-1/5' : 'w-[13.75%]'
            }`}
          >
            {/* Background Image */}
            <img 
              src={service.image} 
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-[#3f4d46] via-transparent to-transparent ${
              hoveredId === service.id ? 'opacity-90' : 'opacity-40'
            }`} />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white">
              <div className="relative overflow-hidden mb-1">
                <span className={`text-[9px] font-black uppercase tracking-[0.3em] text-[#cda67c] block transition-all duration-500 transform ${
                  hoveredId === service.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 md:opacity-100 md:translate-y-0'
                }`}>
                  {service.subtitle}
                </span>
              </div>
              
              <h2 className={`font-display font-black leading-none transition-all duration-500 whitespace-nowrap ${
                hoveredId === service.id ? 'text-4xl md:text-6xl mb-6' : 'text-lg md:text-xl mb-0'
              }`}>
                {service.title}
              </h2>

              {/* Expanded Info */}
              <div className={`transition-all duration-700 overflow-hidden ${
                hoveredId === service.id ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-[#f0ebe4]/80 text-sm md:text-lg mb-8 max-w-md leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-4">
                  <div className="px-6 py-3 rounded-full bg-[#cda67c] text-[#3f4d46] font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    Explore Now
                    <ArrowRight size={16} />
                  </div>
                  <div className="flex gap-1 text-[#cda67c]">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Vertical Title (Visible when not hovered on mobile/desktop) */}
              <div className={`absolute top-12 left-1/2 -translate-x-1/2 transition-all duration-500 pointer-events-none ${
                hoveredId === service.id ? 'opacity-0' : 'opacity-0 md:opacity-20'
              }`}>
                <span className="text-[100px] font-black uppercase tracking-widest transform -rotate-90 origin-center whitespace-nowrap">
                  {service.title}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Additional Trust Section ── */}
      <div className="max-w-screen-xl mx-auto px-6 py-24 text-center">
        <div className="inline-block p-1 bg-[#3f4d46] rounded-full mb-8">
           <div className="px-6 py-2 rounded-full border border-[#f0ebe4]/20 text-[#f0ebe4] text-[10px] font-black uppercase tracking-widest">
             Our Commitment to You
           </div>
        </div>
        <h3 className="font-display font-extrabold text-3xl md:text-5xl text-[#3f4d46] mb-8 max-w-3xl mx-auto">
          Tailored support systems designed for <span className="text-[#cda67c]">modern families.</span>
        </h3>
        <p className="text-[#3f4d46]/50 text-lg max-w-2xl mx-auto leading-relaxed">
          From cultural heritage to daily nutritional needs, we provide verified experts and premium care to help your family flow through life effortlessly.
        </p>
      </div>
    </div>
  )
}

export default Services
