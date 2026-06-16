"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const socialLinks = [
  {
    name: "Instagram",
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
    url: "https://www.instagram.com/indian.kitchen_/",
    handle: "@indian.kitchen_",
  },
  {
    name: "TikTok",
    icon: <span className="font-display font-bold text-3xl">TK</span>,
    url: "https://www.tiktok.com/@indian.kitchen_",
    handle: "@ikthemedining",
  },
  {
    name: "Facebook",
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
    url: "https://www.facebook.com/indiankitchenrestaurant/",
    handle: "Indian Kitchen",
  },
];

const instagramGrid = [
  { src: "/images/slide_1.png", likes: "1.2K", comments: "45" },
  { src: "/images/slide_2.png", likes: "890", comments: "32" },
  { src: "/images/slide_3.png", likes: "2.1K", comments: "112" },
  { src: "/images/slide_4.png", likes: "1.5K", comments: "89" },
  { src: "/images/slide_5.png", likes: "3.4K", comments: "210" },
  { src: "/images/slide_6.png", likes: "950", comments: "41" },
];

export default function SocialMedia() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-32 md:py-48 bg-cream border-t border-wood" id="social">
      <div className="container mx-auto px-8 md:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-wood" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-wood font-medium">
              Community
            </span>
            <div className="w-12 h-px bg-wood" />
          </div>
          <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.9] text-forest">
            Follow the<br />
            <span className="italic">Flavour</span>
          </h2>
        </motion.div>

        {/* Social Links Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group flex flex-col items-center justify-center py-12 border border-wood/20 hover:border-forest transition-colors duration-500"
            >
              <div className="text-forest mb-4 group-hover:text-yellow transition-colors duration-500">
                {social.icon}
              </div>
              <h3 className="font-display text-2xl text-forest mb-2">{social.name}</h3>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-wood group-hover:text-forest transition-colors">
                {social.handle}
              </p>
            </motion.a>
          ))}
        </div>

        {/* IG Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {instagramGrid.map((post, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/indian.kitchen_/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={post.src}
                alt="Instagram post from Indian Kitchen"
                fill
                className="object-cover img-warm transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-forest/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-8 text-cream">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <span className="font-sans text-sm font-medium">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  <span className="font-sans text-sm font-medium">{post.comments}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
