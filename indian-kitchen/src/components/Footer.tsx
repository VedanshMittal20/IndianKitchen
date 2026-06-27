import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-deep-forest text-brand-warm-cream py-16 border-t border-brand-sandy/20 relative z-10 overflow-hidden">
      {/* Background styling for consistency */}
      <div className="absolute inset-0 noise-overlay"></div>
      
      <div className="max-w-container-max mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-6 group">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-warm-cream flex items-center justify-center font-display-lg text-brand-deep-forest text-xl font-bold">
                    IK
                </div>
                <div className="flex flex-col leading-none">
                    <span className="font-headline-sm text-brand-warm-cream tracking-widest uppercase transition-colors group-hover:text-brand-golden">
                        INDIAN
                    </span>
                    <span className="font-headline-sm text-brand-warm-cream tracking-widest uppercase transition-colors group-hover:text-brand-golden">
                        KITCHEN
                    </span>
                </div>
            </div>
          </Link>
          <p className="font-body-md text-brand-sandy/80 text-sm leading-relaxed max-w-xs">
            Experience the raw, urban energy of Indian theme dining. Where tradition meets industrial sophistication.
          </p>
        </div>

        {/* Explore Links */}
        <div className="col-span-1">
          <h4 className="font-label-lg uppercase tracking-[0.1em] text-brand-golden mb-6 text-sm">Explore</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/menu" className="font-label-sm uppercase tracking-wider text-brand-warm-cream hover:text-brand-accent-green transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/themes" className="font-label-sm uppercase tracking-wider text-brand-warm-cream hover:text-brand-accent-green transition-colors">
                Ambience
              </Link>
            </li>
            <li>
              <Link href="/careers" className="font-label-sm uppercase tracking-wider text-brand-warm-cream hover:text-brand-accent-green transition-colors">
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
              <Link href="/privacy" className="font-label-sm uppercase tracking-wider text-brand-warm-cream hover:text-brand-accent-green transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="font-label-sm uppercase tracking-wider text-brand-warm-cream hover:text-brand-accent-green transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="col-span-1">
          <h4 className="font-label-lg uppercase tracking-[0.1em] text-brand-golden mb-6 text-sm">Social</h4>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/indian.kitchen_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-sandy flex items-center justify-center text-brand-warm-cream hover:border-brand-accent-green hover:text-brand-accent-green hover:bg-brand-accent-green/10 transition-all">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/indiankitchenrestaurant" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-brand-sandy flex items-center justify-center text-brand-warm-cream hover:border-brand-accent-green hover:text-brand-accent-green hover:bg-brand-accent-green/10 transition-all">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-brand-sandy flex items-center justify-center text-brand-warm-cream hover:border-brand-accent-green hover:text-brand-accent-green hover:bg-brand-accent-green/10 transition-all">
              <FaTwitter className="w-4 h-4" />
            </a>
          </div>
        </div>
        
      </div>

      <div className="max-w-container-max mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-brand-sandy/10 relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-label-sm text-brand-sandy/60 uppercase tracking-widest text-xs">
          &copy; {new Date().getFullYear()} INDIAN KITCHEN – THEME DINING. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
