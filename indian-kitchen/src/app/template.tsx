"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "brightness(0.65) blur(4px)" }}
      animate={{ opacity: 1, filter: "brightness(1) blur(0px)" }}
      exit={{ opacity: 0, filter: "brightness(0.65) blur(4px)" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="flex-grow flex flex-col"
      style={{ willChange: "opacity, filter" }}
    >
      {children}
    </motion.div>
  );
}
