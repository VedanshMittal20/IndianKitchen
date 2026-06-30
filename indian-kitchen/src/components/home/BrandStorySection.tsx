"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStorySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-warm-cream">
      <div className="absolute inset-0 spice-pattern mix-blend-multiply opacity-5"></div>
      
      <div className="max-w-container-max mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto md:ml-auto md:mr-0 jodhpuri-border p-2 order-2 md:order-1"
          >
            <div className="w-full h-full relative bg-surface-variant overflow-hidden flex items-center justify-center">
              <span className="text-brand-charcoal/50 font-label-lg tracking-widest text-center px-4">[FOUNDER PORTRAIT PLACEHOLDER]</span>
            </div>
          </motion.div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px h-2/3 bg-brand-golden/30 order-2"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center order-1 md:order-3"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-brand-golden w-12" />
              <span className="font-label-lg text-brand-golden tracking-[0.2em] uppercase">Our Story</span>
            </div>
            
            <h2 className="font-headline-lg text-brand-deep-forest mb-8">
              A Legacy of Taste, <br className="hidden md:block" />
              Crafted with Passion.
            </h2>
            
            <div className="space-y-6 text-brand-charcoal/80 font-body-lg">
              <p>
                [PLACEHOLDER] Every great culinary journey begins with a singular vision. At Indian Kitchen, our story is rooted in the rich tapestry of regional Indian flavors, reimagined for the modern palate.
              </p>
              <p>
                [PLACEHOLDER] Our founders believed that dining is not just about food—it is an experience that engages all senses. From the meticulously curated spices to the architectural permanence of our spaces, every detail reflects our commitment to excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
