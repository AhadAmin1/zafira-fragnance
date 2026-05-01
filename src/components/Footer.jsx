import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-charcoal text-white/60 mt-24">
    <div className="border-t border-gold/10" />
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center md:items-start text-center md:text-left">
        <div>
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 overflow-hidden">
              <div className="absolute inset-0 border border-gold/30 rounded-full group-hover:border-gold/60 transition-colors duration-500"></div>
              <img 
                src="/products/logo.jpeg" 
                alt="Zafira Logo" 
                className="w-full h-full object-cover rounded-full"
              />
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
          <p className="text-sm font-body text-white/40">✉️ zafirafragrances8@gmail.com</p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white text-xs font-body tracking-[0.3em] uppercase mb-2">Social</h4>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm font-body">Instagram</a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm font-body">Facebook</a>
          </div>
        </div>
      </div>
      
      {/* Bottom Copyright Bar */}
      <div className="border-t border-gold/5 mt-16 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] md:text-xs font-body tracking-[0.2em] text-white/30 uppercase">
          © {new Date().getFullYear()} Zafira Fragrances House. All Rights Reserved.
        </p>
        <p className="text-[10px] md:text-xs font-body tracking-[0.2em] text-white/20 uppercase">
          Karachi, Pakistan
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
