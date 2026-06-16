"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "Open till 3 AM",
    "Pondicherry Street",
    "Kerala Houseboat",
    "Sherlock Mystery Dining",
    "No Artificial Colours",
    "Village-Trained Chefs",
    "Authentic Indian Cuisine",
    "Theme Dining Experience",
  ];

  const text = items.map((item) => `${item}  ·  `).join("");

  return (
    <div className="w-full bg-gold py-3 overflow-hidden border-y border-gold-light/30">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="text-void font-sans font-medium text-[10px] tracking-[0.28em] uppercase px-3"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
