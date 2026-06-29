"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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

export type FranchiseData = z.infer<typeof franchiseSchema>;

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

export default function FranchiseForm() {
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
    <div className="relative z-10 w-full text-left">
      {isSubmitted ? (
        <div className="text-center py-16">
          <div className="w-20 h-20 rounded-full bg-brand-golden/10 flex items-center justify-center mx-auto mb-6 border border-brand-golden/30">
            <CheckCircle2 className="w-10 h-10 text-brand-golden" />
          </div>
          <h3 className="font-headline-md text-white text-2xl mb-4 tracking-wide">Enquiry Received</h3>
          <p className="text-brand-warm-cream/80 text-lg mb-8 max-w-md mx-auto">
            Your application has been submitted via WhatsApp. Our franchise team will review your details and get back to you shortly.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="btn-outline font-body-md text-body-md font-bold text-white border-white hover:border-brand-saffron"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 lg:space-y-8 p-6 lg:p-10 bg-surface/40 backdrop-blur-md rounded-2xl border border-brand-sandy/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <label className="block text-brand-warm-cream/80 text-xs font-bold mb-2 font-body-md">Full Name *</label>
              <input
                {...register("fullName")}
                type="text"
                className="w-full bg-transparent border-b border-brand-sandy/30 rounded-none text-white px-2 py-3 focus:outline-none focus:border-brand-golden transition-all font-body-md"
              />
              {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
            </div>
            <div>
              <label className="block text-brand-warm-cream/80 text-xs font-bold mb-2 font-body-md">Email Address *</label>
              <input
                {...register("email")}
                type="email"
                className="w-full bg-transparent border-b border-brand-sandy/30 rounded-none text-white px-2 py-3 focus:outline-none focus:border-brand-golden transition-all font-body-md"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <label className="block text-brand-warm-cream/80 text-xs font-bold mb-2 font-body-md">Phone Number *</label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full bg-transparent border-b border-brand-sandy/30 rounded-none text-white px-2 py-3 focus:outline-none focus:border-brand-golden transition-all font-body-md"
                placeholder="+CountryCode Number"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block text-brand-warm-cream/80 text-xs font-bold mb-2 font-body-md">Proposed Country / City *</label>
              <input
                {...register("location")}
                type="text"
                className="w-full bg-transparent border-b border-brand-sandy/30 rounded-none text-white px-2 py-3 focus:outline-none focus:border-brand-golden transition-all font-body-md"
              />
              {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <label className="block text-brand-warm-cream/80 text-xs font-bold mb-2 font-body-md">Investment Range *</label>
              <select
                {...register("investment")}
                className="w-full bg-transparent border-b border-brand-sandy/30 rounded-none text-white px-2 py-3 focus:outline-none focus:border-brand-golden transition-all font-body-md appearance-none"
              >
                <option value="" className="text-surface">Select Range</option>
                {investmentRanges.map(r => <option key={r} value={r} className="text-surface">{r}</option>)}
              </select>
              {errors.investment && <p className="text-red-400 text-xs mt-1">{errors.investment.message}</p>}
            </div>
            <div>
              <label className="block text-brand-warm-cream/80 text-xs font-bold mb-2 font-body-md">How did you hear about us? *</label>
              <select
                {...register("source")}
                className="w-full bg-transparent border-b border-brand-sandy/30 rounded-none text-white px-2 py-3 focus:outline-none focus:border-brand-golden transition-all font-body-md appearance-none"
              >
                <option value="" className="text-surface">Select Option</option>
                {sources.map(s => <option key={s} value={s} className="text-surface">{s}</option>)}
              </select>
              {errors.source && <p className="text-red-400 text-xs mt-1">{errors.source.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-brand-warm-cream/80 text-xs font-bold mb-2 font-body-md">Current Business Background *</label>
            <textarea
              {...register("background")}
              rows={3}
              className="w-full bg-transparent border-b border-brand-sandy/30 rounded-none text-white px-2 py-3 focus:outline-none focus:border-brand-golden transition-all resize-none font-body-md"
            />
            {errors.background && <p className="text-red-400 text-xs mt-1">{errors.background.message}</p>}
          </div>

          <div>
            <label className="block text-brand-warm-cream/80 text-xs font-bold mb-2 font-body-md">Why Indian Kitchen? *</label>
            <textarea
              {...register("whyUs")}
              rows={3}
              className="w-full bg-transparent border-b border-brand-sandy/30 rounded-none text-white px-2 py-3 focus:outline-none focus:border-brand-golden transition-all resize-none font-body-md"
            />
            {errors.whyUs && <p className="text-red-400 text-xs mt-1">{errors.whyUs.message}</p>}
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full py-4 text-sm rounded-full font-label-lg shadow-lg hover:shadow-brand-golden/20"
            >
              {isSubmitting ? "Processing..." : "Submit Enquiry via WhatsApp"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
