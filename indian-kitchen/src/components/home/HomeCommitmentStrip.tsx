"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import PipeList from "@/components/ui/PipeList";

export default function HomeCommitmentStrip() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative bg-sage overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image src="/images/slide_5.png" alt="" fill className="object-cover object-right" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/40" />

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="lg:col-span-5"
          >
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold font-semibold mb-3">
              Our Commitment
            </p>
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide text-cream leading-tight mb-4">
              Culinary
              <br />
              Authenticity
            </h2>
            <p className="text-cream/75 font-light text-sm leading-relaxed">
              Every dish tells a story of tradition — ingredients sourced from India&apos;s heartland,
              crafted without compromise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="lg:col-span-4"
          >
            <PipeList
              light
              items={[
                "Chefs handpicked from Indian villages",
                "Family-rooted regional recipes",
                "No artificial colors or preservatives",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.25 }}
            className="lg:col-span-3 relative h-48 lg:h-56 overflow-hidden gold-frame border-gold/30"
          >
            <Image
              src="/images/real_copper_pot.jpeg"
              alt="Authentic copper pot cooking"
              fill
              className="object-cover img-warm"
              sizes="300px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
