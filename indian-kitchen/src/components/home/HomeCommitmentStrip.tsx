"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import PipeList from "@/components/ui/PipeList";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function HomeCommitmentStrip() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <SectionShell variant="void" className="relative overflow-hidden py-16 md:py-24 border-y border-gold/10">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        
        {/* Title taking more space to avoid overlapping */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="lg:col-span-12 xl:col-span-5"
        >
          <SectionHeader 
            label="Our Commitment" 
            title={<>Culinary<br className="hidden xl:block" />Authenticity</>}
            subtitle="Every dish tells a story of tradition \u2014 ingredients sourced from India's heartland, crafted without compromise."
            lightMode
            className="mb-0"
          />
        </motion.div>

        {/* Benefits list */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="lg:col-span-6 xl:col-span-4"
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

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="lg:col-span-6 xl:col-span-3 relative h-64 lg:h-72 overflow-hidden border border-gold/20 shadow-lg rounded-[2px]"
        >
          <Image
            src="/images/real_copper_pot.jpeg"
            alt="Authentic copper pot cooking"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 300px"
          />
        </motion.div>
      </div>
    </SectionShell>
  );
}
