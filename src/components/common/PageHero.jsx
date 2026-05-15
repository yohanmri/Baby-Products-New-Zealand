/**
 * PageHero — reusable banner for inner pages (non-home).
 * Usage: <PageHero title="About Us" subtitle="Our story" />
 */
const PageHero = ({ title, subtitle, bg = 'from-primary-light to-secondary-light', compact = false }) => (
  <section className={`bg-gradient-to-br ${bg} ${compact ? 'pt-24 pb-8' : 'pt-36 pb-20'} text-center px-6 transition-all duration-500`}>
    <h1 className={`font-display font-extrabold text-dark ${compact ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl'}`}>{title}</h1>
    {subtitle && !compact && (
      <p className="mt-3 text-gray-500 text-base md:text-lg max-w-xl mx-auto">{subtitle}</p>
    )}
  </section>
)

export default PageHero
