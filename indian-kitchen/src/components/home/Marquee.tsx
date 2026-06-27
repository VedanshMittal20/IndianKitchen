"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "Open till 3 AM",
    "Pondicherry Street",
    "Kerala Houseboat",
    "The Sherlock",
    "No Artificial Colours",
    "Village-Trained Chefs",
    "Authentic Indian Cuisine",
    "Theme Dining Experience",
  ];

  const text = items.map((item) => `${item}  ·  `).join("");

  return (
    <div className="w-full bg-surface-container-lowest py-3 overflow-hidden border-y border-outline-variant/30">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform" }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="text-brand-golden font-body-md font-medium text-[9px] tracking-[0.3em] px-3"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
