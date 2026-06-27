"use client";

import Link from "next/link";
import { motion } from "framer-motion";



export default function HomeHeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-surface overflow-hidden pt-24">
      {/* Local Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 mix-blend-luminosity pointer-events-none"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-surface/70 z-0 pointer-events-none"></div>

      {/* Background Texture & Noise */}
      <div className="absolute inset-0 noise-overlay z-0 mix-blend-overlay opacity-30"></div>
      
      <div className="relative z-10 w-full max-w-container-max mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center">
        
        {/* Small Logo Mark above Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex flex-col items-center gap-2"
        >
          <div className="w-10 h-10 bg-brand-warm-cream flex items-center justify-center font-display-lg text-surface text-2xl font-bold rounded-sm">
              IK
          </div>
          <span className="font-label-lg tracking-[0.2em] text-brand-warm-cream uppercase text-xs">
            Indian Kitchen
          </span>
        </motion.div>

        {/* Main Headlines */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display-lg text-6xl md:text-8xl lg:text-[120px] text-brand-warm-cream tracking-wider uppercase mb-2 leading-none"
        >
          INDIAN KITCHEN
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-headline-md text-2xl md:text-4xl text-brand-golden tracking-[0.3em] uppercase mb-16"
        >
          THEME DINING
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-md mx-auto sm:max-w-none justify-center"
        >
          <Link href="/reservations" className="btn-primary w-full sm:w-auto">
            RESERVE A TABLE
          </Link>
          <Link href="/menu" className="btn-outline w-full sm:w-auto">
            VIEW MENU
          </Link>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-warm-cream/10 to-transparent pointer-events-none"></div>
    </section>
  );
}
