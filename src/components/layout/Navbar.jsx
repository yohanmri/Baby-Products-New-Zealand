import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShoppingCart, Heart, Search, User, Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Bundles', path: '/bundles' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setMenuOpen(false), [location])

  const transparent = true // Always transparent over the frame

  return (
    <>
      {/* ── Top Border Header (Logo & Icons Only) ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 h-4 md:h-5 flex items-center"
      >
        <div className="max-w-screen-xl mx-auto px-10 flex items-center justify-center w-full relative">
          {/* Brand Centered on Border - Only element left on border */}
          <Link to="/" className="flex flex-col leading-tight group z-50 absolute left-1/2 -translate-x-1/2 top-[-2px]">
            <span className="font-display font-black text-lg md:text-xl tracking-tighter text-[#3f4d46]">
              Grow & Flow
            </span>
            <span className="text-[8px] md:text-[9px] font-bold tracking-[0.3em] uppercase text-[#b5884b] text-center -mt-1.5">
              Family HUB
            </span>
          </Link>
        </div>
      </header>

      {/* ── Nav Links + Icons (Below Border, Overlaying Video) ── */}
      <nav className="fixed top-7 md:top-8 left-0 right-0 z-40 pointer-events-none">
        <div className="max-w-screen-xl mx-auto px-10 flex items-center justify-between">

          {/* Left Links */}
          <div className="flex items-center gap-12 pointer-events-auto">
            {navLinks.slice(0, 3).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[13px] md:text-[14px] font-bold uppercase tracking-[0.25em] transition-all duration-300 drop-shadow-md
                  ${isActive ? 'text-[#cda67c]' : 'text-[#f0ebe4] hover:text-[#cda67c]'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-12 pointer-events-auto">
            {navLinks.slice(3).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[13px] md:text-[14px] font-bold uppercase tracking-[0.25em] transition-all duration-300 drop-shadow-md
                  ${isActive ? 'text-[#cda67c]' : 'text-[#f0ebe4] hover:text-[#cda67c]'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
