import Link from "next/link";
import SectionShell from "@/components/layout/SectionShell";

export default function HomeJoinUsSection() {
  return (
    <SectionShell className="bg-surface-dark relative overflow-hidden py-24">
      {/* Background embellishments */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-saffron rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-golden rounded-full filter blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="font-headline-lg text-white mb-6 text-4xl md:text-5xl lg:text-6xl tracking-wide reveal">
          Join Our <span className="text-gradient">Culinary Journey</span>
        </h2>
        
        <p className="text-brand-warm-cream/90 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl mx-auto reveal">
          We are always looking for passionate individuals to bring authenticity, creativity, and excellent service to our guests. Become a part of the Indian Kitchen family.
        </p>

        <div className="reveal">
          <Link 
            href="/careers" 
            className="btn-outline border-brand-saffron text-brand-saffron hover:bg-brand-saffron hover:text-surface-dark font-bold text-lg px-10 py-4 inline-flex shadow-[0_0_15px_rgba(255,153,51,0.2)]"
          >
            Explore Careers
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
