"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import PipeList from "@/components/ui/PipeList";

const themes = [
  {
    id: "01",
    name: "Pondicherry Street",
    subtitle: "Indo-French culture & nostalgia",
    desc: "Cobblestone nostalgia, colonial arches, and Tamil rhythms — our flagship theme since 2020.",
    image: "/images/real_storefront.jpeg",
    location: "Colombo",
  },
  {
    id: "02",
    name: "Kerala Houseboat",
    subtitle: "Serene backwater ambience",
    desc: "Bamboo walls, hanging lanterns, and the fiery coconut-rich flavours of Malabar.",
    image: "/images/real_interior.jpeg",
    location: "Kandy",
  },
  {
    id: "03",
    name: "The Sherlock",
    subtitle: "Mystery-themed dining",
    desc: "Victorian study meets Indian masala — puzzles, clues, and stories at every table.",
    image: "/images/slide_6.png",
    location: "Colombo",
  },
];

export default function ThemesShowcase() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-paper" id="themes">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14 max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel className="mb-4">Signature Themes</SectionLabel>
            <h2 className="heading-presentation mb-5">Step Into Another World</h2>
            <p className="text-text-dark/85 font-light leading-relaxed text-base">
              We don&apos;t just serve food, we serve experiences. Each outlet is a journey into
              India&apos;s rich cultural tapestry.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-end"
          >
            <PipeList
              items={themes.map((t) => `${t.name} — ${t.subtitle}`)}
            />
          </motion.div>
        </div>

        <div className="space-y-14">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? "" : ""
              }`}
            >
              <div
                className={`lg:col-span-7 relative h-[38vh] md:h-[46vh] overflow-hidden border border-sage/10 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  className="object-cover img-warm"
                  sizes="60vw"
                />
              </div>
              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-[9px] tracking-[0.25em] uppercase text-sage mb-2 block">
                  {theme.id} — {theme.location}
                </span>
                <h3 className="font-display text-3xl uppercase tracking-wide text-sage mb-3">
                  {theme.name}
                </h3>
                <p className="text-text-muted font-light leading-relaxed mb-5">{theme.desc}</p>
                <Link
                  href="/reservations"
                  className="text-[10px] tracking-[0.2em] uppercase text-terracotta hover:text-gold transition-colors link-underline pb-1"
                >
                  Reserve This Experience →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
