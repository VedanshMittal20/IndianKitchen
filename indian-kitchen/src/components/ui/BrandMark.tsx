import { cn } from "@/lib/utils";

interface BrandMarkProps {
  variant?: "light" | "dark" | "green";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BrandMark({ variant = "green", size = "md", className }: BrandMarkProps) {
  const colors = {
    light: { bar: "bg-saffron-gold", title: "text-on-surface", sub: "text-saffron-gold" },
    dark: { bar: "bg-surface-container-lowest", title: "text-on-surface", sub: "text-on-surface/70" },
    green: { bar: "bg-sage", title: "text-sage", sub: "text-sage/80" },
  };

  const sizes = {
    sm: { title: "text-[8px] tracking-[0.25em]", sub: "text-[6px] tracking-[0.3em]", bar: "h-8 w-[1.5px]" },
    md: { title: "text-[9px] tracking-[0.28em]", sub: "text-[7px] tracking-[0.32em]", bar: "h-10 w-[1.5px]" },
    lg: { title: "text-[10px] tracking-[0.3em]", sub: "text-[8px] tracking-[0.35em]", bar: "h-12 w-[2px]" },
  };

  const c = colors[variant];
  const s = sizes[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("rounded-full", s.bar, c.bar)} />
      <div className="flex flex-col leading-tight">
        <span className={cn("font-body-md font-bold uppercase", s.title, c.title)}>
          Indian Kitchen
        </span>
        <span className={cn("font-body-md font-medium uppercase mt-0.5", s.sub, c.sub)}>
          Theme Dining
        </span>
      </div>
    </div>
  );
}
