"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function PrivateDining() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-cream py-32 md:py-48" id="private-dining">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          ref={ref}
          className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden"
        >
          {/* Background Image */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={inView ? { scale: 1 } : { scale: 1.1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/slide_11.png"
              alt="Private Dining at Indian Kitchen"
              fill
              className="object-cover img-warm"
              sizes="100vw"
            />
            {/* Dark wood overlay for contrast */}
            <div className="absolute inset-0 bg-wood/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
          </motion.div>

          {/* Center Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative z-10 bg-cream p-12 md:p-16 max-w-2xl text-center border border-wood/20 shadow-2xl mx-6"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-px bg-wood" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-wood font-medium">
                Exclusive
              </span>
              <div className="w-8 h-px bg-wood" />
            </div>

            <h2 className="font-display text-4xl md:text-5xl text-forest mb-6">
              Your Event, Our Stage
            </h2>

            <p className="text-text-muted font-light leading-relaxed mb-8">
              From intimate celebrations to corporate gatherings, Indian Kitchen offers private spaces across all our theme concepts. Let us curate an unforgettable journey tailored to your guests.
            </p>

            <button className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-forest hover:text-yellow transition-colors link-underline pb-1">
              Enquire for Private Dining
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
