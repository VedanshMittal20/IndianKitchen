import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";

export default function Footer() {
  return (
    <footer className="bg-void text-cream pt-20 pb-12 border-t border-gold/15 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-void-light/30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-sage/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Introduction & Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <BrandMark variant="light" size="lg" />
            </Link>
            <p className="font-sans font-light text-cream/60 leading-relaxed text-sm max-w-sm">
              An immersive culinary sanctuary where heritage recipes and sensory stagecraft collide across three themed worlds.
            </p>
            <form className="mt-4 flex flex-col gap-3 max-w-sm">
              <label htmlFor="newsletter" className="text-[9px] tracking-[0.25em] uppercase text-gold font-bold">
                Join our inner circle
              </label>
              <div className="flex border-b border-gold/30 focus-within:border-gold transition-colors py-1">
                <input 
                  type="email" 
                  id="newsletter" 
                  placeholder="Enter your email address" 
                  className="bg-transparent px-2 py-2 text-sm text-cream placeholder-cream/35 focus:outline-none w-full font-sans"
                  required
                />
                <button 
                  type="submit" 
                  className="text-gold hover:text-gold-light px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-colors shrink-0"
                >
                  Join →
                </button>
              </div>
            </form>
          </div>

          {/* Locations detail cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-void-light/40 border border-gold/10 p-6 rounded-sm">
              <span className="text-[9px] tracking-[0.25em] uppercase text-gold font-bold block mb-4">
                Colombo Outlet
              </span>
              <p className="font-display text-lg text-cream mb-2">Pondicherry Street</p>
              <p className="text-xs text-cream/60 mb-4 leading-relaxed font-sans font-light">
                357 R.A. De Mel Mawatha,<br />Kollupitiya, Colombo 00300
              </p>
              <span className="block text-[8px] tracking-wider text-gold uppercase mb-1 font-bold">Reservations & Info</span>
              <a href="tel:+94117112334" className="text-xs text-cream hover:text-gold transition-colors font-sans mb-3 block">+94 117 112 334</a>
              <span className="block text-[8px] tracking-wider text-cream/40 uppercase mb-1">Kitchen Hours</span>
              <p className="text-[11px] text-cream/60 font-sans font-light">Mon-Thu: 12:30PM - 11:30PM<br />Fri-Sun: 12:30PM - 3:00AM</p>
            </div>
            
            <div className="bg-void-light/40 border border-gold/10 p-6 rounded-sm">
              <span className="text-[9px] tracking-[0.25em] uppercase text-gold font-bold block mb-4">
                Kandy Outlet
              </span>
              <p className="font-display text-lg text-cream mb-2">Kerala Houseboat</p>
              <p className="text-xs text-cream/60 mb-4 leading-relaxed font-sans font-light">
                25/8 Sangaraja Mawatha,<br />Hillwood College Rd, Kandy 20000
              </p>
              <span className="block text-[8px] tracking-wider text-gold uppercase mb-1 font-bold">Reservations & Info</span>
              <a href="tel:+94817112334" className="text-xs text-cream hover:text-gold transition-colors font-sans mb-3 block">+94 817 112 334</a>
              <span className="block text-[8px] tracking-wider text-cream/40 uppercase mb-1">Kitchen Hours</span>
              <p className="text-[11px] text-cream/60 font-sans font-light">Mon-Sun: 10:00AM - 10:00PM</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 lg:pl-8">
            <span className="text-[9px] tracking-[0.25em] uppercase text-gold font-bold block mb-6">
              Navigation
            </span>
            <ul className="space-y-3 font-sans text-[10px] tracking-[0.2em] uppercase text-cream/70">
              {[
                ["A Tale of Spice", "/experience"],
                ["Our Sanctuaries", "/themes"],
                ["Culinary Passport", "/menu"],
                ["Beyond the Plate", "/services"],
                ["Franchise", "/franchise"],
                ["Table Bookings", "/reservations"],
                ["Careers", "/careers"],
              ].map(([name, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold transition-colors inline-block link-underline">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Massive Brand Wordmark */}
        <div className="w-full border-t border-cream/10 pt-10 select-none overflow-hidden">
          <h2 className="text-[12vw] font-display text-cream/[0.02] text-center tracking-[0.2em] leading-none uppercase select-none font-bold">
            INDIAN KITCHEN
          </h2>
        </div>

        {/* Bottom Metadata & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-6 border-t border-cream/5 gap-4">
          <p className="text-[9px] tracking-[0.25em] uppercase text-cream/40 font-sans">
            &copy; {new Date().getFullYear()} Indian Kitchen. Crafted for Culinary Immersions.
          </p>
          
          <div className="flex gap-6">
            {[
              {
                label: "Instagram",
                href: "https://www.instagram.com/indian.kitchen_/",
                path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01",
                rect: true
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/indiankitchenrestaurant/",
                path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
              }
            ].map((soc) => (
              <a 
                key={soc.label}
                href={soc.href} 
                target="_blank" 
                rel="noreferrer" 
                className="text-cream/50 hover:text-gold transition-colors duration-300 transform hover:scale-110"
                aria-label={soc.label}
              >
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {soc.rect && <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />}
                  <path d={soc.path} />
                </svg>
              </a>
            ))}
            
            {/* TikTok Icon */}
            <a 
              href="https://www.tiktok.com/@indian.kitchen_" 
              target="_blank" 
              rel="noreferrer" 
              className="text-cream/50 hover:text-gold transition-colors duration-300 transform hover:scale-110" 
              aria-label="TikTok"
            >
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
