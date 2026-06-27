"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function MenuQRSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="light" id="menu">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-start"
        >
          <div>
            <p className="font-label-sm tracking-widest text-brand-golden font-bold uppercase mb-4 text-center md:text-left">
              INDIAN KITCHEN<br/>THEME DINING
            </p>
            <h2 className="font-display-lg text-6xl md:text-8xl lg:text-[120px] text-brand-golden uppercase m-0 leading-none">
              MENU
            </h2>
          </div>
        </motion.div>

        {/* Right - QR Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-[400px] aspect-square rounded-sm overflow-hidden bg-white shadow-2xl p-4">
            <Image
              src="/images/menu-qr.png"
              alt="Menu QR Code"
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
