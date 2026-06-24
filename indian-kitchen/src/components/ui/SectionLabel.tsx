import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ children, className, light = false }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="w-px h-8 bg-saffron-gold" />
      <span className="font-body-md text-[9px] md:text-[10px] tracking-[0.28em] uppercase font-medium text-saffron-gold">
        {children}
      </span>
    </div>
  );
}
