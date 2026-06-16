"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const tiles = [
  {
    title: "The Genesis",
    desc: "Born in 2019 — we transform dining into experiential journeys.",
    href: "/experience",
    image: "/images/slide_2.png",
    span: "md:col-span-2 md:row-span-2",
    accent: "bg-sage/80",
  },
  {
    title: "Full Menu",
    desc: "Bamboo Biryani to Jigarthanda.",
    href: "/menu",
    image: "/images/real_bamboo_biryani.jpeg",
    span: "md:col-span-1",
    accent: "bg-gold/70",
  },
  {
    title: "Reserve",
    desc: "Book your themed table.",
    href: "/reservations",
    image: "/images/real_waiter.jpeg",
    span: "md:col-span-1",
    accent: "bg-terracotta/75",
  },
  {
    title: "Kitchen Stories",
    desc: "From the spice trail.",
    href: "/blog",
    image: "/images/real_copper_pot.jpeg",
    span: "md:col-span-1",
    accent: "bg-crimson/75",
  },
  {
    title: "Join Us",
    desc: "Build worlds with us.",
    href: "/careers",
    image: "/images/slide_5.png",
    span: "md:col-span-1",
    accent: "bg-void/80",
  },
  {
    title: "Franchise",
    desc: "Own a world. Build a legacy.",
    href: "/franchise",
    image: "/images/slide_10.png",
    span: "md:col-span-2",
    accent: "bg-sage/85",
  },
];

export default function HomeBentoGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section-padding bg-paper">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-8 md:mb-10"
        >
          <p className="text-[9px] tracking-[0.3em] uppercase text-gold font-semibold mb-2 pipe-item">
            Discover
          </p>
          <h2 className="heading-presentation">Navigate the Experience</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.href}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.06 }}
              className={`${tile.span} will-change-transform`}
            >
              <Link
                href={tile.href}
                className="group relative block w-full h-full min-h-[180px] overflow-hidden gold-frame"
              >
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className={`object-cover img-warm transition-transform duration-700 group-hover:scale-105 will-change-transform ${
                    tile.span.includes("row-span-2") ? "object-top" : ""
                  }`}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div
                  className={`absolute inset-0 ${tile.accent} mix-blend-multiply opacity-80 group-hover:opacity-90 transition-opacity`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/30 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="font-display text-xl md:text-2xl uppercase tracking-wide text-cream mb-1 group-hover:text-gold transition-colors">
                    {tile.title}
                  </h3>
                  <p className="text-cream/70 text-xs md:text-sm font-light mb-2">{tile.desc}</p>
                  <ArrowUpRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
