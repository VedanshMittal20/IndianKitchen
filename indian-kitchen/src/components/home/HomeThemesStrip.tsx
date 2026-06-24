import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/layout/SectionHeader";

const themes = [
  {
    name: "Pondicherry Street",
    tag: "Indo-French Nostalgia",
    desc: "Colonial arches, mustard walls, and coastal spice \u2014 our flagship sanctuary of cultural cross-pollination since 2020.",
    href: "/themes",
    image: "/images/theme_pondicherry.png",
    accent: "from-void/5 to-void-light/95",
    color: "text-gold"
  },
  {
    name: "Kerala Houseboat",
    tag: "Backwater Serenity",
    desc: "Bamboo panels, lantern light, and fiery Malabar flavours aboard our traditional kettuvallam dining chamber.",
    href: "/themes",
    image: "/images/real/kandy_hero_day.jpg",
    accent: "from-void/5 to-void-light/95",
    color: "text-sage"
  },
  {
    name: "The Sherlock",
    tag: "Mystery Dining",
    desc: "Victorian study meets Indian masala \u2014 puzzles, clues, and multi-course menus that tell a suspenseful story.",
    href: "/themes",
    image: "/images/private_dining.png",
    accent: "from-void/5 to-void-light/95",
    color: "text-crimson"
  },
];

export default function HomeThemesStrip() {
  return (
    <div className="relative bg-void w-full pb-24">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-24 pb-16 z-20 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gold/10 pb-8">
          <SectionHeader
            label="Signature Worlds"
            title="Themed Sanctuaries"
            subtitle="Dining as theatre. Explore our three beautifully curated dining rooms."
            lightMode
            className="mb-0! md:mb-0!"
          />
          <Link
            href="/themes"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-gold hover:text-cream transition-colors group self-start md:self-auto"
          >
            Sanctuary Deep Dive
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Elegant Vertical Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-16 lg:space-y-32">
        {themes.map((theme, idx) => (
          <div 
            key={theme.name} 
            className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Box */}
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/3] lg:aspect-square relative w-full overflow-hidden bg-void-light border border-gold/10 shadow-lg rounded-[2px] group">
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content Details */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold font-bold mb-4 block">
                {theme.tag}
              </span>
              <h3 className="font-display text-4xl lg:text-5xl uppercase tracking-wide text-cream mb-6 leading-none">
                {theme.name}
              </h3>
              <p className="text-text-muted text-base font-light leading-relaxed max-w-md mb-8">
                {theme.desc}
              </p>
              <Link href={theme.href} className="btn-outline w-fit">
                Explore Sanctum
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
