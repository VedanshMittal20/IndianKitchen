import { cn } from "@/lib/utils";

interface BrandMarkProps {
  variant?: "light" | "dark" | "green";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BrandMark({ variant = "green", size = "md", className }: BrandMarkProps) {
  const colors = {
    light: { bar: "bg-gold", title: "text-cream", sub: "text-gold-light" },
    dark: { bar: "bg-void", title: "text-void", sub: "text-void/70" },
    green: { bar: "bg-sage", title: "text-sage", sub: "text-sage/80" },
  };

  const sizes = {
    sm: { title: "text-[8px] tracking-[0.25em]", sub: "text-[6px] tracking-[0.3em]", bar: "h-8 w-px" },
    md: { title: "text-[9px] tracking-[0.28em]", sub: "text-[7px] tracking-[0.32em]", bar: "h-10 w-px" },
    lg: { title: "text-[10px] tracking-[0.3em]", sub: "text-[8px] tracking-[0.35em]", bar: "h-12 w-px" },
  };

  const c = colors[variant];
  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn(s.bar, c.bar)} />
      <div className="flex flex-col leading-tight">
        <span className={cn("font-sans font-semibold uppercase", s.title, c.title)}>
          Indian Kitchen
        </span>
        <span className={cn("font-sans font-medium uppercase", s.sub, c.sub)}>
          Theme Dining
        </span>
      </div>
    </div>
  );
}
