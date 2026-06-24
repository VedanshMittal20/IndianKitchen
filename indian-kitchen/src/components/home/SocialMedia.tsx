"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

const socialLinks = [
  {
    name: "Instagram",
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    url: "https://www.instagram.com/indian.kitchen_/",
    handle: "@indian.kitchen_",
  },
  {
    name: "TikTok",
    icon: <span className="font-display font-bold text-2xl">TK</span>,
    url: "https://www.tiktok.com/@indian.kitchen_",
    handle: "@ikthemedining",
  },
  {
    name: "Facebook",
    icon: (
      <svg
        className="w-7 h-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    url: "https://www.facebook.com/indiankitchenrestaurant/",
    handle: "Indian Kitchen",
  },
];

const instagramGrid = [
  "/images/slide_2.png",
  "/images/slide_11.png",
  "/images/bamboo_biryani.png",
  "/images/private_dining.png",
  "/images/real/kandy_hero_day.jpg",
  "/images/real/colombo_ceremony.jpg",
];

export default function SocialMedia() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionShell variant="cream-dark" id="social">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 max-w-2xl mx-auto"
      >
        <SectionHeader 
          label="Community" 
          title="Follow the Flavour" 
          align="center" 
          className="mb-0 md:mb-0"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            className="group flex flex-col items-center justify-center py-8 border border-gold/15 bg-parchment hover:border-gold shadow-sm transition-colors duration-400 rounded-sm"
          >
            <div className="text-void mb-3 group-hover:text-gold transition-colors duration-400">
              {social.icon}
            </div>
            <h3 className="font-display text-xl text-void mb-1">{social.name}</h3>
            <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-terracotta group-hover:text-void transition-colors font-bold">
              {social.handle}
            </p>
          </motion.a>
        ))}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-1 max-w-5xl mx-auto border border-gold/15 p-1 bg-parchment rounded-sm">
        {instagramGrid.map((src, index) => (
          <motion.a
            key={index}
            href="https://www.instagram.com/indian.kitchen_/"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.06 }}
            className="relative aspect-square overflow-hidden group rounded-[2px]"
          >
            <Image
              src={src}
              alt="Indian Kitchen on Instagram"
              fill
              className="object-cover img-warm transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 33vw, 16vw"
            />
            <div className="absolute inset-0 bg-void/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
              <span className="text-cream text-[9px] tracking-[0.2em] uppercase font-bold">View</span>
            </div>
          </motion.a>
        ))}
      </div>
    </SectionShell>
  );
}
