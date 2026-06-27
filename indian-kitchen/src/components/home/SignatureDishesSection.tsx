"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function SignatureDishesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="void" id="signature-dishes">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16">
        
        {/* Left Content - Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeader 
            label="INDIAN KITCHEN THEME DINING" 
            title="SIGNATURE DISHES" 
            align="left"
            className="mb-8"
          />
        </motion.div>

        {/* Right Content - Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="font-headline-sm text-2xl md:text-3xl text-on-surface uppercase leading-snug mb-12">
            OUR MENU CELEBRATES INDIA'S RICH CULINARY HERITAGE WITH AUTHENTIC RECIPES PASSED DOWN THROUGH GENERATIONS.
          </p>

          <h3 className="font-display-sm text-2xl mb-6 text-brand-golden">MUST-TRY FAVORITES:</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="text-on-surface font-bold text-xl">|</span>
              <p className="font-label-sm tracking-wider uppercase text-brand-golden font-bold pt-1">
                PUFF PAROTTA, BAMBOO BIRYANI & TENDER COCONUT PRAWN CURRY
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-on-surface font-bold text-xl">|</span>
              <p className="font-label-sm tracking-wider uppercase text-brand-golden font-bold pt-1">
                REFRESHING JIGARTHANDA & ILANEER CAKE DESSERTS
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-on-surface font-bold text-xl">|</span>
              <p className="font-label-sm tracking-wider uppercase text-brand-golden font-bold pt-1">
                REGIONAL SPECIALTIES CRAFTED BY VILLAGE - TRAINED CHEFS
              </p>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Images Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative aspect-square w-full rounded-sm overflow-hidden border-4 border-surface"
        >
          <Image
            src="/images/extracted/page7_img2.jpeg"
            alt="Bamboo Biryani"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative aspect-square w-full rounded-sm overflow-hidden border-4 border-surface"
        >
          <Image
            src="/images/extracted/page7_img3.jpeg"
            alt="Banana Leaf Dish"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative aspect-square w-full rounded-sm overflow-hidden border-4 border-surface"
        >
          <Image
            src="/images/extracted/page7_img4.jpeg"
            alt="Signature Dish"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </div>
    </SectionShell>
  );
}
