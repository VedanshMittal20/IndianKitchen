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
    name: "A Tale of Spice", 
    href: "/experience", 
    subtitle: "Our Story & Heritage", 
    image: "/images/real/colombo_ceremony.jpg" 
  },
  { 
    name: "Our Sanctuaries", 
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
      {/* Floating Capsule Header */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center ${
          isScrolled ? "top-4 px-4" : "top-0 px-0"
        }`}
      >
        <div 
          className={`w-full max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 ease-out ${
            isScrolled 
              ? "bg-[rgba(6,73,53,0.15)] backdrop-blur-md rounded-sm px-6 md:px-8 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-brand-sandy" 
              : "bg-transparent px-6 md:px-12 py-6"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center shrink-0">
            {isScrolled ? (
              <span className="font-display text-xl tracking-widest text-brand-warm-cream uppercase">Indian Kitchen</span>
            ) : (
              <BrandMark variant="light" size="sm" />
            )}
          </Link>

          {/* Right Controls */}
          <div className="flex items-center gap-4 md:gap-8 relative z-50">
            <Link
              href="/reservations"
              className={`hidden sm:inline-flex text-[10px] tracking-[0.2em] font-bold uppercase px-6 py-2.5 transition-all duration-300 hover-glow ${
                isScrolled 
                  ? "bg-brand-accent-green text-on-primary rounded-sm border border-transparent hover:-translate-y-0.5 hover:bg-brand-golden" 
                  : "bg-transparent border border-brand-sandy rounded-sm text-brand-warm-cream hover:border-brand-accent-green hover:bg-brand-accent-green/5 hover:-translate-y-0.5"
              }`}
            >
              Book a Table
            </Link>

            {/* Menu Trigger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-3 transition-colors focus:outline-none group ${
                isScrolled ? "text-brand-golden hover:text-brand-accent-green" : "text-brand-warm-cream hover:text-brand-accent-green"
              }`}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className="text-[10px] tracking-[0.25em] font-semibold uppercase hidden md:inline">
                {isOpen ? "Close" : "Menu"}
              </span>
              <div className="w-8 h-4 flex flex-col justify-between items-end relative overflow-hidden">
                <span
                  className={`h-[1px] bg-current transition-all duration-300 rounded-sm ${
                    isOpen ? "w-8 rotate-45 translate-y-[7px]" : "w-8"
                  }`}
                />
                <span
                  className={`h-[1px] bg-current transition-all duration-300 rounded-sm ${
                    isOpen ? "w-0 opacity-0" : "w-5 group-hover:w-8"
                  }`}
                />
                <span
                  className={`h-[1px] bg-current transition-all duration-300 rounded-sm ${
                    isOpen ? "w-8 -rotate-45 -translate-y-[7px]" : "w-6 group-hover:w-8"
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
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-surface-dark flex flex-col lg:flex-row overflow-hidden"
          >
            {/* Image Preview Side (Desktop only) */}
            <div className="hidden lg:block lg:w-1/2 h-full relative overflow-hidden bg-brand-deep-forest border-r border-brand-sandy/20">
              <AnimatePresence mode="wait">
                {hoveredIndex !== null ? (
                  <motion.div
                    key={hoveredIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.7, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 mix-blend-luminosity"
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
                    animate={{ opacity: 0.4 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 mix-blend-luminosity"
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
              <div className="absolute inset-0 bg-gradient-to-r from-brand-deep-forest/60 to-brand-deep-forest" />
              
              {/* Cinematic Quote/Tagline */}
              <div className="absolute bottom-16 left-16 max-w-md">
                <span className="text-[10px] tracking-[0.25em] uppercase text-brand-golden font-bold mb-3 block border-l-2 border-brand-accent-green pl-3">
                  Indian Kitchen
                </span>
                <p className="font-display italic text-3xl text-brand-warm-cream leading-relaxed">
                  "Food is theater, spice is the script, and the palate is our canvas."
                </p>
              </div>
            </div>

            {/* Menu Links Side */}
            <div className="w-full lg:w-1/2 h-full flex flex-col justify-between pt-24 pb-8 md:pt-32 md:pb-12 px-6 md:px-16 lg:px-20 bg-surface-dark relative overflow-y-auto overflow-x-hidden">
              {/* Decorative Circle */}
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-accent-green/5 rounded-full blur-3xl pointer-events-none" />

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center gap-6 lg:gap-8 my-auto relative z-10">
                <div className="space-y-2 md:space-y-4">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (idx * 0.1), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        className="group flex flex-col py-2 relative"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-sans text-[10px] md:text-sm tracking-widest text-brand-accent-green font-bold opacity-50 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                            0{idx + 1}
                          </span>
                          <span className="font-display text-4xl md:text-5xl lg:text-7xl uppercase tracking-wider text-brand-golden group-hover:text-brand-warm-cream transition-colors duration-300 drop-shadow-md relative">
                            {link.name}
                            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-brand-accent-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                          </span>
                        </div>
                        <span className="text-sm text-brand-sandy pl-8 md:pl-10 font-sans uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 group-hover:text-brand-golden transition-colors duration-300">
                          {link.subtitle}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Divider */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                  className="w-full h-px bg-gradient-to-r from-brand-sandy/10 via-brand-sandy/30 to-brand-sandy/10 my-4 lg:my-8 origin-left" 
                />

                {/* Secondary Links Flex */}
                <div className="flex flex-wrap gap-y-6 gap-x-8 md:gap-x-12">
                  {secondaryLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + idx * 0.05, duration: 0.5 }}
                    >
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-2 text-sm md:text-base uppercase tracking-[0.2em] font-bold text-brand-sandy hover:text-brand-accent-green transition-colors group"
                      >
                        <span className="w-2 h-2 rounded-full bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Bottom footer elements inside overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="border-t border-brand-accent-green/20 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-12 relative z-10"
              >
                <div>
                  <span className="block text-[9px] tracking-[0.25em] uppercase text-brand-sandy mb-2 font-semibold">
                    Direct Table Booking
                  </span>
                  <a
                    href="tel:+94117112334"
                    className="flex items-center gap-3 text-base md:text-lg text-white hover:text-brand-golden transition-colors font-medium tracking-wide"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-accent-green/20 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-brand-accent-green" />
                    </div>
                    +94 117 112 334
                  </a>
                </div>
                <Link
                  href="/reservations"
                  className="w-full sm:w-auto text-center px-8 py-4 bg-brand-accent-green text-on-primary font-bold tracking-[0.2em] uppercase text-xs rounded-sm hover:bg-brand-golden hover:text-on-tertiary transition-colors hover-glow"
                >
                  Reserve Your Table
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
