"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const frames = [
  {
    title: "Culinary Art",
    subtitle: "Parota Making",
    video: "/videos/parota_reel.mp4",
  },
  {
    title: "Colombo Elegance",
    subtitle: "A immersive experience",
    video: "/videos/colombo_vibe.mov",
  },
  {
    title: "Kerala Houseboat",
    subtitle: "Tranquil dining",
    video: "/videos/experience.mov",
  },
  {
    title: "Kandy Vibe",
    subtitle: "Surrounded by nature",
    video: "/videos/kandy_vibe.mov",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 }
  },
};

export default function HomeGallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-paper" id="gallery">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading-presentation text-forest mb-3 uppercase tracking-wider text-2xl md:text-4xl lg:text-5xl">JOURNEY IN FRAMES</h2>
          <p className="text-text-dark font-medium text-lg">Pictures Perfect Moments</p>
        </motion.div>

        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1400px] mx-auto"
        >
          {frames.map((frame, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="relative rounded-[32px] overflow-hidden shadow-lg group aspect-[9/16] bg-void"
            >
              <video 
                src={frame.video} 
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              {/* Dark gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-transparent to-void/60 pointer-events-none" />
              
              <div className="absolute top-8 left-0 right-0 text-center px-4">
                <h3 className="font-display text-2xl text-cream italic tracking-wide mb-1 opacity-90 drop-shadow-md">
                  {frame.title}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cream/70 font-semibold drop-shadow-md">
                  {frame.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
