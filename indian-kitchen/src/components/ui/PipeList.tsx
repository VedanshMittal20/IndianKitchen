import { cn } from "@/lib/utils";

interface PipeListProps {
  items: string[];
  className?: string;
  light?: boolean;
}

export default function PipeList({ items, className, light = false }: PipeListProps) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "font-body-md text-[10px] md:text-[11px] tracking-[0.18em] font-medium pipe-item",
            light ? "text-on-surface/90" : "text-text-dark"
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
