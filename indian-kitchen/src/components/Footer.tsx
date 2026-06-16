import Link from "next/link";
import { Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream pt-24 pb-12 border-t border-wood">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="group flex flex-col">
              <span className="font-display text-2xl tracking-[0.15em] uppercase text-cream">
                Indian Kitchen
              </span>
              <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-yellow mt-1">
                Art & Saveur
              </span>
            </Link>
            <p className="font-display italic text-xl text-cream/70 leading-relaxed">
              We don&apos;t serve food.<br />We serve journeys.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com" className="text-cream/50 hover:text-yellow transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://tiktok.com" className="text-cream/50 hover:text-yellow transition-colors font-display font-bold text-lg leading-none" aria-label="TikTok">
                TK
              </a>
              <a href="https://facebook.com" className="text-cream/50 hover:text-yellow transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-wood mb-8">Navigate</h4>
            <ul className="space-y-4 font-sans text-[11px] tracking-[0.2em] uppercase text-cream/60">
              <li><Link href="/" className="hover:text-yellow transition-colors">Home</Link></li>
              <li><Link href="/#experience" className="hover:text-yellow transition-colors">The Experience</Link></li>
              <li><Link href="/#themes" className="hover:text-yellow transition-colors">Themes</Link></li>
              <li><Link href="/menu" className="hover:text-yellow transition-colors">Menu</Link></li>
              <li><Link href="/blog" className="hover:text-yellow transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-yellow transition-colors">Careers</Link></li>
              <li><Link href="/franchise" className="hover:text-yellow transition-colors">Franchise</Link></li>
            </ul>
          </div>

          {/* Column 3: Reach Us */}
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-wood mb-8">Reach Us</h4>
            <div className="space-y-6">
              <div>
                <p className="font-sans text-[11px] tracking-[0.1em] text-cream/80 leading-relaxed uppercase">
                  357 R.A. De Mel Mawatha<br />Colombo 03, Sri Lanka
                </p>
              </div>
              <div>
                <a href="tel:+94117112334" className="font-display text-xl hover:text-yellow transition-colors block mb-2">
                  +94 117 112 334
                </a>
                <a href="mailto:info@indiankitchen.lk" className="font-sans text-[11px] tracking-[0.2em] uppercase text-cream/60 hover:text-yellow transition-colors">
                  info@indiankitchen.lk
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.3em] uppercase text-wood mb-8">Opening Hours</h4>
            <ul className="space-y-4 font-sans text-[11px] tracking-[0.1em] text-cream/60 uppercase">
              <li className="flex justify-between border-b border-wood/30 pb-2">
                <span>Mon &ndash; Thu</span>
                <span className="text-cream text-right">12:30 PM &ndash; 11:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-wood/30 pb-2">
                <span>Fri &ndash; Sat</span>
                <span className="text-yellow text-right">12:30 PM &ndash; 3:00 AM<br/><span className="text-[9px] text-cream/40">(Late Night)</span></span>
              </li>
              <li className="flex justify-between border-b border-wood/30 pb-2">
                <span>Sunday</span>
                <span className="text-cream text-right">12:30 PM &ndash; 11:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-wood flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[9px] tracking-[0.2em] uppercase text-cream/40">
          <p>&copy; {new Date().getFullYear()} Indian Kitchen. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-yellow transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-yellow transition-colors">Terms of Service</Link>
          </div>
          <p className="flex items-center gap-2">
            Crafted with <Flame className="w-3 h-3 text-yellow" /> by HabiGo 360
          </p>
        </div>
      </div>
    </footer>
  );
}
