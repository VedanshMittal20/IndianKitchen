"use client";

import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="p-10 glass-container jodhpuri-border"
          >
            <h3 className="font-headline-md text-brand-deep-forest mb-6">Our Vision</h3>
            <p className="font-body-lg text-on-surface/80 leading-relaxed">
              [PLACEHOLDER] To be the global benchmark for upscale Indian dining, where authenticity meets modern sophistication. We envision a world where the nuanced flavors of India are celebrated in spaces of unparalleled architectural beauty.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 glass-container jodhpuri-border"
          >
            <h3 className="font-headline-md text-brand-deep-forest mb-6">Our Mission</h3>
            <p className="font-body-lg text-on-surface/80 leading-relaxed">
              [PLACEHOLDER] To curate unforgettable culinary experiences by reviving ancient recipes and presenting them with contemporary flair. We are dedicated to uncompromising quality, exceptional service, and creating an ambiance that resonates with heritage.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
