import { Link } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import { Heart, Shield, Leaf, Users, Star, ArrowRight } from 'lucide-react'

const About = () => {
  return (
    <div className="bg-[#faf6f2] min-h-screen pb-24">
      <PageHero 
        title="Our Story" 
        subtitle="Growing together, flowing for life."
        bg="from-[#3f4d46] to-[#2c3631]"
      />

      {/* ── Mission Section ── */}
      <section className="py-24 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="text-[#b5884b] text-xs font-black uppercase tracking-[0.3em] mb-6 block">
              Our Mission
            </span>
            <h2 className="font-display font-black text-4xl md:text-6xl text-[#3f4d46] mb-8 leading-tight">
              A holistic approach to <span className="text-[#cda67c]">parenting.</span>
            </h2>
            <p className="text-[#3f4d46]/70 text-lg leading-relaxed mb-8">
              Founded in New Zealand, Grow & Flow was born from a simple realization: parenting isn't just about products; it's about the flow of life, heritage, and support. We curate more than just essentials—we provide a ecosystem of care that respects tradition while embracing modern expertise.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-black text-[#cda67c]">12k+</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#3f4d46]/40">Happy Families</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-black text-[#cda67c]">100%</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#3f4d46]/40">Organic Products</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-[4/5] rounded-[4px] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1544126592-807daa2b567b?auto=format&fit=crop&q=80&w=800" 
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#cda67c]/10 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </section>

      {/* ── Values Section ── */}
      <section className="py-24 bg-white border-y border-[#f0ebe4] px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display font-black text-3xl md:text-5xl text-[#3f4d46]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Leaf className="text-[#cda67c]" size={32} />, 
                title: 'Sustainability', 
                desc: 'We prioritize organic materials and eco-friendly packaging to protect the world our children will inherit.' 
              },
              { 
                icon: <Shield className="text-[#cda67c]" size={32} />, 
                title: 'Safety First', 
                desc: 'Every product and service in our hub is rigorously vetted by child development experts and practitioners.' 
              },
              { 
                icon: <Users className="text-[#cda67c]" size={32} />, 
                title: 'Community', 
                desc: 'Parenting takes a village. We foster a community of support through rituals, events, and expert guidance.' 
              }
            ].map((value, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-[#faf6f2] rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="font-bold text-xl text-[#3f4d46] mb-4">{value.title}</h3>
                <p className="text-sm text-[#3f4d46]/60 leading-relaxed max-w-xs mx-auto">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team/Founder Quote ── */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto bg-[#3f4d46] p-12 md:p-20 rounded-[4px] relative">
          <div className="relative z-10 text-center">
            <Star className="text-[#cda67c] mx-auto mb-8 animate-pulse" size={40} />
            <h3 className="text-[#faf6f2] font-display italic text-2xl md:text-4xl leading-relaxed mb-10">
              "We believe that every child’s arrival is a cosmic event. Our goal is to make the transition into parenthood as flowing and supported as possible."
            </h3>
            <div className="flex flex-col items-center">
              <span className="font-black text-[#faf6f2] uppercase tracking-[0.3em] text-xs">The Founders</span>
              <span className="text-[#cda67c] text-[10px] font-bold mt-2">GROW & FLOW FAMILY HUB</span>
            </div>
          </div>
          {/* Decorative SVG Frame Overlay */}
          <div className="absolute inset-4 border border-[#faf6f2]/10 rounded-[4px] pointer-events-none" />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pt-12 text-center">
        <Link to="/contact" className="inline-flex items-center gap-3 font-black text-xs uppercase tracking-widest text-[#3f4d46] hover:text-[#cda67c] transition-colors">
          Get in touch with us <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  )
}

export default About
