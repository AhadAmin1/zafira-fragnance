import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import products from '../data/products';
import ads from '../data/ads';

const Home = () => {
  const featured = products.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        {/* Advanced Background Texture */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C9A96E 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal opacity-60" />
        
        {/* Floating Light Effects */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px] animate-pulse delay-700" />

        {/* Vertical Brand Line */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
          <span className="text-gold/30 text-[10px] tracking-[0.6em] -rotate-90 my-12 font-body font-bold whitespace-nowrap">EST. 2024 • LUXURY HOUSE</span>
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
        </div>

        <div className="relative text-center px-6 max-w-5xl mx-auto z-10">
          <div className="inline-flex items-center gap-4 mb-8 opacity-0 animate-fade-up animate-delay-100">
            <div className="w-8 h-px bg-gold/50" />
            <p className="text-gold tracking-[0.5em] text-[10px] md:text-xs uppercase font-body font-bold">
              Premium Collection
            </p>
            <div className="w-8 h-px bg-gold/50" />
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-9xl text-white leading-[0.9] mb-8 opacity-0 animate-fade-up animate-delay-200">
            The Art of
            <br />
            <span className="text-gold italic font-light">Fragrance</span>
          </h1>

          <p className="font-body text-white/50 text-base md:text-xl max-w-xl mx-auto mb-12 opacity-0 animate-fade-up animate-delay-300 leading-relaxed">
            Discover scents that tell your story. Handpicked luxury perfumes crafted for those who dare to be memorable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-fade-up animate-delay-400">
            <Link
              to="/products"
              className="group relative bg-gold text-white px-10 py-4 rounded-full font-body text-xs tracking-[0.3em] uppercase transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)] overflow-hidden"
            >
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Link>
            <Link
              to="/products"
              className="group border border-white/20 text-white/70 px-10 py-4 rounded-full font-body text-xs tracking-[0.3em] uppercase hover:border-gold/50 hover:text-gold transition-all duration-500"
            >
              View Collection
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0 animate-fade-up animate-delay-500">
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold/50 via-gold/10 to-transparent animate-bounce-slow" />
          <span className="text-gold/40 text-[9px] tracking-[0.5em] font-body uppercase">Scroll</span>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.4em] text-xs uppercase font-body mb-3">Curated For You</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">Featured Scents</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, i) => (
            <div key={product.id} className="opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 border border-charcoal text-charcoal px-8 py-3.5 rounded-xl font-body text-sm tracking-wider uppercase hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            View All Products
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Latest Posts & Ads Section */}
      <section className="py-24 bg-cream/30 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48 -mb-48" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.4em] text-xs uppercase font-body mb-3">Discover the Essence</p>
            <h2 className="font-display text-4xl md:text-6xl text-charcoal tracking-tight">Latest From Zafira</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {ads.map((ad, i) => (
              <div 
                key={ad.id} 
                className="group relative"
              >
                {/* Image Container with Floating Effect */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 transform group-hover:-translate-y-4">
                  <img 
                    src={ad.image} 
                    alt={ad.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] tracking-[0.3em] uppercase px-5 py-2 rounded-full font-body shadow-lg">
                      {ad.category}
                    </span>
                  </div>
                </div>

                {/* Content Box with Glassmorphism */}
                <div className="absolute -bottom-6 md:-bottom-10 left-4 right-4 md:left-6 md:right-6 bg-white/90 backdrop-blur-xl p-5 md:p-8 rounded-2xl shadow-xl border border-gold/10 transition-all duration-500 transform group-hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-3 md:mb-4">
                    <span className="text-[9px] md:text-[10px] font-body tracking-widest text-gold uppercase">{ad.date}</span>
                    <div className="flex-1 h-px bg-gold/10" />
                  </div>
                  <h3 className="font-display text-xl lg:text-3xl text-charcoal mb-3 md:mb-4 group-hover:text-gold transition-colors duration-300">
                    {ad.title}
                  </h3>
                  <p className="font-body text-muted text-xs md:text-sm leading-relaxed mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 h-0 group-hover:h-auto overflow-hidden">
                    {ad.description}
                  </p>
                  <Link 
                    to={ad.link}
                    className="inline-flex items-center gap-3 text-charcoal font-body text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold group/btn"
                  >
                    <span className="relative">
                      Explore Collection
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover/btn:w-full" />
                    </span>
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-2 text-gold text-lg">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-32">
            <Link 
              to="/products" 
              className="group inline-flex items-center gap-4 bg-charcoal text-white px-10 py-4 rounded-full font-body text-xs tracking-[0.3em] uppercase hover:bg-gold transition-all duration-500 shadow-2xl hover:shadow-gold/20"
            >
              Explore Collection
              <span className="w-8 h-px bg-white/30 group-hover:w-12 transition-all duration-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Promise Section */}
      <section className="bg-charcoal py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { icon: '✦', title: 'Authentic Luxury', desc: 'Every bottle sourced directly from master perfumers.' },
            { icon: '◈', title: 'Exclusive Scents', desc: 'Rare ingredients crafted into unforgettable fragrances.' },
            { icon: '◇', title: 'Fast Delivery', desc: 'Karachi-wide delivery within 24 hours.' },
          ].map((item) => (
            <div key={item.title} className="group">
              <span className="text-gold text-2xl block mb-4">{item.icon}</span>
              <h3 className="font-display text-white text-xl mb-2">{item.title}</h3>
              <p className="font-body text-white/40 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
