"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function ScaleSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="light" id="scale">
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
            title="A BRAND BUILT FOR SCALE" 
            align="left"
            className="mb-8"
          />
          <div className="space-y-6 text-brand-warm-cream/90 font-body-lg text-lg leading-relaxed mb-12">
            <p>
              Indian Kitchen has demonstrated remarkable growth since 2020, expanding across multiple themed outlets with consistent quality - from Pondicherry and Kerala inspired dining in Colombo to a Sherlock-themed experience in Kandy, creating a scalable model that drives strong customer connection across locations. Our model proves that experiential dining drives loyalty.
            </p>
          </div>

          <h3 className="font-display-sm text-3xl mb-6 text-brand-golden">OUR GROWTH STORY</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="text-brand-golden font-bold text-xl">|</span>
              <p className="font-label-sm tracking-wider uppercase text-brand-golden font-bold">
                STRONG REPEAT CLIENTELE
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-brand-golden font-bold text-xl">|</span>
              <p className="font-label-sm tracking-wider uppercase text-brand-golden font-bold">
                SCALABLE THEME FORMATS
              </p>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-brand-golden font-bold text-xl">|</span>
              <p className="font-label-sm tracking-wider uppercase text-brand-golden font-bold">
                EVENT-DRIVEN REVENUE
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Right Images */}
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-[500px]">
          <div className="col-span-1 grid grid-rows-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full h-full rounded-sm overflow-hidden"
            >
              <Image
                src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/real_storefront"
                alt="Outlet view"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full h-full rounded-sm overflow-hidden"
            >
              <Image
                src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/hero_main"
                alt="Theme exterior view"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-1 relative h-full rounded-sm overflow-hidden"
          >
            <Image
              src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/extracted/page10_img4"
              alt="Exterior signage"
              fill
              className="object-cover scale-[1.15] object-[80%_center]"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
