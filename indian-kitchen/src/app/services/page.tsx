"use client";

import React from "react";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import PrivateDining from "@/components/home/PrivateDining";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Corporate Dining",
    desc: "Tailored culinary solutions for executive lunches, team building retreats, and corporate milestones. We transform business gatherings into highly memorable cultural experiences.",
    features: ["Custom Branding", "A/V Setup Available", "Menu Tasters"],
    image: "/images/real/kandy_hero_day.jpg",
    bgColor: "bg-surface-container-lowest",
    textColor: "text-brand-deep-forest",
    subtextColor: "text-on-surface-variant",
    accentColor: "text-brand-accent-green",
    reverse: false,
  },
  {
    num: "02",
    title: "Private Celebrations",
    desc: "Intimate, highly art-directed spaces dedicated entirely to birthday galas, anniversaries, and reunions. Every detail, from the floral stagecraft to the personalized menu, is meticulously curated.",
    features: ["Personal Butler", "Theme Customization", "Floral Stagecraft"],
    image: "/images/real/gallery_2.jpg",
    bgColor: "bg-brand-deep-forest",
    textColor: "text-brand-warm-cream",
    subtextColor: "text-white/70",
    accentColor: "text-brand-accent-green",
    reverse: true,
  },
  {
    num: "03",
    title: "Travel & Tour Groups",
    desc: "Curated cultural dining itineraries designed for inbound tourist groups looking for an authentic taste of Indian heritage, seamlessly managed by multi-lingual hosts.",
    features: ["Multi-lingual Hosts", "Interactive Demos", "Set Menus"],
    image: "/images/real/colombo_ceremony.jpg",
    bgColor: "bg-[#F5F2EA]",
    textColor: "text-brand-deep-forest",
    subtextColor: "text-on-surface-variant",
    accentColor: "text-brand-red",
    reverse: false,
  },
  {
    num: "04",
    title: "Bespoke Chef Menus",
    desc: "Collaborate directly with our master chefs to curate personalized multi-course tasting menus for your guests. Experience live tandoor stations and expert wine pairings.",
    features: ["Wine Pairings", "Live Tandoor Station", "Off-site Catering"],
    image: "/images/bamboo_biryani.png",
    bgColor: "bg-surface-container-lowest",
    textColor: "text-brand-deep-forest",
    subtextColor: "text-on-surface-variant",
    accentColor: "text-brand-accent-green",
    reverse: true,
  },
];

function EditorialBlock({ service, index }: { service: any; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className={`${service.bgColor} py-24 md:py-32 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className={`flex flex-col ${service.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-24 items-center`}>
          
          {/* Image Side */}
          <div className="w-full lg:w-3/5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
              animate={inView ? { opacity: 1, scale: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] w-full rounded-sm overflow-hidden shadow-2xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </motion.div>
            
            {/* Floating Index Number */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`absolute -bottom-8 ${service.reverse ? "-left-4 md:-left-12" : "-right-4 md:-right-12"} hidden md:block z-10`}
            >
              <span className={`font-display text-8xl md:text-[180px] leading-none ${service.accentColor} opacity-20 select-none`}>
                {service.num}
              </span>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-2/5 relative z-20">
            <motion.div
              initial={{ opacity: 0, x: service.reverse ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <span className={`font-body-md text-xs tracking-[0.3em] uppercase font-bold ${service.accentColor} mb-6 block`}>
                Service / {service.num}
              </span>
              <h2 className={`font-headline-md text-4xl md:text-5xl lg:text-6xl ${service.textColor} mb-8 leading-tight`}>
                {service.title}
              </h2>
              <div className={`w-12 h-1 ${service.accentColor} mb-8 rounded-full`} style={{ backgroundColor: "currentColor" }} />
              <p className={`font-light text-base md:text-lg leading-relaxed ${service.subtextColor} mb-12`}>
                {service.desc}
              </p>

              {/* Features Tags */}
              <div className="flex flex-wrap gap-3">
                {service.features.map((feat: string, idx: number) => (
                  <motion.span 
                    key={feat}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + (idx * 0.1) }}
                    className={`text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 border ${
                      service.bgColor === "bg-brand-deep-forest" 
                        ? "border-brand-accent-green/30 text-brand-warm-cream bg-brand-accent-green/10" 
                        : "border-brand-deep-forest/20 text-brand-deep-forest bg-white/50"
                    } rounded-sm`}
                  >
                    {feat}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-on-surface bg-surface-container-lowest">
      <PageHero
        label="Event Stagecraft"
        title={<>Beyond<br />the Plate</>}
        subtitle="Choreographed hospitality experiences tailored for your special occasions."
        image="/images/real_interior.jpeg"
        light
      />

      {/* Prologue Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto text-center">
        <span className="text-[10px] tracking-[0.3em] uppercase text-brand-accent-green font-bold block mb-8">
          The Philosophy
        </span>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-brand-deep-forest leading-tight mb-8">
          "Whether you are hosting an intimate gathering or a grand corporate milestone, our sanctuaries adapt to tell your story."
        </h2>
        <p className="font-light text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
          Let us bring the rich heritage of Indian culinary arts to your next occasion, wrapped in an ambiance that transports your guests directly into another world.
        </p>
      </section>

      {/* Editorial Blocks */}
      <div className="flex flex-col">
        {services.map((service, idx) => (
          <EditorialBlock key={service.num} service={service} index={idx} />
        ))}
      </div>

      {/* Private Dining Banner */}
      <div className="pt-24 bg-surface-container-lowest">
        <PrivateDining />
      </div>

      {/* Enquire CTA */}
      <SectionShell variant="void" className="text-center py-28 border-t border-brand-sandy/20 relative mt-24">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <SectionHeader 
            label="Connect with our Host" 
            title="Curate Your Gathering" 
            subtitle="Speak to our dedicated events coordinator to draft bespoke menus and secure bookings for your next event."
            align="center"
          />
          <Link
            href="https://wa.me/94117112334?text=Hello!%20I'd%20like%20to%20enquire%20about%20a%20custom%20event..."
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-10"
          >
            Enquire via WhatsApp
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </SectionShell>
    </main>
  );
}
