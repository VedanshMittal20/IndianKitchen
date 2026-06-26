"use client";

import { useEffect } from "react";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import CulinaryVault from "@/components/home/CulinaryVault";
import HeritageAtmosphere from "@/components/home/HeritageAtmosphere";
import ReservationSection from "@/components/home/ReservationSection";

export default function Home() {
  // Simple scroll reveal logic
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="relative z-10 w-full bg-surface">
      <HomeHeroSection />
      <CulinaryVault />
      <HeritageAtmosphere />
      <ReservationSection />
    </div>
  );
}
