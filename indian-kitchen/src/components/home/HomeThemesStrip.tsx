"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const themes = [
  {
    name: "Pondicherry Street",
    tag: "Indo-French Nostalgia",
    desc: "Colonial arches, mustard walls, and coastal spice — our flagship since 2020.",
    href: "/themes",
    image: "/images/theme_pondicherry.png",
    accent: "from-terracotta/90 to-void/80",
    badge: "bg-gold text-void",
  },
  {
    name: "Kerala Houseboat",
    tag: "Backwater Serenity",
    desc: "Bamboo panels, lantern light, and fiery Malabar flavours aboard our kettuvallam.",
    href: "/themes",
    image: "/images/real/kandy_hero_day.jpg",
    accent: "from-sage/90 to-void/85",
    badge: "bg-sage-light text-void",
  },
  {
    name: "The Sherlock",
    tag: "Mystery Dining",
    desc: "Victorian study meets Indian masala — puzzles, clues, and courses that tell a story.",
    href: "/themes",
    image: "/images/private_dining.png",
    accent: "from-crimson/90 to-void/90",
    badge: "bg-cream text-void",
  },
];

export default function HomeThemesStrip() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section className="relative bg-cream-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sage via-gold to-terracotta" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-14">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
        >
          <div>
            <p className="text-[9px] tracking-[0.3em] uppercase text-sage font-semibold mb-2 pipe-item">
              Signature Themes
            </p>
            <h2 className="heading-presentation text-void">Three Immersive Worlds</h2>
          </div>
          <Link
            href="/themes"
            className="text-[10px] tracking-[0.2em] uppercase text-terracotta hover:text-gold transition-colors link-underline pb-1 self-start md:self-auto"
          >
            Explore All Themes →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={theme.href}
                className="group relative block h-[320px] md:h-[380px] overflow-hidden gold-frame"
              >
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  className="object-cover img-warm transition-transform duration-700 group-hover:scale-110"
                  sizes="33vw"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${theme.accent} transition-opacity duration-500 group-hover:opacity-95`}
                />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span
                    className={`${theme.badge} text-[8px] tracking-[0.2em] uppercase px-2 py-1 font-bold w-fit mb-3`}
                  >
                    {theme.tag}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide text-cream mb-2 group-hover:text-gold transition-colors">
                    {theme.name}
                  </h3>
                  <p className="text-cream/75 text-sm font-light leading-relaxed line-clamp-2 mb-4">
                    {theme.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.2em] uppercase text-gold">
                    Step Inside
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
