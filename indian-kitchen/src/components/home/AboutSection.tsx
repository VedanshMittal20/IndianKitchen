"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="light" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Text Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <SectionHeader 
            label="WHERE EVERY MEAL TELLS A STORY" 
            title="ABOUT INDIAN KITCHEN" 
            align="left"
            className="mb-8"
          />
          <div className="space-y-6 text-brand-warm-cream/80 font-body-lg text-lg leading-relaxed mb-10">
            <p>
              Indian Kitchen is an immersive theme dining experience that brings India's soul to life through food, culture, and storytelling. Every detail is crafted to transport guests into the heart of India's rich culinary heritage.
            </p>
            <p>
              Founded in Sri Lanka in 2019, we launched our first outlet in 2020 in Kollupitiya, Colombo, introducing the city to our signature Pondicherry Street concept.
            </p>
          </div>

          <div className="space-y-8 border-l-2 border-brand-accent-green pl-6 py-2">
            <div>
              <h4 className="font-headline-sm text-brand-warm-cream text-xl mb-2">CONCEPT :</h4>
              <p className="font-body-md text-brand-golden font-semibold uppercase tracking-wider text-sm leading-relaxed">
                An immersive theme dining experience that transports guests through the rich culinary heritage and cultural essence of India.
              </p>
            </div>
            <div>
              <h4 className="font-headline-sm text-brand-warm-cream text-xl mb-2">ORIGIN :</h4>
              <p className="font-body-md text-brand-golden font-semibold uppercase tracking-wider text-sm leading-relaxed">
                Kollupitiya, Colombo<br/>
                Our flagship Pondicherry Street outlet opened in 2020.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl hover-lift"
        >
          <Image
            src="/images/extracted/page2_img2.jpeg"
            alt="Indian Kitchen Storefront"
            fill
            className="object-cover img-warm"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </SectionShell>
  );
}
