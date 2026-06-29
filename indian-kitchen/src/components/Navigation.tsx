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
  { name: "CAREERS", href: "/careers" },
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
      <div className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center pointer-events-none ${
        isScrolled ? "top-6 px-4" : "top-0 px-0"
      }`}>
        <nav className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-headline-lg text-brand-warm-cream hover:text-brand-golden transition-colors uppercase tracking-widest text-4xl"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full max-w-sm h-px bg-brand-sandy/20 my-4" />
              <Link
                href="/reservations"
                className="bg-brand-accent-green text-on-primary font-label-lg uppercase tracking-[0.1em] px-10 py-4 rounded-sm w-full max-w-sm text-center hover:bg-brand-golden transition-colors"
                onClick={() => setIsOpen(false)}
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
