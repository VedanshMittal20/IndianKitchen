import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";

export default function Footer() {
  return (
    <footer className="bg-void text-cream pt-14 pb-10 border-t border-gold/20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="flex flex-col gap-5">
            <BrandMark variant="light" size="lg" />
            <p className="font-light text-cream/70 leading-relaxed text-sm">
              Authentic Indian cuisine &amp; immersive ambience — theme dining in Colombo &amp; Kandy.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/indian.kitchen_/"
                target="_blank"
                rel="noreferrer"
                className="text-cream/50 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="https://www.tiktok.com/@indian.kitchen_"
                target="_blank"
                rel="noreferrer"
                className="text-cream/50 hover:text-gold transition-colors"
                aria-label="TikTok"
              >
                TK
              </a>
              <a
                href="https://www.facebook.com/indiankitchenrestaurant/"
                target="_blank"
                rel="noreferrer"
                className="text-cream/50 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                FB
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold mb-5 pipe-item">
              Navigate
            </h4>
            <ul className="space-y-2.5 font-sans text-[10px] tracking-[0.14em] uppercase text-cream/55">
              {[
                ["Experience", "/experience"],
                ["Themes", "/themes"],
                ["Menu", "/menu"],
                ["Reservations", "/reservations"],
                ["Blog", "/blog"],
                ["Careers", "/careers"],
                ["Contact", "/contact"],
                ["Franchise", "/franchise"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold mb-5 pipe-item">
              Reach Us
            </h4>
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              357 R.A. De Mel Mawatha
              <br />
              Colombo 03, Sri Lanka
            </p>
            <a href="tel:+94117112334" className="font-display text-lg hover:text-gold transition-colors block">
              +94 117 112 334
            </a>
          </div>

          <div>
            <h4 className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold mb-5 pipe-item">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-[10px] tracking-[0.08em] text-cream/55 uppercase">
              <li className="flex justify-between gap-4 border-b border-cream/10 pb-2">
                <span>Mon – Thu</span>
                <span className="text-cream">12:30 – 11:30 PM</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-cream/10 pb-2">
                <span>Fri – Sat</span>
                <span className="text-gold">12:30 – 3:00 AM</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-cream">12:30 – 11:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[9px] tracking-[0.2em] uppercase text-cream/35">
          <p>&copy; {new Date().getFullYear()} Indian Kitchen Theme Dining</p>
          <p className="text-signal/80">Authentic Indian Cuisine · Immersive Ambience</p>
        </div>
      </div>
    </footer>
  );
}
