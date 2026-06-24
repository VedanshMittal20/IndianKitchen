"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string;
  light?: boolean;
}

export default function PageHero({
  label,
  title,
  subtitle,
  image = "/images/real_interior.jpeg",
  light = false,
}: PageHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={ref} 
      className={`relative min-h-[40vh] md:min-h-[46vh] flex items-end overflow-hidden border-b border-outline-variant/30 bg-surface-container-lowest text-on-surface`}
    >
      <motion.div style={{ y, willChange: "transform" }} className="absolute inset-0 top-[-10%] h-[120%]">
        <Image 
          src={image} 
          alt="" 
          fill 
          className={`object-cover img-warm animate-ken-burns opacity-25`} 
          priority 
          sizes="100vw" 
        />
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent`} 
        />
      </motion.div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-10 md:pb-12 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 30, delay: 0.1 }}
          >
            <SectionLabel className="mb-5">{label}</SectionLabel>
            <h1 className={`font-headline-md text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide leading-tight mb-4 text-on-surface`}>{title}</h1>
            {subtitle && (
              <p className={`font-light text-base md:text-lg max-w-2xl leading-relaxed text-on-surface/70`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
