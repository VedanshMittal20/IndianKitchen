"use client";

import React from "react";
import Image from "next/image";
import ArchitectureOfShadows from "@/components/experience/ArchitectureOfShadows";
import OriginStory from "@/components/experience/OriginStory";

export default function ExperiencePage() {
  return (
    <main className="pt-[120px] pb-margin-desktop bg-background text-on-background relative z-10">
      {/* Hero Header */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-32 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-primary-container pb-6">
          <div>
            <span className="font-annotation text-annotation text-primary tracking-widest uppercase block mb-4">
              Spatial Analysis Vol. 1
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
              Acoustics & Architecture
            </h1>
          </div>
          <div className="font-annotation text-annotation text-tertiary flex items-center gap-2 mt-4 md:mt-0">
            <span className="w-12 h-[1px] bg-primary-container block"></span>
            Fig. 01
          </div>
        </div>
        <div className="w-full h-[614px] relative overflow-hidden rounded-sm glass-card p-4">
          <div className="w-full h-full relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhivpPmijCYf7jGLKes4WDh3vNFxlIVeOHM9K0Fhq7hs_2CgPn1mFZseXVczxWxqOB5rQ4TwtnVZUj7Q77yo-GFEeeBW4pvTjLufC4k7iP5PjaX8388nrX7Wp41bJE19pIbqb8eiNOupdCEoThe4d-gicpUcmYDvhj-Tuq1ac6OfylCGN6MPpZjUEgZnEmTm4TR4traFBlMGKha885O1WVlPKUAg4TXsKfz8wmHE3cea4cH4Qrp6L0CkoO_VbEJKJiIgLPtpVozM_V"
              alt="A wide architectural photograph of a high-end minimalist Indian restaurant interior bathed in soft natural light."
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="absolute bottom-12 right-12 glass-card p-6 rounded max-w-sm hidden md:block">
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              An exploration of structural permanence and the deliberate manipulation of light and sound to create a digital sanctuary within physical walls.
            </p>
            <div className="flex gap-4">
              <span className="font-annotation text-annotation px-3 py-1 bg-surface-dim rounded-full text-on-surface">
                Volumetric
              </span>
              <span className="font-annotation text-annotation px-3 py-1 bg-surface-dim rounded-full text-on-surface">
                Thermal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Grids */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 blueprint-grid p-8 rounded-lg border border-surface-dim">
          <div className="col-span-1 md:col-span-4 bg-obsidian-accent border border-white/10 text-on-secondary p-8 rounded flex flex-col justify-between h-full min-h-[300px]">
            <div className="flex justify-between items-start mb-12">
              <h3 className="font-headline-md text-headline-md text-on-secondary">Scoville Heat</h3>
              <span className="material-symbols-outlined text-saffron-gold" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_fire_department
              </span>
            </div>
            <div>
              <div className="text-5xl font-annotation font-light text-saffron-gold mb-2">
                30k<span className="text-xl"> SHU</span>
              </div>
              <p className="font-annotation text-annotation text-on-secondary opacity-70 border-t border-white/20 pt-4">
                Base warmth profile. Tempered using slow-roasted spices for depth over burn.
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-8 bg-emerald-header border border-white/10 text-on-secondary p-8 rounded flex flex-col justify-between relative overflow-hidden h-full min-h-[300px]">
            <div className="relative z-10 flex justify-between items-start mb-12">
              <h3 className="font-headline-md text-headline-md text-on-secondary">Flavor Topography</h3>
              <span className="font-annotation text-annotation text-saffron-gold border border-saffron-gold px-2 py-1 rounded">
                Palate Monitor
              </span>
            </div>
            <div className="relative z-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-4">
              <div>
                <span className="block font-annotation text-annotation text-on-secondary/70 mb-1">Peak</span>
                <span className="font-annotation text-xl text-saffron-gold">Umami</span>
              </div>
              <div>
                <span className="block font-annotation text-annotation text-on-secondary/70 mb-1">Trough</span>
                <span className="font-annotation text-xl text-saffron-gold">Acidity</span>
              </div>
              <div>
                <span className="block font-annotation text-annotation text-on-secondary/70 mb-1">Target EQ</span>
                <span className="font-annotation text-xl text-saffron-gold">Balanced</span>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-12 glass-card p-8 md:p-12 mt-4">
            <div className="max-w-2xl mx-auto text-center">
              <span className="font-annotation text-annotation text-primary tracking-widest uppercase block mb-6">
                Spice Equilibrium
              </span>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
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
