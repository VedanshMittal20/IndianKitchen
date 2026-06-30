"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

export default function SignatureDishesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="void" id="signature-dishes">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16">
        
        {/* Left Content - Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeader 
            label="INDIAN KITCHEN THEME DINING" 
            title="SIGNATURE DISHES" 
            align="left"
            className="mb-8"
          />
        </motion.div>

        {/* Right Content - Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="font-accent text-2xl md:text-3xl text-brand-deep-forest mb-12">
            "Our menu celebrates India's rich culinary heritage with authentic recipes passed down through generations."
          </p>

          <h3 className="font-label-lg tracking-widest text-brand-golden mb-6 uppercase">Must-Try Favorites</h3>
          <div className="space-y-4">
            {/* Card 1 */}
            <div className="bg-brand-warm-cream border border-brand-golden/20 p-6 flex justify-between items-start group hover:border-brand-golden transition-colors shadow-sm">
              <div>
                <h4 className="font-headline-sm text-brand-charcoal text-xl mb-2">Puff Parotta & Bamboo Biryani</h4>
                <p className="font-body text-brand-charcoal/70 text-sm">Served with tender coconut prawn curry.</p>
              </div>
              <span className="font-label-sm text-brand-terracotta border border-brand-terracotta/30 px-3 py-1 rounded-sm">Signature</span>
            </div>
            
            {/* Card 2 */}
            <div className="bg-brand-warm-cream border border-brand-golden/20 p-6 flex justify-between items-start group hover:border-brand-golden transition-colors shadow-sm">
              <div>
                <h4 className="font-headline-sm text-brand-charcoal text-xl mb-2">Jigarthanda & Ilaneer Cake</h4>
                <p className="font-body text-brand-charcoal/70 text-sm">Refreshing regional desserts to complete your meal.</p>
              </div>
              <span className="font-label-sm text-brand-terracotta border border-brand-terracotta/30 px-3 py-1 rounded-sm">Dessert</span>
            </div>

            {/* Card 3 */}
            <div className="bg-brand-warm-cream border border-brand-golden/20 p-6 flex justify-between items-start group hover:border-brand-golden transition-colors shadow-sm">
              <div>
                <h4 className="font-headline-sm text-brand-charcoal text-xl mb-2">Regional Village Specialties</h4>
                <p className="font-body text-brand-charcoal/70 text-sm">Crafted by our village-trained master chefs.</p>
              </div>
              <span className="font-label-sm text-brand-terracotta border border-brand-terracotta/30 px-3 py-1 rounded-sm">Chef's Special</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Images Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative aspect-square w-full rounded-sm overflow-hidden border-4 border-surface"
        >
          <Image
            src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/real_bamboo_biryani"
            alt="Bamboo Biryani"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative aspect-square w-full rounded-sm overflow-hidden border-4 border-surface bg-white"
        >
          <Image
            src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/extracted/page7_img3"
            alt="Theme Graphic"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative aspect-square w-full rounded-sm overflow-hidden border-4 border-surface"
        >
          <Image
            src="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/real_banana_leaf"
            alt="Signature Dish"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </div>
    </SectionShell>
  );
}
