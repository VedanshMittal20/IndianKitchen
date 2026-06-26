"use client";

import Image from "next/image";

export default function ArchitectureOfShadows() {
  return (
    <section className="bg-brand-deep-forest w-full py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="font-headline-md text-5xl md:text-6xl lg:text-7xl text-brand-warm-cream mb-8 leading-tight">
              The Atmosphere<br />of The Sanctuary
            </h2>
            <p className="font-light text-lg text-white/80 mb-12 max-w-lg leading-relaxed">
              By stepping away from the bustling streets, our space cultivates a deep, intentional calm. This shadowed approach frames the dining experience, drawing focus entirely to the vibrant colors and complex aromas of our regional Indian dishes, while leaving the periphery in quiet obscurity.
            </p>
            <ul className="space-y-6 text-sm tracking-widest uppercase font-bold text-white/70">
              <li className="flex items-center gap-6 border-b border-white/10 pb-4">
                <span className="text-brand-accent-green">01.</span> Intimate Dining Sanctuaries
              </li>
              <li className="flex items-center gap-6 border-b border-white/10 pb-4">
                <span className="text-brand-accent-green">02.</span> Focus Directed Entirely to the Tablescape
              </li>
              <li className="flex items-center gap-6 border-b border-white/10 pb-4">
                <span className="text-brand-accent-green">03.</span> Noise Dampening for Uninterrupted Conversation
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 relative h-[500px]">
            <div className="w-full h-full relative rounded overflow-hidden">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuBfhG1XB7mw2bk5SuBWL_kQDcIZwFbVB0qMjhxuQKOlCucqJqsQgnq4OH83vMqtEtyIqrZwZCmg7Vh0O0dT28LOCiAhyK2Ulyun-3tcTShalRf6V32YD7zqn3ydu8sYJANMeh-ni14v05WHhbQNM5RFP41PvYZaL_oPZoiMtgdCzIDXT8-5XhhWCv4Rmv5vIFIleohbOCC0nhK8dGdy_jYWDh1JRqeRgv7O_GHEpjeQb7kkt5RT3SJ2ARTbND1noy_hfWsAS4D6JE"
                alt="A highly atmospheric, chiaroscuro architectural rendering of a dark, minimalist restaurant corner."
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-golden text-brand-deep-forest text-[10px] tracking-[0.2em] uppercase p-6 rounded-sm z-10 font-bold shadow-xl border-2 border-brand-deep-forest">
              Fig. 02 <br /> The Sanctuary Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
