"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function AuthenticitySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="dark" id="authenticity">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <SectionHeader 
            label="INDIAN KITCHEN THEME DINING" 
            title="CULINARY AUTHENTICITY" 
            align="left"
            className="mb-8"
          />
          <div className="space-y-6 text-brand-warm-cream/80 font-body-lg text-lg md:text-xl leading-relaxed mb-12">
            <p>
              At Indian Kitchen, authenticity isn't a promise, it's our foundation. Every dish tells a story of tradition, crafted with ingredients sourced directly from India's heartland.
            </p>
          </div>

          <h3 className="font-display-sm text-2xl mb-6 text-brand-golden">OUR COMMITMENT</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="text-brand-sandy font-bold text-xl">|</span>
              <p className="font-label-sm tracking-wider uppercase text-brand-warm-cream font-bold">
                CHEFS HANDPICKED FROM INDIAN VILLAGES
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-brand-sandy font-bold text-xl">|</span>
              <p className="font-label-sm tracking-wider uppercase text-brand-warm-cream font-bold">
                FAMILY-ROOTED REGIONAL RECIPES
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-brand-sandy font-bold text-xl">|</span>
              <p className="font-label-sm tracking-wider uppercase text-brand-warm-cream font-bold">
                NO ARTIFICIAL COLORS OR PRESERVATIVES
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 relative w-full aspect-square md:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border-4 border-surface"
        >
          <Image
            src="/images/extracted/page5_img3.jpeg"
            alt="Culinary Authenticity Copper Pot"
            fill
            className="object-cover img-warm"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </SectionShell>
  );
}
