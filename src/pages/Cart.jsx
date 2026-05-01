import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <section className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-24">
          <span className="text-6xl mb-6">✦</span>
          <h2 className="font-display text-3xl text-charcoal mb-3">Your cart is empty</h2>
          <p className="font-body text-muted mb-8 max-w-sm">You haven't added any fragrances yet. Explore our collection and find your signature scent.</p>
          <Link
            to="/products"
            className="bg-charcoal text-white px-8 py-3.5 rounded-xl font-body text-sm tracking-wider uppercase hover:bg-gold transition-all duration-300"
          >
            Continue Shopping
          </Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center bg-charcoal">
        <p className="text-gold tracking-[0.4em] text-xs uppercase font-body mb-3">Your Selection</p>
        <h1 className="font-display text-5xl text-white">Shopping Cart</h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6" />
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.id} className="bg-white rounded-2xl p-5 flex gap-4 items-start shadow-sm border border-gold/10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=200&q=80'; }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-charcoal text-lg">{item.name}</h3>
                      <p className="font-body text-sm text-muted">{item.tagline}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted/50 hover:text-red-400 transition-colors text-lg flex-shrink-0 mt-0.5"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    {/* Qty Controls */}
                    <div className="flex items-center gap-2 bg-cream rounded-lg px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="w-6 h-6 flex items-center justify-center text-charcoal disabled:opacity-30 hover:text-gold transition-colors font-body text-lg"
                      >
                        −
                      </button>
                      <span className="w-6 text-center font-body text-sm font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-charcoal hover:text-gold transition-colors font-body text-lg"
                      >
                        +
                      </button>
                    </div>
                    {/* Subtotal */}
                    <span className="font-display text-charcoal text-lg">
                      Rs {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gold/10 sticky top-28">
              <h3 className="font-display text-xl text-charcoal mb-6">Order Summary</h3>

              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between text-sm font-body">
                    <span className="text-muted truncate mr-2">{item.name} x{item.quantity}</span>
                    <span className="text-charcoal flex-shrink-0">Rs {(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gold/20 pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-body text-muted">Total</span>
                  <span className="font-display text-2xl text-charcoal">Rs {totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-charcoal hover:bg-gold text-white py-4 rounded-xl font-body text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="block text-center mt-4 font-body text-sm text-muted hover:text-charcoal transition-colors"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
