"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
  return (
    <section className="relative min-h-[40vh] md:min-h-[46vh] flex items-end overflow-hidden bg-paper border-b border-sage/10">
      <div className="absolute inset-0">
        <Image src={image} alt="" fill className="object-cover img-warm opacity-20" priority sizes="100vw" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-10 md:pb-12 pt-32">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel className="mb-5">{label}</SectionLabel>
            <h1 className="heading-presentation mb-4">{title}</h1>
            {subtitle && (
              <p className="text-text-muted font-light text-base md:text-lg max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
