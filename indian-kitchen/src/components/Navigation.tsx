"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "The Experience", href: "/#experience" },
  { name: "Themes", href: "/#themes" },
  { name: "The Menu", href: "/menu" },
  { name: "Franchise", href: "/franchise" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-xl py-4 border-b border-wood"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto px-8 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex flex-col">
          <span className={`font-display text-2xl md:text-3xl tracking-[0.1em] uppercase transition-colors duration-500 ${isScrolled ? 'text-forest' : 'text-cream'}`}>
            Indian Kitchen
          </span>
          <span className={`font-sans text-[8px] tracking-[0.3em] uppercase transition-colors duration-500 ${isScrolled ? 'text-forest/60' : 'text-cream/80'}`}>
            Art & Saveur
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`link-underline text-[11px] font-sans font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                isScrolled ? "text-text-dark hover:text-forest" : "text-cream/90 hover:text-yellow"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className={`w-px h-4 mx-2 ${isScrolled ? "bg-forest/20" : "bg-cream/30"}`} />
          <Link
            href="/#reservations"
            className={`text-[11px] font-sans font-medium tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-2 ${
              isScrolled ? "text-forest hover:text-yellow" : "text-yellow hover:text-cream"
            }`}
          >
            Reserve Your Table
            <span className={`inline-block w-4 h-px ${isScrolled ? "bg-forest" : "bg-yellow"}`} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-forest" : "text-cream hover:text-yellow"}`}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>

      {/* ─── Mobile Drawer ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-cream flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-wood">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <span className="font-display text-2xl tracking-[0.1em] uppercase text-forest">
                  Indian Kitchen
                </span>
              </Link>
              <button
                className="text-forest hover:text-yellow p-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="block py-2 font-display text-4xl md:text-5xl text-forest/80 hover:text-forest transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-wood"
              >
                <Link
                  href="/#reservations"
                  className="inline-block px-8 py-4 bg-forest text-cream text-sm tracking-[0.2em] uppercase hover:bg-yellow hover:text-forest transition-all duration-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reserve Your Table
                </Link>
              </motion.div>
            </div>

            {/* Bottom info */}
            <div className="px-8 pb-8 text-[11px] text-forest/50 tracking-[0.15em] uppercase">
              Colombo, Sri Lanka · +94 117 112 334
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
