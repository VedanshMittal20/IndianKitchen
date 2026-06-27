"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function LocationsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="light" id="locations">
      <div className="flex flex-col items-center mb-16 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-label-sm tracking-widest text-brand-golden font-bold uppercase mb-4">
            INDIAN KITCHEN<br/>THEME DINING
          </p>
          <h2 className="font-display-lg text-5xl md:text-7xl lg:text-[100px] text-brand-golden uppercase m-0 leading-none">
            OUR LOCATIONS
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Location 1 - Colombo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col"
        >
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-6 shadow-lg border-2 border-brand-accent-green">
            <Image
              src="/images/extracted/page14_img2.png"
              alt="Colombo Location Map"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="font-headline-sm text-2xl md:text-3xl text-brand-warm-cream underline underline-offset-8">
            357, R.A. De Mel Mawatha, Kollupitiya,<br/>Colombo 03
          </p>
        </motion.div>

        {/* Location 2 - Kandy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col"
        >
          <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-6 shadow-lg border-2 border-brand-accent-green">
            <Image
              src="/images/extracted/page14_img3.png"
              alt="Kandy Location Map"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className="font-headline-sm text-2xl md:text-3xl text-brand-warm-cream underline underline-offset-8">
            25/8 Sangaraja Mawatha, Hillwood College Road,<br/>Kandy
          </p>
        </motion.div>
      </div>
    </SectionShell>
  );
}
