"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

function StatCounter({ value, label, delay = 0 }: { value: string; label: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;
    const targetNumber = parseInt(value.replace(/[^0-9]/g, ""), 10);
    if (isNaN(targetNumber)) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
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
      <div className="font-headline-md text-headline-md text-primary-container mb-2 select-none tracking-tight">
        {displayVal}
      </div>
      <div className="text-[9px] tracking-[0.25em] text-on-surface-variant font-bold font-label-sm">
        {label}
      </div>
    </div>
  );
}

export default function OriginStory() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [200, 1000], [0, 80]);

  return (
    <div className="bg-surface-container-lowest">
      {/* Intro Scene Statement */}
      <SectionShell variant="void" className="text-center py-28 relative">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            label="Our Essence" 
            title="Transporting Guests Through Heritage" 
            align="center"
            lightMode
          />
          <p className="text-on-surface/80 font-headline-md italic text-2xl md:text-3xl font-light leading-relaxed max-w-3xl mx-auto">
            "Indian Kitchen is an immersive theme dining experience that brings India's soul to life through food, culture, and profound staging."
          </p>
        </div>
      </SectionShell>

      {/* The Origin Story */}
      <SectionShell variant="void" className="py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 relative overflow-hidden aspect-[4/5] w-full rounded-[3rem] glass-card group p-2">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
              <motion.div style={{ y: yParallax }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                <Image
                  src="/images/real/colombo_ceremony.jpg"
                  alt="Colombo Ceremony"
                  fill
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <SectionHeader 
              label="Our Origin Story" 
              title="A Bold Vision Born in Crisis" 
              lightMode
            />
            <div className="space-y-6 text-on-surface-variant font-body-md font-light text-base leading-relaxed">
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
      <SectionShell variant="void" className="border-y border-outline-variant/30 py-14 bg-surface-container-low">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          <StatCounter value="2019" label="Founded" delay={0.1} />
          <StatCounter value="3" label="Theme Worlds" delay={0.3} />
          <StatCounter value="2" label="Outlets" delay={0.5} />
          <StatCounter value="15+" label="Chef Recipes" delay={0.7} />
        </div>
      </SectionShell>

      {/* Vision & Mission Cards */}
      <SectionShell variant="void" className="py-24 border-t border-outline-variant/30">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="glass-panel p-10 rounded-[3rem] shadow-sm flex flex-col justify-between">
            <div>
              <SectionHeader label="Our Vision" title={<></>} className="mb-4" lightMode />
              <h3 className="text-2xl md:text-3xl font-headline-md text-headline-md-surface tracking-wide mb-6">
                Redefining the boundaries of global theme dining.
              </h3>
              <div className="h-[1px] w-12 bg-primary-container mb-6" />
              <p className="text-on-surface-variant font-body-md font-light text-base leading-relaxed">
                We envision a future where the rich, untold stories of regional Indian cuisines are 
                celebrated worldwide, completely redefining how global audiences perceive, taste, and 
                experience Indian food.
              </p>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-[3rem] shadow-sm flex flex-col justify-between">
            <div>
              <SectionHeader label="Our Mission" title={<></>} className="mb-4" lightMode />
              <h3 className="text-2xl md:text-3xl font-headline-md text-headline-md-surface tracking-wide mb-6">
                Immersive taste, authentic execution.
              </h3>
              <div className="h-[1px] w-12 bg-primary-container mb-6" />
              <p className="text-on-surface-variant font-body-md font-light text-base leading-relaxed">
                We are committed to celebrating India's culinary heritage with every single plate 
                we serve, ensuring that our guests leave not just satisfied, but inspired.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Founder's Note Section */}
      <SectionShell variant="void" className="border-t border-outline-variant/30 py-24 bg-surface-container-low">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <SectionHeader 
            label="Executive Board" 
            title="Building Experiences Through Passion" 
            align="center"
            lightMode
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-[3rem] overflow-hidden glass-panel p-2 shadow-sm hover:scale-[1.01] transition-all duration-500 group">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
              <Image 
                src="/images/real/gallery_7.jpg" 
                alt="Vincent Renold" 
                fill 
                className="object-cover transition-all duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-on-surface font-body-md font-light text-base md:text-lg leading-relaxed mb-6">
              <strong className="text-primary-container font-semibold tracking-wider text-sm block mb-2">Vincent Renold, Founder</strong>
              Vincent Renold brings over two decades of elite hospitality excellence. His career is defined by prestigious leadership roles across the luxury tourism sectors of Sri Lanka and India, having worked closely with luxury brands like Radisson, ITC, Banyan Tree, and the renowned Zuri Kumarakom Kerala Resort & Spa.
            </p>
            <p className="text-on-surface-variant font-body-md font-light text-base leading-relaxed mb-8">
              It was his deep involvement in inbound tourism that sparked a profound realization. He saw firsthand how travelers craved the *destination experience*. He wanted to capture the magic of dining on a Kerala houseboat or walking the streets of Pondicherry, and bring it directly to Colombo and Kandy.
            </p>

            <blockquote className="border-l-2 border-primary-container pl-6 py-2 bg-surface-container-highest p-6 rounded-r-[2rem]">
              <p className="font-headline-md italic text-2xl text-on-surface/90 mb-4 leading-relaxed">
                "Two decades shaping hospitality excellence across global brands has led to this: creating a complete ecosystem beyond restaurants. We aren't just serving food; we are curating memories rooted in heritage."
              </p>
              <footer className="text-[10px] tracking-[0.2em] text-primary-container font-bold font-body-md">
                — Vincent Renold, Founder
              </footer>
            </blockquote>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
