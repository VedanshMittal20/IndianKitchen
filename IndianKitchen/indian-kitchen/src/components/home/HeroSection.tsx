"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/slide_2.png"
          alt="Indian Kitchen Ambience"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-void/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/30" />
      </div>

      {/* Floating Particles (Simplified via Framer Motion) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/30 blur-[2px]"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold font-sans tracking-[0.2em] uppercase text-sm md:text-base mb-6"
        >
          Where Every Meal Tells a Story
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-[6rem] leading-tight font-display text-cream mb-8 font-medium drop-shadow-lg"
        >
          Indian Kitchen
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-cream/90 text-lg md:text-2xl font-light mb-12 max-w-2xl mx-auto"
        >
          An immersive journey through India's soul &mdash; served at your table in Colombo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/#reservations"
            className="w-full sm:w-auto px-8 py-4 bg-terracotta text-cream text-base font-medium hover:bg-gold hover:text-void transition-all duration-300 shadow-[0_0_20px_rgba(191,94,59,0.3)] hover:shadow-[0_0_30px_rgba(200,135,42,0.5)]"
          >
            Reserve Your Table
          </Link>
          <Link
            href="/#themes"
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-cream border border-gold text-base font-medium hover:bg-gold/10 transition-all duration-300"
          >
            Explore Our World
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-gold opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
