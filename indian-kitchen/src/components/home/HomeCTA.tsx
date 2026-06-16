"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HomeCTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative bg-spice-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-crimson via-crimson/95 to-terracotta/80" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gold" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row md:items-center justify-between gap-8"
        >
          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold-light font-semibold mb-3">
              Ready to Begin?
            </p>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide text-cream leading-tight mb-3">
              Your Table Awaits
            </h2>
            <p className="text-cream/70 font-light text-sm max-w-md">
              Book Pondicherry Street, Kerala Houseboat, or Sherlock Mystery Dining — open daily
              from 12:30 PM.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/reservations" className="btn-primary bg-gold text-void border-0 hover:bg-cream">
              Reserve Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+94117112334"
              className="btn-outline border-cream/30 hover:border-gold"
            >
              <Phone className="w-4 h-4" />
              +94 117 112 334
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
