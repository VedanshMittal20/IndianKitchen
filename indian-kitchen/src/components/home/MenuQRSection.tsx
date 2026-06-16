"use client";

import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Utensils } from "lucide-react";

export default function MenuQRSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-24 bg-wood text-cream relative overflow-hidden">
      {/* Background texture/overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-between gap-16"
        >
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="w-12 h-px bg-yellow" />
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
              A Culinary<br />Passport
            </h2>
            <p className="text-cream/80 text-lg font-light leading-relaxed max-w-md">
              Scan to explore our full menu. From the streets of Madurai to the tandoors of Punjab, discover the authentic flavours that define our immersive worlds.
            </p>
            <div className="mt-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-3 bg-forest text-cream px-8 py-4 font-sans text-[11px] tracking-[0.2em] uppercase hover:bg-yellow hover:text-forest transition-colors"
              >
                <Utensils className="w-4 h-4" />
                View Digital Menu
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Pulsing ring behind QR */}
              <div className="absolute inset-0 bg-yellow/20 rounded-sm animate-[pulse-ring_3s_ease-out_infinite]" />
              
              <div className="relative bg-cream p-6 rounded-sm shadow-2xl border border-yellow/20 transform group-hover:scale-105 transition-transform duration-500">
                <QRCodeSVG
                  value="https://indiankitchen.lk/menu"
                  size={180}
                  bgColor="#FBF8F1"
                  fgColor="#0B5345"
                  level="Q"
                  includeMargin={false}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center shadow-lg">
                    <span className="font-display text-xl text-forest font-bold">IK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
