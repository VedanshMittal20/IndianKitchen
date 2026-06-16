"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export default function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(200,135,42,0.15), transparent 40%)`;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden mix-blend-screen transition-opacity duration-300 safari-fix"
      style={{ background }}
    />
  );
}
