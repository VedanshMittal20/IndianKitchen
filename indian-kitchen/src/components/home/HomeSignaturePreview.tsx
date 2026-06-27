"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "@/components/layout/SectionHeader";

const annotations = [
  {
    id: "spices",
    title: "Heritage Spices",
    desc: "Hand-ground mace, star anise, and stone-flower sourced directly from farms in Tamil Nadu.",
  },
  {
    id: "technique",
    title: "Bamboo Baking",
    desc: "Slow-cooked inside green bamboo over coconut-shell charcoal to lock in volatile oils.",
  },
  {
    id: "provenance",
    title: "Tribal Provenance",
    desc: "A heritage recipe inspired by the nomadic tribal cooks of the Western Ghats range.",
  }
];

export default function HomeSignaturePreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dishRef = useRef<HTMLDivElement>(null);
  const leftElementsRef = useRef<HTMLDivElement[]>([]);
  const rightElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce) or (max-width: 1024px)");
    if (mediaQuery.matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    if (!container) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 60%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      }
    });

    gsap.set([...leftElementsRef.current, ...rightElementsRef.current], { opacity: 0, y: 30 });
    
    timeline.fromTo(dishRef.current, { scale: 0.9, rotate: -5 }, { scale: 1, rotate: 0, duration: 1 });

    timeline.to(leftElementsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5");

    timeline.to(rightElementsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative z-10 bg-surface-container-lowest w-full py-24 border-b border-outline-variant/30">
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-background-light/30 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full z-10">
        <SectionHeader
          label="Theatre on a Plate"
          title="Anatomy of a Signature"
          subtitle="How our legendary Bamboo Biryani is conceptualized and crafted."
          lightMode
          align="center"
          className="mb-8"
        />
      </div>

      {/* Main Showcase Layout (3-Column Grid) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center justify-center relative mt-12">
        
        {/* Left annotations */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          {[annotations[0], annotations[2]].map((ann, idx) => (
            <div 
              key={ann.id}
              ref={(el) => { if (el) leftElementsRef.current[idx] = el; }}
              className="bg-surface-container-low border border-outline-variant/30 p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-[10px] text-brand-golden font-bold mb-2 block">
                {ann.title}
              </span>
              <p className="text-sm font-body-md font-light leading-relaxed text-on-surface-variant">
                {ann.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Center Dish Image */}
        <div className="flex items-center justify-center relative order-1 lg:order-2">
          <div ref={dishRef} className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-xl bg-surface-container-low border-4 border-surface-container-lowest">
            <Image
              src="/images/bamboo_biryani.png"
              alt="Bamboo Biryani"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 320px, 400px"
            />
            {/* Inner gold ring */}
            <div className="absolute inset-0 rounded-full border border-outline-variant/30 pointer-events-none" />
          </div>
        </div>

        {/* Right annotations */}
        <div className="flex flex-col gap-8 order-3 lg:order-3">
          {[annotations[1]].map((ann, idx) => (
            <div 
              key={ann.id}
              ref={(el) => { if (el) rightElementsRef.current[idx] = el; }}
              className="bg-surface-container-low border border-outline-variant/30 p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-[10px] text-brand-golden font-bold mb-2 block">
                {ann.title}
              </span>
              <p className="text-sm font-body-md font-light leading-relaxed text-on-surface-variant">
                {ann.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Menu CTA footer */}
      <div className="w-full text-center mt-16 z-10 relative">
        <Link href="/menu" className="btn-primary">
          Explore Full Culinary Passport
        </Link>
      </div>
    </div>
  );
}
