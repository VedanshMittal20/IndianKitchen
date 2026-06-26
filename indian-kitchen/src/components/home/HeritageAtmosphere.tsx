"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sun } from "lucide-react";

export default function HeritageAtmosphere() {
  return (
    <section className="w-full flex flex-col lg:flex-row relative z-10 border-y border-brand-sandy/20">
      
      {/* Left Column: Heritage */}
      <div className="w-full lg:w-1/2 bg-brand-deep-forest text-brand-warm-cream p-12 md:p-24 relative overflow-hidden flex flex-col justify-center">
        {/* Decorative Sunburst */}
        <div className="absolute -top-24 -left-24 text-brand-golden/10 rotate-45 pointer-events-none">
          <Sun className="w-96 h-96" strokeWidth={1} />
        </div>

        <div className="relative z-10 max-w-lg">
          <span className="font-label-lg text-brand-golden uppercase tracking-[0.2em] mb-4 block text-xs font-bold">
            OUR HERITAGE
          </span>
          <h2 className="font-display-lg text-5xl md:text-6xl text-white uppercase tracking-wider mb-6 leading-none">
            CRAFTED IN <br/> SHADOW & SPICE
          </h2>
          <p className="font-body-md text-brand-sandy mb-12 leading-relaxed">
            More than a meal, Indian Kitchen is an immersive voyage through the forgotten lanes of the subcontinent. Our atmosphere is a dialogue between industrial grit and royal legacy, where smoky aromas meet gold-stenciled luxury.
          </p>

          {/* Stats Boxes */}
          <div className="flex gap-6">
            <div className="border border-brand-sandy/30 p-4 w-32 flex flex-col items-center justify-center text-center">
              <span className="font-display-lg text-brand-golden text-3xl">12</span>
              <span className="font-label-sm text-brand-warm-cream/80 uppercase tracking-widest text-[10px]">REGION STAGES</span>
            </div>
            <div className="border border-brand-sandy/30 p-4 w-32 flex flex-col items-center justify-center text-center">
              <span className="font-display-lg text-brand-golden text-3xl">24H</span>
              <span className="font-label-sm text-brand-warm-cream/80 uppercase tracking-widest text-[10px]">MARINATION</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Atmosphere */}
      <div className="w-full lg:w-1/2 bg-brand-warm-cream p-12 md:p-24 relative flex flex-col justify-center">
        
        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4 mb-12 relative h-[300px] md:h-[400px]">
          <div className="relative h-full w-full bg-surface stencil-border">
            <Image 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800" 
              alt="Industrial interior texture" 
              fill 
              className="object-cover grayscale contrast-125 opacity-80 mix-blend-multiply"
            />
          </div>
          <div className="relative h-full w-full bg-brand-deep-forest mt-8 md:mt-12 stencil-border">
            <Image 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800" 
              alt="Roaring oven fire" 
              fill 
              className="object-cover brightness-110 contrast-125"
            />
          </div>
        </div>

        <div className="max-w-lg">
          <h3 className="font-headline-md text-brand-deep-forest text-3xl uppercase tracking-widest mb-4">
            THE ATMOSPHERE
          </h3>
          <p className="font-body-md text-surface-variant leading-relaxed">
            Dine amidst industrial textures, reclaimed wood, and hand-stenciled motifs that tell stories of the Silk Route. Every corner of our space is designed to provoke curiosity and celebrate the raw energy of Indian street culture.
          </p>
        </div>
      </div>
      
    </section>
  );
}
