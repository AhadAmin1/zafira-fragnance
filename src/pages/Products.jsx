import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import products from '../data/products';

const categories = ['All', 'Male', 'Female', 'Unisex', 'Attar'];

const Products = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section for Products */}
      <section className="bg-charcoal pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C9A96E 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}
        />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1 border border-gold/30 rounded-full mb-6">
            <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-body font-bold">The Collection</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white mb-6">Our <em className="text-gold">Fragrances</em></h1>
          <p className="font-body text-white/40 text-sm md:text-base max-w-xl mx-auto tracking-wide">
            Explore our curated selection of fine attars and perfumes, crafted for the discerning individual.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Category Filters */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-4 mb-8 overflow-x-auto scrollbar-hide w-full justify-start md:justify-center px-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`whitespace-nowrap px-8 py-3 rounded-full font-body text-xs tracking-[0.2em] uppercase transition-all duration-500 border ${
                  active === category
                    ? 'bg-charcoal text-white border-charcoal shadow-xl'
                    : 'bg-transparent text-muted border-gold/20 hover:border-gold hover:text-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="w-24 h-px bg-gold/20" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <div key={product.id} className="opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.07}s`, animationFillMode: 'forwards' }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
