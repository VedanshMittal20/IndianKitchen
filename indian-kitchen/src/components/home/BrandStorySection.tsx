"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BrandStorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Vibrant Mural Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: yBg }}
      >
        <div 
          className="w-full h-[140%] -top-[20%] absolute bg-cover bg-center"
          style={{ backgroundImage: "url('/vibrant_mural.jpg')" }}
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-brand-deep-forest/40 mix-blend-multiply" />
      </motion.div>
      
      <div className="max-w-container-max w-full mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2">
        {/* Empty left column for path offset */}
        <div className="hidden md:block" />
        
        {/* Right column glass card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center bg-brand-warm-cream/90 backdrop-blur-xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-3xl border border-brand-golden/30 ml-auto max-w-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-brand-golden w-12" />
            <span className="font-label-lg text-brand-golden tracking-[0.2em] uppercase">Our Story</span>
          </div>
          
          <h2 className="font-headline-lg text-brand-deep-forest mb-6">
            A Legacy of Taste, <br className="hidden md:block" />
            Crafted with Passion.
          </h2>
          
          <div className="space-y-4 text-brand-charcoal/80 font-body-lg">
            <p>
              [PLACEHOLDER] Every great culinary journey begins with a singular vision. At Indian Kitchen, our story is rooted in the rich tapestry of regional Indian flavors, reimagined for the modern palate.
            </p>
            <p>
              [PLACEHOLDER] Our founders believed that dining is not just about food—it is an experience that engages all senses. From the meticulously curated spices to the architectural permanence of our spaces, every detail reflects our commitment to excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
