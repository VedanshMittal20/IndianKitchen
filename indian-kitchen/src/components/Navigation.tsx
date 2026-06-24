"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandMark from "@/components/ui/BrandMark";
import Image from "next/image";

const navLinks = [
  { 
    name: "A Tale of Spice & Time", 
    href: "/experience", 
    subtitle: "Our Story & Heritage", 
    image: "/images/real/colombo_ceremony.jpg" 
  },
  { 
    name: "Our Themed Sanctuaries", 
    href: "/themes", 
    subtitle: "Pondicherry, Kerala & Sherlock", 
    image: "/images/real/kandy_hero_day.jpg" 
  },
  { 
    name: "The Culinary Passport", 
    href: "/menu", 
    subtitle: "Explore Our Dishes", 
    image: "/images/bamboo_biryani.png" 
  },
  { 
    name: "Beyond the Plate", 
    href: "/services", 
    subtitle: "Catering & Private Dining", 
    image: "/images/private_dining.png" 
  },
];

const secondaryLinks = [
  { name: "Franchise", href: "/franchise" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
  { name: "Insights", href: "/blog" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setHoveredIndex(null);
  }, [pathname]);

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Minimal Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled || isOpen
            ? "bg-void/80 backdrop-blur-md py-4 border-b border-cream/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center shrink-0">
            <BrandMark variant="light" size="sm" />
          </Link>

          {/* Right Controls */}
          <div className="flex items-center gap-6 relative z-50">
            <Link
              href="/reservations"
              className="hidden sm:inline-flex text-[10px] tracking-[0.2em] font-semibold uppercase px-6 py-3 rounded-full transition-all duration-300 bg-gold text-void hover:bg-gold-light hover:shadow-[0_0_20px_rgba(200,135,42,0.3)] hover:-translate-y-0.5"
            >
              Book a Table
            </Link>

            {/* Menu Trigger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 text-cream hover:text-gold transition-colors focus:outline-none group"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className="text-[10px] tracking-[0.25em] font-semibold uppercase hidden md:inline">
                {isOpen ? "Close" : "Menu"}
              </span>
              <div className="w-6 h-4 flex flex-col justify-between items-end relative overflow-hidden">
                <span
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
                  }`}
                />
                <span
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "w-0 opacity-0" : "w-4 group-hover:w-6"
                  }`}
                />
                <span
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-5 group-hover:w-6"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-void flex flex-col lg:flex-row overflow-hidden"
          >
            {/* Image Preview Side (Desktop only) */}
            <div className="hidden lg:block lg:w-1/2 h-full relative overflow-hidden bg-void-panel border-r border-cream/10">
              <AnimatePresence mode="wait">
                {hoveredIndex !== null ? (
                  <motion.div
                    key={hoveredIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.45, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={navLinks[hoveredIndex].image}
                      alt={navLinks[hoveredIndex].name}
                      fill
                      className="object-cover img-warm"
                      sizes="50vw"
                      priority
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="/images/real/kandy_hero_night.jpg"
                      alt="Ambient"
                      fill
                      className="object-cover img-warm"
                      sizes="50vw"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Overlay styling for preview side */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-void" />
              
              {/* Cinematic Quote/Tagline */}
              <div className="absolute bottom-16 left-16 max-w-md">
                <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-bold mb-3 block">
                  Indian Kitchen
                </span>
                <p className="font-display italic text-2xl text-cream/70 leading-relaxed">
                  "Food is theater, spice is the script, and the palate is our canvas."
                </p>
              </div>
            </div>

            {/* Menu Links Side */}
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-16 lg:px-20 bg-void">
              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center gap-6 lg:gap-8 my-auto">
                <div className="space-y-1 md:space-y-2">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        className="group flex flex-col py-2"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-sans text-[10px] tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                            0{idx + 1}
                          </span>
                          <span className="font-display text-3xl md:text-5xl lg:text-6xl uppercase tracking-wide text-cream group-hover:text-gold transition-colors duration-300">
                            {link.name}
                          </span>
                        </div>
                        <span className="text-xs text-text-muted pl-8 font-light uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                          {link.subtitle}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-cream/10 my-4" />

                {/* Secondary Links Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {secondaryLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05, duration: 0.5 }}
                    >
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-cream/70 hover:text-gold transition-colors group"
                      >
                        {link.name}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Bottom footer elements inside overlay */}
              <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <span className="block text-[8px] tracking-[0.25em] uppercase text-text-muted mb-1">
                    Direct Table Booking
                  </span>
                  <a
                    href="tel:+94117112334"
                    className="flex items-center gap-2 text-sm text-cream hover:text-gold transition-colors font-medium"
                  >
                    <Phone className="w-4 h-4 text-gold" />
                    +94 117 112 334
                  </a>
                </div>
                <Link
                  href="/reservations"
                  className="btn-primary w-full sm:w-auto text-center"
                >
                  Reserve Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
