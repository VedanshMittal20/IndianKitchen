"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Briefcase, GlassWater, Plane, ChefHat } from "lucide-react";

const services = [
  { icon: <Briefcase className="w-6 h-6 text-gold" />, label: "Corporate Dining" },
  { icon: <GlassWater className="w-6 h-6 text-gold" />, label: "Private Dining & Celebrations" },
  { icon: <Plane className="w-6 h-6 text-gold" />, label: "Travel & Guest Dining" },
  { icon: <ChefHat className="w-6 h-6 text-gold" />, label: "Custom Menus & Special Rates" },
];

export default function PrivateDining() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative py-32 bg-void overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/slide_6.png" // Placeholder for private event setup
          alt="Private Dining Event"
          fill
          className="object-cover sepia-[0.1] saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-void/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-6 leading-tight">
            Your Event, <span className="text-gold">Our Stage</span>
          </h2>
          <p className="text-cream/80 text-lg font-light mb-12 leading-relaxed">
            From intimate anniversary dinners to grand corporate banquets, our themed venues provide an unforgettable backdrop. We don't just host events; we stage experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 bg-void/50 backdrop-blur-sm p-4 border border-gold/20 rounded-sm hover:border-gold/50 transition-colors"
              >
                <div className="bg-void p-2 rounded-full border border-gold/30">
                  {service.icon}
                </div>
                <span className="text-cream font-medium tracking-wide text-sm">
                  {service.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            href="https://wa.me/94117112334?text=I'd%20like%20to%20enquire%20about%20private%20dining%20at%20Indian%20Kitchen"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 bg-terracotta text-cream font-medium border border-terracotta hover:bg-gold hover:text-void hover:border-gold transition-colors shadow-lg"
          >
            Enquire About Private Events
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
