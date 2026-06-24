import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-section-gap bg-brand-dark-green relative z-10 border-t border-brand-tan/10">
      <div className="flex flex-col items-start px-gutter gap-unit max-w-container-max mx-auto py-16">
        <div className="font-display-lg text-display-lg-mobile md:text-display-lg leading-none text-brand-light-gold mb-12 drop-shadow-md">
          INDIAN KITCHEN
        </div>
        <div className="flex flex-wrap gap-8 mb-16 w-full justify-between items-end border-b border-brand-tan/20 pb-8">
          <div className="flex gap-6">
            <Link className="font-label-sm text-label-sm text-brand-tan hover:text-brand-green transition-all" href="#">Provenance</Link>
            <Link className="font-label-sm text-label-sm text-brand-tan hover:text-brand-green transition-all" href="#">Terms</Link>
            <Link className="font-label-sm text-label-sm text-brand-tan hover:text-brand-green transition-all" href="#">Privacy</Link>
            <Link className="font-label-sm text-label-sm text-brand-tan hover:text-brand-green transition-all" href="#">Press</Link>
          </div>
        </div>
        <div className="font-annotation text-annotation text-brand-light-gold/60 uppercase tracking-widest w-full text-left">
          © {new Date().getFullYear()} INDIAN KITCHEN. ARCHITECTURAL PERMANENCE.
        </div>
      </div>
    </footer>
  );
}
