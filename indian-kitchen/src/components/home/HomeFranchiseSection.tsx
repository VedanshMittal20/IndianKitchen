import FranchiseForm from "@/components/forms/FranchiseForm";
import SectionShell from "@/components/layout/SectionShell";

export default function HomeFranchiseSection() {
  return (
    <SectionShell className="bg-brand-deep-forest relative overflow-hidden py-24 border-y border-brand-sandy/30">
      {/* Background embellishments */}
      <div className="absolute inset-0 z-0 opacity-10 blueprint-grid" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="font-headline-lg text-white mb-6 text-4xl md:text-5xl lg:text-6xl tracking-wide reveal">
          Own an <span className="text-gradient">Indian Kitchen</span>
        </h2>
        
        <p className="text-brand-warm-cream/90 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto reveal">
          Partner with a globally recognized culinary brand. We provide comprehensive training, premium sourcing, and the blueprint to deliver an unforgettable luxury dining experience in your city.
        </p>

        <div className="reveal">
          <FranchiseForm />
        </div>
      </div>
    </SectionShell>
  );
}
