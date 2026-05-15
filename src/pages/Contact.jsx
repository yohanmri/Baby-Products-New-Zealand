import PageHero from '../components/common/PageHero'
import { Phone, Mail, MapPin, Send, Clock, Globe } from 'lucide-react'

const Contact = () => {
  return (
    <div className="bg-[#faf6f2] min-h-screen pb-24">
      <PageHero 
        title="Connect With Us" 
        subtitle="We're here to support your family's unique journey."
        bg="from-[#3f4d46] to-[#2c3631]"
      />

      <div className="max-w-screen-xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* ── Contact Info ── */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <span className="text-[#b5884b] text-xs font-black uppercase tracking-[0.3em] mb-6 block">
                Get in Touch
              </span>
              <h2 className="font-display font-black text-4xl text-[#3f4d46] leading-tight">
                We'd love to <br /><span className="text-[#cda67c]">hear from you.</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white rounded-[4px] border border-[#f0ebe4] flex items-center justify-center text-[#cda67c] group-hover:bg-[#3f4d46] group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3f4d46] mb-1">Call Us</h4>
                  <p className="text-sm text-[#3f4d46]/60 font-medium">+64 9 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white rounded-[4px] border border-[#f0ebe4] flex items-center justify-center text-[#cda67c] group-hover:bg-[#3f4d46] group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3f4d46] mb-1">Email Us</h4>
                  <p className="text-sm text-[#3f4d46]/60 font-medium">hello@growandflow.co.nz</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white rounded-[4px] border border-[#f0ebe4] flex items-center justify-center text-[#cda67c] group-hover:bg-[#3f4d46] group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3f4d46] mb-1">Visit Us</h4>
                  <p className="text-sm text-[#3f4d46]/60 font-medium">123 Ponsonby Road, <br />Auckland, New Zealand</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 bg-white rounded-[4px] border border-[#f0ebe4] flex items-center justify-center text-[#cda67c] group-hover:bg-[#3f4d46] group-hover:text-white transition-all duration-300">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#3f4d46] mb-1">Hours</h4>
                  <p className="text-sm text-[#3f4d46]/60 font-medium">Mon - Fri: 9am - 6pm <br />Sat: 10am - 4pm</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
              {[Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white border border-[#f0ebe4] rounded-full flex items-center justify-center text-[#3f4d46] hover:bg-[#cda67c] hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Contact Form ── */}
          <div className="lg:w-2/3 bg-white p-10 md:p-16 rounded-[4px] shadow-sm border border-[#f0ebe4]">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#3f4d46]/40">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane Doe"
                    className="w-full px-5 py-4 bg-[#faf6f2] border border-[#f0ebe4] rounded-[4px] text-sm focus:outline-none focus:border-[#cda67c] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#3f4d46]/40">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="jane@example.com"
                    className="w-full px-5 py-4 bg-[#faf6f2] border border-[#f0ebe4] rounded-[4px] text-sm focus:outline-none focus:border-[#cda67c] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#3f4d46]/40">Subject</label>
                <select className="w-full px-5 py-4 bg-[#faf6f2] border border-[#f0ebe4] rounded-[4px] text-sm focus:outline-none focus:border-[#cda67c] transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Service Booking</option>
                  <option>Product Question</option>
                  <option>Wholesale</option>
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#3f4d46]/40">Message</label>
                <textarea 
                  rows="6"
                  placeholder="How can we help you?"
                  className="w-full px-5 py-4 bg-[#faf6f2] border border-[#f0ebe4] rounded-[4px] text-sm focus:outline-none focus:border-[#cda67c] transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full md:w-auto px-12 py-5 bg-[#3f4d46] hover:bg-[#cda67c] text-white rounded-[4px] font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all shadow-lg hover:-translate-y-1">
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* ── Map Placeholder ── */}
      <div className="max-w-screen-xl mx-auto px-6 mb-24">
        <div className="w-full h-[400px] bg-[#f0ebe4] rounded-[4px] overflow-hidden relative group">
          <div className="absolute inset-0 bg-[#3f4d46]/5 group-hover:bg-transparent transition-all duration-1000" />
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
            alt="Location Map Placeholder"
            className="w-full h-full object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[4px] shadow-2xl text-center border border-[#f0ebe4]">
               <MapPin className="text-[#cda67c] mx-auto mb-4" size={32} />
               <p className="font-display font-black text-[#3f4d46]">Auckland Flagship Studio</p>
               <p className="text-[10px] font-bold text-[#b5884b] uppercase tracking-widest mt-1">123 Ponsonby Road</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
