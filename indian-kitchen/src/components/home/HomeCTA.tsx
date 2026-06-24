"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function HomeCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <SectionShell variant="void" className="relative overflow-hidden py-12 md:py-16 border-y border-outline-variant/30">
      <div className="absolute inset-0 bg-surface-container-lowest" />
      <div className="absolute top-0 left-0 w-full h-1 bg-saffron-gold" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10"
      >
        <SectionHeader 
          label="Ready to Begin?" 
          title="Your Table Awaits" 
          subtitle="Book Pondicherry Street, Kerala Houseboat, or Sherlock Mystery Dining — open daily from 12:30 PM."
          lightMode
          className="mb-0 md:mb-0 max-w-xl"
        />
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link href="/reservations" className="btn-primary">
            Reserve Now
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="tel:+94117112334"
            className="btn-outline border-outline-variant/30 hover:border-saffron-gold"
          >
            <Phone className="w-4 h-4" />
            +94 117 112 334
          </a>
        </div>
      </motion.div>
    </SectionShell>
  );
}
