import PageHero from "@/components/ui/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Themes | Indian Kitchen",
  description:
    "Explore Pondicherry Street, Kerala Houseboat, and Sherlock Mystery Dining — three immersive worlds across Colombo and Kandy.",
};

export default function ThemesPage() {
  return (
    <main className="bg-paper min-h-screen">
      <PageHero
        label="Immersive Worlds"
        title="Three Themed Dining Experiences"
        subtitle="Each outlet is a painstakingly crafted universe — from Indo-French nostalgia to Victorian mystery."
        image="/images/real/kandy_hero_day.jpg"
      />

      {/* Theme 1: Pondicherry Street */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <SectionLabel className="mb-4">Theme 01 • Colombo</SectionLabel>
              <h2 className="text-4xl md:text-6xl font-display text-forest mb-6">Pondicherry Street</h2>
              <div className="h-1 w-16 bg-gold mb-8"></div>
              <p className="text-text-dark/80 text-lg md:text-xl font-light leading-relaxed mb-6">
                Step onto the cobblestone streets of the French Quarter. Our flagship theme captures the dual soul of Pondicherry — where colonial French elegance meets vibrant Tamil culture.
              </p>
              <p className="text-text-dark/80 text-lg font-light leading-relaxed mb-10">
                Surrounded by mustard-yellow walls, terracotta planters, and vintage street lamps, you&apos;ll experience a menu heavily influenced by the coastal spice routes. It&apos;s not just a meal; it&apos;s a nostalgic evening stroll.
              </p>
              <Link href="/reservations" className="btn-primary">
                Reserve Pondicherry
              </Link>
            </div>
            
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
              <div className="relative h-full rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 shadow-xl gold-frame">
                <Image src="/images/theme_pondicherry.png" alt="Pondicherry Street" fill className="object-cover img-warm" />
              </div>
              <div className="grid grid-rows-2 gap-4 h-full">
                <div className="relative rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 shadow-xl gold-frame">
                  <Image src="/images/real/colombo_ceremony.jpg" alt="Pondicherry Details" fill className="object-cover img-warm" />
                </div>
                <div className="relative rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 shadow-xl gold-frame">
                  <Image src="/images/kadai_paneer.png" alt="Pondicherry Cuisine" fill className="object-cover img-warm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theme 2: Kerala Houseboat */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
            poster="/images/real/kandy_hero_night.jpg"
          >
            <source src="/videos/experience.mov" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-void via-sage/80 to-void opacity-90 mix-blend-multiply"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <SectionLabel light className="mb-4 justify-center">Theme 02 • Kandy</SectionLabel>
            <h2 className="text-5xl md:text-7xl font-display text-cream mb-6 tracking-wide drop-shadow-xl">
              Kerala Houseboat
            </h2>
            <div className="h-1 w-24 bg-sage-light mx-auto mb-8 shadow-lg"></div>
            <p className="text-cream/90 text-xl md:text-2xl font-light leading-relaxed mb-12 drop-shadow-md">
              Float through the serene backwaters of Malabar. Woven bamboo panels, the warm glow of lantern light, and the gentle sounds of water create a sanctuary of absolute tranquility. Pair it with our fiery, coconut-rich coastal dishes for an unforgettable escape.
            </p>
            <Link href="/reservations" className="btn-outline">
              Board the Houseboat
            </Link>
          </div>
        </div>
      </section>

      {/* Theme 3: The Sherlock */}
      <section className="py-24 md:py-32 bg-void text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #8B0000 0%, transparent 70%)' }}></div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-gold/30 gold-frame group">
              <Image 
                src="/images/private_dining.png" 
                alt="The Sherlock Mystery Dining" 
                fill 
                className="object-cover img-warm group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-void/30 group-hover:bg-void/10 transition-colors duration-700"></div>
            </div>

            <div className="lg:col-span-7 animate-fade-in-up">
              <SectionLabel light className="mb-4 text-gold">Theme 03 • Colombo</SectionLabel>
              <h2 className="text-5xl md:text-7xl font-display mb-6 text-cream tracking-tight">
                The Sherlock
              </h2>
              <div className="h-[2px] w-20 bg-gradient-to-r from-gold to-transparent mb-8"></div>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-sm mb-8">
                <h3 className="font-display text-2xl text-gold mb-4 uppercase tracking-[0.2em]">Mystery Dining</h3>
                <p className="text-cream/70 text-lg font-light leading-relaxed mb-6">
                  Victorian study meets Indian masala. This is our most theatrical and interactive theme. Step into a dimly lit, gaslit study filled with leather armchairs, brass instruments, and old maps.
                </p>
                <p className="text-cream/70 text-lg font-light leading-relaxed">
                  Every table receives a case file. Every course reveals a clue. Will you decode the menu and solve the mystery before dessert is served? 
                </p>
              </div>

              <Link href="/reservations" className="btn-outline border-gold text-gold hover:bg-gold hover:text-void">
                Investigate The Sherlock
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
