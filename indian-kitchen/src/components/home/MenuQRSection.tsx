"use client";

import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import SplitSection from "@/components/layout/SplitSection";

export default function MenuQRSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const content = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <SectionHeader 
        label="Digital Menu" 
        title={<>Scan &amp;<br/>Explore</>}
        subtitle="A culinary passport through India — from Madurai street food to Punjab tandoor, one scan away."
        className="mb-8"
        lightMode
      />
      <div className="flex flex-wrap gap-3">
        <Link href="/menu" className="btn-primary">
          View Full Menu
        </Link>
        <Link href="/reservations" className="btn-outline">
          Dine In
        </Link>
      </div>
    </motion.div>
  );

  const qrGraphic = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex justify-center lg:justify-end relative"
    >
      <div className="relative">
        <div
          className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:flex items-center"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="stencil-text text-[10px] text-on-surface tracking-[0.45em]">Scan Me</span>
        </div>
        <div className="relative p-4 border-[3px] border-outline-variant/30 rounded-sm bg-surface-container-lowest shadow-2xl gold-frame">
          <div className="absolute -top-3 -left-3 bg-saffron-gold text-on-surface text-[8px] tracking-[0.2em] uppercase px-2 py-1 font-bold">
            Menu
          </div>
          <QRCodeSVG
            value="https://indiankitchen.lk/menu"
            size={160}
            bgColor="#FAF5E9"
            fgColor="#0F0805"
            level="Q"
            includeMargin={true}
          />
        </div>
        {/* Decorative food thumb */}
        <div className="absolute -bottom-4 -right-4 w-20 h-20 overflow-hidden gold-frame shadow-lg hidden md:block rounded-sm z-10">
          <Image
            src="/images/bamboo_biryani.png"
            alt="Bamboo Biryani"
            fill
            className="object-cover img-warm"
            sizes="80px"
          />
        </div>
      </div>
    </motion.div>
  );

  return (
    <SectionShell variant="void" className="relative overflow-hidden border-t border-cream/10">
      <div className="max-w-4xl mx-auto">
        <SplitSection 
          variant="void" 
          content={content} 
          media={qrGraphic} 
        />
      </div>
    </SectionShell>
  );
}
