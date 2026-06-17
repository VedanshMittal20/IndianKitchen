"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LightboxImage from "@/components/ui/LightboxImage";
import SectionLabel from "@/components/ui/SectionLabel";

const galleryItems = [
  { type: "image", src: "/images/real_interior.jpeg", alt: "Dining Room", aspect: "aspect-[4/5]" },
  { type: "image", src: "/images/extracted/page10_img4.jpeg", alt: "Cuisine", aspect: "aspect-square" },
  { type: "image", src: "/images/slide_5.png", alt: "Chef's Table", aspect: "aspect-[4/3]" },
  { type: "image", src: "/images/extracted/page13_img2.jpeg", alt: "Spice Display", aspect: "aspect-square" },
  { type: "image", src: "/images/slide_10.png", alt: "Details", aspect: "aspect-[3/4]" },
  { type: "image", src: "/images/real_waiter.jpeg", alt: "Service", aspect: "aspect-square" },
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
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "50px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <SectionLabel className="mb-4">The Experience</SectionLabel>
          <h2 className="heading-presentation text-forest">Visual Journey</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
          {/* Main Video/Feature Column */}
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="w-full lg:w-7/12 flex flex-col gap-6"
          >
            <motion.div variants={itemVariants} className="w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-sage/10 group relative">
              <iframe 
                src="https://www.youtube.com/embed/5H-B-AWeHXY?autoplay=0&controls=1&mute=0&rel=0&loop=1" 
                title="Indian Kitchen Cinematic Experience" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="w-full aspect-square rounded-3xl overflow-hidden shadow-lg border border-sage/10 relative group">
                <LightboxImage src="/images/real_copper_pot.jpeg" alt="Copper Pot" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-void/0 group-hover:bg-void/20 transition-colors duration-500 pointer-events-none" />
              </motion.div>
              <motion.div variants={itemVariants} className="w-full aspect-square rounded-3xl overflow-hidden shadow-lg border border-sage/10 relative group">
                <LightboxImage src="/images/real_bamboo_biryani.jpeg" alt="Bamboo Biryani" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-void/0 group-hover:bg-void/20 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          {/* Masonry Image Column */}
          <motion.div 
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="w-full lg:w-5/12 columns-2 gap-4 space-y-4"
          >
            {galleryItems.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className={`break-inside-avoid relative rounded-2xl overflow-hidden border border-sage/10 shadow-md group ${item.aspect}`}
              >
                <LightboxImage 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-void/0 group-hover:bg-void/20 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
