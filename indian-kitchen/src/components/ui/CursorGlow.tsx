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

  const background = useMotionTemplate`radial-gradient(800px circle at ${smoothX}px ${smoothY}px, rgba(251, 231, 173, 0.06), transparent 50%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden mix-blend-screen transition-opacity duration-700 safari-fix hidden md:block"
      style={{ background }}
    />
  );
}
