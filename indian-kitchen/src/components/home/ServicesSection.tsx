"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function ServicesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="light" id="services">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeader 
            label="INDIAN KITCHEN THEME DINING" 
            title="OUR SERVICES" 
            align="left"
            className="mb-8"
          />
          <div className="space-y-6 text-brand-warm-cream/80 font-body-lg text-lg md:text-xl leading-relaxed mb-12">
            <p>
              At Indian Kitchen, we extend our experience beyond dining creating tailored solutions for corporates, travelers, and private celebrations.
            </p>
          </div>

          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <span className="text-brand-warm-cream font-bold text-2xl">|</span>
              <p className="font-headline-sm uppercase text-brand-warm-cream font-bold text-xl md:text-2xl">
                CORPORATE DINING
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-brand-warm-cream font-bold text-2xl">|</span>
              <p className="font-headline-sm uppercase text-brand-warm-cream font-bold text-xl md:text-2xl">
                PRIVATE DINING & CELEBRATIONS
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-brand-warm-cream font-bold text-2xl">|</span>
              <p className="font-headline-sm uppercase text-brand-warm-cream font-bold text-xl md:text-2xl">
                TRAVEL & GUEST DINING
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-brand-warm-cream font-bold text-2xl">|</span>
              <p className="font-headline-sm uppercase text-brand-warm-cream font-bold text-xl md:text-2xl">
                CUSTOM MENUS & SPECIAL RATES
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Right Images */}
        <div className="relative w-full h-[500px] lg:h-[600px]">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 right-0 w-2/3 h-2/3 rounded-sm overflow-hidden shadow-2xl z-10"
          >
            <Image
              src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/extracted/page6_img1"
              alt="Waitress Serving"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 66vw, 33vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-sm overflow-hidden shadow-2xl z-20 border-8 border-surface"
          >
            <Image
              src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/extracted/page6_img2"
              alt="Chef Cooking"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 66vw, 33vw"
            />
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
