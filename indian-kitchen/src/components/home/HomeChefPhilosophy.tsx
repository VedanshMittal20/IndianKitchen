"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeChefPhilosophy() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center overflow-hidden bg-void py-32">
      <motion.div style={{ y, willChange: "transform" }} className="absolute inset-0 h-[120%] top-[-10%]">
        <Image 
          src="/images/real_interior.jpeg" 
          alt="Chef Philosophy Background" 
          fill 
          className="object-cover img-warm opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-transparent" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel light className="mb-6">Culinary Authenticity</SectionLabel>
            
            <h2 className="heading-presentation heading-presentation-light mb-8">
              No Shortcuts.<br/>
              <span className="text-gold italic font-light normal-case tracking-normal">Just Soul.</span>
            </h2>

            <p className="text-cream/80 text-lg leading-relaxed mb-6 font-light">
              In the modern food industry, shortcuts are everywhere. We use none of them. Our chefs are handpicked from Indian villages, bringing generational knowledge to every plate.
            </p>

            <p className="text-cream/80 text-lg leading-relaxed mb-10 font-light">
              Every curry paste is ground fresh. Every tandoori marinade is mixed by hand. Authenticity isn&apos;t a promise — it&apos;s our foundation.
            </p>

            <Link href="/experience" className="btn-primary">
              Discover Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
