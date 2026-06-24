"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[921px] flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative mb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-5 z-10 reveal">
          <span className="font-annotation text-annotation text-primary block mb-6 uppercase tracking-widest">Est. 2024 / New Delhi</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface leading-tight mb-8">
            The Architecture<br/>of Flavor.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md">
            A curation of regional Indian heritage, distilled through a lens of modern minimalism. Every dish a study in intention.
          </p>
          <button className="bg-primary-container text-on-primary-container font-label-sm px-8 py-4 rounded hover:opacity-90 transition-opacity uppercase tracking-wider">
            Explore the Menu
          </button>
        </div>
        <div className="md:col-span-7 relative reveal" style={{ transitionDelay: '200ms' }}>
          {/* Video/Image Placeholder */}
          <div className="aspect-[4/5] md:aspect-square relative w-full overflow-hidden">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7NcUGczjQWyfKZ-Rwz_HCtXjjI_MCYPUYLUCuDHFvIKBDVlUUJTA4R970uwvT5xK7iQXAeulS4vudpYe-eXzGXoFpJAVxEMUTbYb99wskihgLy4oyWJqlEGgaxCTbCHFKf53zzloC_S5R3q2-K6DaK8l7rAL-rV1-amdu1oZhVpQdPVxUcoejCsbLLlOeg2AqPNCGpkekAbXI2vxSPnUB5NuR3Y6GNKke4-a9cx8caDjJ-DdR9VmBDyvgC46BGqKq8EBKQcama7vB"
              alt="A cinematic, high-fashion style close up of a meticulously plated modern Indian dish."
              fill
              className="object-cover w-full h-full filter brightness-95 rounded-sm"
              unoptimized
            />
            {/* Decorative geometric frame */}
            <div className="absolute inset-0 border border-outline-variant m-4 pointer-events-none rounded-sm"></div>
          </div>
          {/* Annotation Floating Element */}
          <div className="absolute -bottom-10 -left-10 md:bottom-20 md:-left-20 glass-card p-6 shadow-sm z-20 w-64">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary-container"></span>
              <span className="font-annotation text-annotation text-primary uppercase">Coordinates</span>
            </div>
            <p className="font-body-md text-on-surface">28.6139° N, 77.2090° E</p>
          </div>
        </div>
      </div>
    </section>
  );
}
