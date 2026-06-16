"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    author: "Rohan M.",
    location: "Colombo",
    rating: 5,
    quote:
      "The Bamboo Biryani is theatre on a plate. The earthy aroma when they split the bamboo open — unforgettable.",
  },
  {
    author: "Priya & Dinesh",
    location: "Kandy",
    rating: 5,
    quote:
      "Celebrated our anniversary at Kerala Houseboat. You forget you're in a restaurant entirely.",
  },
  {
    author: "Giulio C.",
    location: "Tourist",
    rating: 4,
    quote:
      "Best Indian food outside India. Rich Butter Chicken, incredible ambience, worth every rupee.",
  },
  {
    author: "Ananya R.",
    location: "Colombo",
    rating: 5,
    quote: "Finally vegetarian food treated with respect. Kadai Paneer is phenomenal.",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative bg-parchment overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.06] pointer-events-none">
        <Image src="/images/real_interior.jpeg" alt="" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
        >
          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-terracotta font-semibold mb-2 pipe-item">
              Guest Reviews
            </p>
            <h2 className="heading-presentation text-void">Loved by Our Guests</h2>
          </div>
          <div className="flex items-center gap-2 bg-gold/15 border border-gold/30 px-4 py-2">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-[10px] tracking-[0.15em] uppercase text-void font-semibold">
              4.0★ on UberEats · 800+ Reviews
            </span>
          </div>
        </motion.div>

        <div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar snap-x snap-mandatory">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 28 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + index * 0.08 }}
              className="min-w-[78vw] md:min-w-[300px] flex-shrink-0 snap-center bg-cream border border-gold/25 p-6 gold-frame relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sage via-gold to-terracotta" />
              <div className="flex mb-4 pl-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < t.rating ? "text-gold fill-gold" : "text-cream-dark"}`}
                  />
                ))}
              </div>
              <p className="font-display italic text-base text-text-dark leading-relaxed mb-6 pl-2 min-h-[72px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-gold/20 pt-4 pl-2">
                <p className="text-[9px] tracking-[0.2em] uppercase text-sage font-semibold mb-0.5">
                  {t.author}
                </p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-text-muted">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
