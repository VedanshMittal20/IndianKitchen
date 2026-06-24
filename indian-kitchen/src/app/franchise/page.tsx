"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, TrendingUp, ChefHat, Globe, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";
import FAQAccordion from "@/components/ui/FAQAccordion";

const franchiseSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(9, "Valid phone number is required"),
  location: z.string().min(2, "Proposed location is required"),
  investment: z.string().min(1, "Investment range is required"),
  background: z.string().min(10, "Please provide some background"),
  whyUs: z.string().min(10, "Please tell us why you chose Indian Kitchen"),
  source: z.string().min(1, "Please select an option"),
});

type FranchiseData = z.infer<typeof franchiseSchema>;

const investmentRanges = [
  "Under USD 50K",
  "USD 50K \u2013 100K",
  "USD 100K \u2013 250K",
  "Above USD 250K"
];

const sources = [
  "Social Media",
  "Visited an Outlet",
  "Word of Mouth",
  "Search Engine",
  "Other"
];

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FranchiseData>({
    resolver: zodResolver(franchiseSchema),
  });

  const onSubmit = (data: FranchiseData) => {
    const message = `\uD83C\uDFE2 *New Franchise Enquiry*
 
*Name:* ${data.fullName}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Proposed Location:* ${data.location}
*Investment Range:* ${data.investment}
*Background:* ${data.background}
*Why Indian Kitchen:* ${data.whyUs}
*Source:* ${data.source}`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/94117112334?text=${encoded}`;
    
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-void text-cream">
      <PageHero
        label="Franchise Opportunities"
        title={<>Own a World.<br />Build a Legacy.</>}
        subtitle="Bring the ultimate theme dining experience to your city."
        image="/images/real/colombo_ceremony.jpg"
      />

      <SectionShell variant="void" className="py-24">
        <SectionHeader 
          label="Partnership" 
          title="Why Franchise with us?" 
          align="center" 
          lightMode 
          className="mb-8"
        />
        <p className="text-text-muted text-lg font-light leading-relaxed mb-16 text-center max-w-3xl mx-auto px-6">
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
              className="bg-void-light border border-gold/10 p-8 rounded-[2px] text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto bg-void rounded-full flex items-center justify-center mb-6 border border-gold/20 group-hover:bg-gold transition-colors">
                <b.icon className="w-8 h-8 text-gold group-hover:text-void transition-colors" />
              </div>
              <h4 className="font-display text-xl text-cream mb-4">{b.title}</h4>
              <p className="text-sm text-text-muted leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionShell>

      <SectionShell variant="void" className="py-20 border-t border-gold/10 bg-void-light/30">
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

      <SectionShell variant="void" id="enquiry" className="border-t border-gold/10 py-24">
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
          className="max-w-4xl mx-auto bg-void border border-gold/15 p-8 md:p-14 rounded-[2px] shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

          {isSubmitted ? (
            <div className="text-center py-16 relative z-10">
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 border border-gold/30">
                <CheckCircle2 className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-display text-3xl text-cream mb-4 uppercase tracking-wide">Enquiry Received</h3>
              <p className="text-text-muted text-lg mb-8 max-w-md mx-auto">
                Your application has been submitted via WhatsApp. Our franchise team will review your details and get back to you shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-outline font-sans text-xs tracking-widest uppercase font-bold"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-text-muted text-xs font-bold mb-2 uppercase tracking-widest font-sans">Full Name *</label>
                  <input
                    {...register("fullName")}
                    type="text"
                    className="w-full bg-void-light border border-gold/20 rounded-[2px] text-cream px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all font-sans"
                  />
                  {errors.fullName && <p className="text-crimson text-xs mt-1">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label className="block text-text-muted text-xs font-bold mb-2 uppercase tracking-widest font-sans">Email Address *</label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full bg-void-light border border-gold/20 rounded-[2px] text-cream px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all font-sans"
                  />
                  {errors.email && <p className="text-crimson text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-text-muted text-xs font-bold mb-2 uppercase tracking-widest font-sans">Phone Number *</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full bg-void-light border border-gold/20 rounded-[2px] text-cream px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all font-sans"
                    placeholder="+CountryCode Number"
                  />
                  {errors.phone && <p className="text-crimson text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-text-muted text-xs font-bold mb-2 uppercase tracking-widest font-sans">Proposed Country / City *</label>
                  <input
                    {...register("location")}
                    type="text"
                    className="w-full bg-void-light border border-gold/20 rounded-[2px] text-cream px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all font-sans"
                  />
                  {errors.location && <p className="text-crimson text-xs mt-1">{errors.location.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-text-muted text-xs font-bold mb-2 uppercase tracking-widest font-sans">Investment Range *</label>
                  <select
                    {...register("investment")}
                    className="w-full bg-void-light border border-gold/20 rounded-[2px] text-cream px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all font-sans"
                  >
                    <option value="">Select Range</option>
                    {investmentRanges.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                  {errors.investment && <p className="text-crimson text-xs mt-1">{errors.investment.message}</p>}
                </div>
                <div>
                  <label className="block text-text-muted text-xs font-bold mb-2 uppercase tracking-widest font-sans">How did you hear about us? *</label>
                  <select
                    {...register("source")}
                    className="w-full bg-void-light border border-gold/20 rounded-[2px] text-cream px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all font-sans"
                  >
                    <option value="">Select Option</option>
                    {sources.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.source && <p className="text-crimson text-xs mt-1">{errors.source.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-text-muted text-xs font-bold mb-2 uppercase tracking-widest font-sans">Current Business Background *</label>
                <textarea
                  {...register("background")}
                  rows={3}
                  className="w-full bg-void-light border border-gold/20 rounded-[2px] text-cream px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all resize-none font-sans"
                />
                {errors.background && <p className="text-crimson text-xs mt-1">{errors.background.message}</p>}
              </div>

              <div>
                <label className="block text-text-muted text-xs font-bold mb-2 uppercase tracking-widest font-sans">Why Indian Kitchen? *</label>
                <textarea
                  {...register("whyUs")}
                  rows={3}
                  className="w-full bg-void-light border border-gold/20 rounded-[2px] text-cream px-4 py-3 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all resize-none font-sans"
                />
                {errors.whyUs && <p className="text-crimson text-xs mt-1">{errors.whyUs.message}</p>}
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-sm"
                >
                  {isSubmitting ? "Processing..." : "Submit Enquiry via WhatsApp"}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </SectionShell>
    </main>
  );
}
