"use client";

import React from "react";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import SplitSection from "@/components/layout/SplitSection";
import PrivateDining from "@/components/home/PrivateDining";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Building, Globe, Flame } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Corporate Dining",
    desc: "Tailored culinary solutions for executive lunches, team building retreats, and corporate milestones.",
    icon: Building,
    features: ["Custom Branding", "A/V Setup Available", "Menu Tasters"]
  },
  {
    num: "02",
    title: "Private Celebrations",
    desc: "Intimate, highly art-directed spaces dedicated entirely to birthday galas, anniversaries, and reunions.",
    icon: Sparkles,
    features: ["Personal Butler", "Theme Customization", "Floral Stagecraft"]
  },
  {
    num: "03",
    title: "Travel & Tour Groups",
    desc: "Curated cultural dining itineraries designed for inbound tourist groups looking for an authentic taste.",
    icon: Globe,
    features: ["Multi-lingual Hosts", "Interactive Demos", "Set Menus"]
  },
  {
    num: "04",
    title: "Bespoke Chef Menus",
    desc: "Collaborate directly with our master chefs to curate personalized multi-course tasting menus for your guests.",
    icon: Flame,
    features: ["Wine/Lassi Pairings", "Live Tandoor Station", "Off-site Catering"]
  },
];

export default function ServicesPage() {
  const [refCards, inViewCards] = useInView({ triggerOnce: true, threshold: 0.1 });

  const introContent = (
    <div>
      <SectionHeader 
        label="Event Stagecraft" 
        title="Extending the Experience" 
      />
      <div className="space-y-6 text-text-muted font-sans font-light text-base leading-relaxed">
        <p>
          At Indian Kitchen, we extend our experience beyond typical dining, creating tailored solutions
          for corporates, global travelers, and private celebrations. Whether you are hosting an intimate 
          gathering or a grand corporate milestone, our sanctuaries adapt to tell your story.
        </p>
        <p>
          Let us bring the rich heritage of Indian culinary arts to your next occasion, wrapped in 
          an ambiance that transports your guests directly into another world.
        </p>
      </div>
    </div>
  );

  const introMedia = (
    <div className="relative aspect-square w-full rounded-[2px] overflow-hidden gold-frame hover:scale-[1.02] transition-transform duration-500">
      <Image
        src="/images/private_dining.png"
        alt="Private dining service"
        fill
        className="object-cover img-warm"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  );

  return (
    <main className="bg-parchment min-h-screen text-void">
      <PageHero
        label="Our Services"
        title={<>Beyond<br />the Plate</>}
        subtitle="Choreographed hospitality experiences tailored for your special occasions."
        image="/images/real_interior.jpeg"
        light
      />

      {/* Intro Split Section */}
      <SplitSection 
        variant="parchment" 
        content={introContent} 
        media={introMedia} 
        reverse 
      />

      {/* Bento Service Cards */}
      <SectionShell variant="cream-dark" className="py-24 border-y border-gold/10">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <SectionHeader
            label="Service Portfolios"
            title="Sanctuary Hostings"
            subtitle="Explore our specialized hospitality programs built for corporate and private functions."
            align="center"
          />
        </div>

        <div 
          ref={refCards}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inViewCards ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-parchment border border-gold/15 p-8 md:p-10 rounded-sm shadow-xl hover:border-gold transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-10 rounded-sm bg-gold/5 flex items-center justify-center border border-gold/20 text-gold group-hover:bg-gold group-hover:text-void transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-sans text-[10px] tracking-widest text-gold/30 uppercase font-bold">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-void uppercase tracking-wide mb-4">
                    {service.title}
                  </h3>
                  <p className="text-text-muted font-sans font-light leading-relaxed text-sm mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Features Tags */}
                <div className="border-t border-gold/10 pt-4 flex flex-wrap gap-2">
                  {service.features.map((feat) => (
                    <span 
                      key={feat}
                      className="text-[8px] font-sans font-bold tracking-widest uppercase px-2.5 py-1 bg-cream-dark border border-gold/10 text-terracotta rounded-full"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionShell>

      {/* Private Dining Banner */}
      <PrivateDining />

      {/* Enquire CTA */}
      <SectionShell variant="void" className="text-center py-28 border-t border-gold/15 relative">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <SectionHeader 
            label="Connect with our Host" 
            title="Curate Your Gathering" 
            subtitle="Speak to our dedicated events coordinator to draft bespoke menus and secure bookings."
            align="center"
            lightMode
          />
          <Link
            href="https://wa.me/94117112334?text=Hello!%20I'd%20like%20to%20enquire%20about%20a%20custom%20event..."
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-6"
          >
            Enquire via WhatsApp
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </SectionShell>
    </main>
  );
}
