import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(201,169,110,0.15)] transition-all duration-700 border border-gold/5 hover:border-gold/20 flex flex-col h-full">
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden h-64 bg-cream group/img">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-1000 ease-out"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=500&q=80';
          }}
        />
        {/* Floating Tag */}
        <div className="absolute top-4 right-4 z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="bg-charcoal text-white text-[9px] tracking-[0.2em] font-body uppercase px-4 py-2 rounded-full shadow-xl">
            {product.category}
          </span>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </Link>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="mb-auto">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-[1px] bg-gold/40" />
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase font-body font-bold">{product.tagline}</p>
          </div>
          
          <Link to={`/product/${product.id}`} className="block mb-3">
            <h3 className="font-display text-xl md:text-2xl text-charcoal group-hover:text-gold transition-colors duration-300 leading-tight">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-xs md:text-sm text-muted font-body leading-relaxed line-clamp-2 mb-6">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gold/5">
          <div className="flex flex-col">
            <span className="text-[9px] text-muted uppercase tracking-widest font-body mb-0.5">Price</span>
            <span className="font-display text-xl text-charcoal font-medium">
              Rs {product.price.toLocaleString()}
            </span>
          </div>
          
          <button
            onClick={handleAddToCart}
            className={`relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
              added
                ? 'bg-green-600 text-white scale-110 shadow-lg shadow-green-600/30'
                : 'bg-charcoal text-white hover:bg-gold hover:scale-110 hover:shadow-xl hover:shadow-gold/20'
            }`}
          >
            {added ? (
              <span className="text-xl">✓</span>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
