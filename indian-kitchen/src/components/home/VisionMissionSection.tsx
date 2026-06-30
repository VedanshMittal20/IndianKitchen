"use client";

import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <section className="py-32 bg-brand-sandy relative overflow-hidden">
      {/* Background Medallion */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-multiply opacity-5">
        <img src="/footer_mandala_backdrop.jpg" alt="" className="w-[600px] h-[600px] object-contain" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="flex flex-col gap-24">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <h3 className="font-label-lg text-brand-golden tracking-widest uppercase mb-6">Our Vision</h3>
            <p className="font-accent text-3xl md:text-5xl text-brand-deep-forest leading-relaxed">
              "[PLACEHOLDER] To be the global benchmark for upscale Indian dining, where authenticity meets modern sophistication."
            </p>
          </motion.div>

          <div className="w-24 h-px bg-brand-golden/30 mx-auto"></div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <h3 className="font-label-lg text-brand-golden tracking-widest uppercase mb-6">Our Mission</h3>
            <p className="font-accent text-3xl md:text-5xl text-brand-deep-forest leading-relaxed">
              "[PLACEHOLDER] To curate unforgettable culinary experiences by reviving ancient recipes and presenting them with contemporary flair."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
