import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("w-px h-8", light ? "bg-gold" : "bg-sage")} />
      <span
        className={cn(
          "font-sans text-[9px] md:text-[10px] tracking-[0.28em] uppercase font-medium",
          light ? "text-gold" : "text-sage"
        )}
      >
        {children}
      </span>
    </div>
  );
}
