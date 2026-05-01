import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col pt-32 text-center bg-cream">
        <h2 className="text-3xl font-display text-charcoal">Product Not Found</h2>
        <Link to="/products" className="text-gold mt-4 hover:underline">Return to Products</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  // Uploaded gallery images for this product
  const galleryImages = product.gallery || [];

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto w-full flex-1">
        <Link to="/products" className="text-muted text-sm font-body hover:text-gold transition-colors inline-block mb-10 tracking-widest uppercase">
          ← Back to Collection
        </Link>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          
          {/* Main Image & Gallery */}
          <div className="lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border border-gold/10 relative group">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 cursor-zoom-in"
                onClick={() => setSelectedImage(product.image)}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=500&q=80'; }}
              />
            </div>
            {/* Additional Gallery Images */}
            {galleryImages.length > 0 && (
              <div className="flex gap-3 md:gap-4 mt-4 md:mt-6 overflow-x-auto pb-2 scrollbar-hide">
                 {galleryImages.map((img, i) => (
                   <div key={i} className="min-w-[80px] md:min-w-[100px] flex-1 rounded-xl overflow-hidden border border-gold/10 aspect-[4/5] shadow-md group relative">
                      <img 
                        src={img}
                        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 cursor-zoom-in"
                        alt={`Gallery ${i}`}
                        onClick={() => setSelectedImage(img)}
                      />
                   </div>
                 ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-gold tracking-[0.3em] text-[10px] md:text-sm uppercase font-body mb-3">{product.tagline} • {product.category}</p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4">{product.name}</h1>
            <p className="text-xl md:text-2xl font-display text-charcoal/80 mb-6 md:mb-8 border-b border-gold/20 pb-6 md:pb-8">
              Rs {product.price.toLocaleString()}
            </p>
            
            <div className="font-body text-muted text-sm md:text-base leading-relaxed space-y-4 mb-8 md:mb-10">
              <p>{product.description}</p>
              <ul className="space-y-3 mt-6 text-xs md:text-sm">
                <li className="flex items-center gap-3"><span className="text-gold text-lg">✦</span> 50 ML Premium Glass Bottle</li>
                <li className="flex items-center gap-3"><span className="text-gold text-lg">✦</span> 8–9 Hours Long Lasting Guarantee</li>
                <li className="flex items-center gap-3"><span className="text-gold text-lg">✦</span> Authentic and carefully curated</li>
              </ul>
            </div>

            <button
              onClick={handleAddToCart}
              className={`py-4 md:py-5 px-8 rounded-xl font-body text-xs md:text-sm tracking-widest uppercase transition-all duration-500 w-full mb-6 ${
                added
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                  : 'bg-charcoal text-white hover:bg-gold hover:shadow-xl hover:shadow-gold/20'
              }`}
            >
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
            <p className="text-[10px] md:text-xs text-center text-muted font-body uppercase tracking-[0.2em]">Free delivery on orders over Rs 5,000</p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 border-t border-gold/10 pt-16 mb-8">
            <h3 className="font-display text-3xl text-charcoal mb-8 text-center uppercase tracking-widest">More {product.category} Fragrances</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(rel => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-md p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-8 text-white/50 hover:text-white transition-colors text-4xl"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            ×
          </button>
          <img 
            src={selectedImage} 
            alt="Fullscreen View" 
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
