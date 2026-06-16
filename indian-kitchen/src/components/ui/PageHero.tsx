"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHero({
  label,
  title,
  subtitle,
  image = "/images/real_interior.jpeg",
}: PageHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative min-h-[40vh] md:min-h-[46vh] flex items-end overflow-hidden bg-void text-cream border-b border-void">
      <motion.div style={{ y, willChange: "transform" }} className="absolute inset-0 top-[-10%] h-[120%]">
        <Image src={image} alt="" fill className="object-cover img-warm opacity-40" priority sizes="100vw" />
        {/* Subtle gradient overlay to ensure text readability at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-10 md:pb-12 pt-32">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel light className="mb-5">{label}</SectionLabel>
            <h1 className="heading-presentation mb-4">{title}</h1>
            {subtitle && (
              <p className="text-cream/80 font-light text-base md:text-lg max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
