import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';

const WHATSAPP_NUMBER = '923092199720';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col bg-cream">
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gold/10 text-center max-w-md w-full">
            <span className="text-5xl mb-4 block">✨</span>
            <h2 className="text-3xl font-display text-charcoal mb-4">Order Confirmed!</h2>
            <p className="text-muted font-body mb-8 text-sm leading-relaxed">
              Thank you for choosing Zafira Fragrances. Your cart has been cleared and we've opened WhatsApp to finalize your order details.
            </p>
            <button 
              onClick={() => navigate('/products')} 
              className="w-full bg-charcoal text-white px-8 py-3.5 rounded-xl font-body text-sm tracking-wider uppercase hover:bg-gold transition-all duration-300 shadow-lg"
            >
              Continue Shopping
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
        <h2 className="text-3xl font-display text-charcoal">Your cart is empty</h2>
        <button onClick={() => navigate('/products')} className="text-gold mt-4 hover:underline">Return to Products</button>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    const message = `Hello, Zafira Fragrances! I would like to confirm my order:%0A%0A${cart
      .map(item => `${item.quantity}x ${item.name} - Rs ${(item.price * item.quantity).toLocaleString()}`)
      .join('%0A')}%0A%0A*Total: Rs ${totalPrice.toLocaleString()}*%0A%0A*Payment Method:* Online Payment (JazzCash)%0A%0APlease let me know the next steps.`;
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile 
      ? `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${message}`
      : `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
      
    window.open(url, '_blank');
    clearCart();
    setOrderPlaced(true);
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-4 text-center bg-charcoal">
        <h1 className="font-display text-3xl md:text-5xl text-white">Checkout</h1>
      </section>

      <section className="flex-1 max-w-4xl mx-auto w-full px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gold/10 p-6 md:p-10">
          <h2 className="text-xl md:text-2xl font-display text-charcoal border-b border-gold/20 pb-4 mb-6">Order Summary</h2>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4 text-muted font-body text-sm md:text-base">
              <span className="truncate mr-4">{item.quantity}x {item.name}</span>
              <span className="text-charcoal font-medium flex-shrink-0">Rs {(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
          <div className="flex justify-between items-center border-t border-gold/10 pt-4 mt-4 font-display text-lg md:text-xl text-charcoal">
            <span>Total to Pay</span>
            <span className="text-gold">Rs {totalPrice.toLocaleString()}</span>
          </div>

          <h2 className="text-2xl font-display text-charcoal border-b border-gold/20 pb-4 mt-12 mb-6">Payment Method</h2>
          
          <div className="space-y-4">
            <div className="block w-full border border-gold bg-gold/5 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-5 h-5 rounded-full border-4 border-gold bg-white"></div>
                <span className="font-body text-charcoal text-lg font-medium">Online Payment (JazzCash Only)</span>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-gold/20 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gold/10 p-2 rounded-lg text-gold font-bold text-xs">JazzCash</div>
                  <p className="font-body text-xs text-charcoal font-bold uppercase tracking-[0.2em]">
                    Transfer Details
                  </p>
                </div>
                
                <div className="space-y-4 mt-4 text-sm text-muted">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Account Name</span>
                    <span className="text-charcoal font-display text-lg">Muhammad Rayyan Siddiqui</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold">Account Number</span>
                    <span className="text-gold font-body text-2xl tracking-wider font-bold">0332 3592771</span>
                  </div>
                </div>

                <div className="text-center mt-8 bg-charcoal text-white/90 p-4 rounded-xl text-xs leading-relaxed">
                  <p className="mb-2">1. Transfer <strong>Rs {totalPrice.toLocaleString()}</strong> via JazzCash</p>
                  <p>2. Take a screenshot and share it on WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-10 bg-charcoal text-white hover:bg-gold py-5 px-8 rounded-xl font-body text-base tracking-widest uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3"
          >
            <span>Proceed to WhatsApp</span>
            <span className="text-xl">→</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
