"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

const testimonials = [
  {
    author: "Rohan M.",
    location: "Colombo Outlet",
    rating: 5,
    quote: "The Bamboo Biryani is pure theatre. The aroma when they split the green bamboo open right at the table is completely unforgettable.",
  },
  {
    author: "Priya & Dinesh",
    location: "Kandy Outlet",
    rating: 5,
    quote: "Celebrated our anniversary at Kerala Houseboat. The lanterns, bamboo architecture, and Malabar crab curry make you forget you're in Sri Lanka.",
  },
  {
    author: "Giulio C.",
    location: "Global Traveler",
    rating: 5,
    quote: "Sensory dining at its peak. The Sherlock theme integrates puzzles and secret panels with some of the most refined Indian dishes I've tasted.",
  },
  {
    author: "Ananya R.",
    location: "Colombo Outlet",
    rating: 5,
    quote: "Finally, vegetarian dishes treated with high culinary respect. The smoked paneer tikka is absolutely phenomenal.",
  },
  {
    author: "Dilshan F.",
    location: "Regular Guest",
    rating: 5,
    quote: "Indian Kitchen sets a new benchmark for dining. Every visit feels like a carefully choreographed theatrical scene.",
  },
];

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setDragWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <SectionShell variant="void" className="overflow-hidden border-b border-cream/10 py-24">
      {/* Testimonials Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeader 
          label="Guest Chronicles" 
          title="Loved by Guests" 
          subtitle="Experiences recorded by those who stepped inside our sanctuaries."
          className="mb-0! md:mb-0!"
          lightMode
        />
        <div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant/30 px-4 py-2.5 rounded-sm w-fit self-start md:self-auto mb-2 shadow-lg">
          <Star className="w-3.5 h-3.5 text-brand-golden fill-gold" />
          <span className="text-[9px] tracking-[0.2em] text-on-surface font-bold font-body-md">
            4.8★ on Google · 1200+ Reviews
          </span>
        </div>
      </div>

      {/* Draggable Carousel Container */}
      <div className="relative w-full overflow-visible cursor-grab active:cursor-grabbing">
        {/* Left/Right Vignette Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={carouselRef}
          drag="x"
          dragConstraints={{ right: 0, left: -dragWidth }}
          dragElastic={0.15}
          className="flex gap-6 w-max py-4 px-6 select-none"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[380px] shrink-0 bg-surface-container-low border border-outline-variant/30 p-8 rounded-sm shadow-xl relative overflow-hidden flex flex-col justify-between h-[250px]"
            >
              {/* Gold card indicator line */}
              <div className="absolute top-0 left-0 w-[3px] h-full bg-saffron-gold" />
              
              <div>
                <div className="flex mb-4 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < t.rating ? "text-brand-golden fill-gold" : "text-on-surface/15"}`}
                    />
                  ))}
                </div>
                
                <p className="font-headline-md italic text-base md:text-lg text-on-surface/90 leading-relaxed min-h-[90px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-cream/10 pt-4 flex justify-between items-center">
                <div>
                  <h4 className="text-[9px] tracking-[0.2em] text-brand-golden font-bold mb-0.5">
                    {t.author}
                  </h4>
                  <p className="text-[8px] tracking-[0.2em] text-on-surface/40 font-body-md">{t.location}</p>
                </div>
                <span className="text-[8px] text-brand-golden/30 font-body-md">Verified guest</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="w-full text-center mt-6">
        <span className="text-[8px] tracking-[0.25em] text-on-surface/35 font-body-md">
          ← Drag horizontally to swipe reviews →
        </span>
      </div>
    </SectionShell>
  );
}
