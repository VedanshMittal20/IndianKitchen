"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface MenuCategoryPillsProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export default function MenuCategoryPills({ categories, activeCategory, onSelect }: MenuCategoryPillsProps) {
  return (
    <div className="flex items-center gap-6 md:gap-10 overflow-x-auto hide-scrollbar pb-2 mb-8 border-b border-cream/10">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className="relative pb-4 shrink-0 transition-colors"
          >
            <span className={`text-[10px] tracking-[0.2em] uppercase font-semibold ${isActive ? "text-brand-golden" : "text-on-surface-variant hover:text-on-surface"}`}>
              {cat}
            </span>
            {isActive && (
              <motion.div
                layoutId="activeCategoryPill"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron-gold"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
