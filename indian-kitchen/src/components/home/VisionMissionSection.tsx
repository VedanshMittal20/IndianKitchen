"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function VisionMissionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="void" id="vision-mission">
      {/* VISION */}
      <div className="flex flex-col items-center text-center mb-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="font-label-sm tracking-widest text-brand-golden font-bold uppercase mb-4 text-right w-full">
            OUR ASPIRATIONAL FUTURE
          </p>
          <h2 className="font-display-lg text-6xl md:text-8xl lg:text-[120px] text-brand-golden uppercase m-0 leading-none mb-8">
            VISION
          </h2>
          <p className="font-headline-sm text-2xl md:text-4xl text-on-surface uppercase leading-tight font-bold">
            TO ESTABLISH AND EXPAND INDIAN KITCHEN AS A GLOBALLY RECOGNIZED THEME DINING BRAND, REDEFINING INDIAN CUISINE EXPERIENCES WORLDWIDE.
          </p>
        </motion.div>
      </div>

      {/* MISSION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="font-display-lg text-6xl md:text-8xl lg:text-[120px] text-brand-golden uppercase m-0 leading-none mb-4">
            OUR<br/>MISSION
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="font-body-lg text-xl md:text-2xl text-on-surface/90 leading-relaxed">
            To deliver a dining experience that is unique in taste, immersive in ambience, and authentic in every detail, celebrating India's culinary heritage with every plate we serve.
          </p>
        </motion.div>
      </div>

      {/* MISSION IMAGES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 h-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full h-full border-t-4 border-l-4 border-black"
        >
          <Image
            src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/extracted/page13_img2"
            alt="Mission Dish 1"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative w-full h-full border-t-4 border-black"
        >
          <Image
            src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/extracted/page13_img3"
            alt="Mission Dish 2"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative w-full h-full border-t-4 border-r-4 border-black"
        >
          <Image
            src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/extracted/page13_img4"
            alt="Mission Dish 3"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </div>
    </SectionShell>
  );
}
