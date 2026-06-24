"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform } from "framer-motion";

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the motion using a spring
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(600px circle at ${smoothX}px ${smoothY}px, rgba(244, 196, 48, 0.08), transparent 40%)`;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden mix-blend-darken transition-opacity duration-300 safari-fix"
        style={{ background }}
      />
      {/* Physical Cursor Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-4 h-4 rounded-full bg-saffron-gold z-[9999] mix-blend-difference hidden md:block"
        style={{ 
          x: useTransform(mouseX, x => x - 8), 
          y: useTransform(mouseY, y => y - 8),
          scale: 1
        }}
      />
      {/* Trailing Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-12 h-12 rounded-full border border-saffron-gold/50 z-[9998] mix-blend-difference hidden md:block"
        style={{ 
          x: useTransform(smoothX, x => x - 24), 
          y: useTransform(smoothY, y => y - 24) 
        }}
      />
    </>
  );
}
