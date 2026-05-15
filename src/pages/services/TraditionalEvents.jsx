import PageHero from '../../components/common/PageHero'
import { Calendar, Gift, Camera, Music, MapPin, Check } from 'lucide-react'

const TraditionalEvents = () => {
  return (
    <div className="bg-[#faf6f2] min-h-screen pb-20">
      <PageHero 
        title="Traditional Events" 
        subtitle="Celebrating heritage and milestones with elegance."
        bg="from-rose-800 to-amber-900"
      />

      <div className="max-w-screen-xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="sticky top-32">
            <span className="text-[#b5884b] text-xs font-black uppercase tracking-[0.3em] mb-4 block">
              Honoring Heritage
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#3f4d46] mb-8 leading-tight">
              Creating Memories that <span className="text-rose-600">Last Generations</span>
            </h2>
            <p className="text-[#3f4d46]/70 text-lg leading-relaxed mb-10">
              From the first haircut to traditional naming ceremonies, we help families celebrate their cultural roots with authenticity and style. Our event planners handle every detail so you can focus on the moment.
            </p>
            
            <div className="space-y-4">
              {[
                'Full Event Planning & Coordination',
                'Traditional Decor & Styling',
                'Catering for Cultural Palates',
                'Photography & Videography',
                'Priest & Ritual Facilitation'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                    <Check size={14} />
                  </div>
                  <span className="font-bold text-[#3f4d46]">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-12 px-10 py-5 bg-[#3f4d46] hover:bg-black text-white rounded-full font-bold text-lg shadow-xl transition-all">
              Request Event Quote
            </button>
          </div>
          
          <div className="space-y-8">
            {[
              {
                title: 'Birthday Planning',
                desc: 'Magical celebrations tailored to your child’s favorite themes and traditions.',
                img: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: 'Reading Letters',
                desc: 'Traditional rituals involving sacred scripts and early literacy blessings.',
                img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600'
              },
              {
                title: 'First Birthday (Annaprasana)',
                desc: 'A significant milestone marking the introduction of solid food.',
                img: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=600'
              }
            ].map((event, i) => (
              <div key={i} className="group bg-white rounded-[40px] overflow-hidden border border-[#f0ebe4] shadow-sm hover:shadow-lg transition-all">
                <div className="h-64 overflow-hidden">
                  <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-[#3f4d46] mb-3">{event.title}</h3>
                  <p className="text-sm text-[#3f4d46]/60 leading-relaxed mb-6">{event.desc}</p>
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-[#cda67c]">
                    <span className="flex items-center gap-1"><MapPin size={14} /> Venue Selection</span>
                    <span className="flex items-center gap-1"><Camera size={14} /> Memories</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TraditionalEvents
