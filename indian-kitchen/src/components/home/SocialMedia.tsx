"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    name: "Instagram",
    icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
    url: "https://www.instagram.com/indian.kitchen_/",
    handle: "@indian.kitchen_",
    color: "group-hover:text-[#E1306C]",
  },
  {
    name: "TikTok",
    icon: <span className="text-3xl font-bold font-sans">TK</span>,
    url: "https://www.tiktok.com/@ikthemedining",
    handle: "@ikthemedining",
    color: "group-hover:text-white",
  },
  {
    name: "Facebook",
    icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    url: "https://www.facebook.com/indiankitchenrestaurant/",
    handle: "Indian Kitchen",
    color: "group-hover:text-[#1877F2]",
  },
];

// Placeholders for instagram grid
const instaGrid = [
  "/images/slide_1.png",
  "/images/slide_3.png",
  "/images/slide_5.png",
  "/images/slide_4.png",
  "/images/slide_6.png",
  "/images/slide_2.png",
];

export default function SocialMedia() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24 bg-void text-cream">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold mb-6">
            Follow the Flavour
          </h2>
          <p className="text-cream/80 max-w-2xl mx-auto text-lg font-light">
            Join our community and get a behind-the-scenes look at the magic that happens in our kitchens.
          </p>
        </motion.div>

        {/* 3 Large Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-4 bg-cream-dark/5 p-8 rounded-sm hover:bg-cream-dark/10 transition-colors w-full sm:w-64 border border-gold/10 hover:border-gold/40"
            >
              <div className={`text-gold transition-colors duration-300 ${link.color}`}>
                {link.icon}
              </div>
              <div className="text-center">
                <span className="block font-medium text-cream">{link.name}</span>
                <span className="text-sm text-text-muted">{link.handle}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Static Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 max-w-4xl mx-auto mb-16">
          {instaGrid.map((img, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              href="https://www.instagram.com/indian.kitchen_/"
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square group overflow-hidden bg-void"
            >
              <Image
                src={img}
                alt={`Instagram Post ${i + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 sepia-[0.1] saturate-[1.1]"
              />
              <div className="absolute inset-0 bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-cream font-medium">
                  <Heart className="w-6 h-6 fill-cream" /> {Math.floor(Math.random() * 500) + 100}
                </div>
                <div className="flex items-center gap-2 text-cream font-medium">
                  <MessageCircle className="w-6 h-6 fill-cream" /> {Math.floor(Math.random() * 50) + 5}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center text-cream/70"
        >
          Share your Indian Kitchen experience and tag <strong className="text-gold">@indian.kitchen_</strong> for a feature.
        </motion.p>
      </div>
    </section>
  );
}
