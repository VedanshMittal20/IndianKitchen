"use client";

import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function MenuQRSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-24 bg-void text-cream text-center" id="menu-qr">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold mb-6">
            The Menu Is Just a Scan Away
          </h2>
          <p className="text-cream/80 text-lg font-light mb-12">
            Point your camera at the code to explore the full Indian Kitchen menu and place your order instantly.
          </p>

          {/* Animated QR Code */}
          <div className="relative mb-16 inline-block">
            {/* Pulsing ring */}
            <div className="absolute -inset-6 border-2 border-gold/30 rounded-xl animate-[pulse-ring_2s_ease-out_infinite]" />
            <div className="absolute -inset-10 border border-gold/10 rounded-2xl animate-[pulse-ring_3s_ease-out_infinite_1s]" />
            
            <div className="bg-white p-4 rounded-xl shadow-[0_0_40px_rgba(200,135,42,0.2)] relative z-10">
              <QRCodeSVG
                value="https://indiankitchen.lk/menu"
                size={200}
                bgColor={"#ffffff"}
                fgColor={"#0F0805"}
                level={"H"}
                imageSettings={{
                  src: "/images/slide_1.png", // Just using a placeholder for logo if needed, optional
                  x: undefined,
                  y: undefined,
                  height: 24,
                  width: 24,
                  excavate: true,
                }}
              />
            </div>
          </div>

          {/* Ordering Methods */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mx-auto">
            <Link
              href="/#reservations"
              className="w-full sm:w-1/3 px-6 py-3 bg-terracotta text-cream text-sm font-medium border border-terracotta hover:bg-gold hover:border-gold hover:text-void transition-colors"
            >
              Dine In
            </Link>
            <a
              href="https://ubereats.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-1/3 px-6 py-3 bg-transparent text-gold text-sm font-medium border border-gold hover:bg-gold hover:text-void transition-colors"
            >
              Order via Uber Eats
            </a>
            <a
              href="https://wa.me/94117112334?text=I'd%20like%20to%20place%20a%20food%20order"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-1/3 px-6 py-3 bg-transparent text-[#25D366] text-sm font-medium border border-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
            >
              Order via WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
