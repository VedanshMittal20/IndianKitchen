"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "Bamboo Biryani is unlike anything I've ever had. The whole place feels like you've teleported to Pondicherry.",
    author: "Rohan M.",
    location: "Colombo",
  },
  {
    rating: 5,
    text: "We booked for our anniversary and were completely blown away. The Kerala Houseboat setting is surreal \u2014 like being on a real backwater.",
    author: "Priya & Dinesh",
    location: "",
  },
  {
    rating: 4,
    text: "The live kitchen stations and late-night service are unmatched in Colombo. Best Indian food I've had outside India.",
    author: "Giulio C.",
    location: "",
  },
  {
    rating: 5,
    text: "I'm a vegetarian and the Kadai Paneer and Missi Roti here are simply outstanding. Will be back every week.",
    author: "Ananya R.",
    location: "",
  },
  {
    rating: 5,
    text: "The Sherlock dining experience is absolutely wild. We solved a mystery while eating Butter Chicken at 1 AM. Peak Colombo.",
    author: "Marcus T.",
    location: "",
  },
  {
    rating: 4,
    text: "Family-friendly, authentic, and incredibly atmospheric. The kind of place you bring every visitor to Sri Lanka.",
    author: "Hana S.",
    location: "",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 bg-void border-t border-border-gold text-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-sans tracking-[0.2em] uppercase text-sm mb-4">
            Guest Experiences
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold mb-6">
            The Reviews Are Just the Beginning
          </h2>
        </motion.div>

        {/* CSS Scroll Snap Carousel */}
        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="min-w-[85vw] sm:min-w-[400px] snap-center bg-cream-dark/5 p-8 border border-gold/20 rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < t.rating ? "fill-gold text-gold" : "text-gold/20"}`}
                    />
                  ))}
                </div>
                <p className="text-cream text-lg md:text-xl font-light italic leading-relaxed mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div>
                <span className="block font-medium text-gold uppercase tracking-wider text-sm">
                  {t.author}
                </span>
                {t.location && (
                  <span className="text-text-muted text-xs uppercase tracking-wide">
                    {t.location}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
