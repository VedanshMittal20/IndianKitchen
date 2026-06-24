import React from "react";
import SectionShell from "./SectionShell";

interface SplitSectionProps {
  variant?: "void" | "sage" | "parchment" | "cream" | "cream-dark" | "gold" | "crimson";
  reverse?: boolean;
  content: React.ReactNode;
  media: React.ReactNode;
}

export default function SplitSection({
  variant = "parchment",
  reverse = false,
  content,
  media,
}: SplitSectionProps) {
  return (
    <SectionShell variant={variant}>
      <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`}>
        <div className={`order-2 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
          {content}
        </div>
        <div className={`order-1 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
          {media}
        </div>
      </div>
    </SectionShell>
  );
}
