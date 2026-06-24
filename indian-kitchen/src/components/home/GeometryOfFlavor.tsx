"use client";

import Image from "next/image";

export default function GeometryOfFlavor() {
  return (
    <section className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop mb-32">
      <div className="max-w-container-max mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
          <div>
            <span className="font-annotation text-annotation text-primary block mb-4 uppercase">Fig. 01 — Technique</span>
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
              Geometry of Flavor
            </h2>
          </div>
          <div className="h-px bg-primary-container/30 w-full md:w-1/3 mt-8 md:mt-0"></div>
        </div>
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* Large Feature Block */}
          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded reveal bg-surface-container">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTp6A_fY0s3555CWhN47A2iHLJwENtIIuywSZmnksqqyI7ywgIlv9Bdz3eQ2jX89-JPp6UVYnpOYtvBCH3d9yG_uLVzO8SOBm9fZ0vycXiEQYsLTGqJcDFfS6Vsk78_9eAG5_JaSFphIUDfQGjHYYue7Iky-b_cULTeHBD__45cXwPQQC46WYMBNpi6_7K_7tjUs5hZZ4gCDGdaaXFVDmM6Q_K2rvx3KcR-qdqBUu7ffdQuqJ0PuertaF700qEyJXoUfq8qTb0zXWG"
              alt="Overhead shot of an organized, geometric arrangement of raw Indian spices."
              fill
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent flex flex-col justify-end p-8">
              <span className="font-annotation text-annotation text-primary-fixed block mb-2">Spice Architecture</span>
              <h3 className="font-headline-md text-headline-md text-surface-bright">The Foundation</h3>
            </div>
          </div>
          {/* Small Stat/Text Block */}
          <div className="md:col-span-4 md:row-span-1 glass-card p-8 flex flex-col justify-center reveal" style={{ transitionDelay: '100ms' }}>
            <span className="font-display-lg text-display-lg text-primary-container mb-2">48h</span>
            <p className="font-body-md text-on-surface-variant">
              Our signature marinades are aged structurally, allowing complex flavor compounds to synthesize over time.
            </p>
          </div>
          {/* Image Block */}
          <div className="md:col-span-4 md:row-span-1 relative overflow-hidden rounded reveal" style={{ transitionDelay: '200ms' }}>
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRDddUyhmB3JIrWXwEImIzpJJ7xj1gsbUM2hxGQRrkmc6xXvACt86n-wRjD3JDJacI9gjL03vWv-s2N7BgfV10I1iXHABtqJHD7E2RCEsDMVccaVDxZ7okp5BBk_I2t71lP-IzGaAiAOujorNMiwHJVtyoB6xGt2SWyZdCwUXZF7_BGITEds9IUfGH5Qarf5_pxvv9VuXEb3-LBcMtkjoE164ScEilWLvwp8UPH4woepBUIN8mkaFaUSfrq081QlpCXKLWG_-nrZ60"
              alt="A macro detail shot of a chef's hands carefully placing a delicate, edible gold leaf garnish onto a deeply colored, rich curry."
              fill
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
