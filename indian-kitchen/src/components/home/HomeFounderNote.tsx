"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

export default function HomeFounderNote() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="section-padding bg-paper relative overflow-hidden border-t border-sage/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <SectionLabel className="mb-5">A Tale of Spice & Time</SectionLabel>
            
            <h2 className="heading-presentation mb-8 text-forest">
              Building Experiences<br/>Through Passion
            </h2>

            <div className="w-12 h-1 bg-terracotta mb-8" />
            
            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6 font-light">
              Vincent Renold brings over 20 years of hospitality excellence, having worked with prestigious brands including Radisson, ITC, and Banyan Tree. 
            </p>

            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8 font-light">
              His expertise spans brand conceptualization, operations management, revenue optimization, and international expansion. Recently honored with the &quot;Global Icon Award&quot; at the 2023 Global Economic Forum, Vincent&apos;s vision extends beyond restaurants to create a complete ecosystem of authentic Indian culinary experiences worldwide.
            </p>

            <div className="bg-sage/5 border-l-2 border-sage p-6">
              <p className="font-display italic text-xl text-forest/90 mb-3">
                &quot;Two decades shaping hospitality excellence across global brands has led to this: creating a complete ecosystem beyond restaurants.&quot;
              </p>
              <p className="text-xs uppercase tracking-[0.2em] font-medium text-sage">
                — Vincent Renold, Founder
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[32px] border border-sage/15 shadow-xl">
              <Image 
                src="/images/extracted/page15_img2.png" 
                alt="Vincent Renold" 
                fill 
                className="object-cover img-warm"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
