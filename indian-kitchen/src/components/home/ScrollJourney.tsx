"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollJourney({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth the scroll progress for drawing the line
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative w-full min-h-screen">
      {/* The Central Path Line (Faint Background) */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-golden/20 md:-translate-x-1/2 z-0" />
      
      {/* Animated Path Fill */}
      <motion.div 
        className="absolute left-4 md:left-1/2 top-0 w-[3px] bg-brand-golden origin-top md:-translate-x-1/2 shadow-[0_0_15px_rgba(201,162,39,0.8)] z-10"
        style={{ 
          height: "100%",
          scaleY: smoothProgress 
        }}
      />
      
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}
