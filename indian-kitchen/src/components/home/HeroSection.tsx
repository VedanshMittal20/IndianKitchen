"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const themes = ["Pondicherry Street", "Kerala Houseboat", "Sherlock Mystery"];

export default function HeroSection() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const themeInterval = setInterval(() => {
      setCurrentTheme((prev) => (prev + 1) % themes.length);
    }, 3500);

    return () => {
      clearInterval(themeInterval);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-forest">
      {/* ─── Background Image ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-forest">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/hero_main.png"
            alt="Luxury Indian Kitchen Interior"
            fill
            className="object-cover img-warm"
            priority
            sizes="100vw"
          />
        </motion.div>
        
        {/* Deep, rich forest overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-forest/70 via-forest/30 to-forest/95" />
        {/* Subtle dark vignette */}
        <div className="absolute inset-0 z-10 bg-black/30" />
      </div>

      {/* ─── Floating Particles ─── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {isMounted && [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              background: `rgba(255, 215, 0, ${Math.random() * 0.4 + 0.1})`, // Vibrant Yellow particles
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -(Math.random() * 200 + 100)],
              x: [0, (Math.random() - 0.5) * 60],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Main title area - positioned like Art & Saveur with massive text at bottom */}
        <div className="flex-1 flex items-end pb-8 md:pb-16 px-8 md:px-16">
          <div className="w-full">
            {/* Oversized heading */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                className="font-display text-[clamp(4rem,14vw,13rem)] leading-[0.8] tracking-[-0.02em] text-cream"
              >
                Indian
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-12">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
                className="font-display text-[clamp(4rem,14vw,13rem)] leading-[0.8] tracking-[-0.02em] text-cream"
              >
                Kitchen
              </motion.h1>
            </div>

            {/* Bottom row: Info block + Theme rotation */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              {/* Left: tagline block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-yellow" />
                  <span className="text-[10px] font-sans font-medium text-yellow tracking-[0.3em] uppercase">
                    Est. 2019 — Colombo
                  </span>
                </div>
                <p className="text-cream text-sm md:text-base max-w-md leading-relaxed font-light">
                  Where gastronomy transcends into artistry.
                  An immersive journey through taste, texture, and time.
                </p>
                <Link
                  href="/#themes"
                  className="group inline-flex items-center gap-3 text-[11px] font-sans font-medium text-yellow tracking-[0.25em] uppercase mt-2 w-fit"
                >
                  Discover
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              {/* Right: rotating theme name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-right"
              >
                <div className="text-[10px] font-sans text-cream/60 tracking-[0.3em] uppercase mb-2">
                  Now Experiencing
                </div>
                <div className="h-[2.5rem] md:h-[3rem] overflow-hidden flex flex-col justify-end">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={currentTheme}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6 }}
                      className="font-display text-2xl md:text-3xl text-yellow italic"
                    >
                      {themes[currentTheme]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] tracking-[0.3em] uppercase text-cream/50">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-yellow to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
