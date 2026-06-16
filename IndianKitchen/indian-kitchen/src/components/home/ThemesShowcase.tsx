"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const themes = [
  {
    id: "pondicherry",
    title: "Pondicherry Street",
    subtitle: "Indo-French culture & nostalgia",
    body: "Cobblestone alleys, colonial arches, and Tamil rhythms in the air. Our first and most iconic theme \u2014 a portal to Pondicherry's enchanting blend of French elegance and Indian warmth.",
    badge: "Flagship \u00B7 Since 2020",
    outletBadge: "Colombo 03, Sri Lanka",
    image: "/images/slide_4.png", // Replace with exact Pondicherry image
    gradient: "from-[#8B3A2B]/90 to-void/90", // Warm terracotta/amber
  },
  {
    id: "kerala",
    title: "Kerala Houseboat",
    subtitle: "Serene backwater ambience",
    body: "Drift into the stillness of Kerala's backwaters. Bamboo walls, hanging lanterns, and the sound of water beneath your feet. Coastal cuisine, reimagined.",
    image: "/images/slide_5.png", // Replace with exact Kerala image
    gradient: "from-[#1A4742]/90 to-void/90", // Deep green/teal
  },
  {
    id: "sherlock",
    title: "The Sherlock",
    subtitle: "A mystery unravels at every table",
    body: "Every meal is a case. Gaslit corridors, Victorian artefacts, and Indian masalas brewed in secret. Dinner at The Sherlock is an experience your friends won't believe.",
    image: "/images/slide_6.png", // Replace with exact Sherlock image
    gradient: "from-[#2C2B29]/90 to-void/90", // Deep charcoal/sepia
  },
];

export default function ThemesShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-void text-cream overflow-hidden" id="themes">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold mb-6">
            Step Into Another World
          </h2>
          <p className="text-cream/80 max-w-2xl mx-auto text-lg font-light">
            Choose your journey. Each outlet is meticulously designed to transport you to a different time and place.
          </p>
        </motion.div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto pb-10 lg:pb-0 lg:grid lg:grid-cols-3 gap-8 snap-x snap-mandatory hide-scrollbar">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="min-w-[85vw] sm:min-w-[60vw] lg:min-w-0 snap-center group relative h-[500px] md:h-[600px] flex flex-col justify-end p-8 overflow-hidden rounded-sm hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_0_30px_rgba(200,135,42,0.2)]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${theme.gradient} mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Badges top */}
                <div className="flex flex-col gap-2 items-start">
                  {theme.badge && (
                    <span className="bg-gold text-void text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                      {theme.badge}
                    </span>
                  )}
                  {theme.outletBadge && (
                    <span className="bg-void/50 backdrop-blur-md text-cream text-xs font-medium uppercase tracking-wider px-3 py-1 border border-cream/20 rounded-sm">
                      {theme.outletBadge}
                    </span>
                  )}
                </div>

                {/* Text bottom */}
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-gold mb-2 group-hover:text-gold-light transition-colors">
                    {theme.title}
                  </h3>
                  <p className="text-cream font-medium tracking-wide mb-4 text-sm uppercase">
                    {theme.subtitle}
                  </p>
                  <p className="text-cream/70 font-light text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {theme.body}
                  </p>
                  
                  {/* CTA with gold underline reveal */}
                  <Link
                    href={`/#reservations?theme=${theme.id}`}
                    className="inline-flex items-center text-gold text-sm font-bold uppercase tracking-wider group/cta"
                  >
                    Discover This Theme
                    <span className="ml-2 transition-transform duration-300 group-hover/cta:translate-x-1">&rarr;</span>
                  </Link>
                  <div className="h-0.5 w-0 bg-gold mt-1 transition-all duration-500 group-hover:w-1/2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
