"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function ExperienceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="light" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6"
        >
          <SectionHeader 
            label="INDIAN KITCHEN THEME DINING" 
            title="THE EXPERIENCE WE CREATE" 
            align="left"
            className="mb-8"
          />
          <div className="space-y-6 text-brand-warm-cream font-body-lg text-lg leading-relaxed mb-12">
            <p className="font-headline-sm text-2xl text-brand-warm-cream">
              "We don't just serve food, we serve experiences."
            </p>
            <p className="text-brand-warm-cream/80">
              Each Indian Kitchen outlet is a journey into India's rich cultural tapestry, where every detail tells a story.
            </p>
          </div>

          <h3 className="font-display-sm text-3xl mb-6 text-brand-warm-cream">SIGNATURE THEMES</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="text-brand-golden font-bold text-xl">|</span>
              <p className="font-label-sm tracking-wider uppercase text-brand-warm-cream font-bold pt-1">
                <span className="text-brand-golden">PONDICHERRY STREET</span> – INDO-FRENCH CULTURE AND NOSTALGIA
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-brand-golden font-bold text-xl">|</span>
              <p className="font-label-sm tracking-wider uppercase text-brand-warm-cream font-bold pt-1">
                <span className="text-brand-golden">KERALA HOUSEBOAT</span> – SERENE BACKWATER AMBIENCE
              </p>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-brand-golden font-bold text-xl">|</span>
              <p className="font-label-sm tracking-wider uppercase text-brand-warm-cream font-bold pt-1">
                <span className="text-brand-golden">THE SHERLOCK-THEMED</span> DINING EXPERIENCE WHERE EVERY MEAL FEELS LIKE A MYSTERY.
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Right Images Grid */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-full w-full col-span-1 rounded-sm overflow-hidden"
          >
            <Image
              src="/images/extracted/page4_img2.jpeg"
              alt="Theme Dining Interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </motion.div>
          <div className="col-span-1 grid grid-rows-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full h-full min-h-[200px] rounded-sm overflow-hidden"
            >
              <Image
                src="/images/extracted/page4_img3.jpeg"
                alt="Colorful Theme Interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative w-full h-full min-h-[200px] rounded-sm overflow-hidden"
            >
              <Image
                src="/images/extracted/page4_img4.jpeg"
                alt="Sherlock Theme Interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
