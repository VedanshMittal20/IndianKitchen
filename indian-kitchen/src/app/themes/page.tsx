"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function ThemesCinematicPage() {
  return (
    <main className="h-[100dvh] w-full overflow-y-auto snap-y snap-mandatory bg-void hide-scrollbar relative">
      
      {/* Global Navbar Overlay for this page (optional minimal nav) */}
      <div className="fixed top-8 left-0 w-full z-50 flex justify-between px-8 pointer-events-none">
        <div className="text-cream text-xs uppercase tracking-[0.3em] font-semibold mix-blend-difference pointer-events-auto">
          <Link href="/">← Back to Home</Link>
        </div>
      </div>

      {/* SECTION 1: THE WELCOME */}
      <section className="h-[100dvh] w-full snap-start relative flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/videos/colombo_vibe.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void/80" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">
              Discover Our Worlds
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-cream tracking-tight mb-6 drop-shadow-lg">
              Cinematic Dining.
            </h1>
            <p className="text-cream/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
              Scroll down to explore three painstakingly crafted universes. Each outlet is an immersive journey across space and time.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-12 text-cream/50 animate-bounce"
          >
            <ArrowDown strokeWidth={1} className="w-8 h-8" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PONDICHERRY STREET */}
      <section className="h-[100dvh] w-full snap-start relative flex items-center overflow-hidden">
        <Image 
          src="/images/real/gallery_3.jpg" 
          alt="Pondicherry Street" 
          fill 
          className="object-cover img-warm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-void/50 to-transparent" />
        <div className="absolute inset-0 bg-terracotta/20 mix-blend-multiply" />
        
        <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-terracotta text-[10px] tracking-[0.3em] uppercase font-bold mb-4 block border-l-2 border-terracotta pl-3">
              Theme 01
            </span>
            <h2 className="text-5xl md:text-7xl font-display text-cream mb-6 leading-tight">
              Pondicherry Street
            </h2>
            <p className="text-cream/80 text-lg font-light leading-relaxed mb-8">
              Step onto the cobblestone streets of the French Quarter. Colonial arches, mustard-yellow walls, and vintage street lamps set the stage for a menu heavily influenced by the coastal spice routes. It&apos;s not just a meal; it&apos;s a nostalgic evening stroll through an era gone by.
            </p>
            <Link href="/reservations" className="inline-flex items-center gap-3 bg-terracotta text-cream px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold transition-colors duration-300">
              Reserve Pondicherry
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: KERALA HOUSEBOAT */}
      <section className="h-[100dvh] w-full snap-start relative flex items-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/experience.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-l from-void/90 via-void/50 to-transparent" />
        <div className="absolute inset-0 bg-sage/30 mix-blend-multiply" />
        
        <div className="relative z-10 px-8 md:px-16 lg:px-24 w-full flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-right"
          >
            <span className="text-sage-light text-[10px] tracking-[0.3em] uppercase font-bold mb-4 block border-r-2 border-sage-light pr-3">
              Theme 02
            </span>
            <h2 className="text-5xl md:text-7xl font-display text-cream mb-6 leading-tight">
              Kerala Houseboat
            </h2>
            <p className="text-cream/80 text-lg font-light leading-relaxed mb-8">
              Float through the serene backwaters of Malabar. Woven bamboo panels, the warm glow of lantern light, and the gentle sounds of water create a sanctuary of absolute tranquility. Pair it with our fiery, coconut-rich coastal dishes for an unforgettable escape.
            </p>
            <Link href="/reservations" className="inline-flex items-center gap-3 bg-sage text-cream px-8 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold transition-colors duration-300">
              Board the Houseboat
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: THE SHERLOCK */}
      <section className="h-[100dvh] w-full snap-start relative flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/private_dining.png" 
          alt="The Sherlock Mystery Dining" 
          fill 
          className="object-cover img-warm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-void/70" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(139,0,0,0.2) 0%, transparent 70%)' }}></div>
        
        <div className="relative z-10 px-8 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-bold mb-6 block">
              Theme 03
            </span>
            <h2 className="text-6xl md:text-8xl font-display text-cream mb-6 tracking-tight">
              The Sherlock
            </h2>
            <div className="h-[1px] w-24 bg-gold mx-auto mb-8" />
            <p className="text-cream/80 text-lg font-light leading-relaxed mb-10">
              Victorian study meets Indian masala. Our most theatrical and interactive theme. Step into a dimly lit, gaslit study filled with leather armchairs. Every table receives a case file. Every course reveals a clue. Will you decode the menu and solve the mystery?
            </p>
            <Link href="/reservations" className="inline-flex items-center gap-3 border border-gold text-gold px-10 py-4 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-gold hover:text-void transition-all duration-300">
              Investigate Now
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
