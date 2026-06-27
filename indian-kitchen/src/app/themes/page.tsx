"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Volume2, VolumeX, ArrowLeft } from "lucide-react";
import HomeCTA from "@/components/home/HomeCTA";

export default function ThemesCinematicPage() {
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  return (
    <main className="w-full bg-surface-dark text-white relative">
      
      {/* Floating Audio Controller & Back Button */}
      <div className="fixed top-8 left-8 z-50 pointer-events-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[9px] tracking-[0.25em] font-bold text-white/70 hover:text-brand-golden transition-colors bg-surface-dark/90 px-4 py-2 border border-white/10 rounded-full shadow-lg"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Home
        </Link>
      </div>

      <div className="fixed top-8 right-8 z-50 pointer-events-auto flex items-center gap-3">
        {/* Cinematic sound visualizer simulation */}
        {isPlayingSound && (
          <div className="flex gap-0.5 items-end h-3 w-5">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: ["20%", "100%", "20%"] }}
                transition={{
                  duration: 0.6 + i * 0.15,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 bg-saffron-gold rounded-full"
              />
            ))}
          </div>
        )}
        <button
          onClick={() => setIsPlayingSound(!isPlayingSound)}
          className="inline-flex items-center gap-2 text-[9px] tracking-[0.25em] font-bold text-white/70 hover:text-brand-golden transition-colors bg-surface-dark/90 px-4 py-2 border border-white/10 rounded-full shadow-lg"
          aria-label="Toggle ambient soundtrack"
        >
          {isPlayingSound ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-brand-golden" />
              <span>Ambient On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-white/40" />
              <span>Ambient Off</span>
            </>
          )}
        </button>
      </div>

      {/* SECTION 1: THE WELCOME */}
      <section className="min-h-[100dvh] w-full relative flex items-center justify-center overflow-hidden bg-surface-dark">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105"
        >
          <source src="/videos/colombo_vibe.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-accent/80 via-transparent to-obsidian-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(11,12,16,0.9)_100%)]" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-brand-golden text-[9px] tracking-[0.35em] font-bold mb-4 block">
              Cinematic Dining
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline-md text-headline-md tracking-tight mb-6 leading-none text-shadow-xl drop-shadow-2xl">
              Immersive<br />Sanctuaries
            </h1>
            <p className="text-white/90 text-base md:text-lg font-light tracking-wide max-w-2xl mx-auto font-body-md leading-relaxed drop-shadow-md">
              Step through our portals. Each of our physical spaces is built as a complete theatrical scene designed to capture a specific mood, place, and historical epoch.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-12 text-brand-golden flex flex-col items-center pointer-events-none"
          >
            <span className="text-[8px] tracking-[0.3em] font-bold mb-1">Scroll to Travel</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PONDICHERRY STREET */}
      <section className="min-h-[100dvh] w-full relative flex items-center overflow-hidden bg-surface-dark">
        <Image 
          src="/images/real/gallery_3.jpg" 
          alt="Pondicherry Street Theme" 
          fill 
          className="object-cover img-warm opacity-40 scale-100"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-accent via-obsidian-accent/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(11,12,16,0.9)_100%)]" />
        
        <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-brand-golden text-[9px] tracking-[0.25em] font-bold mb-3 block border-l border-saffron-gold pl-3">
              Sanctuary 01 / Colombo
            </span>
            <h2 className="text-5xl md:text-7xl font-headline-md text-headline-md mb-6 tracking-wide leading-none drop-shadow-lg">
              Pondicherry<br />Street
            </h2>
            <p className="text-white/80 font-body-md font-light text-base leading-relaxed mb-8 max-w-xl drop-shadow-md">
              Step onto the cobblestone streets of the French Quarter. Colonial mustard-yellow walls, heavy timber arches, and vintage street lamps set the stage for a menu heavily influenced by coastal spice route heritage. It's an evening walk in a nostalgic bygone era.
            </p>
            <Link href="/reservations" className="btn-primary">
              Reserve Pondicherry
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: KERALA HOUSEBOAT */}
      <section className="min-h-[100dvh] w-full relative flex items-center overflow-hidden bg-surface-dark">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-100"
        >
          <source src="/videos/experience.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-l from-obsidian-accent via-obsidian-accent/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(11,12,16,0.9)_100%)]" />
        
        <div className="relative z-10 px-6 md:px-16 lg:px-24 w-full flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-right"
          >
            <span className="text-brand-golden text-[9px] tracking-[0.25em] font-bold mb-3 block border-r border-saffron-gold pr-3">
              Sanctuary 02 / Kandy
            </span>
            <h2 className="text-5xl md:text-7xl font-headline-md text-headline-md mb-6 tracking-wide leading-none drop-shadow-lg">
              Kerala<br />Houseboat
            </h2>
            <p className="text-white/80 font-body-md font-light text-base leading-relaxed mb-8 max-w-xl ml-auto drop-shadow-md">
              Float down the tranquil backwaters of Malabar. Woven panels of raw bamboo, the quiet warmth of flickering oil lanterns, and ambient aquatic sounds create a pocket of absolute stillness. The ideal sanctuary for our coconut-infused coastal delicacies.
            </p>
            <Link href="/reservations" className="btn-primary">
              Board the Houseboat
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: THE SHERLOCK */}
      <section className="min-h-[100dvh] w-full relative flex items-center justify-center overflow-hidden bg-surface-dark">
        <Image 
          src="/images/private_dining.png" 
          alt="The Sherlock Mystery Dining Theme" 
          fill 
          className="object-cover img-warm opacity-40 scale-100"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-surface-dark/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(11,12,16,0.95)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-accent to-transparent opacity-90" />
        
        <div className="relative z-10 px-6 text-center max-w-3xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <span className="text-brand-golden text-[9px] tracking-[0.25em] font-bold mb-4 block">
              Sanctuary 03 / Colombo
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-headline-md text-headline-md mb-6 tracking-wide leading-none drop-shadow-lg">
              The Sherlock
            </h2>
            <div className="h-[1px] w-16 bg-saffron-gold/40 mb-8" />
            <p className="text-white/80 font-body-md font-light text-base leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-md">
              Our most theatrical mystery dining room. Step into a gaslit, dark Victorian study filled with vintage leather armchairs, sliding panels, and riddles. Every table receives a private dossier. Every course unlocks a clue. Will you decode the menu and solve the culinary mystery?
            </p>
            <Link href="/reservations" className="btn-outline">
              Investigate Sanctum
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="min-h-[100dvh] w-full relative flex flex-col justify-center bg-surface-dark">
        <HomeCTA />
        {/* Decorative footer filler */}
        <div className="flex-1 max-h-[15vh] bg-surface-dark border-t border-white/10" />
      </section>

      {/* Ambient Audio simulation element (silent mock if no file, but updates UI status) */}
      <audio id="ambient-audio" loop src="/audio/drone.mp3" className="hidden" />

      <style jsx global>{`
        #ambient-audio {
          display: none;
        }
      `}</style>
    </main>
  );
}
