"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function USPSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="light" id="usp">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeader 
            label="PRESENTED BY INDIAN KITCHEN" 
            title="WHAT MAKES US DIFFERENT" 
            align="left"
            className="mb-8"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <p className="font-label-sm tracking-widest text-brand-golden font-bold uppercase mb-4 text-right">
            OUR UNIQUE VALUE<br/>PROPOSITIONS
          </p>
          <p className="font-body-lg text-xl md:text-2xl text-brand-warm-cream leading-relaxed">
            Indian Kitchen stands apart through immersive theme dining, authentic regional recipes, late-night service till 3 AM, and a scalable model built for global expansion.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* USP 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col"
        >
          <div className="relative w-full aspect-square mb-6 border-4 border-surface shadow-lg">
            <Image
              src="/images/extracted/page11_img2.jpeg"
              alt="Theme Based Dining"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="flex justify-between items-start">
            <h4 className="font-headline-sm uppercase text-brand-golden font-bold text-lg md:text-xl max-w-[60%]">
              THEME-BASED<br/>EXPERIENTIAL<br/>DINING
            </h4>
            <span className="font-label-sm text-brand-golden text-right">Authentic<br/>Taste</span>
          </div>
        </motion.div>

        {/* USP 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col"
        >
          <div className="relative w-full aspect-square mb-6 border-4 border-surface shadow-lg">
            <Image
              src="/images/extracted/page11_img3.jpeg"
              alt="Tourism Integration"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="flex justify-between items-start">
            <h4 className="font-headline-sm uppercase text-brand-golden font-bold text-lg md:text-xl max-w-[60%]">
              TOURISM<br/>INTEGRATION
            </h4>
            <span className="font-label-sm text-brand-golden text-right">Late-Night<br/>Service</span>
          </div>
        </motion.div>

        {/* USP 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col"
        >
          <div className="relative w-full aspect-square mb-6 border-4 border-surface shadow-lg">
            <Image
              src="/images/extracted/page11_img4.jpeg"
              alt="Cultural Story Telling"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="flex justify-between items-start">
            <h4 className="font-headline-sm uppercase text-brand-golden font-bold text-lg md:text-xl max-w-[60%]">
              CULTURAL<br/>STORY<br/>TELLING
            </h4>
            <span className="font-label-sm text-brand-golden text-right">Global<br/>Scale</span>
          </div>
        </motion.div>

      </div>
    </SectionShell>
  );
}
