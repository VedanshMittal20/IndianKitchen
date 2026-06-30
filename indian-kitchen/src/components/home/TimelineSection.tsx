"use client";

import { motion } from "framer-motion";

export default function TimelineSection() {
  const milestones = [
    { year: "2015", title: "The Inception", desc: "[PLACEHOLDER] Our first flagship opens, introducing a new era of upscale regional dining." },
    { year: "2018", title: "Expansion", desc: "[PLACEHOLDER] Bringing the authentic taste of the Indian Kitchen to two new metropolitan locations." },
    { year: "2021", title: "The Franchise Model", desc: "[PLACEHOLDER] Launching our premium franchise program to partner with visionary restaurateurs." },
    { year: "2025", title: "Global Horizons", desc: "[PLACEHOLDER] Stepping onto the international stage, taking our heritage to a global audience." }
  ];

  return (
    <section className="py-24 bg-surface-container relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-brand-accent-green w-12" />
            <span className="font-label-lg text-brand-deep-forest tracking-[0.2em] uppercase">Our Journey</span>
            <div className="h-px bg-brand-accent-green w-12" />
          </div>
          <h2 className="font-headline-lg text-on-surface">A Timeline of Excellence</h2>
        </div>

        <div className="relative border-l border-brand-accent-green/30 ml-4 md:ml-1/2 md:left-1/2 md:-translate-x-1/2">
          {milestones.map((milestone, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative mb-12 pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-12 md:text-right md:-left-[calc(50%+1px)] md:w-1/2" : "md:pl-12 md:left-1/2 md:w-1/2"}`}
            >
              <div className="absolute w-4 h-4 rounded-full bg-surface border-2 border-brand-accent-green left-[-8.5px] md:left-auto md:right-[-8.5px] top-1" 
                   style={idx % 2 !== 0 ? { left: "-8.5px", right: "auto" } : {}} />
              
              <span className="font-headline-sm text-brand-sandy block mb-2">{milestone.year}</span>
              <h3 className="font-title-lg text-on-surface mb-2">{milestone.title}</h3>
              <p className="font-body-md text-on-surface-variant">{milestone.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
