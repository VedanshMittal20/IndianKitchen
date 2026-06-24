"use client";

export default function MenuHero() {
  return (
    <header className="pt-[160px] pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
      <div className="flex flex-col md:flex-row gap-8 items-end justify-between border-b border-primary-container/30 pb-8">
        <div className="max-w-2xl">
          <span className="font-annotation text-annotation text-primary-container uppercase block mb-4">Fig. 00 — The Monograph</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6">Culinary Architecture</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">A curated progression of elemental Indian gastronomy, deconstructed and refined. Each plate is a study in precise flavor layering and textural contrast.</p>
        </div>
        <div className="text-right">
          <span className="font-annotation text-annotation text-on-surface-variant uppercase block">Current Season</span>
          <span className="font-headline-md text-headline-md text-on-surface block mt-2">Monsoon Edition</span>
        </div>
      </div>
    </header>
  );
}
