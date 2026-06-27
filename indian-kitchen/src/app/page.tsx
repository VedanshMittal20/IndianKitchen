"use client";

import { useEffect } from "react";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import AboutSection from "@/components/home/AboutSection";
import OriginStorySection from "@/components/home/OriginStorySection";
import ExperienceSection from "@/components/home/ExperienceSection";
import AuthenticitySection from "@/components/home/AuthenticitySection";
import ServicesSection from "@/components/home/ServicesSection";
import SignatureDishesSection from "@/components/home/SignatureDishesSection";
import MenuQRSection from "@/components/home/MenuQRSection";
import SocialMediaSection from "@/components/home/SocialMediaSection";
import ScaleSection from "@/components/home/ScaleSection";
import USPSection from "@/components/home/USPSection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import LocationsSection from "@/components/home/LocationsSection";
import FounderNoteSection from "@/components/home/FounderNoteSection";

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
      <AboutSection />
      <OriginStorySection />
      <ExperienceSection />
      <AuthenticitySection />
      <ServicesSection />
      <SignatureDishesSection />
      <MenuQRSection />
      <SocialMediaSection />
      <ScaleSection />
      <USPSection />
      <VisionMissionSection />
      <LocationsSection />
      <FounderNoteSection />
    </div>
  );
}
