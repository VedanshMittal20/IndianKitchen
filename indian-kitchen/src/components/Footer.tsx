import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-section-gap bg-surface-container-lowest relative z-10 border-t border-tertiary/10">
      <div className="flex flex-col items-start px-gutter gap-unit max-w-container-max mx-auto py-16">
        <div className="font-display-lg text-display-lg-mobile md:text-display-lg leading-none text-on-surface mb-12">
          INDIAN KITCHEN
        </div>
        <div className="flex flex-wrap gap-8 mb-16 w-full justify-between items-end border-b border-tertiary/10 pb-8">
          <div className="flex gap-6">
            <Link className="font-label-sm text-label-sm text-tertiary hover:text-on-surface transition-all" href="#">Provenance</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all" href="#">Terms</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all" href="#">Privacy</Link>
            <Link className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-all" href="#">Press</Link>
          </div>
        </div>
        <div className="font-annotation text-annotation text-tertiary uppercase tracking-widest w-full text-left">
          © {new Date().getFullYear()} INDIAN KITCHEN. ARCHITECTURAL PERMANENCE.
        </div>
      </div>
    </footer>
  );
}
