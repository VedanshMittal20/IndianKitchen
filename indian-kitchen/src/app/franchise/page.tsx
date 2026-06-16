"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

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
  "Scalable, proven theme formats",
  "Strong repeat clientele base",
  "Event-driven revenue streams",
  "Full operational support and chef training",
  "A brand with global expansion vision"
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
    const message = `🏢 *New Franchise Enquiry*

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
    <>
      <main className="min-h-screen bg-cream pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-forest mb-6 leading-tight">
                Own a World.<br />
                <span className="text-yellow">Build a Legacy.</span>
              </h1>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
               At Indian Kitchen, we don&apos;t just serve food; we serve experiences. Our theme dining concepts—from the bustling streets of Pondicherry to the tranquil backwaters of Kerala—offer a unique value proposition that goes beyond traditional dining. We&apos;re looking for passionate partners to expand this legacy globally. If you have the vision, we have the blueprint.
              </p>

              <div className="space-y-4">
                <h3 className="font-display text-2xl text-forest mb-4">Why Franchise with us?</h3>
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow shrink-0" />
                    <span className="text-text-dark font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[600px] rounded-sm overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/slide_10.png" // Placeholder image
                alt="Indian Kitchen Franchise"
                fill
                className="object-cover sepia-[0.1] saturate-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cream/80 to-transparent mix-blend-overlay" />
            </motion.div>
          </div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto bg-white text-text-dark p-8 md:p-12 rounded-sm shadow-xl border border-wood/20"
          >
            <div className="text-center mb-10">
              <h2 className="font-display text-4xl text-forest mb-4">Franchise Enquiry Form</h2>
              <p className="text-text-muted">Tell us about yourself and your vision.</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-forest/5 flex items-center justify-center mx-auto mb-6 border border-forest/10">
                  <CheckCircle2 className="w-10 h-10 text-forest" />
                </div>
                <h3 className="font-display text-3xl text-forest mb-4">Enquiry Received</h3>
                <p className="text-text-muted text-lg mb-8">
                  Your application has been submitted via WhatsApp. Our franchise team will review your details and get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 border border-forest text-forest hover:bg-forest hover:text-cream transition-colors font-sans text-sm tracking-widest uppercase"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-wood text-xs mb-2 uppercase tracking-[0.2em] font-sans">Full Name *</label>
                    <input
                      {...register("fullName")}
                      type="text"
                      className="w-full bg-transparent border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans"
                    />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-wood text-xs mb-2 uppercase tracking-[0.2em] font-sans">Email Address *</label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full bg-transparent border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-wood text-xs mb-2 uppercase tracking-[0.2em] font-sans">Phone Number *</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full bg-transparent border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans"
                      placeholder="+CountryCode Number"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-wood text-xs mb-2 uppercase tracking-[0.2em] font-sans">Country / City *</label>
                    <input
                      {...register("location")}
                      type="text"
                      className="w-full bg-transparent border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans"
                    />
                    {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-wood text-xs mb-2 uppercase tracking-[0.2em] font-sans">Investment Range *</label>
                    <select
                      {...register("investment")}
                      className="w-full bg-white border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans"
                    >
                      <option value="">Select Range</option>
                      {investmentRanges.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                    {errors.investment && <p className="text-red-400 text-xs mt-1">{errors.investment.message}</p>}
                  </div>
                  <div>
                    <label className="block text-wood text-xs mb-2 uppercase tracking-[0.2em] font-sans">How did you hear about us? *</label>
                    <select
                      {...register("source")}
                      className="w-full bg-white border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans"
                    >
                      <option value="">Select Option</option>
                      {sources.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.source && <p className="text-red-400 text-xs mt-1">{errors.source.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Current Business Background *</label>
                  <textarea
                    {...register("background")}
                    rows={3}
                    className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                  {errors.background && <p className="text-red-400 text-xs mt-1">{errors.background.message}</p>}
                </div>

                <div>
                  <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Why Indian Kitchen? *</label>
                  <textarea
                    {...register("whyUs")}
                    rows={3}
                    className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                  {errors.whyUs && <p className="text-red-400 text-xs mt-1">{errors.whyUs.message}</p>}
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-forest text-cream font-medium text-sm font-sans tracking-[0.2em] uppercase border border-forest hover:bg-yellow hover:border-yellow hover:text-forest transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Submit Enquiry"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </main>
    </>
  );
}
