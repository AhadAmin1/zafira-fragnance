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
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-400 border border-gold/10">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden h-56 bg-cream group/img">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700 cursor-pointer"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=500&q=80';
          }}
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-xs font-body tracking-wider text-muted px-2.5 py-1 rounded-full border border-gold/20">
            {product.category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs tracking-widest text-gold uppercase font-body mb-1">{product.tagline}</p>
        <Link to={`/product/${product.id}`} className="block group/link">
          <h3 className="font-display text-lg text-charcoal mb-1 group-hover/link:text-gold transition-colors">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted font-body mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <span className="font-display text-lg text-charcoal">
            Rs {product.price.toLocaleString()}
          </span>
          <button
            onClick={handleAddToCart}
            className={`text-sm font-body tracking-wider px-4 py-2 rounded-xl transition-all duration-300 ${
              added
                ? 'bg-green-50 text-green-600 border border-green-200'
                : 'bg-charcoal text-white hover:bg-gold border border-transparent'
            }`}
          >
            {added ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
