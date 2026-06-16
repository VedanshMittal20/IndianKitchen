"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

const testimonials = [
  {
    author: "Rohan M.",
    location: "Colombo",
    rating: 5,
    quote: "The Bamboo Biryani is theatre on a plate. The earthy aroma when they split the bamboo open at the table... unforgettable.",
  },
  {
    author: "Priya & Dinesh",
    location: "Kandy",
    rating: 5,
    quote: "Celebrated our anniversary at the Kerala Houseboat theme. The attention to detail makes you forget you're in a restaurant.",
  },
  {
    author: "Giulio C.",
    location: "Tourist",
    rating: 4,
    quote: "Best Indian food I've had outside of India. The Butter Chicken is rich without being heavy. Incredible ambience.",
  },
  {
    author: "Ananya R.",
    location: "Colombo",
    rating: 5,
    quote: "Finally, a place that treats vegetarian food with respect. The Kadai Paneer is phenomenal. Our new family favourite.",
  },
  {
    author: "Marcus T.",
    location: "Colombo",
    rating: 5,
    quote: "Went for the Sherlock mystery dining at 1 AM. Solving puzzles between courses while eating perfect garlic naan? Brilliant concept.",
  },
  {
    author: "Hana S.",
    location: "Kandy",
    rating: 4,
    quote: "Very atmospheric. The staff are so knowledgeable about the regions the food comes from. Great for special occasions.",
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-32 md:py-48 bg-forest text-cream border-t border-wood">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-yellow font-medium">
                Guest Experiences
              </span>
              <div className="w-12 h-px bg-yellow" />
            </div>
            <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.9] text-cream">
              The Reviews Are<br />
              <span className="italic text-yellow">Just the Beginning</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 border border-wood/30 flex items-center justify-center hover:bg-yellow hover:text-forest transition-colors text-yellow" aria-label="Previous">
              &larr;
            </button>
            <button className="w-12 h-12 border border-wood/30 flex items-center justify-center hover:bg-yellow hover:text-forest transition-colors text-yellow" aria-label="Next">
              &rarr;
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="flex overflow-x-auto gap-8 pb-12 hide-scrollbar snap-x snap-mandatory">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="min-w-[85vw] md:min-w-[400px] flex-shrink-0 snap-center bg-cream/5 border border-wood/20 p-10 hover:bg-cream/10 transition-colors duration-500"
            >
              <div className="flex mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? "text-yellow fill-yellow" : "text-wood/30"}`}
                  />
                ))}
              </div>
              <p className="font-display italic text-2xl text-cream/90 leading-relaxed mb-10 min-h-[120px]">
                "{t.quote}"
              </p>
              <div className="border-t border-wood/30 pt-6">
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-yellow mb-1">
                  {t.author}
                </p>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-cream/40">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
