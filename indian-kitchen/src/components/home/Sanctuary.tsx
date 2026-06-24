"use client";

import Image from "next/image";

export default function Sanctuary() {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative reveal">
            <div className="aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvVHeS7LAWHuydRBIfb0inQ8jZBPf4Ag-h12yql9GkQLA1Di_TO2CsXM7dr3Fb9z40y_qVnbZ3UKbmiKnVXOHTuqQbze11cp-dBZ_BtB7hbgpxhEIGeM54yc7Qia57c6alSIIlMss4u9gddv4rqYq0LvLG3BWHmE1KhvxF-2EQNjZiUJvXphbltGaxv-zQRjHeXpLIPEnBQ5H02Ge3Ayk9sTkJCIAuw9UygkPCWujBUIW8sqVgfaII_8e0vSqOdrhjec2GbEpeplbl"
                alt="A serene, private dining room designed with light luxury and soft minimalism."
                fill
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
            <div className="absolute top-10 -right-4 md:-right-12 glass-card p-4 rounded w-48 shadow-sm">
              <span className="font-annotation text-annotation text-primary block mb-1">Capacity</span>
              <p className="font-body-md text-on-surface font-semibold">Max. 8 Guests</p>
            </div>
          </div>
          <div className="order-1 md:order-2 reveal" style={{ transitionDelay: '200ms' }}>
            <span className="font-annotation text-annotation text-primary block mb-6 uppercase">Fig. 02 — The Space</span>
            <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-8">
              A Sanctuary<br/>of Quietude.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Away from the kinetic energy of the main dining room lies our private enclave. Designed to strip away sensory noise, it allows the food to command complete attention.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-4">
                <span className="font-annotation text-annotation text-primary-container">01</span>
                <span className="font-body-md text-on-surface">Curated Tasting Menu</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="font-annotation text-annotation text-primary-container">02</span>
                <span className="font-body-md text-on-surface">Dedicated Sommelier</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="font-annotation text-annotation text-primary-container">03</span>
                <span className="font-body-md text-on-surface">Acoustically Isolated</span>
              </li>
            </ul>
            <button className="border border-primary-container text-on-surface font-label-sm px-8 py-4 rounded hover:bg-primary-container hover:text-on-primary-container transition-colors uppercase tracking-wider">
              Request Availability
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
