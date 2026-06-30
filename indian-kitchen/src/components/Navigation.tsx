"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "MENU", href: "/menu" },
  { name: "AMBIENCE", href: "/themes" },
  { name: "RESERVATIONS", href: "/reservations" },
  { name: "CAREERS", href: "/careers" },
  { name: "FRANCHISE", href: "/franchise" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
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

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Hidden Audio Player with a royalty-free classical Indian placeholder track */}
      <audio 
        ref={audioRef} 
        src="https://cdn.pixabay.com/download/audio/2022/03/10/audio_5b82142750.mp3" 
        loop 
        preload="auto"
      />
      <div className={`fixed w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex justify-center pointer-events-none ${
        isScrolled ? "top-6 px-4" : "top-0 px-0"
      }`}>
        <nav className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled 
            ? "w-full max-w-5xl bg-brand-warm-cream/90 backdrop-blur-xl border border-brand-golden/30 shadow-[0_10px_40px_rgba(0,0,0,0.05)] rounded-full h-16" 
            : "w-full bg-transparent border-transparent h-24"
        }`}>
          <div className={`flex justify-between items-center h-full mx-auto transition-all duration-500 ${
            isScrolled ? "px-4 md:px-8" : "px-6 md:px-12 max-w-7xl"
          }`}>
            {/* Logo */}
            <Link href="/" className="flex flex-col relative z-50 group shrink-0">
              <div className={`relative flex items-center justify-start transition-all duration-500 ${
                isScrolled ? "w-24 sm:w-32 md:w-36 h-5 sm:h-6" : "w-28 sm:w-36 md:w-44 h-6 sm:h-8"
              }`} 
                   style={{ 
                     filter: "brightness(0) opacity(0.85)", // Charcoal
                   }}>
                  <img 
                    src="/logo_horizontal.png" 
                    alt="Indian Kitchen Logo" 
                    className="object-contain object-left w-full h-full" 
                  />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className={`hidden md:flex items-center transition-all duration-500 ${
              isScrolled ? "gap-4 lg:gap-6" : "gap-6 lg:gap-10"
            }`}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-label-lg tracking-widest text-xs lg:text-sm uppercase transition-colors whitespace-nowrap group ${
                    pathname === link.href ? "text-brand-charcoal" : "text-brand-charcoal/80"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-px bg-brand-golden transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-4 relative z-50 shrink-0">
              {/* Audio Toggle Button */}
              <button
                onClick={toggleAudio}
                className={`hidden sm:flex items-center justify-center rounded-full border border-brand-golden/50 bg-brand-warm-cream/50 hover:bg-brand-golden/20 transition-all ${
                  isScrolled ? "w-8 h-8" : "w-10 h-10"
                }`}
                title={isPlaying ? "Pause Music" : "Play Music"}
              >
                {isPlaying ? (
                  <Pause size={isScrolled ? 14 : 16} className="text-brand-deep-forest" />
                ) : (
                  <Play size={isScrolled ? 14 : 16} className="text-brand-deep-forest" />
                )}
              </button>

              <Link
                href="/reservations"
                className={`hidden sm:inline-flex bg-brand-deep-forest text-brand-warm-cream border border-brand-golden font-label-lg uppercase tracking-[0.1em] rounded-sm hover:bg-brand-deep-forest/90 transition-all hover:-translate-y-0.5 whitespace-nowrap ${
                  isScrolled ? "px-3 lg:px-5 py-2 text-[10px] lg:text-xs" : "px-5 lg:px-7 py-2.5 lg:py-3 text-xs lg:text-sm"
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
                <span className={`h-0.5 bg-on-surface transition-all ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                <span className={`h-0.5 bg-on-surface transition-all ${isOpen ? "w-0 opacity-0" : "w-6"}`} />
                <span className={`h-0.5 bg-on-surface transition-all ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
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
                  className="font-headline-lg text-brand-charcoal hover:text-brand-golden transition-colors uppercase tracking-widest text-4xl"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full max-w-sm h-px bg-brand-golden/30 my-4" />
              <Link
                href="/reservations"
                className="bg-brand-deep-forest text-brand-warm-cream border border-brand-golden font-label-lg uppercase tracking-[0.1em] px-10 py-4 rounded-sm w-full max-w-sm text-center hover:bg-brand-deep-forest/90 transition-colors"
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
