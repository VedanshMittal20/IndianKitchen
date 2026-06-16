"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import PipeList from "@/components/ui/PipeList";

export default function OurCommitment() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-padding bg-parchment" id="commitment">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <SectionLabel className="mb-4">Indian Kitchen Theme Dining</SectionLabel>
            <h2 className="heading-presentation mb-5">Culinary Authenticity</h2>
            <p className="text-text-dark/85 font-light leading-relaxed mb-6 text-base">
              At Indian Kitchen, authenticity isn&apos;t a promise — it&apos;s our foundation. Every
              dish tells a story of tradition, crafted with ingredients sourced directly from
              India&apos;s heartland.
            </p>
            <h3 className="font-display text-xl uppercase tracking-wide text-sage mb-4">
              Our Commitment
            </h3>
            <PipeList
              items={[
                "Chefs handpicked from Indian villages",
                "Family-rooted regional recipes",
                "No artificial colors or preservatives",
              ]}
            />
          </motion.div>

          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative h-[50vh] md:h-[55vh] overflow-hidden border border-sage/10"
            >
              <Image
                src="/images/real_interior.jpeg"
                alt="Indian Kitchen Interior"
                fill
                className="object-cover object-right img-warm"
                sizes="55vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="absolute -bottom-6 -left-4 md:-left-8 w-40 md:w-48 aspect-square overflow-hidden border-4 border-parchment shadow-xl"
            >
              <Image
                src="/images/real_copper_pot.jpeg"
                alt="Copper pot biryani"
                fill
                className="object-cover img-warm"
                sizes="200px"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
