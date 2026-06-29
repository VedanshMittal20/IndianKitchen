"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function OriginStorySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="void" id="origin-story">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeader 
            label="INDIAN KITCHEN THEME DINING" 
            title="OUR ORIGIN STORY" 
            align="center"
          />
          <div className="font-body-lg text-lg md:text-xl text-on-surface/80 leading-relaxed space-y-6 mt-8">
            <p>
              Born during the global hospitality crisis of 2019, Indian Kitchen emerged from a bold vision: to transform dining into experiential journeys rooted in authenticity.
            </p>
            <p>
              Inspired by Pondicherry's enchanting French colonial charm, we created a narrative-driven concept where every meal tells a story of India's rich cultural heritage.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative h-[40vh] md:h-[60vh] max-h-[600px] border-y-4 border-brand-accent-green"
      >
        <Image
          src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/theme_pondicherry"
          alt="Indian Kitchen Pondicherry Theme Interior"
          fill
          className="object-cover img-warm"
          sizes="100vw"
        />
      </motion.div>
    </SectionShell>
  );
}
