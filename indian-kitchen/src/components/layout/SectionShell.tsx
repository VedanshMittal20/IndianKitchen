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
    void: "bg-surface-container-lowest text-on-surface",
    sage: "bg-sage text-on-surface",
    parchment: "bg-parchment text-text-dark",
    cream: "bg-cream text-text-dark",
    "cream-dark": "bg-cream-dark text-text-dark",
    gold: "bg-saffron-gold text-on-surface",
    crimson: "bg-gradient-to-r from-crimson to-terracotta text-on-surface",
  };

  return (
    <section id={id} className={`section-padding ${bgClasses[variant]} ${className}`}>
      <div className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-16 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
}
