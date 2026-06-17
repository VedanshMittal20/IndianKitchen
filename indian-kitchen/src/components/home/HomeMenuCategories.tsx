"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Coffee, Soup, Martini, CakeSlice } from "lucide-react";

const categories = [
  {
    title: "Starters",
    desc: "In the new era of gastronomy we look to the future while embracing the traditions of our past.",
    icon: Coffee,
    href: "/menu#starters",
  },
  {
    title: "Main Dishes",
    desc: "In the new era of gastronomy we look to the future while embracing the traditions of our past.",
    icon: Soup,
    href: "/menu#mains",
  },
  {
    title: "Drinks",
    desc: "In the new era of gastronomy we look to the future while embracing the traditions of our past.",
    icon: Martini,
    href: "/menu#drinks",
  },
  {
    title: "Desserts",
    desc: "In the new era of gastronomy we look to the future while embracing the traditions of our past.",
    icon: CakeSlice,
    href: "/menu#desserts",
  },
];

export default function HomeMenuCategories() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="section-padding bg-paper" id="menu-categories">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="heading-presentation text-forest mb-4">Browse Our Menu</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto" ref={ref}>
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 border border-sage/15 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-8 h-8 text-forest" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-forest mb-4">{category.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow font-light">
                  {category.desc}
                </p>
                <Link
                  href={category.href}
                  className="text-terracotta font-semibold text-sm tracking-wide hover:text-forest transition-colors mt-auto"
                >
                  Explore Menu
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
