"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VisionMissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateBg = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-32">
      {/* Floating Mandala Background */}
      <motion.div 
        className="absolute right-[-20%] top-[10%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] z-0 opacity-40 mix-blend-multiply"
        style={{ rotate: rotateBg, y: yBg }}
      >
        <div 
          className="w-full h-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/mandala_1.jpg')" }}
        />
      </motion.div>
      
      <div className="max-w-container-max w-full mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2">
        {/* Left column glass card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center bg-brand-warm-cream/90 backdrop-blur-xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-3xl border border-brand-golden/30 mr-auto max-w-xl"
        >
          {/* Vision */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-label-lg text-brand-golden tracking-[0.2em] uppercase">Our Vision</span>
              <div className="h-px bg-brand-golden w-12" />
            </div>
            
            <p className="font-accent text-3xl md:text-4xl text-brand-deep-forest leading-relaxed">
              "To be the global ambassador of authentic South Indian culinary arts, creating spaces where heritage meets modern luxury."
            </p>
          </div>
          
          <div className="w-full h-px bg-brand-golden/20 mb-12"></div>

          {/* Mission */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-label-lg text-brand-golden tracking-[0.2em] uppercase">Our Mission</span>
              <div className="h-px bg-brand-golden w-12" />
            </div>
            
            <p className="font-accent text-2xl md:text-3xl text-brand-charcoal leading-relaxed">
              "We curate immersive dining experiences that celebrate forgotten recipes, empower village artisans, and redefine Indian hospitality."
            </p>
          </div>
        </motion.div>
        
        {/* Empty right column for path offset */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
