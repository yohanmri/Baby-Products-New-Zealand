/**
 * PageHero — reusable banner for inner pages (non-home).
 * Usage: <PageHero title="About Us" subtitle="Our story" />
 */
const PageHero = ({ title, subtitle, bg = 'from-primary-light to-secondary-light' }) => (
  <section className={`bg-gradient-to-br ${bg} pt-36 pb-20 text-center px-6`}>
    <h1 className="font-display font-extrabold text-4xl md:text-5xl text-dark">{title}</h1>
    {subtitle && (
      <p className="mt-3 text-gray-500 text-base md:text-lg max-w-xl mx-auto">{subtitle}</p>
    )}
  </section>
)

export default PageHero
