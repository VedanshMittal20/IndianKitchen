"use client";

import Image from "next/image";

export default function TerrestrialSection() {
  return (
    <section aria-labelledby="terrestrial-heading" className="relative">
      {/* Emerald Header Block */}
      <div className="bg-emerald-header text-on-primary p-12 md:w-2/3 mb-12 relative z-10 -ml-margin-mobile md:-ml-margin-desktop pl-margin-mobile md:pl-margin-desktop">
        <span className="font-annotation text-annotation uppercase opacity-70 block mb-4">Fig. 01</span>
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg" id="terrestrial-heading">Terrestrial</h2>
        <p className="font-body-md text-body-md mt-4 max-w-md opacity-90">Rooted in the soil. Heritage techniques applied to earth-bound ingredients, focusing on slow braises and subterranean heat.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
        {/* Signature Plate (Obsidian Highlight) */}
        <article className="md:col-span-7 bg-obsidian-accent text-surface-bright p-8 md:p-12 border-none shadow-2xl relative mt-8 md:mt-0">
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary-container"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary-container"></div>
          <span className="font-annotation text-annotation text-saffron-gold uppercase block mb-6 tracking-widest">— Signature Plate</span>
          <div className="aspect-[4/3] w-full mb-8 relative overflow-hidden group">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDByLjP-JDmIAGzQ_Jy_n1baWvEC57cWPAr4crNbQr9AAINpjaJ9oODV03fDaXXGPPuZI90KrAoJnzGp9jPrNM4KQFmFs0ueZItO-Wp6mMzL_AJS2lBJe087XYRA3TTDMOYu-qepHpSqPMTtHlMwlb3sTN4K5cA7kRKdLIy8gpjssV4YbSmiVk4jms4qRE4n9N4cqHdbB6IXfgE1LWYsN375Mb22b1sbgW9gPRabM7jA7kYpxHYmvQv8LIxlUEUfJ01mNRYPBdLQMgA"
              alt="Braised Lamb"
              fill
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="flex justify-between items-end mb-4">
            <h3 className="font-headline-md text-headline-md">Sikandari Raan</h3>
            <span className="font-annotation text-annotation text-saffron-gold">₹3,400</span>
          </div>
          <p className="font-body-md text-body-md text-surface-variant/80 mb-6 border-l border-saffron-gold/30 pl-4">
            Slow-roasted leg of spring lamb, marinated for 48 hours in dark spices and malt vinegar. Finished with a smoked ghee emulsion.
          </p>
          {/* Technical Analysis */}
          <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
            <div>
              <span className="font-annotation text-annotation text-white/50 block mb-1 uppercase">Provenance</span>
              <span className="font-label-sm text-label-sm text-saffron-gold">Rajasthan</span>
            </div>
            <div>
              <span className="font-annotation text-annotation text-white/50 block mb-1 uppercase">Technique</span>
              <span className="font-label-sm text-label-sm text-white">Dum Pukht (Slow Braise)</span>
            </div>
          </div>
        </article>
        {/* Supporting Items (Minimal List) */}
        <div className="md:col-span-5 flex flex-col gap-12 pt-12 md:pt-32">
          <article className="relative group">
            <div className="absolute -left-6 top-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary-container">
              <span className="material-symbols-outlined text-[16px]">arrow_right</span>
            </div>
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="font-headline-md text-headline-md text-on-surface">Smoked Aubergine Mille-Feuille</h4>
              <span className="font-annotation text-annotation text-on-surface-variant">₹1,200</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-3">Charcoal-roasted baby aubergine layered with hung curd, burnt garlic dust, and a tamarind glaze.</p>
            <span className="inline-block px-3 py-1 bg-surface-container-highest rounded-full font-annotation text-annotation text-on-surface">V / DF</span>
          </article>
          <article className="relative group">
            <div className="absolute -left-6 top-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary-container">
              <span className="material-symbols-outlined text-[16px]">arrow_right</span>
            </div>
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="font-headline-md text-headline-md text-on-surface">Morel Musallam</h4>
              <span className="font-annotation text-annotation text-on-surface-variant">₹2,800</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-3">Himalayan Gucchi mushrooms stuffed with reduced milk and pine nuts, resting on a saffron-infused cashew veil.</p>
            <span className="font-annotation text-annotation text-saffron-gold uppercase block mt-2 tracking-widest text-[10px]">Foraged Weekly</span>
          </article>
        </div>
      </div>
    </section>
  );
}
