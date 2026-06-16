"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandMark from "@/components/ui/BrandMark";

// Shortened nav links for the sleek floating pill design
const navLinks = [
  { name: "A Tale of Spice & Time", href: "/experience" },
  { name: "Our Themed Sanctuaries", href: "/#themes" },
  { name: "Flavors of the Homeland", href: "/menu" },
  { name: "Beyond the Plate", href: "/services" },
  { name: "Franchise Opportunities", href: "/franchise" },
  { name: "Reservations", href: "/reservations" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const darkHeroRoutes = ["/", "/themes", "/reservations", "/contact", "/experience", "/menu", "/blog", "/franchise", "/careers"];
  const isDarkHeroRoute = darkHeroRoutes.includes(pathname) || pathname.startsWith("/blog/");
  const onDarkHero = isDarkHeroRoute && !isScrolled;

  return (
    <>
      <header
        className={`fixed z-50 transition-all duration-500 hidden xl:flex justify-center w-full top-6 pointer-events-none`}
      >
        {/* The Floating Pill */}
        <div 
          className={`pointer-events-auto flex items-center gap-2 px-3 py-2.5 rounded-full transition-colors duration-500 shadow-2xl backdrop-blur-xl border ${
            onDarkHero
              ? "bg-void/40 border-cream/10 shadow-black/50"
              : "bg-paper/75 border-sage/15 shadow-sage/10"
          }`}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {/* Logo Section */}
          <Link href="/" className="px-3 py-1 mr-2 relative z-10 flex items-center">
            <BrandMark variant={onDarkHero ? "light" : "green"} size="sm" />
          </Link>

          {/* Nav Links */}
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            const isHovered = hoveredLink === link.name;
            const activeOrHovered = isActive || isHovered;

            return (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                className={`relative px-4 py-2 text-[10px] font-sans font-medium tracking-[0.16em] uppercase rounded-full transition-colors duration-300 ${
                  activeOrHovered
                    ? onDarkHero
                      ? "text-void"
                      : "text-cream"
                    : onDarkHero
                      ? "text-cream/80 hover:text-cream"
                      : "text-text-muted hover:text-forest"
                }`}
              >
                {/* Sliding Background Pill */}
                {activeOrHovered && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-full z-0 ${
                      onDarkHero ? "bg-cream" : "bg-forest"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </header>

      {/* Mobile Header (Standard style, since a pill doesn't fit mobile well) */}
      <header
        className={`xl:hidden fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-parchment/95 backdrop-blur-md py-3 border-b border-sage/15 shadow-sm"
            : onDarkHero
              ? "bg-gradient-to-b from-void/80 to-transparent py-4"
              : "bg-paper py-4 border-b border-sage/10"
        }`}
      >
        <div className="px-6 md:px-12 flex items-center justify-between">
          <Link href="/">
            <BrandMark variant={onDarkHero ? "light" : "green"} size="sm" />
          </Link>

          <button
            className={`p-2 transition-colors ${
              onDarkHero ? "text-cream hover:text-gold" : "text-sage hover:text-gold"
            }`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[60] bg-void flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
              <BrandMark variant="light" size="sm" />
              <button
                className="text-cream hover:text-gold p-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 300, damping: 25 }}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
