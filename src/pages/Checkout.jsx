import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Footer from '../components/Footer';

const WHATSAPP_NUMBER = '923092199720';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [onlineMethod, setOnlineMethod] = useState('easypaisa');
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
    let methodText = paymentMethod === 'cod' ? 'Cash on Delivery' : `Online Payment (${onlineMethod === 'easypaisa' ? 'Easypaisa' : onlineMethod === 'jazzcash' ? 'JazzCash' : 'SadaPay'})`;
    
    const message = `Hello, Zafira Fragrances! I would like to confirm my order:%0A%0A${cart
      .map(item => `${item.quantity}x ${item.name} - Rs ${(item.price * item.quantity).toLocaleString()}`)
      .join('%0A')}%0A%0A*Total: Rs ${totalPrice.toLocaleString()}*%0A%0A*Payment Method:* ${methodText}%0A%0APlease let me know the next steps.`;
    
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
      <section className="pt-32 pb-16 px-4 text-center bg-charcoal">
        <h1 className="font-display text-4xl md:text-5xl text-white">Checkout</h1>
      </section>

      <section className="flex-1 max-w-4xl mx-auto w-full px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gold/10 p-6 md:p-10">
          <h2 className="text-2xl font-display text-charcoal border-b border-gold/20 pb-4 mb-6">Order Summary</h2>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4 text-muted font-body">
              <span>{item.quantity}x {item.name}</span>
              <span className="text-charcoal font-medium">Rs {(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
          <div className="flex justify-between items-center border-t border-gold/10 pt-4 mt-4 font-display text-xl text-charcoal">
            <span>Total to Pay</span>
            <span className="text-gold">Rs {totalPrice.toLocaleString()}</span>
          </div>

          <h2 className="text-2xl font-display text-charcoal border-b border-gold/20 pb-4 mt-12 mb-6">Payment Method</h2>
          
          <div className="space-y-4">
            <label className={`block w-full border rounded-xl p-4 cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-gold bg-gold/5' : 'border-black/10 hover:bg-black/5'}`}>
              <div className="flex items-center gap-3">
                <input 
                  type="radio" 
                  name="payment" 
                  value="cod" 
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="w-5 h-5 accent-gold"
                />
                <span className="font-body text-charcoal text-lg">Cash on Delivery</span>
              </div>
              {paymentMethod === 'cod' && <p className="text-sm text-muted mt-2 ml-8">Pay with cash when your order is delivered to your doorstep.</p>}
            </label>

            <label className={`block w-full border rounded-xl p-4 cursor-pointer transition-colors ${paymentMethod === 'online' ? 'border-gold bg-gold/5' : 'border-black/10 hover:bg-black/5'}`}>
              <div className="flex items-center gap-3">
                <input 
                  type="radio" 
                  name="payment" 
                  value="online" 
                  checked={paymentMethod === 'online'}
                  onChange={() => setPaymentMethod('online')}
                  className="w-5 h-5 accent-gold"
                />
                <span className="font-body text-charcoal text-lg">Online Payment</span>
              </div>
              
              {paymentMethod === 'online' && (
                <div className="mt-4 ml-8">
                  <p className="text-sm text-muted mb-4">Please select your preferred digital payment method:</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {['easypaisa', 'jazzcash', 'sadapay'].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setOnlineMethod(method)}
                        className={`px-6 py-2 rounded-full text-sm font-body tracking-wide border transition-all ${
                          onlineMethod === method ? 'bg-charcoal text-white border-charcoal' : 'bg-white text-muted border-black/10 hover:border-gold'
                        }`}
                      >
                        {method.charAt(0).toUpperCase() + method.slice(1)}
                      </button>
                    ))}
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gold/20 shadow-sm">
                    <p className="font-body text-sm text-charcoal font-medium uppercase tracking-widest mb-2 border-b border-black/5 pb-2">
                      Transfer Details
                    </p>
                    <div className="space-y-2 mt-3 text-sm text-muted">
                      <p className="flex justify-between"><span>Account Title:</span> <span className="text-charcoal font-medium">Zafira Fragrances</span></p>
                      <p className="flex justify-between"><span>Account Number:</span> <span className="text-gold font-medium text-lg">+92 309 2199720</span></p>
                      <p className="flex justify-between"><span>Bank/Operator:</span> <span className="text-charcoal font-medium capitalize">{onlineMethod}</span></p>
                    </div>
                    <p className="text-xs text-charcoal/70 mt-4 bg-gold/10 p-2 rounded text-center">
                      Please send Rs {totalPrice.toLocaleString()} to this number and share the screenshot on WhatsApp.
                    </p>
                  </div>
                </div>
              )}
            </label>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-10 bg-charcoal text-white hover:bg-gold py-5 px-8 rounded-xl font-body text-base tracking-widest uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Confirm Order via WhatsApp
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
