"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "MENU", href: "/menu" },
  { name: "AMBIENCE", href: "/themes" },
  { name: "RESERVATIONS", href: "/reservations" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
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
<<<<<<< Updated upstream
      <div className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center ${
        isScrolled ? "top-6 px-4" : "top-0 px-0"
      }`}>
        <nav className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled 
            ? "w-full max-w-5xl bg-surface/85 backdrop-blur-xl border border-brand-sandy/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] rounded-full h-16" 
            : "w-full bg-transparent border-transparent h-24"
        }`}>
          <div className={`flex justify-between items-center h-full mx-auto transition-all duration-500 ${
            isScrolled ? "px-6 md:px-10" : "px-6 md:px-12 max-w-7xl"
          }`}>
            {/* Logo */}
            <Link href="/" className="flex flex-col relative z-50 group">
              <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-warm-cream flex items-center justify-center font-display-lg text-surface text-xl font-bold rounded-sm">
                      IK
                  </div>
                  <div className="flex flex-col leading-none">
                      <span className="font-headline-sm text-brand-warm-cream tracking-widest uppercase transition-colors group-hover:text-brand-golden">
                          INDIAN
                      </span>
                      <span className="font-headline-sm text-brand-warm-cream tracking-widest uppercase transition-colors group-hover:text-brand-golden">
                          KITCHEN
                      </span>
                  </div>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-label-lg tracking-[0.1em] text-sm uppercase hover:text-brand-golden transition-colors ${
                    pathname === link.href ? "text-brand-golden" : "text-brand-warm-cream"
=======
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
              <span className="font-display-lg text-display-lg text-brand-warm-cream">Indian Kitchen</span>
            ) : (
              <BrandMark variant="light" size="sm" />
            )}
          </Link>

          {/* Right Controls */}
          <div className="flex items-center gap-4 md:gap-8 relative z-50">
            <Link
              href="/reservations"
              className={`hidden sm:inline-flex text-[10px] tracking-[0.2em] font-bold px-6 py-2.5 transition-all duration-300 hover-glow ${
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
              <span className="text-[10px] tracking-[0.25em] font-semibold hidden md:inline">
                {isOpen ? "Close" : "Menu"}
              </span>
              <div className="w-8 h-4 flex flex-col justify-between items-end relative overflow-hidden">
                <span
                  className={`h-[1px] bg-current transition-all duration-300 rounded-sm ${
                    isOpen ? "w-8 rotate-45 translate-y-[7px]" : "w-8"
>>>>>>> Stashed changes
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-6 relative z-50">
              <Link
                href="/reservations"
                className={`hidden sm:inline-flex bg-brand-accent-green text-on-primary font-label-lg uppercase tracking-[0.1em] rounded-sm hover:bg-brand-golden transition-all hover-glow hover:-translate-y-0.5 ${
                  isScrolled ? "px-6 py-2 text-xs" : "px-8 py-3"
                }`}
              >
                BOOK TABLE
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex flex-col justify-center gap-1.5 p-2"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <span className={`h-0.5 bg-brand-warm-cream transition-all ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                <span className={`h-0.5 bg-brand-warm-cream transition-all ${isOpen ? "w-0 opacity-0" : "w-6"}`} />
                <span className={`h-0.5 bg-brand-warm-cream transition-all ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center pt-20"
          >
<<<<<<< Updated upstream
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-headline-lg text-brand-warm-cream hover:text-brand-golden transition-colors uppercase tracking-widest text-4xl"
=======
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
                <span className="text-[10px] tracking-[0.25em] text-brand-golden font-bold mb-3 block border-l-2 border-brand-accent-green pl-3">
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
                          <span className="font-sans text-label-sm md:text-label-lg text-brand-accent-green opacity-50 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
                            0{idx + 1}
                          </span>
                          <span className="font-display-lg text-display-lg-lg text-brand-golden group-hover:text-brand-warm-cream transition-colors duration-300 drop-shadow-md relative">
                            {link.name}
                            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-brand-accent-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                          </span>
                        </div>
                        <span className="text-label-lg text-brand-sandy pl-8 md:pl-10 font-sans opacity-80 group-hover:opacity-100 group-hover:text-brand-golden transition-colors duration-300">
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
                        className="inline-flex items-center gap-2 text-label-lg text-brand-sandy hover:text-brand-accent-green transition-colors group"
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
                  <span className="block text-[9px] tracking-[0.25em] text-brand-sandy mb-2 font-semibold">
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
                  className="w-full sm:w-auto text-center px-8 py-4 bg-brand-accent-green text-on-primary font-bold tracking-[0.2em] text-xs rounded-sm hover:bg-brand-golden hover:text-on-tertiary transition-colors hover-glow"
>>>>>>> Stashed changes
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full max-w-sm h-px bg-brand-sandy/20 my-4" />
              <Link
                href="/reservations"
                className="bg-brand-accent-green text-on-primary font-label-lg uppercase tracking-[0.1em] px-10 py-4 rounded-sm w-full max-w-sm text-center hover:bg-brand-golden transition-colors"
              >
                BOOK TABLE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
