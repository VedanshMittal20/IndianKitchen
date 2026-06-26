"use client";

import Image from "next/image";

export default function AquaticSection() {
  return (
    <section aria-labelledby="aquatic-heading" className="relative mt-16 md:mt-32">
      <div className="text-right md:w-1/2 ml-auto mb-16 relative">
        <span className="font-label-sm text-label-sm uppercase text-primary-container block mb-4">Fig. 02</span>
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-emerald-header" id="aquatic-heading">Aquatic</h2>
        <p className="font-body-md text-body-md mt-4 text-on-surface-variant ml-auto max-w-sm">Coastal narratives. Utilizing pristine catches and interpreting regional seaside traditions through a modern lens.</p>
      </div>
      <div className="relative w-full h-[600px] md:h-[800px]">
        {/* Large Background Image */}
        <div className="absolute inset-0 w-full h-full md:w-3/4 left-0">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtC-sVwZmheWH6jrZupfkAAhLsyxztDXJERiPQmQMqBQa1wkv8J1Ef4SXjeT2a7krvoEpDPmxI4CMiSusLMBanYmAQUpULJj4emOUGEBK_7uZjWXiNAwQuuPgkfTVqwIKodjQDNZw2V712myO3B-vZEcYHyNCIrzmiB1FZxndtWejts94JXVgHj5wQuD4Nb6bWO8O2K8VZPzAvfWLTEE2PBQqIiQKcr0lv6npvqZuZNRCHXKCziOg1XZp8CA03axhfpn8q1QxE2LpV"
            alt="Aquatic Ingredients"
            fill
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
        {/* Overlapping Glass Cards */}
        <div className="absolute inset-0 flex flex-col md:flex-row items-end md:items-center justify-end p-margin-mobile md:p-margin-desktop gap-8 z-20">
          <article className="glass-panel p-8 md:p-10 w-full md:w-[400px] hover:bg-white/60 transition-colors duration-500">
            <div className="flex justify-between items-baseline mb-4 border-b border-outline-variant pb-4">
              <h4 className="font-headline-md text-headline-md text-on-surface">Kokum Cured Scallops</h4>
              <span className="font-label-sm text-label-sm text-on-surface-variant">₹2,200</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Hokkaido scallops lightly cured in a sun-dried kokum broth, garnished with puffed amaranth and sea purslane.</p>
            <span className="font-label-sm text-label-sm text-primary uppercase block tracking-widest text-[10px]">Technique: Cold Cure</span>
          </article>
          <article className="glass-panel p-8 md:p-10 w-full md:w-[400px] md:mb-32 hover:bg-white/60 transition-colors duration-500">
            <div className="flex justify-between items-baseline mb-4 border-b border-outline-variant pb-4">
              <h4 className="font-headline-md text-headline-md text-on-surface">Malabar Crab Curry</h4>
              <span className="font-label-sm text-label-sm text-on-surface-variant">₹3,800</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Mud crab slowly simmered in a rich coconut, black pepper, and kokum gravy. A coastal classic elevated.</p>
            <span className="font-label-sm text-label-sm text-primary uppercase block tracking-widest text-[10px]">Technique: Slow Simmer</span>
          </article>
          <article className="glass-panel p-8 md:p-10 w-full md:w-[400px] hover:bg-white/60 transition-colors duration-500">
            <div className="flex justify-between items-baseline mb-4 border-b border-outline-variant pb-4">
              <h4 className="font-headline-md text-headline-md text-on-surface">Malabar Lobster</h4>
              <span className="font-label-sm text-label-sm text-on-surface-variant">₹4,500</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">Butter-poached rock lobster tail, coconut-tamarind reduction, served atop black rice idiyappam.</p>
            <span className="font-label-sm text-label-sm text-primary uppercase block tracking-widest text-[10px]">Technique: Butter Poach</span>
          </article>
        </div>
      </div>
    </section>
  );
}
