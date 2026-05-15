import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Baby Essentials',
    path: '/baby-essentials',
    image: 'https://images.unsplash.com/photo-1522771935876-2497116a7d9e?auto=format&fit=crop&q=80&w=600',
    size: 'lg'
  },
  {
    name: 'Room Decorations',
    path: '/room-decorations',
    image: 'https://images.unsplash.com/photo-1544126592-807daa2b567b?auto=format&fit=crop&q=80&w=600',
    size: 'sm'
  },
  {
    name: 'Health Products',
    path: '/health-products',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600',
    size: 'sm'
  },
  {
    name: 'Bundles',
    path: '/bundles',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=600',
    size: 'md'
  }
]

const CategoryGrid = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-[#b5884b] text-xs font-black uppercase tracking-[0.3em] mb-4 block">
              Curated Collections
            </span>
            <h2 className="font-display font-black text-3xl md:text-5xl text-[#3f4d46]">
              Designed for your <span className="text-[#cda67c]">little one's</span> journey.
            </h2>
          </div>
          <Link to="/shop" className="group flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#3f4d46]">
            View All Categories <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[800px] md:h-[600px]">
          {/* Main Large Card */}
          <Link to={categories[0].path} className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[4px] shadow-sm">
            <img src={categories[0].image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3f4d46]/60 to-transparent" />
            <div className="absolute bottom-10 left-10 text-[#faf6f2]">
              <h3 className="text-3xl font-black mb-2">{categories[0].name}</h3>
              <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Shop Collection</p>
            </div>
          </Link>

          {/* Smaller Cards */}
          <Link to={categories[1].path} className="group relative overflow-hidden rounded-[4px] shadow-sm">
            <img src={categories[1].image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3f4d46]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-[#faf6f2]">
              <h3 className="text-xl font-black">{categories[1].name}</h3>
            </div>
          </Link>

          <Link to={categories[2].path} className="group relative overflow-hidden rounded-[4px] shadow-sm">
            <img src={categories[2].image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3f4d46]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-[#faf6f2]">
              <h3 className="text-xl font-black">{categories[2].name}</h3>
            </div>
          </Link>

          {/* Wide Medium Card */}
          <Link to={categories[3].path} className="md:col-span-2 group relative overflow-hidden rounded-[4px] shadow-sm">
            <img src={categories[3].image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3f4d46]/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-[#faf6f2]">
              <h3 className="text-2xl font-black">{categories[3].name}</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid
