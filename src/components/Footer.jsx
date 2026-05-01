import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-charcoal text-white/60 mt-24">
    <div className="border-t border-gold/10" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center md:items-start text-center md:text-left">
        <div>
          <Link to="/" className="inline-flex items-center gap-3 group">
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
          <p className="text-sm font-body mt-6 text-white/40 max-w-xs mx-auto md:mx-0">
            Discover scents that tell your story. Handpicked luxury perfumes crafted for those who dare to be memorable.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xs font-body tracking-[0.3em] uppercase mb-2">Get in Touch</h4>
          <p className="text-sm font-body text-white/40">📍 Karachi, Pakistan</p>
          <p className="text-sm font-body text-white/40">📞 +92 309 2199720</p>
          <p className="text-sm font-body text-white/40">✉️ support@zafira.com</p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xs font-body tracking-[0.3em] uppercase mb-2">Legal</h4>
          <p className="text-sm font-body text-white/40">© {new Date().getFullYear()} Zafira Fragrances.</p>
          <p className="text-white/20 text-[10px] mt-1 font-body tracking-wider uppercase">All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
