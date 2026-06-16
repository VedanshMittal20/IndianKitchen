"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

const highlights = [
  {
    title: "The Experience",
    desc: "Born from a bold vision — dining as experiential journeys rooted in authenticity.",
    href: "/experience",
    image: "/images/slide_4.png",
    tag: "About",
  },
  {
    title: "Signature Themes",
    desc: "Pondicherry Street, Kerala Houseboat, and Sherlock-themed dining.",
    href: "/themes",
    image: "/images/slide_6.png",
    tag: "Themes",
  },
  {
    title: "Signature Dishes",
    desc: "Bamboo Biryani, coastal curries, and recipes passed down through generations.",
    href: "/menu",
    image: "/images/slide_7.png",
    tag: "Menu",
  },
  {
    title: "Reservations",
    desc: "Book your table across our themed dining rooms in Colombo & Kandy.",
    href: "/reservations",
    image: "/images/slide_5.png",
    tag: "Book",
  },
  {
    title: "Kitchen Stories",
    desc: "Stories, culture, and behind-the-scenes from the spice trail.",
    href: "/blog",
    image: "/images/slide_3.png",
    tag: "Blog",
  },
  {
    title: "Join Our Team",
    desc: "We hire storytellers who craft unforgettable human moments.",
    href: "/careers",
    image: "/images/slide_2.png",
    tag: "Careers",
  },
];

export default function HomeHighlights() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-parchment">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-12"
        >
          <SectionLabel className="mb-4">Explore</SectionLabel>
          <h2 className="heading-presentation">The Experience We Create</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {highlights.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Link
                href={item.href}
                className="group block h-full bg-paper border border-sage/10 overflow-hidden hover:border-sage/30 hover:shadow-md transition-all duration-400"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top img-warm group-hover:scale-105 transition-transform duration-700"
                    sizes="33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[9px] tracking-[0.25em] uppercase text-sage mb-2 block">
                    {item.tag}
                  </span>
                  <h3 className="font-display text-xl uppercase tracking-wide text-sage mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm font-light leading-relaxed line-clamp-2 mb-3">
                    {item.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[9px] tracking-[0.2em] uppercase text-text-dark group-hover:text-sage transition-colors">
                    View
                    <ArrowUpRight className="w-3 h-3" />
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
