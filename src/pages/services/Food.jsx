import PageHero from '../../components/common/PageHero'
import { Utensils, Heart, CheckCircle2, Apple, Soup, Coffee } from 'lucide-react'

const FoodSupport = () => {
  return (
    <div className="bg-[#faf6f2] min-h-screen pb-20">
      <PageHero 
        title="Nutrition & Food Support" 
        subtitle="Nurturing healthy habits from the very first bite."
        bg="from-emerald-800 to-teal-900"
      />

      <div className="max-w-screen-xl mx-auto px-6 mt-20">
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-6">
              <Apple size={14} /> Healthy Beginnings
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-[#3f4d46] mb-6 leading-tight">
              Fueling Growth with <span className="text-emerald-600">Nutrient-Dense</span> Care
            </h2>
            <p className="text-[#3f4d46]/70 text-lg leading-relaxed mb-8">
              Proper nutrition is the foundation of a happy, healthy child. Our food support services provide expert guidance to navigate everything from breastfeeding and formula to the exciting journey of solid foods.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Meal Planning', icon: <CheckCircle2 className="text-emerald-500" /> },
                { title: 'Allergy Management', icon: <CheckCircle2 className="text-emerald-500" /> },
                { title: 'Weaning Strategies', icon: <CheckCircle2 className="text-emerald-500" /> },
                { title: 'Toddler Nutrition', icon: <CheckCircle2 className="text-emerald-500" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[#f0ebe4]">
                  {item.icon}
                  <span className="font-bold text-[#3f4d46] text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-[40px] overflow-hidden shadow-lg h-64">
                <img src="https://images.unsplash.com/photo-1522771935876-2497116a7d9e?auto=format&fit=crop&q=80&w=400" alt="Baby Food" className="w-full h-full object-cover" />
              </div>
              <div className="bg-emerald-600 rounded-[40px] p-8 text-white">
                <Soup size={32} className="mb-4" />
                <div className="text-xl font-bold">100% Organic</div>
                <p className="text-emerald-100 text-xs mt-2">We prioritize locally sourced, organic ingredients for all our meal plans.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#cda67c] rounded-[40px] p-8 text-[#3f4d46]">
                <Heart size={32} className="mb-4" />
                <div className="text-xl font-bold">Expert Led</div>
                <p className="text-[#3f4d46]/70 text-xs mt-2">All plans are vetted by certified pediatric nutritionists.</p>
              </div>
              <div className="rounded-[40px] overflow-hidden shadow-lg h-80">
                <img src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400" alt="Cooking" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Custom Meal Delivery',
              desc: 'Freshly prepared, organic, age-appropriate meals delivered to your doorstep daily.',
              price: '120',
              icon: <Truck size={24} />
            },
            {
              title: 'Pantry Essentials',
              desc: 'Curated delivery of healthy snacks and pantry staples for busy families.',
              price: '65',
              icon: <Utensils size={24} />
            },
            {
              title: 'Workshops & Classes',
              desc: 'Join a community of parents to learn about baby-led weaning and more.',
              price: '45',
              icon: <Apple size={24} />
            }
          ].map((service, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] border border-[#f0ebe4] hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-extrabold text-[#3f4d46] mb-4">{service.title}</h3>
              <p className="text-[#3f4d46]/60 text-sm mb-8 leading-relaxed">{service.desc}</p>
              <div className="flex items-center justify-between pt-6 border-t border-[#f0ebe4]">
                <div>
                  <span className="text-xs font-bold text-[#b5884b] uppercase tracking-wider block">Starting at</span>
                  <span className="text-2xl font-black text-[#3f4d46]">${service.price}</span>
                </div>
                <button className="bg-[#3f4d46] text-white p-3 rounded-full hover:bg-emerald-600 transition-colors">
                  <Heart size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FoodSupport
