import { useState } from 'react'
import { Filter, Search, ShoppingBag, Star, X, Box } from 'lucide-react'
import PageHero from '../components/common/PageHero'

const bundleCategories = ['All', 'Newborn', 'Sleep & Bath', 'Feeding', 'Gift Sets']

const bundles = [
  { 
    id: 1, 
    name: 'Essential Newborn Kit', 
    category: 'Newborn', 
    price: 89.99, 
    items: 6,
    rating: 4.9, 
    image: 'https://images.unsplash.com/photo-1522771935876-2497116a7d9e?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    id: 2, 
    name: 'Midnight Sleep Bundle', 
    category: 'Sleep & Bath', 
    price: 120.00, 
    items: 4,
    rating: 4.8, 
    image: 'https://images.unsplash.com/photo-1544126592-807daa2b567b?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    id: 3, 
    name: 'First Foods Set', 
    category: 'Feeding', 
    price: 55.00, 
    items: 8,
    rating: 4.7, 
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    id: 4, 
    name: 'Deluxe Nursery Decor', 
    category: 'Gift Sets', 
    price: 199.00, 
    items: 12,
    rating: 5.0, 
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    id: 5, 
    name: 'Bath Time Bliss', 
    category: 'Sleep & Bath', 
    price: 45.00, 
    items: 5,
    rating: 4.6, 
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400' 
  },
]

const Bundles = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBundles = bundles.filter(bundle => {
    const matchesCategory = activeCategory === 'All' || bundle.category === activeCategory
    const matchesSearch = bundle.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="bg-[#faf6f2] min-h-screen">
      <PageHero 
        title="Product Bundles" 
        subtitle="Save more with our curated sets of premium essentials."
        bg="from-[#3f4d46] to-[#2c3631]"
      />

      <div className="max-w-screen-xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        
        {/* ── Sidebar Filters ── */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <div className="flex items-center gap-2 mb-8">
              <Filter size={18} className="text-[#cda67c]" />
              <h3 className="font-display font-black text-xl text-[#3f4d46] uppercase tracking-wider">Filter Bundles</h3>
            </div>

            {/* Search */}
            <div className="mb-10 relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3f4d46]/30 group-focus-within:text-[#cda67c] transition-colors" size={16} />
              <input
                type="text"
                placeholder="Search bundles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#f0ebe4] rounded-[4px] text-sm focus:outline-none focus:border-[#cda67c] transition-all"
              />
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3f4d46]/40 mb-4">By Collection</h4>
              <ul className="space-y-2">
                {bundleCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-2 text-sm font-bold transition-all rounded-[4px] ${
                        activeCategory === cat
                          ? 'bg-[#3f4d46] text-[#faf6f2]'
                          : 'text-[#3f4d46]/70 hover:bg-[#cda67c]/10 hover:text-[#3f4d46]'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clear Filters */}
            {(activeCategory !== 'All' || searchQuery) && (
              <button 
                onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                className="mt-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#b5884b] hover:text-[#3f4d46] transition-colors"
              >
                <X size={14} /> Reset Filters
              </button>
            )}
          </div>
        </aside>

        {/* ── Bundles Grid ── */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBundles.map((bundle) => (
              <div key={bundle.id} className="group bg-white rounded-[4px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#f0ebe4]">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#faf6f2]">
                  <img 
                    src={bundle.image} 
                    alt={bundle.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                    <Box size={14} className="text-[#cda67c]" />
                    <span className="text-[10px] font-black text-[#3f4d46]">{bundle.items} ITEMS</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#b5884b] mb-2 block">
                    {bundle.category}
                  </span>
                  <h3 className="font-display font-black text-xl text-[#3f4d46] mb-4 group-hover:text-[#cda67c] transition-colors">
                    {bundle.name}
                  </h3>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[#f0ebe4]">
                    <div className="flex flex-col">
                      <span className="text-xs text-[#3f4d46]/40 line-through font-bold">${(bundle.price * 1.2).toFixed(2)}</span>
                      <span className="font-black text-xl text-[#3f4d46]">
                        ${bundle.price.toFixed(2)}
                      </span>
                    </div>
                    <button className="bg-[#3f4d46] hover:bg-[#cda67c] text-white p-3 rounded-[4px] transition-all">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredBundles.length === 0 && (
            <div className="text-center py-32 bg-white rounded-[4px] border border-[#f0ebe4]">
              <Box className="mx-auto text-[#cda67c] mb-4 opacity-20" size={60} />
              <h3 className="font-bold text-[#3f4d46]">No bundles match your search</h3>
              <p className="text-sm text-[#3f4d46]/50 mt-2">Try adjusting your filters or category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Bundles
