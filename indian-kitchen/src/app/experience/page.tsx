"use client";

import React from "react";
import Image from "next/image";
import ArchitectureOfShadows from "@/components/experience/ArchitectureOfShadows";
import OriginStory from "@/components/experience/OriginStory";

export default function ExperiencePage() {
  return (
    <main className="pt-32 pb-32 bg-surface-container-lowest text-on-surface relative z-10">
      {/* Hero Header */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-32 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-brand-sandy/30 pb-6">
          <div>
            <span className="text-[10px] tracking-[0.3em] font-bold text-brand-accent-green block mb-4">
              Spatial Analysis Vol. 1
            </span>
            <h1 className="font-headline-md text-headline-md text-brand-deep-forest">
              Sensory Architecture
            </h1>
          </div>
          <div className="text-[10px] text-brand-sandy flex items-center gap-4 mt-4 md:mt-0 font-bold">
            <span className="w-12 h-[1px] bg-brand-sandy block"></span>
            Fig. 01
          </div>
        </div>
        <div className="w-full h-[600px] relative overflow-hidden rounded-sm p-4">
          <div className="w-full h-full relative shadow-[0_20px_60px_rgba(6,73,53,0.15)] rounded-sm overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhivpPmijCYf7jGLKes4WDh3vNFxlIVeOHM9K0Fhq7hs_2CgPn1mFZseXVczxWxqOB5rQ4TwtnVZUj7Q77yo-GFEeeBW4pvTjLufC4k7iP5PjaX8388nrX7Wp41bJE19pIbqb8eiNOupdCEoThe4d-gicpUcmYDvhj-Tuq1ac6OfylCGN6MPpZjUEgZnEmTm4TR4traFBlMGKha885O1WVlPKUAg4TXsKfz8wmHE3cea4cH4Qrp6L0CkoO_VbEJKJiIgLPtpVozM_V"
              alt="A wide architectural photograph of a high-end minimalist Indian restaurant interior bathed in soft natural light."
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="absolute bottom-12 right-12 bg-brand-deep-forest p-8 rounded-sm max-w-sm hidden md:block shadow-2xl border-t-4 border-brand-accent-green">
            <p className="font-light text-brand-warm-cream text-lg mb-6 leading-relaxed">
              An exploration of structural permanence, blending ancient Indian spices with the deliberate manipulation of light and shadow to create a modern sanctuary within physical walls.
            </p>
            <div className="flex gap-4">
              <span className="text-[10px] font-bold px-4 py-2 bg-brand-accent-green/20 border border-brand-accent-green/30 rounded-sm text-brand-accent-green">
                Volumetric
              </span>
              <span className="text-[10px] font-bold px-4 py-2 bg-brand-accent-green/20 border border-brand-accent-green/30 rounded-sm text-brand-accent-green">
                Thermal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Grids */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border border-brand-sandy/20 p-8 rounded-sm bg-surface-container-low shadow-sm">
          <div className="col-span-1 md:col-span-4 bg-brand-deep-forest border-t-4 border-brand-red text-white p-8 rounded-sm flex flex-col justify-between h-full min-h-[300px] shadow-lg">
            <div className="flex justify-between items-start mb-12">
              <h3 className="font-headline-md text-headline-md tracking-wide">Thermal Tempering</h3>
              <span className="material-symbols-outlined text-brand-red" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_fire_department
              </span>
            </div>
            <div>
              <div className="text-5xl font-display-lg text-display-lg-warm-cream mb-4">
                30k<span className="text-xl font-sans ml-2 opacity-50">SHU</span>
              </div>
              <p className="font-light text-sm text-brand-warm-cream/70 border-t border-white/10 pt-4 leading-relaxed">
                Balancing the fierce heat of Guntur chilies with the deep warmth of slow-roasted coriander and cumin.
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-8 bg-surface-container-lowest border border-brand-sandy/30 text-brand-deep-forest p-8 md:p-12 rounded-sm flex flex-col justify-between relative overflow-hidden h-full min-h-[300px] shadow-sm">
            <div className="relative z-10 flex justify-between items-start mb-16">
              <h3 className="font-headline-md text-headline-md-deep-forest tracking-wide">Flavor Topography</h3>
              <span className="text-[9px] tracking-[0.25em] font-bold text-brand-accent-green border border-brand-accent-green/30 px-4 py-2 rounded-sm bg-brand-accent-green/5">
                Palate Monitor
              </span>
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-brand-sandy/20 pt-8">
              <div>
                <span className="block text-[10px] font-bold text-brand-sandy mb-3">Peak</span>
                <span className="font-headline-md text-headline-md-deep-forest">Heat (Chili)</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-brand-sandy mb-3">Trough</span>
                <span className="font-headline-md text-headline-md-deep-forest">Acidity (Tamarind)</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-brand-sandy mb-3">Target EQ</span>
                <span className="font-headline-md text-headline-md-accent-green">Harmony</span>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-12 bg-surface-container-lowest border-t-4 border-brand-golden p-8 md:p-16 mt-4 rounded-sm shadow-md">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[10px] font-bold text-brand-golden tracking-[0.3em] block mb-6">
                Spice Equilibrium
              </span>
              <p className="font-light text-xl md:text-2xl text-brand-deep-forest leading-relaxed">
                The flavor matrix relies on passive tempering techniques inherited from traditional generational kitchens, integrated seamlessly into modern gastronomy. The result is an invisible but profound culinary consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture of Shadows */}
      <ArchitectureOfShadows />

      {/* Origin Story restored content */}
      <OriginStory />
    </main>
  );
}
