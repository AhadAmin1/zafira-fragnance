import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import products from '../data/products';

const categories = ['All', 'Male', 'Female', 'Unisex', 'Attar'];

const Products = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? products : products.filter(p => p.category === active);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center bg-charcoal">
        <p className="text-gold tracking-[0.4em] text-xs uppercase font-body mb-3">Our Collection</p>
        <h1 className="font-display text-5xl md:text-6xl text-white">All Perfumes</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-cream/90 backdrop-blur-md border-b border-gold/10 py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-body tracking-wider transition-all duration-200 ${
                active === cat
                  ? 'bg-charcoal text-white'
                  : 'bg-white border border-gold/20 text-muted hover:border-gold/50 hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="font-body text-sm text-muted mb-8">{filtered.length} products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <div key={product.id} className="opacity-0 animate-fade-up" style={{ animationDelay: `${i * 0.07}s`, animationFillMode: 'forwards' }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
