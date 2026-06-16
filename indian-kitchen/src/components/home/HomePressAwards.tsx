"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const awards = [
  { year: "2025", title: "Best Theme Restaurant", org: "Colombo Culinary Awards" },
  { year: "2024", title: "Excellence in Authentic Cuisine", org: "Taste of Asia" },
  { year: "2023", title: "Global Icon Award", org: "Global Economic Forum" },
  { year: "2022", title: "Top 10 Emerging Brands", org: "Global Dining Guide" },
];

export default function HomePressAwards() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-paper border-y border-sage/10 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-16" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-sage/10">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center px-4 flex flex-col items-center justify-center group cursor-default"
            >
              <span className="text-gold font-display text-lg mb-2 block transform group-hover:-translate-y-1 transition-transform">
                {award.year}
              </span>
              <h3 className="text-sm md:text-base font-medium text-forest mb-1 uppercase tracking-widest leading-relaxed">
                {award.title}
              </h3>
              <p className="text-xs text-text-muted italic">
                {award.org}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
