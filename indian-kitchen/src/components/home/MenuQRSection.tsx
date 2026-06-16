"use client";

import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";

export default function MenuQRSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-sage to-terracotta" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto"
        >
          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-sage font-semibold mb-3 pipe-item">
              Digital Menu
            </p>
            <h2 className="heading-presentation text-void mb-5">Scan &amp; Explore</h2>
            <p className="text-text-muted font-light leading-relaxed mb-6 text-sm max-w-sm">
              A culinary passport through India — from Madurai street food to Punjab tandoor, one
              scan away.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/menu" className="btn-primary">
                View Full Menu
              </Link>
              <Link href="/reservations" className="btn-outline-dark">
                Dine In
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            <div className="relative">
              <div
                className="absolute -right-6 top-1/2 -translate-y-1/2 hidden lg:flex items-center"
                style={{ writingMode: "vertical-rl" }}
              >
                <span className="stencil-text text-[10px] text-void tracking-[0.45em]">Scan Me</span>
              </div>
              <div className="relative p-4 border-[3px] border-void rounded-lg bg-parchment shadow-2xl gold-frame">
                <div className="absolute -top-3 -left-3 bg-gold text-void text-[8px] tracking-[0.2em] uppercase px-2 py-1 font-bold">
                  Menu
                </div>
                <QRCodeSVG
                  value="https://indiankitchen.lk/menu"
                  size={160}
                  bgColor="#FAF5E9"
                  fgColor="#0F0805"
                  level="Q"
                  includeMargin={false}
                />
              </div>
              {/* Decorative food thumb */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 overflow-hidden border-2 border-gold shadow-lg hidden md:block relative">
                <Image
                  src="/images/real_bamboo_biryani.jpeg"
                  alt=""
                  fill
                  className="object-cover img-warm"
                  sizes="80px"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
