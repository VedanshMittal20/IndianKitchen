"use client";

import React, { useState } from "react";
import Image from "next/image";
import PrivateDining from "@/components/home/PrivateDining";
import ReservationsFAQ from "@/components/home/ReservationsFAQ";

export default function ReservationsPage() {
  const [selectedEnvironment, setSelectedEnvironment] = useState("pondicherry");

  return (
    <>
      <main className="flex-grow pt-[120px] pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Heritage Header */}
      <header className="w-full max-w-4xl mb-16 text-center md:text-left relative">
        <div className="flex items-end justify-between border-b border-primary-container/30 pb-4 mb-8">
          <h1 className="font-display-lg text-display-lg-lg-mobile md:text-display-lg text-on-surface relative">
            <span className="absolute -top-6 -left-4 font-label-sm text-label-sm-sm text-primary-container/60">
              Fig. 01
            </span>
            Sanctuary Portal
          </h1>
          <span className="font-label-sm text-label-sm-sm text-tertiary hidden md:block">
            Est. 2024
          </span>
        </div>
        <p className="font-body-lg text-body-lg-lg text-on-surface-variant max-w-2xl">
          Secure your passage into our culinary sanctuary. Choose your environment—whether seeking the warm embrace of the Hearth or the secluded depths of the Vault.
        </p>
      </header>
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Environment Selection (Left Column) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <h2 className="font-headline-md text-headline-md-md text-on-surface mb-2">
            The Environments
          </h2>
          {/* Pondicherry Street Card */}
          <label className="cursor-pointer group relative">
            <input
              className="peer sr-only"
              name="environment"
              type="radio"
              value="pondicherry"
              checked={selectedEnvironment === "pondicherry"}
              onChange={() => setSelectedEnvironment("pondicherry")}
            />
            <div className="glass-panel p-8 rounded-lg relative overflow-hidden transition-all duration-500 peer-checked:border-primary-container peer-checked:shadow-[0_0_30px_rgba(176,141,87,0.15)] h-64 flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcpHewwFrDPMFjnMH138z-8XVzj167uWnfHfr0mCts96n802rBGxgsCcIUkInRe9tuCPezUZMHVzkAjDMP1umAcC_tTW_mFc_jIarHwk1EIuS5CGzezl6-e8IkR8OTyqlDxRT7r8k5gRWuXy7BvnwZ3tUqS4UCUCkgARf81Lls6iQmKRtPvD8f1tXD8y_A5debJ8O7iLiaI_xIFxQJlCwndMTlJoXSXvojy9sOu_nYmqOkcCRlPnLKDxpW2IBplsx3KgiwECzZckqJ"
                  alt="A bright, vibrant dining space reflecting Pondicherry."
                  fill
                  className="object-cover opacity-40 mix-blend-multiply transition-opacity group-hover:opacity-60 duration-500"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent z-10"></div>
              <div className="relative z-20 flex justify-between items-end w-full">
                <div>
                  <h3 className="font-headline-md text-headline-md-md text-on-surface leading-none mb-2">
                    Pondicherry Street
                  </h3>
                  <p className="font-body-md text-body-md-md text-on-surface-variant">
                    Vibrant, colonial-era courtyards.
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full border border-primary-container flex items-center justify-center peer-checked:bg-primary-container transition-colors">
                  <div className="w-3 h-3 rounded-full bg-surface scale-0 peer-checked:scale-100 transition-transform duration-300"></div>
                </div>
              </div>
            </div>
            <div className="absolute top-6 right-6 z-20 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>
          </label>
          {/* Kerala Houseboat Card */}
          <label className="cursor-pointer group relative">
            <input
              className="peer sr-only"
              name="environment"
              type="radio"
              value="kerala"
              checked={selectedEnvironment === "kerala"}
              onChange={() => setSelectedEnvironment("kerala")}
            />
            <div className="bg-brand-deep-forest border border-white/10 p-8 rounded-lg relative overflow-hidden transition-all duration-500 peer-checked:border-saffron-gold peer-checked:shadow-[0_0_30px_rgba(244,196,48,0.2)] h-64 flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/real/kandy_hero_night.jpg"
                  alt="Tranquil backwaters dining."
                  fill
                  className="object-cover opacity-40 mix-blend-luminosity transition-opacity group-hover:opacity-60 duration-500"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-header via-emerald-header/70 to-transparent z-10"></div>
              <div className="relative z-20 flex justify-between items-end w-full text-white">
                <div>
                  <h3 className="font-headline-md text-headline-md-md leading-none mb-2">
                    Kerala Houseboat
                  </h3>
                  <p className="font-body-md text-body-md-md text-gray-300">
                    Tranquil, backwater serenity.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-6 right-6 z-20 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-brand-golden" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>
          </label>
          {/* Sherlock Mystery Dining Card */}
          <label className="cursor-pointer group relative">
            <input
              className="peer sr-only"
              name="environment"
              type="radio"
              value="sherlock"
              checked={selectedEnvironment === "sherlock"}
              onChange={() => setSelectedEnvironment("sherlock")}
            />
            <div className="glass-panel-dark p-8 rounded-lg relative overflow-hidden transition-all duration-500 peer-checked:border-emerald-header peer-checked:shadow-[0_0_30px_rgba(4,120,87,0.2)] h-64 flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSGfALbOCvsT7HOyfaJ0VzSYye1DkIiu65_KJk6Z-0mfxc5c3claXbrjJX3fUrCzxcXNw8YnawayhHkc-7tBq8NxYZrcGsPKvT4obQ0_aVUHzrjfrrG0mteOoycknqPFs--QYxSX9kacgIeIMRy7kYGC1-A8XPCd9Nc77S7inOJAykkpGQxR7LDAheThT3cDedroQ3lyVKh2vwfIg3wJ5mOjmovn8HFe7DUsqeN-mngzs3RumV1BbxflG3AJ26jkhjBG5o0Wx6COuZ"
                  alt="A dark, intimate dining vault."
                  fill
                  className="object-cover opacity-50 mix-blend-luminosity transition-opacity group-hover:opacity-70 duration-500"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-accent via-obsidian-accent/70 to-transparent z-10"></div>
              <div className="relative z-20 flex justify-between items-end w-full text-white">
                <div>
                  <h3 className="font-headline-md text-headline-md-md leading-none mb-2">
                    Sherlock Mystery
                  </h3>
                  <p className="font-body-md text-body-md-md text-gray-400">
                    Interactive, shadowed, exclusive.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-6 right-6 z-20 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
              <span className="material-symbols-outlined text-emerald-header" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
            </div>
          </label>
        </div>
        {/* Booking Form (Right Column) */}
        <div className="lg:col-span-7 w-full mt-8 lg:mt-0">
          <div className="glass-panel p-8 md:p-12 rounded-xl relative">
            <div className="absolute top-0 right-0 p-6">
              <span className="font-label-sm text-label-sm-sm text-outline">
                Form .01
              </span>
            </div>
            <form className="space-y-10">
              {/* Date & Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2 gold-glow border-b border-outline-variant pb-2 relative group">
                  <label className="font-label-sm text-label-sm-sm text-tertiary">
                    Date of Arrival
                  </label>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-outline mr-3" style={{ fontVariationSettings: "'FILL' 0" }}>
                      calendar_today
                    </span>
                    <input
                      className="w-full bg-transparent border-none text-on-surface font-body-lg text-body-lg-lg focus:ring-0 p-0 cursor-pointer"
                      type="date"
                      defaultValue="2024-11-15"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 gold-glow border-b border-outline-variant pb-2 relative group">
                  <label className="font-label-sm text-label-sm-sm text-tertiary">
                    Time
                  </label>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-outline mr-3" style={{ fontVariationSettings: "'FILL' 0" }}>
                      schedule
                    </span>
                    <select className="w-full bg-transparent border-none text-on-surface font-body-lg text-body-lg-lg focus:ring-0 p-0 cursor-pointer appearance-none">
                      <option>19:00</option>
                      <option>19:30</option>
                      <option>20:00</option>
                      <option>20:30</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Party Size & Occasion */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2 gold-glow border-b border-outline-variant pb-2">
                  <label className="font-label-sm text-label-sm-sm text-tertiary">
                    Party Size
                  </label>
                  <div className="flex items-center">
                    <span className="material-symbols-outlined text-outline mr-3" style={{ fontVariationSettings: "'FILL' 0" }}>
                      group
                    </span>
                    <select className="w-full bg-transparent border-none text-on-surface font-body-lg text-body-lg-lg focus:ring-0 p-0 cursor-pointer appearance-none">
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests (Inquire)</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-2 gold-glow border-b border-outline-variant pb-2">
                  <label className="font-label-sm text-label-sm-sm text-tertiary">
                    Occasion (Optional)
                  </label>
                  <input
                    className="w-full bg-transparent border-none text-on-surface font-body-lg text-body-lg-lg focus:ring-0 p-0 placeholder:text-outline-variant"
                    placeholder="Anniversary, Business..."
                    type="text"
                  />
                </div>
              </div>
              {/* Guest Details */}
              <div className="space-y-8 pt-4">
                <h3 className="font-headline-md text-headline-md-md text-on-surface/80 border-b border-outline-variant/30 pb-2">
                  Guest Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2 gold-glow border-b border-outline-variant pb-2">
                    <label className="font-label-sm text-label-sm-sm text-tertiary">
                      First Name
                    </label>
                    <input
                      className="w-full bg-transparent border-none text-on-surface font-body-lg text-body-lg-lg focus:ring-0 p-0"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-2 gold-glow border-b border-outline-variant pb-2">
                    <label className="font-label-sm text-label-sm-sm text-tertiary">
                      Last Name
                    </label>
                    <input
                      className="w-full bg-transparent border-none text-on-surface font-body-lg text-body-lg-lg focus:ring-0 p-0"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 gold-glow border-b border-outline-variant pb-2">
                  <label className="font-label-sm text-label-sm-sm text-tertiary">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-transparent border-none text-on-surface font-body-lg text-body-lg-lg focus:ring-0 p-0"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2 gold-glow border-b border-outline-variant pb-2">
                  <label className="font-label-sm text-label-sm-sm text-tertiary">
                    Special Requests
                  </label>
                  <textarea
                    className="w-full bg-transparent border-none text-on-surface font-body-lg text-body-lg-lg focus:ring-0 p-0 resize-none placeholder:text-outline-variant"
                    placeholder="Dietary restrictions, seating preferences..."
                    rows={2}
                  ></textarea>
                </div>
              </div>
              {/* Submit Area */}
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-outline-variant/50">
                <p className="font-label-sm text-label-sm-sm text-tertiary max-w-xs text-center sm:text-left">
                  By proceeding, you agree to our{" "}
                  <a className="underline hover:text-primary-container transition-colors" href="#">
                    cancellation policy
                  </a>
                  .
                </p>
                <button
                  className="w-full sm:w-auto px-10 py-4 bg-primary-container text-on-primary font-label-sm text-label-sm-sm hover:bg-primary transition-all duration-300 relative overflow-hidden group"
                  id="submit-btn"
                  type="button"
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    const originalContent = btn.innerHTML;
                    btn.innerHTML = `<span class="relative z-10 flex items-center justify-center gap-2 text-[#047857]">Confirmed <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check</span></span>`;
                    btn.classList.remove("bg-primary-container", "text-on-primary", "hover:bg-primary");
                    btn.classList.add("bg-brand-deep-forest/10", "border", "border-emerald-header");
                    setTimeout(() => {
                      btn.innerHTML = originalContent;
                      btn.classList.add("bg-primary-container", "text-on-primary", "hover:bg-primary");
                      btn.classList.remove("bg-brand-deep-forest/10", "border", "border-emerald-header");
                    }, 3000);
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Confirm Passage
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 0" }}>
                      arrow_forward
                    </span>
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
      <div className="w-full bg-surface-container-low pt-16">
        <PrivateDining />
        <ReservationsFAQ />
      </div>
    </>
  );
}
