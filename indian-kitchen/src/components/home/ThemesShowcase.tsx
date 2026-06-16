"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const themes = [
  {
    id: "01",
    name: "Pondicherry Street",
    subtitle: "Indo-French Nostalgia",
    desc: "A romantic blend of French colonial architecture and vibrant Indian street culture. Mustard walls, wrought-iron balconies, and the delicate scent of coastal spices.",
    image: "/images/slide_5.png",
    location: "Colombo",
  },
  {
    id: "02",
    name: "Kerala Houseboat",
    subtitle: "Serene Backwater Dining",
    desc: "Step aboard our handcrafted kettuvallam. Wood-panelled interiors, gentle ambient water sounds, and the fiery, coconut-rich flavors of Malabar.",
    image: "/images/slide_6.png",
    location: "Kandy",
  },
  {
    id: "03",
    name: "The Sherlock",
    subtitle: "Mystery Dining Experience",
    desc: "A Victorian study meets Indian masala. Solve puzzles between courses, discover hidden clues in your menu, and unravel a story that plays out across your table.",
    image: "/images/slide_7.png",
    location: "Colombo",
  },
];

export default function ThemesShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-cream py-32 md:py-48" id="themes">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] tracking-[0.3em] uppercase text-wood font-medium">L'Essence</span>
              <div className="w-12 h-px bg-wood" />
            </div>
            <h2 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.85] text-forest">
              Immersive<br />
              <span className="italic">Worlds</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-sm">
            Three distinct concepts designed to transport you. From the streets of South India to Victorian London.
          </p>
        </motion.div>

        <div className="space-y-32">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Image Block */}
              <div className="w-full lg:w-3/5 h-[50vh] md:h-[70vh] relative overflow-hidden">
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  className="object-cover img-warm"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>

              {/* Content Block */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center px-0 lg:px-12">
                <div className="text-[10px] tracking-[0.3em] uppercase text-wood mb-4">
                  {theme.id} — {theme.location}
                </div>
                <h3 className="font-display text-4xl md:text-5xl text-forest mb-4">
                  {theme.name}
                </h3>
                <h4 className="font-sans text-sm tracking-[0.1em] uppercase text-yellow mb-8 font-medium">
                  {theme.subtitle}
                </h4>
                <p className="text-text-muted font-light leading-relaxed mb-10 text-lg">
                  {theme.desc}
                </p>
                <div className="forest-divider w-full mb-6" />
                <button className="text-[10px] tracking-[0.2em] uppercase text-forest hover:text-yellow transition-colors self-start link-underline pb-1">
                  Reserve This Experience
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
