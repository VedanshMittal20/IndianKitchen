"use client";

import { useEffect } from "react";
import HeroSection from "@/components/home/HeroSection";
import GeometryOfFlavor from "@/components/home/GeometryOfFlavor";
import Sanctuary from "@/components/home/Sanctuary";
import HomeCommitmentStrip from "@/components/home/HomeCommitmentStrip";
import Testimonials from "@/components/home/Testimonials";
import SocialMedia from "@/components/home/SocialMedia";
import FindUs from "@/components/home/FindUs";

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
    <div className="relative z-10 pt-32">
      <HeroSection />
      <GeometryOfFlavor />
      <Sanctuary />
      <HomeCommitmentStrip />
      <Testimonials />
      <SocialMedia />
      <FindUs />
    </div>
  );
}
