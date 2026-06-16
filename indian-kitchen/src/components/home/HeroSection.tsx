"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const themes = [
  { name: "Pondicherry Street", location: "Colombo", color: "bg-terracotta" },
  { name: "Kerala Houseboat", location: "Kandy", color: "bg-sage" },
  { name: "Sherlock Mystery", location: "Colombo", color: "bg-crimson" },
];

const stats = [
  { value: "2019", label: "Founded" },
  { value: "3", label: "Themed Worlds" },
  { value: "26K+", label: "Instagram Family" },
  { value: "3 AM", label: "Fri & Sat" },
];

export default function HeroSection() {
  const [themeIdx, setThemeIdx] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const t = setInterval(() => setThemeIdx((i) => (i + 1) % themes.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-void">
      {/* Layered backgrounds */}
      <motion.div style={{ y, willChange: "transform" }} className="absolute inset-0">
        <Image
          src="/images/real_interior.jpeg"
          alt=""
          fill
          className="object-cover img-warm opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-void via-void/85 to-sage/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-crimson/20" />
        {/* Gold accent streak */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-gold via-gold-light to-terracotta opacity-90" />
      </motion.div>

      {/* Floating spice orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: 120 + i * 40,
              height: 120 + i * 40,
              background:
                i % 3 === 0
                  ? "rgba(200, 135, 42, 0.12)"
                  : i % 3 === 1
                    ? "rgba(74, 103, 65, 0.15)"
                    : "rgba(191, 94, 59, 0.1)",
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Subtle luxury glow behind text */}
      <div className="absolute left-0 top-1/3 -translate-y-1/2 w-[800px] h-[800px] bg-gold/15 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-0 min-h-[92vh] flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 flex-1 items-center py-8 lg:py-12">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-sage/20 backdrop-blur-md px-4 py-2 mb-6 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-signal animate-signal-glow" />
              <span className="text-[9px] tracking-[0.28em] uppercase text-signal font-semibold">
                Theme Dining · Colombo & Kandy
              </span>
            </motion.div>

            <h1 className="heading-presentation-lg heading-presentation-light mb-5">
              <div className="overflow-hidden pb-2">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  Where Every
                </motion.div>
              </div>
              <div className="overflow-hidden pb-2">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-gold italic font-light normal-case tracking-normal">
                    Meal
                  </span>{" "}
                  Tells
                </motion.div>
              </div>
              <div className="overflow-hidden pb-2">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  A Story
                </motion.div>
              </div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-cream/80 font-light leading-relaxed max-w-lg mb-8 text-base md:text-lg border-l-2 border-gold pl-5"
            >
              Immersive theme dining — Pondicherry Street, Kerala Houseboat, and Sherlock
              Mystery — serving India&apos;s soul on every plate in Colombo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <MagneticButton>
                <Link href="/reservations" className="btn-primary">
                  Reserve a Table
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/menu" className="btn-outline">
                  View Menu
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Live theme ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="text-[9px] tracking-[0.25em] uppercase text-cream/40 shrink-0">
                Now Experiencing
              </span>
              <div className="h-px flex-1 bg-cream/10" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={themeIdx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="text-[11px] tracking-[0.15em] uppercase text-gold font-display italic shrink-0"
                >
                  {themes[themeIdx].name}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Visual collage */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="grid grid-cols-12 grid-rows-6 gap-2 md:gap-3 h-[340px] md:h-[440px] lg:h-[480px]"
            >
              <div className="col-span-7 row-span-4 relative overflow-hidden gold-frame">
                <Image
                  src="/images/real_storefront.jpeg"
                  alt="Indian Kitchen storefront"
                  fill
                  className="object-cover img-warm animate-ken-burns"
                  sizes="40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
                <div className="absolute bottom-3 left-3 bg-gold text-void text-[8px] tracking-[0.2em] uppercase px-2 py-1 font-bold">
                  Flagship · Colombo
                </div>
              </div>
              <div className="col-span-5 row-span-3 relative overflow-hidden gold-frame">
                <Image
                  src="/images/real_bamboo_biryani.jpeg"
                  alt="Bamboo Biryani"
                  fill
                  className="object-cover img-warm"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-sage/20 mix-blend-multiply" />
              </div>
              <div className="col-span-5 row-span-3 relative overflow-hidden gold-frame bg-crimson">
                <Image
                  src="/images/real_copper_pot.jpeg"
                  alt="Copper pot biryani"
                  fill
                  className="object-cover img-warm opacity-90"
                  sizes="25vw"
                />
              </div>
              <div className="col-span-7 row-span-2 relative overflow-hidden gold-frame">
                <Image
                  src="/images/real_waiter.jpeg"
                  alt="Immersive dining service"
                  fill
                  className="object-cover img-warm"
                  sizes="35vw"
                />
                <div className="absolute inset-0 bg-terracotta/25 mix-blend-multiply" />
              </div>
            </motion.div>

            {/* Floating location chip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-2 -left-2 md:-left-6 bg-cream text-void px-4 py-3 shadow-xl flex items-center gap-2 border-l-4 border-sage"
            >
              <MapPin className="w-4 h-4 text-sage shrink-0" />
              <div>
                <p className="text-[8px] tracking-[0.2em] uppercase text-sage font-semibold">
                  Open Daily
                </p>
                <p className="text-xs font-medium">357 R.A. De Mel Mawatha</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 border-t border-cream/10 mt-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-5 px-4 md:px-6 text-center md:text-left border-cream/10 ${
                i < stats.length - 1 ? "md:border-r" : ""
              } ${i % 2 === 0 ? "border-r md:border-r" : ""} border-b md:border-b-0`}
              style={{
                background:
                  i === 0
                    ? "rgba(74, 103, 65, 0.25)"
                    : i === 1
                      ? "rgba(200, 135, 42, 0.15)"
                      : i === 2
                        ? "rgba(191, 94, 59, 0.15)"
                        : "rgba(74, 14, 14, 0.2)",
              }}
            >
              <div className="font-display text-2xl md:text-3xl text-gold mb-0.5">{stat.value}</div>
              <div className="text-[8px] tracking-[0.25em] uppercase text-cream/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
