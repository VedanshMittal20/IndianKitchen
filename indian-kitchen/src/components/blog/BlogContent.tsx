interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  const blocks = content.split("\n\n").filter(Boolean);

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        const trimmed = block.trim();

        if (trimmed.startsWith("> ")) {
          const quote = trimmed.replace(/^>\s*/, "").replace(/^"|"$/g, "");
          return (
            <blockquote
              key={index}
              className="border-l-2 border-gold bg-void-panel px-6 py-5 font-display text-xl md:text-2xl text-cream font-light leading-relaxed italic rounded-r-sm"
            >
              {quote}
            </blockquote>
          );
        }

        // Apply Drop-Cap to the first paragraph
        if (index === 0 && trimmed.length > 0) {
          const firstChar = trimmed.charAt(0);
          const restText = trimmed.slice(1);
          return (
            <p
              key={index}
              className="text-cream/85 font-light leading-[1.9] text-base md:text-lg"
            >
              <span className="float-left text-5xl md:text-6xl font-display text-gold pr-3 pt-1 font-bold leading-[0.8] select-none">
                {firstChar}
              </span>
              {restText}
            </p>
          );
        }

        return (
          <p
            key={index}
            className="text-cream/80 font-light leading-[1.85] text-base md:text-lg"
          >
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}
