import Link from "next/link";
import { Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-void text-cream pt-16 pb-8 border-t border-border-gold">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Flame className="w-8 h-8 text-gold group-hover:text-terracotta transition-colors" />
              <span className="font-display text-3xl tracking-wide font-semibold">
                Indian Kitchen
              </span>
            </Link>
            <p className="text-cream/80 text-lg italic font-display">
              "We don't serve food. We serve journeys."
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/indian.kitchen_/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-void transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              {/* Note: TikTok icon isn't in lucide by default, using custom SVG or fallback */}
              <a
                href="https://www.tiktok.com/@ikthemedining"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-void transition-colors font-bold text-sm"
                aria-label="TikTok"
              >
                TK
              </a>
              <a
                href="https://www.facebook.com/indiankitchenrestaurant/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-void transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <h4 className="font-display text-xl text-gold mb-6 border-b border-border-gold pb-2 inline-block">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3 text-cream/80 text-sm">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/#experience" className="hover:text-gold transition-colors">The Experience</Link></li>
              <li><Link href="/#themes" className="hover:text-gold transition-colors">Themes</Link></li>
              <li><Link href="/menu" className="hover:text-gold transition-colors">Menu</Link></li>
              <li><Link href="/#reservations" className="hover:text-gold transition-colors">Reservations</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-gold transition-colors">Careers</Link></li>
              <li><Link href="/franchise" className="hover:text-gold transition-colors">Franchise</Link></li>
            </ul>
          </div>

          {/* Column 3: Reach Us */}
          <div>
            <h4 className="font-display text-xl text-gold mb-6 border-b border-border-gold pb-2 inline-block">
              Reach Us
            </h4>
            <ul className="flex flex-col gap-4 text-cream/80 text-sm">
              <li className="leading-relaxed">
                <strong className="block text-cream mb-1">Pondicherry Street Outlet</strong>
                357 R.A. De Mel Mawatha,<br />
                Colombo 03, Sri Lanka
              </li>
              <li>
                <a href="tel:+94117112334" className="hover:text-gold transition-colors">
                  +94 117 112 334
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/94117112334?text=Hello!%20I'd%20like%20to%20enquire%20about..."
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold hover:text-terracotta transition-colors underline underline-offset-4"
                >
                  Chat with us instantly
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="font-display text-xl text-gold mb-6 border-b border-border-gold pb-2 inline-block">
              Hours
            </h4>
            <ul className="flex flex-col gap-4 text-cream/80 text-sm">
              <li className="flex flex-col gap-1">
                <strong className="text-cream">Mon &ndash; Thu</strong>
                <span>12:30 PM &ndash; 11:30 PM</span>
              </li>
              <li className="flex flex-col gap-1">
                <strong className="text-cream">Fri &ndash; Sat</strong>
                <span>12:30 PM &ndash; 3:00 AM</span>
              </li>
              <li className="flex flex-col gap-1">
                <strong className="text-cream">Sunday</strong>
                <span>12:30 PM &ndash; 11:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-gold flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>&copy; {new Date().getFullYear()} Indian Kitchen Theme Dining. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms &amp; Conditions</Link>
          </div>
          <p>Crafted by HabiGo 360</p>
        </div>
      </div>
    </footer>
  );
}
