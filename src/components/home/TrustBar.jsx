import { ShieldCheck, Truck, Leaf, Heart } from 'lucide-react'

const features = [
  { icon: <Leaf size={24} />, title: '100% Organic', desc: 'Sustainably sourced materials' },
  { icon: <ShieldCheck size={24} />, title: 'Safe & Certified', desc: 'Rigorous safety standards' },
  { icon: <Truck size={24} />, title: 'Fast Delivery', desc: 'Free over $75 within NZ' },
  { icon: <Heart size={24} />, title: 'With Love', desc: 'Curated by parents for parents' }
]

const TrustBar = () => {
  return (
    <section className="bg-[#3f4d46] py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-[#f0ebe4]/10 flex items-center justify-center text-[#cda67c] mb-6 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-[#faf6f2] font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-[#f0ebe4]/50 text-xs tracking-widest uppercase">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustBar
