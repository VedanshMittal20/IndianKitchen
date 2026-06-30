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
import BrandStorySection from "@/components/home/BrandStorySection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import TimelineSection from "@/components/home/TimelineSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LocationsSection from "@/components/home/LocationsSection";
import FounderNoteSection from "@/components/home/FounderNoteSection";
import HomeJoinUsSection from "@/components/home/HomeJoinUsSection";
import HomeFranchiseSection from "@/components/home/HomeFranchiseSection";

export default function Home() {
  // Optimized scroll reveal logic using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: stop observing once revealed for better performance
          // observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
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
      <BrandStorySection />
      <VisionMissionSection />
      <TimelineSection />
      <TestimonialsSection />
      <LocationsSection />
      <HomeFranchiseSection />
      <HomeJoinUsSection />
      <FounderNoteSection />
    </div>
  );
}
