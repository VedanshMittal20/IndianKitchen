export default function Marquee() {
  const text = "Open till 3 AM · Pondicherry Street · Kerala Houseboat · Sherlock Mystery Dining · No Artificial Colours · Village-Trained Chefs · Live Kitchen Stations · Tamil Nadu · Kerala · North Indian Cuisine · ";
  
  return (
    <div className="w-full bg-gold py-3 overflow-hidden border-y border-void/20">
      <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite]">
        {/* We repeat the text multiple times to ensure seamless infinite scrolling */}
        <span className="text-void font-sans font-medium uppercase text-sm tracking-widest px-4">
          {text}
        </span>
        <span className="text-void font-sans font-medium uppercase text-sm tracking-widest px-4">
          {text}
        </span>
        <span className="text-void font-sans font-medium uppercase text-sm tracking-widest px-4">
          {text}
        </span>
        <span className="text-void font-sans font-medium uppercase text-sm tracking-widest px-4">
          {text}
        </span>
      </div>
    </div>
  );
}
