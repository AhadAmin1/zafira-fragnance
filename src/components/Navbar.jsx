import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Elegant SVG Icon */}
            <div className="relative flex items-center justify-center w-12 h-12">
              <div className="absolute inset-0 border-2 border-gold/30 rounded-full group-hover:border-gold/60 transition-colors duration-500"></div>
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-gold" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 12h-4.5l4.5-5.5V8h-6v2h4.5L10.5 15.5V17h6v-2z"/>
              </svg>
            </div>
            {/* Branding Text */}
            <div className="flex flex-col -gap-1">
              <span className="text-2xl md:text-3xl font-display font-bold tracking-[0.2em] text-charcoal leading-none">ZAFIRA</span>
              <span className="text-[10px] md:text-xs font-body tracking-[0.4em] text-gold uppercase leading-none">Fragrances</span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-body text-sm tracking-wider uppercase transition-colors duration-200 ${
                  isActive ? 'text-gold' : 'text-muted hover:text-charcoal'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `font-body text-sm tracking-wider uppercase transition-colors duration-200 ${
                  isActive ? 'text-gold' : 'text-muted hover:text-charcoal'
                }`
              }
            >
              Products
            </NavLink>
            <Link to="/cart" className="relative group">
              <div className="flex items-center gap-1.5 font-body text-sm tracking-wider uppercase text-muted hover:text-charcoal transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span>Cart</span>
              </div>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
