"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, BookOpen, Leaf } from "lucide-react";

const commitments = [
  {
    icon: <Users className="w-8 h-8 text-gold" />,
    title: "Chefs from Indian Villages",
    text: "Our chefs don't learn from culinary schools. They learn from their grandmothers. Every dish traces back to a family kitchen in the heart of India.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-gold" />,
    title: "Family-Rooted Recipes",
    text: "We don't adapt, modify, or fusion-ize. Regional recipes pass through our kitchens exactly as they've been cooked for generations.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-gold" />,
    title: "No Artificial Colours or Preservatives",
    text: "What you eat is what India grows. We source ingredients directly from India's heartland \u2014 the spices, the rice, the masalas.",
  },
];

export default function OurCommitment() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-24 bg-parchment text-center">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-gold font-sans tracking-[0.2em] uppercase text-sm mb-4">
            Our Commitment
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-crimson">
            The Purity Pledge
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="flex flex-col items-center group"
            >
              <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center mb-6 bg-cream-dark group-hover:bg-gold/10 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-display text-2xl text-crimson mb-4 font-semibold">
                {item.title}
              </h3>
              <p className="text-text-muted text-base leading-relaxed max-w-sm">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
