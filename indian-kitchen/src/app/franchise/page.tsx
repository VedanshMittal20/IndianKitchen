"use client";

import { motion } from "framer-motion";
import { TrendingUp, ChefHat, Globe, Users } from "lucide-react";
import FranchiseForm from "@/components/forms/FranchiseForm";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import FAQAccordion from "@/components/ui/FAQAccordion";



const benefits = [
  { icon: Globe, title: "Global Luxury Brand", desc: "A recognizable brand identity with a proven track record of expansion." },
  { icon: Users, title: "High Retention", desc: "Immersive experiences guarantee high repeat guest profiles." },
  { icon: TrendingUp, title: "High ROI", desc: "Theatrical, event-driven beverage and food yields." },
  { icon: ChefHat, title: "Complete Support", desc: "Back-of-house operational support & continuous chef training." },
];

const faqItems = [
  {
    question: "What is the typical ROI timeline?",
    answer: "Most of our franchise partners see a full return on investment within 18 to 24 months, driven by our unique event-based revenue model and strong brand loyalty."
  },
  {
    question: "Do I need prior restaurant experience?",
    answer: "While beneficial, it is not strictly required. We provide comprehensive operational training, including chef placements and front-of-house management protocols."
  },
  {
    question: "Can I choose my own theme?",
    answer: "We work collaboratively to assess your location and market demographics before finalizing the theme (e.g., Pondicherry, Kerala) to ensure optimal success."
  },
  {
    question: "Are international master franchises available?",
    answer: "Yes, we are actively looking for master franchise partners in the Middle East, Southeast Asia, and Europe."
  }
];

export default function FranchisePage() {
  return (
    <main className="min-h-screen bg-surface-container-lowest text-on-surface">
      <PageHero
        label="Franchise Opportunities"
        title={<>Own a World.<br />Build a Legacy.</>}
        subtitle="Bring the ultimate theme dining experience to your city."
        image="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/real/colombo_ceremony"
      />

      <SectionShell variant="void" className="py-24">
        <SectionHeader 
          label="Partnership" 
          title="Why Franchise with us?" 
          align="center" 
          lightMode 
          className="mb-8"
        />
        <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-16 text-center max-w-3xl mx-auto px-6">
          At Indian Kitchen, we don't just serve food; we serve experiences. Our theme dining concepts offer a unique value proposition that goes beyond traditional dining. We're looking for passionate partners to expand this legacy globally. If you have the vision, we have the blueprint.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          {benefits.map((b, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-[3rem] text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 mx-auto bg-surface-container-low rounded-[1.5rem] flex items-center justify-center mb-6 border border-outline-variant/30 group-hover:bg-saffron-gold transition-colors duration-500">
                <b.icon className="w-8 h-8 text-brand-golden group-hover:text-on-surface transition-colors duration-500" />
              </div>
              <h4 className="font-headline-md text-headline-md-surface mb-4">{b.title}</h4>
              <p className="text-sm text-on-surface-variant leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      <SectionShell variant="void" className="py-20 border-t border-outline-variant/30 bg-surface-container-low">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            label="Common Queries" 
            title="Franchise FAQs" 
            align="center" 
            lightMode
            className="mb-12"
          />
          <FAQAccordion items={faqItems} />
        </div>
      </SectionShell>

      <SectionShell variant="void" id="enquiry" className="border-t border-outline-variant/30 py-24">
        <SectionHeader 
          label="Application" 
          title="Franchise Enquiry" 
          subtitle="Tell us about yourself, your vision, and your proposed location."
          align="center" 
          lightMode
          className="mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-card border border-outline-variant/30 p-8 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-saffron-gold/5 rounded-full blur-3xl pointer-events-none" />
          <FranchiseForm />
        </motion.div>
      </SectionShell>
    </main>
  );
}
