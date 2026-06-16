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
    "Live Kitchen Stations",
    "Tamil Nadu",
    "Kerala",
    "North Indian Cuisine",
  ];

  const text = items.map((item) => `${item}  ·  `).join("");

  return (
    <div className="w-full bg-forest py-5 overflow-hidden border-b border-wood">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="text-cream/80 font-sans font-light text-[11px] tracking-[0.35em] uppercase px-4"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
