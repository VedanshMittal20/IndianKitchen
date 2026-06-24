"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, MapPin, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-void flex flex-col justify-end">
      {/* Clean Premium Ambient Background */}
      <div className="absolute inset-0 z-0 bg-void">
        <Image
          src="/images/real/kandy_hero_day.jpg"
          alt="Indian Kitchen Immersive Ambience"
          fill
          className="object-cover opacity-85 scale-105 animate-ken-burns"
          priority
          sizes="100vw"
        />
        {/* Subtle light vignettes for readability instead of dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-transparent to-transparent" />
      </div>

      {/* Removed Floating Embers Layer for cleaner look */}

      {/* Main Narrative Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 pb-20 md:pb-24 flex flex-col items-center">
        {/* Subtle Brand Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-8 bg-gold/50" />
          <span className="text-[9px] md:text-[10px] tracking-[0.35em] uppercase text-gold font-bold">
            Colombo &amp; Kandy
          </span>
          <span className="h-px w-8 bg-gold/50" />
        </motion.div>

        {/* Mask-Revealed Headline */}
        <h1 className="heading-presentation-lg mb-8 max-w-5xl text-center leading-[0.95] flex flex-col gap-1.5 md:gap-3">
          <div className="overflow-hidden py-1">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-cream"
            >
              EXPERIENCE
            </motion.span>
          </div>
          <div className="overflow-hidden py-1">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block text-gold italic font-light lowercase font-display"
            >
              true indian
            </motion.span>
          </div>
          <div className="overflow-hidden py-1">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="block text-cream"
            >
              ESSENCE
            </motion.span>
          </div>
        </h1>

        {/* Magnetic Button CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 w-full max-w-md sm:max-w-none"
        >
          <Link href="/reservations" className="btn-primary w-full sm:w-auto text-center">
            Reserve a Table
          </Link>
          <Link href="/menu" className="btn-outline w-full sm:w-auto text-center">
            View Menu
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>

        {/* Location & Hours Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full max-w-4xl border-t border-cream/10 pt-8 text-center"
        >
          <div className="flex flex-col items-center gap-1.5">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-[8px] tracking-[0.25em] uppercase text-text-muted font-bold">Location</span>
            <span className="text-xs text-cream/80 font-sans font-light">357 R.A. De Mel Mawatha, Colombo</span>
          </div>
          
          <div className="flex flex-col items-center gap-1.5">
            <Clock className="w-4 h-4 text-gold" />
            <span className="text-[8px] tracking-[0.25em] uppercase text-text-muted font-bold">Today's Hours</span>
            <span className="text-xs text-cream/80 font-sans font-light">12:30 PM — 11:30 PM</span>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="w-4 h-4 rounded-full border border-gold/40 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-signal rounded-full animate-signal-glow" />
            </div>
            <span className="text-[8px] tracking-[0.25em] uppercase text-text-muted font-bold">Status</span>
            <span className="text-xs text-cream/80 font-sans font-light">Accepting Reservations</span>
          </div>
        </motion.div>

        {/* Scroll Cue indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }}
          className="absolute bottom-6 flex flex-col items-center cursor-pointer pointer-events-none"
        >
          <span className="text-[8px] tracking-[0.3em] uppercase text-gold font-bold mb-1">
            Scroll to enter
          </span>
          <ChevronDown className="w-4 h-4 text-gold animate-bounce" />
        </motion.div>
      </div>

      {/* Ember CSS animation overrides removed */}
    </section>
  );
}
