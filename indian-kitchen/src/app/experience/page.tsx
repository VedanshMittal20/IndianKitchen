"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import SplitSection from "@/components/layout/SplitSection";
import HomeCommitmentStrip from "@/components/home/HomeCommitmentStrip";

// Self-contained Animated Stat Counter Component
function StatCounter({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    const targetNumber = parseInt(value.replace(/[^0-9]/g, ""), 10);
    if (isNaN(targetNumber)) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Ease-out expo curve
      const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      const current = Math.floor(ease * targetNumber);
      
      setCount(current);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [inView, value, delay]);

  const hasPlus = value.includes("+");
  const isYear = parseInt(value, 10) > 2000 && !hasPlus;

  const displayVal = isYear 
    ? count === 0 ? "0000" : count.toString()
    : hasPlus ? `${count}+` : count.toString();

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl text-gold mb-2 select-none tracking-tight">
        {displayVal}
      </div>
      <div className="text-[9px] tracking-[0.25em] uppercase text-text-muted font-bold">
        {label}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [200, 1000], [0, 80]);

  return (
    <main className="min-h-screen bg-void">
      <PageHero
        label="About Us"
        title={<>A Tale of<br />Spice &amp; Time</>}
        subtitle="Where every meal is choreographed as scenes in a heritage film."
        image="/images/real/kandy_hero_night.jpg"
      />

      {/* Intro Scene Statement */}
      <SectionShell variant="void" className="text-center py-28 relative">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            label="Our Essence" 
            title="Transporting Guests Through Heritage" 
            align="center"
            lightMode
          />
          <p className="text-cream/80 font-display italic text-2xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
            "Indian Kitchen is an immersive theme dining experience that brings India's soul to life through food, culture, and profound staging."
          </p>
        </div>
      </SectionShell>

      {/* The Origin Story SplitSection */}
      <SectionShell variant="void" className="py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Parallax media block */}
          <div ref={mediaRef} className="lg:col-span-6 relative overflow-hidden aspect-[4/5] w-full rounded-[2px] gold-frame shadow-2xl">
            <motion.div style={{ y: yParallax }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
              <Image
                src="/images/real/colombo_ceremony.jpg"
                alt="Colombo Ceremony"
                fill
                className="object-cover img-warm"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <SectionHeader 
              label="Our Origin Story" 
              title="A Bold Vision Born in Crisis" 
              lightMode
            />
            <div className="space-y-6 text-cream/70 font-sans font-light text-base leading-relaxed">
              <p>
                Born during the unprecedented global hospitality crisis of 2019, Indian Kitchen emerged 
                from a defiant, bold vision: to fundamentally transform dining from a passive transaction 
                into an experiential, memorable journey rooted deeply in authenticity.
              </p>
              <p>
                Founded in Sri Lanka, we launched our flagship outlet in 2020 in Colombo, introducing 
                our signature "Pondicherry Street" concept. Since then, we expanded to the historic 
                city of Kandy with our tranquil "Kerala Houseboat" experience. 
              </p>
              <p>
                When the world paused, our founders used the silence to build. We traveled the spice routes, 
                consulted with generational chefs, and brought back authentic cooking vessels. The result is a 
                dining experience that defies convention.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Interactive Stats Block */}
      <SectionShell variant="void" className="border-y border-gold/15 py-14 bg-void-light/35">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          <StatCounter value="2019" label="Founded" delay={0.1} />
          <StatCounter value="3" label="Theme Worlds" delay={0.3} />
          <StatCounter value="2" label="Outlets" delay={0.5} />
          <StatCounter value="15+" label="Chef Recipes" delay={0.7} />
        </div>
      </SectionShell>

      {/* Commitment Strip */}
      <HomeCommitmentStrip />

      {/* Vision & Mission Cards */}
      <SectionShell variant="void" className="py-24 border-t border-gold/15">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-void-light border border-gold/10 p-10 rounded-sm shadow-xl flex flex-col justify-between">
            <div>
              <SectionHeader label="Our Vision" title={<></>} className="mb-4" lightMode />
              <h3 className="text-2xl md:text-3xl font-display text-cream uppercase tracking-wide leading-tight mb-6">
                Redefining the boundaries of global theme dining.
              </h3>
              <div className="h-[1px] w-12 bg-gold mb-6" />
              <p className="text-cream/60 font-sans font-light text-base leading-relaxed">
                We envision a future where the rich, untold stories of regional Indian cuisines are 
                celebrated worldwide, completely redefining how global audiences perceive, taste, and 
                experience Indian food.
              </p>
            </div>
          </div>

          <div className="bg-void-light border border-gold/10 p-10 rounded-sm shadow-xl flex flex-col justify-between">
            <div>
              <SectionHeader label="Our Mission" title={<></>} className="mb-4" lightMode />
              <h3 className="text-2xl md:text-3xl font-display text-cream uppercase tracking-wide leading-tight mb-6">
                Immersive taste, authentic execution.
              </h3>
              <div className="h-[1px] w-12 bg-gold mb-6" />
              <p className="text-cream/60 font-sans font-light text-base leading-relaxed">
                We are committed to celebrating India's culinary heritage with every single plate 
                we serve, ensuring that our guests leave not just satisfied, but inspired.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Founder's Note Section */}
      <SectionShell variant="void" className="border-t border-gold/15 py-24 bg-void-light/20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <SectionHeader 
            label="Executive Board" 
            title="Building Experiences Through Passion" 
            align="center"
            lightMode
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-[2px] overflow-hidden gold-frame shadow-2xl bg-void-light hover:scale-[1.01] transition-all duration-500">
            <Image 
              src="/images/extracted/page15_img2.png" 
              alt="Vincent Renold" 
              fill 
              className="object-cover img-warm"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="lg:col-span-7">
            <p className="text-cream/80 font-sans font-light text-base md:text-lg leading-relaxed mb-6">
              <strong className="text-gold font-semibold uppercase tracking-wider text-sm block mb-2">Vincent Renold, Founder</strong>
              Vincent Renold brings over two decades of elite hospitality excellence. His career is defined by prestigious leadership roles across the luxury tourism sectors of Sri Lanka and India, having worked closely with luxury brands like Radisson, ITC, Banyan Tree, and the renowned Zuri Kumarakom Kerala Resort & Spa.
            </p>
            <p className="text-cream/70 font-sans font-light text-base leading-relaxed mb-8">
              It was his deep involvement in inbound tourism that sparked a profound realization. He saw firsthand how travelers craved the *destination experience*. He wanted to capture the magic of dining on a Kerala houseboat or walking the streets of Pondicherry, and bring it directly to Colombo and Kandy.
            </p>

            <blockquote className="border-l-2 border-gold pl-6 py-2 bg-void-light/50 p-6 rounded-r-sm">
              <p className="font-display italic text-2xl text-cream/90 mb-4 leading-relaxed">
                "Two decades shaping hospitality excellence across global brands has led to this: creating a complete ecosystem beyond restaurants. We aren't just serving food; we are curating memories rooted in heritage."
              </p>
              <footer className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold font-sans">
                — Vincent Renold, Founder
              </footer>
            </blockquote>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
