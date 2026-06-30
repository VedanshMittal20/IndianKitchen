import Link from "next/link";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-deep-forest text-brand-warm-cream py-16 relative z-10 overflow-hidden mx-4 mb-4 rounded-sm">
      {/* Background styling for consistency */}
      <div className="absolute inset-0 noise-overlay opacity-30 mix-blend-overlay"></div>
      
      {/* Footer Mandala Backdrop */}
      <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center mix-blend-color-dodge">
        <img src="/footer_mandala_backdrop.jpg" alt="Footer Mandala" className="w-[800px] h-[800px] object-contain opacity-50" />
      </div>
      
      <div className="max-w-container-max mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-6 group">
            <div className="relative w-48 h-10 flex items-center justify-start transition-opacity group-hover:opacity-80" 
                 style={{ filter: "brightness(0) invert(1) opacity(0.9)" }}>
              <img 
                src="/logo_horizontal.png" 
                alt="Indian Kitchen Logo" 
                className="object-contain object-left w-full h-full" 
              />
            </div>
          </Link>
          <p className="font-body-md text-brand-warm-cream/70 text-sm leading-relaxed max-w-xs">
            Experience the refined, curated journey of Indian dining. Where authentic heritage meets upscale sophistication.
          </p>
        </div>

        {/* Explore Links */}
        <div className="col-span-1">
          <ul className="space-y-4">
            <li>
              <Link href="/menu" className="font-label-sm uppercase tracking-wider text-brand-warm-cream/80 hover:text-brand-golden transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/themes" className="font-label-sm uppercase tracking-wider text-brand-warm-cream/80 hover:text-brand-golden transition-colors">
                Ambience
              </Link>
            </li>
            <li>
              <Link href="/careers" className="font-label-sm uppercase tracking-wider text-brand-warm-cream/80 hover:text-brand-golden transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="col-span-1">
          <h4 className="font-label-lg uppercase tracking-[0.1em] text-brand-golden mb-6 text-sm">Legal</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/privacy" className="font-label-sm uppercase tracking-wider text-brand-warm-cream/80 hover:text-brand-golden transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="font-label-sm uppercase tracking-wider text-brand-warm-cream/80 hover:text-brand-golden transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="col-span-1">
          <h4 className="font-label-lg uppercase tracking-[0.1em] text-brand-golden mb-6 text-sm">Social</h4>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/indian.kitchen_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-golden/30 flex items-center justify-center text-brand-golden hover:border-brand-golden hover:text-brand-warm-cream hover:bg-brand-golden/10 transition-all">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/indiankitchenrestaurant" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-golden/30 flex items-center justify-center text-brand-golden hover:border-brand-golden hover:text-brand-warm-cream hover:bg-brand-golden/10 transition-all">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="https://wa.me/94117112334" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-golden/30 flex items-center justify-center text-brand-golden hover:border-brand-golden hover:text-brand-warm-cream hover:bg-brand-golden/10 transition-all">
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>
        </div>
        
      </div>

      <div className="max-w-container-max mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-brand-golden/20 relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-brand-warm-cream/50 uppercase tracking-widest text-xs">
          &copy; {new Date().getFullYear()} INDIAN KITCHEN – THEME DINING. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
