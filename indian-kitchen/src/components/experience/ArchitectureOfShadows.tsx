"use client";

import Image from "next/image";

export default function ArchitectureOfShadows() {
  return (
    <section className="bg-obsidian-accent w-full py-32 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-8">
              The Atmosphere<br />of The Vault
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/80 mb-8 max-w-lg">
              By stepping away from the bright external world, the space cultivates a deep, intentional calm. This shadowed approach frames the dining experience, drawing focus entirely to the illuminated flavors and textures on the plate while leaving the periphery in quiet obscurity.
            </p>
            <ul className="space-y-4 font-annotation text-annotation text-on-primary/70">
              <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                <span className="text-saffron-gold">01.</span> Intimate Dining Sanctuaries
              </li>
              <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                <span className="text-saffron-gold">02.</span> Focus Directed Entirely to the Tablescape
              </li>
              <li className="flex items-center gap-4 border-b border-white/10 pb-4">
                <span className="text-saffron-gold">03.</span> Noise Dampening for Uninterrupted Conversation
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
            <div className="absolute -bottom-6 -left-6 bg-saffron-gold text-obsidian-accent font-annotation text-annotation p-4 rounded-sm z-10 font-bold">
              Fig. 02 <br /> The Vault Experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
