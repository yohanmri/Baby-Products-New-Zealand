import { Link } from 'react-router-dom'
import { Heart, Globe, Mail, MessageCircle } from 'lucide-react'

const footerLinks = {
  Shop: [
    { name: 'Baby Essentials', path: '/baby-essentials' },
    { name: 'Promotions',      path: '/promotions' },
    { name: 'Room Decorations',path: '/room-decorations' },
    { name: 'Health Products', path: '/health-products' },
    { name: 'Food Supports',   path: '/food-supports' },
  ],
  Company: [
    { name: 'About Us',  path: '/about' },
    { name: 'Services',  path: '/services' },
    { name: 'Contact',   path: '/contact' },
  ],
}

const socials = [
  { icon: Globe,         href: '#', label: 'Facebook'  },
  { icon: MessageCircle, href: '#', label: 'Chat'      },
  { icon: Mail,          href: '#', label: 'Email'     },
]

const Footer = () => (
  <footer className="bg-dark text-white">
    <div className="max-w-screen-xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="block mb-3">
            <p className="font-display font-extrabold text-2xl text-white">Grow and Flow</p>
            <p className="text-primary text-xs font-bold tracking-widest uppercase">Family HUB</p>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Premium baby essentials, room décor, health products, and family services —
            crafted with love to support every step of your parenting journey.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="p-2.5 rounded-full bg-white/10 hover:bg-primary hover:text-dark transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-primary mb-4">
              {title}
            </h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
        <p>© {new Date().getFullYear()} Grow and Flow Family HUB. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart size={11} className="text-primary fill-primary mx-0.5" /> for little ones
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
