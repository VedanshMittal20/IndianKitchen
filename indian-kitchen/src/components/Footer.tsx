import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";

export default function Footer() {
  return (
    <footer className="bg-void text-cream pt-20 pb-10 border-t border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
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
                123 Galle Road,<br />Kollupitiya, Colombo 03
              </p>
              <p className="text-[10px] uppercase tracking-wider text-cream/70 mb-1">Hours</p>
              <p className="text-xs text-cream/50">Mon-Thu: 11AM - 11PM<br />Fri-Sun: 11AM - 3AM</p>
            </div>
            <div>
              <h4 className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold mb-5 pipe-item">
                Kandy
              </h4>
              <p className="text-sm text-cream font-medium mb-2">Kerala Houseboat</p>
              <p className="text-xs text-cream/50 mb-4 leading-relaxed">
                45 Lake Round,<br />Kandy
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
                ["Flavors of the Homeland", "/menu"],
                ["Beyond the Plate", "/services"],
                ["Franchise Opportunities", "/franchise"],
                ["Contact & Bookings", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold transition-colors inline-block">
                    {label}
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
          <div className="flex gap-6">
            <a href="#" className="text-cream/30 hover:text-gold transition-colors text-xs uppercase tracking-widest">IG</a>
            <a href="#" className="text-cream/30 hover:text-gold transition-colors text-xs uppercase tracking-widest">FB</a>
            <a href="#" className="text-cream/30 hover:text-gold transition-colors text-xs uppercase tracking-widest">TK</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
