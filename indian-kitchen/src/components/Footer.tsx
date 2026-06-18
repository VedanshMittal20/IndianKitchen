import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";

export default function Footer() {
  return (
    <footer className="bg-void text-cream pt-20 pb-10 border-t border-gold/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sage/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <BrandMark variant="light" size="lg" />
            <p className="font-light text-cream/70 leading-relaxed text-sm">
              Authentic Indian cuisine &amp; immersive theme dining.
            </p>
            <form className="mt-4 flex flex-col gap-3">
              <label htmlFor="newsletter" className="text-[10px] tracking-widest uppercase text-gold">
                Join our Inner Circle
              </label>
              <div className="flex">
                <input 
                  type="email" 
                  id="newsletter" 
                  placeholder="Enter your email" 
                  className="bg-cream/5 border border-cream/10 rounded-l-full px-4 py-2 text-sm text-cream focus:outline-none focus:border-gold w-full"
                />
                <button type="submit" className="bg-gold text-void px-5 py-2 rounded-r-full text-xs font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors">
                  Join
                </button>
              </div>
            </form>
          </div>

          {/* Locations */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold mb-5 pipe-item">
                Colombo
              </h4>
              <p className="text-sm text-cream font-medium mb-2">Pondicherry Street</p>
              <p className="text-xs text-cream/50 mb-4 leading-relaxed">
                357 R.A. De Mel Mawatha,<br />Kollupitiya, Colombo 00300
              </p>
              <p className="text-[10px] uppercase tracking-wider text-cream/70 mb-1">Hours</p>
              <p className="text-xs text-cream/50">Mon-Thu: 12:30PM - 11:30PM<br />Fri-Sun: 12:30PM - 3:00AM</p>
            </div>
            <div>
              <h4 className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold mb-5 pipe-item">
                Kandy
              </h4>
              <p className="text-sm text-cream font-medium mb-2">Kerala Houseboat</p>
              <p className="text-xs text-cream/50 mb-4 leading-relaxed">
                25/8 Sangaraja Mawatha,<br />Hillwood College Rd, Kandy 20000
              </p>
              <p className="text-[10px] uppercase tracking-wider text-cream/70 mb-1">Hours</p>
              <p className="text-xs text-cream/50">Mon-Sun: 10AM - 10PM</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold mb-5 pipe-item">
              Navigate
            </h4>
            <ul className="space-y-3 font-sans text-[10px] tracking-[0.14em] uppercase text-cream/55">
              {[
                ["A Tale of Spice & Time", "/experience"],
                ["Our Themed Sanctuaries", "/themes"],
                ["The Culinary Passport", "/menu"],
                ["Beyond the Plate", "/services"],
                ["Franchise Opportunities", "/franchise"],
                ["Reservations", "/reservations"],
              ].map(([name, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold transition-colors inline-block">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cream/10 gap-4">
          <p className="text-[10px] tracking-widest uppercase text-cream/30">
            &copy; {new Date().getFullYear()} Indian Kitchen. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="https://www.instagram.com/indian.kitchen_/" target="_blank" rel="noreferrer" className="text-cream/40 hover:text-gold transition-colors" aria-label="Instagram">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://www.facebook.com/indiankitchenrestaurant/" target="_blank" rel="noreferrer" className="text-cream/40 hover:text-gold transition-colors" aria-label="Facebook">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@indian.kitchen_" target="_blank" rel="noreferrer" className="text-cream/40 hover:text-gold transition-colors" aria-label="TikTok">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
