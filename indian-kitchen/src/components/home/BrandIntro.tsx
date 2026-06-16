"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function BrandIntro() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { value: "2019", label: "Year Founded" },
    { value: "3", label: "Immersive Themes" },
    { value: "800+", label: "UberEats Reviews (4.0★)" },
    { value: "3AM", label: "Kitchen Closes" },
  ];

  return (
    <section className="py-24 bg-parchment" id="experience">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <h2 className="font-display text-4xl md:text-5xl text-crimson leading-tight">
              Born From a Bold Vision
            </h2>
            
            <div className="text-text-muted text-lg font-light leading-relaxed space-y-6">
              <p>
                In 2019, when the world stopped, we began. Indian Kitchen was born during the global hospitality crisis &mdash; not despite the chaos, but because of it. We believed that dining could be more than a meal. It could be a journey.
              </p>
              <p>
                Inspired by Pondicherry's enchanting French-colonial streets, Kerala's serene backwaters, and the mysteries of a gaslit Victorian study, we built worlds that people could step into. Every dish we serve is a chapter. Every table, a stage.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border-gold mt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <span className="font-display text-3xl md:text-4xl text-gold">
                    {stat.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-text-muted font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] lg:h-[650px] w-full rounded-sm overflow-hidden"
          >
            <Image
              src="/images/slide_3.png"
              alt="Indian Kitchen Interior"
              fill
              className="object-cover sepia-[0.15] saturate-[1.2]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-crimson/20 to-transparent mix-blend-overlay" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
