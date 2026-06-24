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
        <p className={`text-[10px] tracking-[0.2em] uppercase font-semibold mb-3 text-saffron-gold`}>
          {label}
        </p>
      )}
      <h2 className={`heading-presentation mb-4 text-on-surface`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm md:text-base font-light max-w-2xl ${align === 'center' ? 'mx-auto' : ''} text-on-surface/70`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
