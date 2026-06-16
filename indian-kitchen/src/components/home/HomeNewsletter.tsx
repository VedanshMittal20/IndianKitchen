"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function HomeNewsletter() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="bg-forest py-24 md:py-32 relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-gold) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel light className="mb-6">The Inner Circle</SectionLabel>
            
            <h2 className="heading-presentation heading-presentation-light mb-6">
              Exclusive Invites &<br/>Secret Menus
            </h2>
            
            <p className="text-cream/70 text-lg font-light mb-10 max-w-2xl mx-auto">
              Join the Indian Kitchen Inner Circle. Be the first to know about upcoming Sherlock Mystery nights, seasonal menu drops, and private dining events.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sage/60" />
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-void/30 border border-sage/20 text-cream placeholder:text-sage/50 px-11 py-3.5 focus:outline-none focus:border-gold transition-colors text-sm"
                  required
                />
              </div>
              <button type="submit" className="btn-primary whitespace-nowrap">
                Join <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[10px] text-sage/50 mt-4 uppercase tracking-widest">
              No spam. Just pure culinary excellence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
