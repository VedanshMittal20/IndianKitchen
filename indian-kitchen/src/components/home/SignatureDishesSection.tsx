"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/layout/SectionHeader";

export default function SignatureDishesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden py-32">
      {/* Mandala Floral Parallax Background */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
        style={{ y: yBg }}
      >
        <div 
          className="w-full h-[130%] -top-[15%] absolute bg-cover bg-center"
          style={{ backgroundImage: "url('/mandala_2.jpg')" }}
        />
      </motion.div>
      
      <div className="max-w-container-max w-full mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Empty left column for path offset */}
        <div className="hidden md:flex flex-col justify-center gap-6">
          {/* Images Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-golden/30 shadow-lg"
          >
            <Image
              src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/real_bamboo_biryani"
              alt="Bamboo Biryani"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-brand-golden/30 shadow-lg"
          >
            <Image
              src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/real_banana_leaf"
              alt="Signature Dish"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
        
        {/* Right column glass card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center bg-brand-warm-cream/90 backdrop-blur-xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-3xl border border-brand-golden/30 ml-auto max-w-xl"
        >
          <SectionHeader 
            label="INDIAN KITCHEN THEME DINING" 
            title="SIGNATURE DISHES" 
            align="left"
            className="mb-8"
          />

          <p className="font-accent text-2xl md:text-3xl text-brand-deep-forest mb-12">
            "Our menu celebrates India's rich culinary heritage with authentic recipes passed down through generations."
          </p>

          <h3 className="font-label-lg tracking-widest text-brand-golden mb-6 uppercase">Must-Try Favorites</h3>
          <div className="space-y-4">
            {/* Card 1 */}
            <div className="bg-brand-warm-cream border border-brand-golden/20 p-6 flex justify-between items-start group hover:border-brand-golden transition-colors shadow-sm rounded-xl">
              <div>
                <h4 className="font-headline-sm text-brand-charcoal text-xl mb-2">Puff Parotta & Bamboo Biryani</h4>
                <p className="font-body text-brand-charcoal/70 text-sm">Served with tender coconut prawn curry.</p>
              </div>
              <span className="font-label-sm text-brand-terracotta border border-brand-terracotta/30 px-3 py-1 rounded-sm mt-1">Signature</span>
            </div>
            
            {/* Card 2 */}
            <div className="bg-brand-warm-cream border border-brand-golden/20 p-6 flex justify-between items-start group hover:border-brand-golden transition-colors shadow-sm rounded-xl">
              <div>
                <h4 className="font-headline-sm text-brand-charcoal text-xl mb-2">Jigarthanda & Ilaneer Cake</h4>
                <p className="font-body text-brand-charcoal/70 text-sm">Refreshing regional desserts to complete your meal.</p>
              </div>
              <span className="font-label-sm text-brand-terracotta border border-brand-terracotta/30 px-3 py-1 rounded-sm mt-1">Dessert</span>
            </div>

            {/* Card 3 */}
            <div className="bg-brand-warm-cream border border-brand-golden/20 p-6 flex justify-between items-start group hover:border-brand-golden transition-colors shadow-sm rounded-xl">
              <div>
                <h4 className="font-headline-sm text-brand-charcoal text-xl mb-2">Regional Village Specialties</h4>
                <p className="font-body text-brand-charcoal/70 text-sm">Crafted by our village-trained master chefs.</p>
              </div>
              <span className="font-label-sm text-brand-terracotta border border-brand-terracotta/30 px-3 py-1 rounded-sm mt-1">Chef's Special</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
