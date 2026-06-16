"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandMark from "@/components/ui/BrandMark";

const navLinks = [
  { name: "Experience", href: "/experience" },
  { name: "Themes", href: "/themes" },
  { name: "Menu", href: "/menu" },
  { name: "Reservations", href: "/reservations" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Franchise", href: "/franchise" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const onDarkHero = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-parchment/95 backdrop-blur-xl py-3 border-b border-sage/15 shadow-sm"
          : onDarkHero
            ? "bg-gradient-to-b from-void/80 to-transparent py-5"
            : "bg-paper py-5 border-b border-sage/10"
      }`}
    >
      <div className="mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
        <Link href="/">
          <BrandMark variant={onDarkHero ? "light" : "green"} size="md" />
        </Link>

        <div className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`link-underline text-[10px] font-sans font-medium tracking-[0.16em] uppercase transition-colors ${
                  isActive
                    ? onDarkHero
                      ? "text-gold"
                      : "text-sage"
                    : onDarkHero
                      ? "text-cream/80 hover:text-gold"
                      : "text-text-muted hover:text-sage"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className={`w-px h-4 mx-1 ${onDarkHero ? "bg-cream/20" : "bg-sage/20"}`} />
          <Link
            href="/reservations"
            className={`text-[10px] font-sans font-semibold tracking-[0.16em] uppercase transition-colors ${
              onDarkHero ? "text-gold hover:text-cream" : "text-terracotta hover:text-gold"
            }`}
          >
            Book a Table →
          </Link>
        </div>

        <button
          className={`xl:hidden p-2 transition-colors ${
            onDarkHero ? "text-cream hover:text-gold" : "text-sage hover:text-gold"
          }`}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-void flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
              <BrandMark variant="light" size="md" />
              <button
                className="text-cream hover:text-gold p-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 font-display text-3xl uppercase tracking-wide transition-colors ${
                      pathname === link.href ? "text-gold" : "text-cream/70 hover:text-cream"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 pt-6 border-t border-gold/20"
              >
                <Link href="/reservations" className="btn-primary w-full text-center bg-gold text-void">
                  Book a Table
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
