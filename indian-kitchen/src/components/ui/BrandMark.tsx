import { cn } from "@/lib/utils";
import Image from "next/image";

interface BrandMarkProps {
  variant?: "light" | "dark" | "green";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BrandMark({ variant = "green", size = "md", className }: BrandMarkProps) {
  const sizes = {
    sm: "w-32 md:w-40",
    md: "w-40 md:w-48",
    lg: "w-48 md:w-56",
  };

  const s = sizes[size];

  return (
    <div className={cn("relative flex items-center justify-start", s, className)}>
      <Image
        src="/images/logo.png"
        alt="Indian Kitchen Logo"
        width={300}
        height={100}
        className={cn(
          "object-contain w-full h-auto",
          variant === "light" && "brightness-0 invert opacity-90",
          variant === "green" && "brightness-0 sepia hue-rotate-[110deg] saturate-200 opacity-90" // Just a fallback if needed
        )}
        priority
      />
    </div>
  );
}
