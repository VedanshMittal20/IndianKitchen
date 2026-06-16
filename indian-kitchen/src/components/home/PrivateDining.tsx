"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

export default function PrivateDining() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-padding bg-cream-dark" id="private-dining">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          ref={ref}
          className="relative w-full h-[50vh] md:h-[55vh] flex items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1.08 }}
            animate={inView ? { scale: 1 } : { scale: 1.08 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/real_waiter.jpeg"
              alt="Private Dining at Indian Kitchen"
              fill
              className="object-cover img-warm"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-espresso/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-espresso/20" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 bg-cream p-8 md:p-12 max-w-xl text-center border border-terracotta/15 shadow-xl mx-4"
          >
            <span className="text-[9px] tracking-[0.3em] uppercase text-terracotta font-medium block mb-4">
              Private Events
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-espresso mb-4">Your Event, Our Stage</h2>
            <p className="text-text-muted font-light leading-relaxed mb-6 text-sm">
              From intimate celebrations to corporate gatherings — private spaces across all our theme
              concepts, curated for your guests.
            </p>
            <Link
              href="https://wa.me/94117112334?text=Hello!%20I'd%20like%20to%20enquire%20about%20private%20dining..."
              target="_blank"
              rel="noreferrer"
              className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-espresso hover:text-saffron transition-colors link-underline pb-1"
            >
              Enquire for Private Dining →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
