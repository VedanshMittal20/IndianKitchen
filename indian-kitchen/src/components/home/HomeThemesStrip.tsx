"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const themes = [
  {
    name: "Pondicherry Street",
    tag: "Study 01",
    desc: "Colonial arches, mustard walls, and coastal spice \u2014 our flagship sanctuary of cultural cross-pollination since 2020.",
    href: "/themes",
    image: "/images/real/gallery_2.jpg",
  },
  {
    name: "Kerala Houseboat",
    tag: "Study 02",
    desc: "Bamboo panels, lantern light, and fiery Malabar flavours aboard our traditional kettuvallam dining chamber.",
    href: "/themes",
    image: "/images/real/kandy_hero_day.jpg",
  },
  {
    name: "The Sherlock",
    tag: "Study 03",
    desc: "Victorian study meets Indian masala \u2014 puzzles, clues, and multi-course menus that tell a suspenseful story.",
    href: "/themes",
    image: "/images/real/gallery_5.jpg",
  },
];

export default function HomeThemesStrip() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-surface-container-lowest">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Editorial Header */}
        <div className="absolute top-20 md:top-32 left-6 md:left-margin-desktop z-20 pointer-events-none">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-secondary to-transparent"></span>
            <span className="font-label-sm text-[12px] text-brand-golden tracking-[0.3em] drop-shadow-md">Fig. 02 — Sanctuaries</span>
          </div>
          <h2 className="font-headline-lg text-[40px] md:text-[64px] text-on-surface max-w-lg drop-shadow-2xl">
            The Geometry <br/> of Space.
          </h2>
        </div>

        {/* The Grid / Horizontal Scroll */}
        <motion.div style={{ x }} className="flex gap-12 md:gap-32 px-6 md:px-[20vw] pt-40 md:pt-20 items-center w-[350vw] md:w-[300vw] lg:w-[250vw]">
          {themes.map((theme, idx) => (
            <div 
              key={theme.name} 
              className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] flex flex-col md:flex-row gap-8 md:gap-16 items-center"
            >
              {/* Image Card */}
              <div className="w-full md:w-[55%] relative">
                <div className="glass-card rounded-[3rem] p-3 md:p-4 relative aspect-[4/5] overflow-hidden group shadow-[0_40px_60px_-20px_rgba(6,73,53,0.4)]">
                  <Image
                    src={theme.image}
                    alt={theme.name}
                    fill
                    className="object-cover rounded-[2.5rem] transition-all duration-1000 hover:scale-[1.03] group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end opacity-100 z-10 pointer-events-none">
                    <span className="font-label-sm text-[12px] text-on-surface bg-saffron-gold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(255,186,9,0.5)]">
                      {theme.tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-[45%] flex flex-col justify-center">
                <h3 className="font-headline-md text-headline-md tracking-wide text-on-surface mb-6 leading-[0.9]">
                  {theme.name}
                </h3>
                <p className="text-on-surface-variant text-body-lg font-light leading-relaxed mb-8 max-w-sm">
                  {theme.desc}
                </p>
                <Link href={theme.href} className="group flex items-center gap-4 text-tertiary-fixed-dim hover:text-brand-golden transition-colors w-fit">
                  <span className="font-label-lg text-[14px]">Explore Sanctum</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
