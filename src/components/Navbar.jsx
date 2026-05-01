import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Check if current page should have a transparent-to-solid transition
  const isTransPage = location.pathname === '/' || location.pathname === '/products';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Determine colors based on page type, scroll state, and menu state
  const isLightMode = !isTransPage || scrolled || isOpen;
  const textColorClass = isLightMode ? 'text-charcoal' : 'text-white';
  const iconColorClass = isLightMode ? 'text-charcoal' : 'text-white';

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gold z-[1100] transition-all duration-300" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isLightMode 
            ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-gold/10 h-14 md:h-14' 
            : 'bg-transparent h-16 md:h-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group relative z-[1001]">
              <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10">
                <div className={`absolute inset-0 border-2 rounded-full transition-all duration-700 ${isLightMode ? 'border-gold/30 group-hover:border-gold/60' : 'border-white/20 group-hover:border-white/50'}`}></div>
                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-gold drop-shadow-md group-hover:scale-110 transition-transform duration-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 12h-4.5l4.5-5.5V8h-6v2h4.5L10.5 15.5V17h6v-2z"/>
                </svg>
              </div>
              <div className="flex flex-col -gap-1">
                <span className={`font-display font-bold tracking-[0.25em] leading-none transition-all duration-500 ${isLightMode ? 'text-lg md:text-xl text-charcoal' : 'text-xl md:text-2xl text-white'}`}>ZAFIRA</span>
                <span className={`text-[7px] md:text-[9px] font-body tracking-[0.4em] uppercase leading-none mt-1 transition-colors duration-500 ${isLightMode ? 'text-gold' : 'text-gold-light'}`}>Fragrances</span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="/" className={({ isActive }) => `relative font-body text-[10px] tracking-[0.2em] uppercase transition-all duration-300 group ${isActive ? 'text-gold' : isLightMode ? 'text-charcoal hover:text-gold' : 'text-white/80 hover:text-white'}`}>
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              <NavLink to="/products" className={({ isActive }) => `relative font-body text-[10px] tracking-[0.2em] uppercase transition-all duration-300 group ${isActive ? 'text-gold' : isLightMode ? 'text-charcoal hover:text-gold' : 'text-white/80 hover:text-white'}`}>
                Collection
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
              <Link to="/cart" className="relative group">
                <div className={`flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${isLightMode ? 'text-charcoal group-hover:text-gold' : 'text-white/80 group-hover:text-white'}`}>
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    {totalItems > 0 && (
                      <span className="absolute -top-1.5 -right-1.5 bg-gold text-white text-[7px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                        {totalItems}
                      </span>
                    )}
                  </div>
                  <span>Cart</span>
                </div>
              </Link>
            </div>

            {/* Mobile Icons */}
            <div className="flex md:hidden items-center gap-4 relative z-[1001]">
              <Link to="/cart" onClick={closeMenu} className="relative p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-colors duration-500 ${iconColorClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {totalItems > 0 && <span className="absolute top-1 right-1 bg-gold text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{totalItems}</span>}
              </Link>
              <button onClick={toggleMenu} className={`p-2 transition-colors duration-500 ${iconColorClass}`}>
                <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                  <span className={`w-full h-0.5 bg-current transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-all duration-500 ${isOpen ? 'translate-x-full opacity-0' : ''}`} />
                  <span className={`w-full h-0.5 bg-current transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Centered Mobile Menu (Modal Style) */}
      <div 
        className={`fixed inset-0 z-[998] md:hidden transition-all duration-500 flex items-center justify-center px-6 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" onClick={closeMenu} />
        <div 
          className={`relative w-full max-w-sm bg-cream/95 backdrop-blur-md rounded-[2.5rem] p-10 shadow-2xl border border-white/20 transition-all duration-700 transform ${
            isOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'
          }`}
        >
          <div className="flex flex-col items-center gap-6 mb-10">
            <NavLink to="/" className={({ isActive }) => `text-xl font-display tracking-[0.1em] transition-all duration-300 ${isActive ? 'text-gold scale-110' : 'text-charcoal hover:text-gold'}`}>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => `text-xl font-display tracking-[0.1em] transition-all duration-300 ${isActive ? 'text-gold scale-110' : 'text-charcoal hover:text-gold'}`}>Collection</NavLink>
            <NavLink to="/cart" className={({ isActive }) => `text-xl font-display tracking-[0.1em] transition-all duration-300 ${isActive ? 'text-gold scale-110' : 'text-charcoal hover:text-gold'}`}>My Cart ({totalItems})</NavLink>
          </div>
          <Link to="/products" onClick={closeMenu} className="block w-full bg-gold text-white text-center py-4 rounded-full font-body text-xs tracking-[0.3em] uppercase shadow-lg shadow-gold/20 hover:bg-gold/90 transition-all active:scale-95">Get Started</Link>
          <button onClick={closeMenu} className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
