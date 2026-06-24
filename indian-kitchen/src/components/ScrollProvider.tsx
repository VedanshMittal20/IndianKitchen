"use client";

import React, { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Sync GSAP ScrollTrigger with window scrolling
    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.refresh();

    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lenis = lenisRef.current?.lenis;
    
    if (mediaQuery.matches && lenis) {
      lenis.destroy(); // Disable smooth scroll if reduced-motion is preferred
    }

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches && lenis) {
        lenis.destroy();
      }
    };

    mediaQuery.addEventListener("change", handleReducedMotionChange);

    return () => {
      mediaQuery.removeEventListener("change", handleReducedMotionChange);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ lerp: 0.1, duration: 1.2 }}>
      {children}
    </ReactLenis>
  );
}
