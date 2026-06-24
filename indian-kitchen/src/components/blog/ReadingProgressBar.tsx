"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[52px] md:top-[68px] left-0 w-full h-[3px] bg-surface-container-lowest z-[45]">
      <div 
        className="h-full bg-saffron-gold transition-all duration-75" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
