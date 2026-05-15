import PageHero from '../../components/common/PageHero'
import { Heart, ShieldCheck, UserCheck, Search, Star, MessageSquare } from 'lucide-react'

const NannyServices = () => {
  return (
    <div className="bg-[#faf6f2] min-h-screen pb-20">
      <PageHero 
        title="Professional Nanny Services" 
        subtitle="Vetted, compassionate care for your most precious ones."
        bg="from-orange-800 to-rose-900"
      />

      <div className="max-w-screen-xl mx-auto px-6 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#b5884b] text-xs font-black uppercase tracking-[0.3em] mb-4 block">
            Trust & Safety First
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#3f4d46] mb-6">
            Connecting Families with <span className="text-orange-600">Exceptional Caregivers</span>
          </h2>
          <p className="text-[#3f4d46]/60 text-lg leading-relaxed">
            We understand that choosing a nanny is one of the most important decisions you'll make. Our rigorous 7-point vetting process ensures peace of mind for every family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: 'Background Checks', desc: 'Comprehensive criminal and reference checks for all candidates.', icon: <ShieldCheck size={32} /> },
            { title: 'Skills Assessment', desc: 'Evaluations of childcare knowledge, first aid, and safety protocols.', icon: <Star size={32} /> },
            { title: 'Personality Matching', desc: 'We match nannies based on family values, routines, and child needs.', icon: <UserCheck size={32} /> }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-12 rounded-[50px] shadow-sm border border-[#f0ebe4] text-center hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="font-bold text-xl text-[#3f4d46] mb-4">{feature.title}</h3>
              <p className="text-sm text-[#3f4d46]/60 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Nanny Categories */}
        <div className="space-y-12">
          {[
            {
              type: 'Home Cleaning & Org',
              desc: 'Professional cleaning and nursery organization to keep your home a sanctuary.',
              price: '25-40',
              img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
            },
            {
              type: 'Full-Time Nanny',
              desc: 'Dedicated daily care providing routine, education, and household support.',
              price: '30-45',
              img: 'https://images.unsplash.com/photo-1544126592-807daa2b567b?auto=format&fit=crop&q=80&w=800'
            },
            {
              type: 'Traveling Nanny',
              desc: 'Professional support for family vacations and international relocation.',
              price: '500+',
              unit: 'day',
              img: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800'
            }
          ].map((nanny, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[60px] p-8 md:p-12 border border-[#f0ebe4] shadow-sm hover:shadow-xl transition-shadow ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 h-80 rounded-[40px] overflow-hidden shadow-lg">
                <img src={nanny.img} alt={nanny.type} className="w-full h-full object-cover" />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="font-display font-black text-3xl text-[#3f4d46] mb-4">{nanny.type}</h3>
                <p className="text-[#3f4d46]/60 text-lg mb-8 leading-relaxed">{nanny.desc}</p>
                <div className="flex items-center gap-6 mb-10">
                  <div className="bg-[#faf6f2] px-6 py-4 rounded-3xl border border-[#f0ebe4]">
                    <span className="text-xs font-bold text-[#b5884b] uppercase tracking-widest block">Est. Rate</span>
                    <span className="text-2xl font-black text-[#3f4d46]">${nanny.price}</span>
                    <span className="text-xs text-[#3f4d46]/40 ml-1">/{nanny.unit || 'hr'}</span>
                  </div>
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(j => (
                      <div key={j} className="w-12 h-12 rounded-full border-4 border-white bg-[#cda67c] flex items-center justify-center text-[10px] font-bold">100%</div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-4 border-white bg-[#3f4d46] flex items-center justify-center text-white text-[10px] font-bold">+12</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-[#3f4d46] hover:bg-black text-white rounded-full font-bold transition-all flex items-center gap-2">
                    <Search size={18} /> Find a Nanny
                  </button>
                  <button className="px-8 py-4 border-2 border-[#3f4d46] text-[#3f4d46] hover:bg-[#3f4d46] hover:text-white rounded-full font-bold transition-all flex items-center gap-2">
                    <MessageSquare size={18} /> Speak to Consultant
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NannyServices
