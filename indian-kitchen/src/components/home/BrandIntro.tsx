"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function BrandIntro() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-32 md:py-48 bg-cream text-text-dark" id="experience">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-wood" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-wood font-medium">
              The Indian Kitchen Philosophy
            </span>
            <div className="w-12 h-px bg-wood" />
          </div>

          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-forest mb-12">
            We don&apos;t serve food.<br />
            <span className="italic font-light text-forest/80">We serve journeys.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-20">
            <div className="flex flex-col gap-6">
              <p className="text-lg md:text-xl font-light leading-relaxed text-text-muted">
                Indian Kitchen is Sri Lanka&apos;s pioneering immersive theme dining restaurant chain. Born from a bold vision in 2019, our first outlet opened its doors in 2020.
              </p>
              <p className="text-lg md:text-xl font-light leading-relaxed text-text-muted">
                We believe dining should be an act of transport. Every location is a painstakingly crafted universe — from the cobblestone nostalgia of Pondicherry Street to the serene backwaters of a Kerala Houseboat.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 items-center pl-0 md:pl-12 border-l border-wood">
              <div>
                <div className="font-display text-5xl md:text-6xl text-forest mb-2">2019</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-wood">Founded</div>
              </div>
              <div>
                <div className="font-display text-5xl md:text-6xl text-forest mb-2">03</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-wood">Themed Worlds</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
