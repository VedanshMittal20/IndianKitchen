"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

export default function LightboxImage({ src, alt, className = "", sizes = "100vw" }: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className={`relative cursor-zoom-in group ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-surface-container-lowest/0 group-hover:bg-surface-container-lowest/20 transition-colors duration-500" />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] bg-surface-container-lowest flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setIsOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-surface-container-low/50 rounded-full text-on-surface hover:bg-saffron-gold transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-7xl max-h-[90vh] rounded-[32px] overflow-hidden shadow-2xl border border-cream/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
