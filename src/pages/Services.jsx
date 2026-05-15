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

      {/* ── Process Section ── */}
      <section className="py-24 bg-white border-b border-[#f0ebe4] px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#b5884b] text-xs font-black uppercase tracking-[0.3em] mb-4 block">
              Our Process
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-[#3f4d46]">
              Simple steps to <span className="text-[#cda67c]">peace of mind.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Select Service', desc: 'Browse our specialized categories and pick what fits your family.' },
              { step: '02', title: 'Consultation', desc: 'Book a free initial call to discuss your specific needs.' },
              { step: '03', title: 'Matched Care', desc: 'We connect you with the perfect expert or practitioner.' },
              { step: '04', title: 'Start Journey', desc: 'Receive high-quality care and support in your own home.' }
            ].map((item, i) => (
              <div key={i} className="relative p-8 bg-[#faf6f2] rounded-[4px] border border-[#f0ebe4]">
                <span className="text-5xl font-black text-[#3f4d46]/5 absolute top-4 right-4">{item.step}</span>
                <h3 className="font-bold text-[#3f4d46] mb-4 relative z-10">{item.title}</h3>
                <p className="text-xs text-[#3f4d46]/60 leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-24 px-6 bg-[#faf6f2]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-black text-3xl text-[#3f4d46]">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Are your nannies and caregivers verified?', a: 'Yes, every practitioner undergoes a rigorous 7-point vetting process including background checks and reference verification.' },
              { q: 'How does the food delivery service work?', a: 'We deliver fresh, organic meal kits tailored to your child’s age and developmental stage twice a week.' },
              { q: 'Can I cancel or reschedule a consultation?', a: 'Absolutely. We offer flexible scheduling and free cancellations up to 24 hours before your appointment.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-[4px] border border-[#f0ebe4] shadow-sm">
                <h4 className="font-bold text-[#3f4d46] mb-2">{faq.q}</h4>
                <p className="text-sm text-[#3f4d46]/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 px-6 bg-[#3f4d46] text-center">
         <div className="max-w-2xl mx-auto">
           <h2 className="text-[#faf6f2] font-display font-black text-3xl md:text-5xl mb-8">Ready to grow with us?</h2>
           <button className="bg-[#cda67c] hover:bg-[#b5884b] text-[#3f4d46] px-10 py-5 rounded-[4px] font-black uppercase tracking-widest text-sm transition-all shadow-xl">
             Schedule a Free Consultation
           </button>
         </div>
      </section>
    </div>
  )
}

export default Services
