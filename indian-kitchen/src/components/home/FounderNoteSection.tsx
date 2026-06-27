"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function FounderNoteSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="light" id="founder">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display-lg text-6xl md:text-8xl lg:text-[100px] text-brand-golden uppercase m-0 leading-none mb-8">
            FOUNDER'S<br/>NOTE
          </h2>
          <div className="space-y-6 text-brand-warm-cream/90 font-body-lg text-lg md:text-xl leading-relaxed mb-12">
            <p>
              <strong className="font-bold">Vincent Renold</strong> brings over 20 years of hospitality excellence, having worked with prestigious brands including Radisson, ITC, and Banyan Tree. His expertise spans brand conceptualization, operations management, revenue optimization, and international expansion. Vincent's vision extends beyond restaurants, to create a complete ecosystem of authentic Indian culinary experiences worldwide.
            </p>
            <p className="font-headline-sm uppercase text-brand-golden font-bold pt-4">
              BUILDING EXPERIENCES<br/>THROUGH PASSION &<br/>EXPERTISE
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-square md:aspect-[4/5] rounded-sm overflow-hidden mb-8 shadow-2xl border-4 border-surface"
            style={{ WebkitMaskImage: "radial-gradient(circle, black 50%, transparent 100%)", maskImage: "radial-gradient(circle, black 50%, transparent 100%)" }}
          >
            <Image
              src="/images/extracted/page15_img2.png"
              alt="Vincent Renold - Founder"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <div>
              <p className="font-label-sm tracking-wider uppercase text-brand-golden font-bold">
                LEADERSHIP : TWO DECADES SHAPING HOSPITALITY EXCELLENCE ACROSS GLOBAL BRANDS.
              </p>
            </div>
            <div>
              <p className="font-label-sm tracking-wider uppercase text-brand-golden font-bold">
                VISION : CREATING A COMPLETE ECOSYSTEM BEYOND RESTAURANTS.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </SectionShell>
  );
}
