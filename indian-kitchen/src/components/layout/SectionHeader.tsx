import React from "react";

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  lightMode?: boolean; // If true, forces light text. If false, forces dark text.
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  lightMode = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  
  return (
    <div className={`mb-10 md:mb-14 ${alignClass} ${className}`}>
      {label && (
        <p className={`text-[10px] tracking-[0.2em] uppercase font-semibold mb-3 ${lightMode ? 'text-gold-light' : 'text-sage'}`}>
          {label}
        </p>
      )}
      <h2 className={`heading-presentation mb-4 ${lightMode ? 'heading-presentation-light' : 'text-void'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm md:text-base font-light max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${lightMode ? 'text-cream/70' : 'text-text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
