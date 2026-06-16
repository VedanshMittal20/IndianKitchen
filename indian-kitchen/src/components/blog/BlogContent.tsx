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
              className="border-l-4 border-saffron bg-cream/60 px-6 py-5 font-display text-xl md:text-2xl text-espresso font-light leading-relaxed not-italic"
            >
              {quote}
            </blockquote>
          );
        }

        return (
          <p
            key={index}
            className="text-text-muted font-light leading-[1.85] text-base md:text-lg"
          >
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}
