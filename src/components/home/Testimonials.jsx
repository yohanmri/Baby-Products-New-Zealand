import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah Jenkins',
    role: 'New Mom',
    text: "The astrology reading was incredibly insightful. It gave us a new perspective on our son's personality that we already see emerging at 6 months!",
    rating: 5
  },
  {
    name: 'Michael Thompson',
    role: 'Dad of Two',
    text: "Top-tier quality products and the fastest delivery I've seen in New Zealand. The room decorations transformed our nursery into a sanctuary.",
    rating: 5
  },
  {
    name: 'Emily Chen',
    role: 'Expecting Parent',
    text: "The meal support service was a lifesaver during my third trimester. Nutritious, delicious, and so convenient for busy families.",
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#faf6f2] px-6 relative overflow-hidden">
      {/* Decorative Background Icon */}
      <div className="absolute top-20 right-[-50px] opacity-[0.03] rotate-12">
        <Quote size={400} />
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#b5884b] text-xs font-black uppercase tracking-[0.3em] mb-4 block">
            Parent Stories
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-[#3f4d46]">
            Loved by <span className="text-[#cda67c]">families</span> across NZ.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-10 rounded-[4px] border border-[#f0ebe4] shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} fill="#cda67c" className="text-[#cda67c]" />
                ))}
              </div>
              <p className="text-[#3f4d46]/70 text-lg italic leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-[#f0ebe4]">
                <div className="w-10 h-10 bg-[#3f4d46] rounded-full flex items-center justify-center text-[#faf6f2] font-black text-xs">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-[#3f4d46]">{review.name}</h4>
                  <p className="text-[10px] uppercase font-black tracking-widest text-[#b5884b]">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
