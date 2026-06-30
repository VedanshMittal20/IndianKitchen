import React from "react";

type Variant = "void" | "sage" | "parchment" | "cream" | "cream-dark" | "gold" | "crimson" | "light" | "dark";

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
    void: "bg-brand-warm-cream text-brand-charcoal",
    sage: "bg-brand-warm-cream text-brand-charcoal",
    parchment: "bg-brand-sandy text-brand-charcoal",
    cream: "bg-brand-warm-cream text-brand-charcoal",
    "cream-dark": "bg-brand-sandy text-brand-charcoal",
    gold: "bg-brand-golden text-brand-warm-cream",
    crimson: "bg-brand-deep-forest text-brand-warm-cream",
    light: "bg-brand-warm-cream text-brand-charcoal",
    dark: "bg-brand-deep-forest text-brand-warm-cream",
  };

  return (
    <section id={id} className={`section-padding ${bgClasses[variant]} ${className}`}>
      <div className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-16 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
}
