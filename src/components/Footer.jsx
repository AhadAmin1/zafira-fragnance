import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-charcoal text-white/60 mt-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex flex-col items-center md:items-start mb-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10">
                <div className="absolute inset-0 border border-gold/30 rounded-full group-hover:border-gold/60 transition-colors duration-500"></div>
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-gold drop-shadow-[0_0_8px_rgba(201,169,110,0.4)]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 12h-4.5l4.5-5.5V8h-6v2h4.5L10.5 15.5V17h6v-2z"/>
                </svg>
              </div>
              <div className="flex flex-col -gap-1">
                <span className="text-xl font-display font-bold tracking-[0.2em] text-white leading-none">ZAFIRA</span>
                <span className="text-[10px] font-body tracking-[0.4em] text-gold uppercase leading-none">Fragrances</span>
              </div>
            </Link>
            <p className="text-sm font-body mt-4">Luxury fragrances for the discerning soul.</p>
          </div>
        </div>
        <div className="text-sm font-body text-center">
          <p className="mb-1">📍 Karachi, Pakistan</p>
          <p>📞 +92 309 2199720</p>
        </div>
        <div className="text-sm font-body text-center md:text-right">
          <p>© {new Date().getFullYear()} Zafira Fragrances.</p>
          <p className="text-white/30 text-xs mt-1">All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
