import { useState } from 'react'
import { ShoppingBag, Filter, Search, Star, X } from 'lucide-react'
import PageHero from '../components/common/PageHero'

const categories = ['All', 'Baby Essentials', 'Room Decorations', 'Health Products']

const products = [
  { id: 1, name: 'Organic Cotton Onesie', category: 'Baby Essentials', price: 29.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1522771935876-2497116a7d9e?auto=format&fit=crop&q=80&w=300' },
  { id: 2, name: 'Wooden Nursery Mobile', category: 'Room Decorations', price: 45.00, rating: 4.9, image: 'https://images.unsplash.com/photo-1544126592-807daa2b567b?auto=format&fit=crop&q=80&w=300' },
  { id: 3, name: 'Gentle Baby Lotion', category: 'Health Products', price: 18.50, rating: 4.7, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=300' },
  { id: 4, name: 'Silicone Teether Set', category: 'Baby Essentials', price: 15.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=300' },
  { id: 5, name: 'Soft Wall Tapestry', category: 'Room Decorations', price: 32.00, rating: 4.5, image: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?auto=format&fit=crop&q=80&w=300' },
  { id: 6, name: 'Baby Sunscreen SPF 50', category: 'Health Products', price: 22.00, rating: 4.9, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=300' },
  { id: 7, name: 'Cotton Swaddle Kit', category: 'Baby Essentials', price: 35.00, rating: 4.8, image: 'https://images.unsplash.com/photo-1522771935876-2497116a7d9e?auto=format&fit=crop&q=80&w=300' },
  { id: 8, name: 'Eco-Friendly Diapers', category: 'Health Products', price: 42.00, rating: 4.7, image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=300' },
]

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="bg-[#faf6f2] min-h-screen">
      <PageHero 
        title="Our Collection" 
        subtitle="Premium essentials curated for your little one's comfort and joy."
        bg="from-[#3f4d46] to-[#2c3631]"
      />

      <div className="max-w-screen-xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12">
        
        {/* ── Sidebar Filters ── */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-32">
            <div className="flex items-center gap-2 mb-8">
              <Filter size={18} className="text-[#cda67c]" />
              <h3 className="font-display font-black text-xl text-[#3f4d46] uppercase tracking-wider">Filters</h3>
            </div>

            {/* Search */}
            <div className="mb-10 relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3f4d46]/30 group-focus-within:text-[#cda67c] transition-colors" size={16} />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#f0ebe4] rounded-[4px] text-sm focus:outline-none focus:border-[#cda67c] transition-all"
              />
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#3f4d46]/40 mb-4">Categories</h4>
              <ul className="space-y-2">
                {categories.map((cat) => (
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
                <X size={14} /> Clear All
              </button>
            )}
          </div>
        </aside>

        {/* ── Product Grid ── */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-[4px] overflow-hidden shadow-sm hover:shadow-md transition-all border border-[#f0ebe4]">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-[#faf6f2]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Quick View Button */}
                  <div className="absolute inset-0 bg-[#3f4d46]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-[#3f4d46] p-2.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#b5884b] mb-1 block">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-sm text-[#3f4d46] truncate mb-3">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-[#3f4d46]">
                      ${product.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-1 text-[#cda67c]">
                      <Star size={10} fill="currentColor" />
                      <span className="text-[10px] font-bold text-[#3f4d46]/60">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-32 bg-white rounded-[4px] border border-[#f0ebe4]">
              <Search className="mx-auto text-[#cda67c] mb-4" size={40} />
              <h3 className="font-bold text-[#3f4d46]">No matches found</h3>
              <p className="text-sm text-[#3f4d46]/50 mt-2">Try a different keyword or category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop
