"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import SectionShell from "@/components/layout/SectionShell";

export default function PrivateDining() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <SectionShell variant="cream-dark" id="private-dining" className="py-0">
      <motion.div
        ref={ref}
        className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/real/gallery_2.jpg"
            alt="Private Dining at Indian Kitchen"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-deep-forest/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-surface-container-lowest/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 bg-surface-container-lowest p-10 md:p-16 max-w-2xl text-center shadow-[0_20px_60px_rgba(6,73,53,0.15)] mx-4 rounded-sm border-t-4 border-brand-accent-green"
        >
          <span className="text-[10px] tracking-[0.3em] text-brand-accent-green font-bold block mb-4">
            Private Events
          </span>
          <h2 className="font-headline-md text-headline-md text-brand-deep-forest mb-6">Your Event, Our Stage</h2>
          <div className="w-12 h-1 bg-brand-sandy/40 mx-auto mb-6 rounded-full" />
          <p className="text-on-surface-variant font-light leading-relaxed mb-10 text-base md:text-lg">
            From intimate celebrations to corporate gatherings — reserve private spaces across all our theme
            concepts, meticulously curated for your guests.
          </p>
          <Link
            href="https://wa.me/94117112334?text=Hello!%20I'd%20like%20to%20enquire%20about%20private%20dining..."
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full sm:w-auto text-center"
          >
            Enquire for Private Dining
          </Link>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
