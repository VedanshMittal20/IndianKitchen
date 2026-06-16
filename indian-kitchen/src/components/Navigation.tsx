"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "The Experience", href: "/#experience" },
  { name: "Our Themes", href: "/#themes" },
  { name: "The Menu", href: "/menu" },
  { name: "Reservations", href: "/#reservations" },
  { name: "Franchise", href: "/franchise" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-void/90 backdrop-blur-md py-3 shadow-lg border-b border-border-gold"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Flame className="w-6 h-6 text-gold group-hover:text-terracotta transition-colors" />
          <span className="font-display text-2xl tracking-wide font-semibold text-cream">
            Indian Kitchen
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-cream/80 hover:text-gold transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/#reservations"
            className="px-6 py-2.5 bg-terracotta text-cream text-sm font-medium border border-gold hover:bg-gold hover:text-void transition-all duration-300"
          >
            Reserve a Table
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-void flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border-gold">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Flame className="w-6 h-6 text-gold" />
                <span className="font-display text-2xl text-cream">Indian Kitchen</span>
              </Link>
              <button
                className="text-cream p-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-10 px-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display text-cream hover:text-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="mt-8">
                <Link
                  href="/#reservations"
                  className="block w-full text-center px-6 py-4 bg-terracotta text-cream text-lg font-medium border border-gold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Reserve a Table
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
