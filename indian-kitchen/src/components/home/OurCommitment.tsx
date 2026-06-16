"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const commitments = [
  {
    num: "01",
    title: "Village-Trained Chefs",
    desc: "Our culinary masters learned their craft in the heartlands of India, passing down generational secrets rather than culinary school techniques.",
  },
  {
    num: "02",
    title: "Family-Rooted Recipes",
    desc: "Every dish tells a story. We don't adapt our recipes for mass appeal; we serve them exactly as they were meant to be tasted.",
  },
  {
    num: "03",
    title: "No Shortcuts",
    desc: "No artificial colours. No pre-packaged spice blends. Every marinade is mixed by hand, every curry slow-cooked to perfection.",
  },
];

export default function OurCommitment() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-cream py-32 md:py-48" id="commitment">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-wood font-medium">Philosophy</span>
            <div className="w-12 h-px bg-wood" />
          </div>
          <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.9] text-forest mb-20 max-w-2xl">
            Culinary<br />
            <span className="italic">Authenticity</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: Text Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12">
              {commitments.map((item, index) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                  className="group relative"
                >
                  <div className="absolute -top-12 -left-4 font-display text-8xl text-cream-dark opacity-50 pointer-events-none group-hover:text-yellow/20 transition-colors duration-500">
                    {item.num}
                  </div>
                  
                  <div className="relative z-10 pt-8 border-t border-wood">
                    <h3 className="font-display text-2xl text-forest mb-4 group-hover:text-wood transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-muted font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex-1 lg:max-w-md relative"
            >
              <div className="relative w-full aspect-[4/5] bg-cream-dark p-4">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/copper_pot.png"
                    alt="Authentic Copper Pot Biryani"
                    fill
                    className="object-cover img-warm hover:scale-105 transition-transform duration-[2s] ease-out"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-wood/50" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-wood/50" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
