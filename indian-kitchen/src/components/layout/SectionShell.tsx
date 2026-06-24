import React from "react";

type Variant = "void" | "sage" | "parchment" | "cream" | "cream-dark" | "gold" | "crimson";

interface SectionShellProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  containerClass?: string;
  id?: string;
}

export default function SectionShell({
  children,
  variant = "parchment",
  className = "",
  containerClass = "",
  id,
}: SectionShellProps) {
  const bgClasses = {
    void: "bg-void text-text-light",
    sage: "bg-sage text-cream",
    parchment: "bg-parchment text-text-dark",
    cream: "bg-cream text-text-dark",
    "cream-dark": "bg-cream-dark text-text-dark",
    gold: "bg-gold text-void",
    crimson: "bg-gradient-to-r from-crimson to-terracotta text-cream",
  };

  return (
    <section id={id} className={`section-padding ${bgClasses[variant]} ${className}`}>
      <div className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-16 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
}
