"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Clock, Briefcase, CheckCircle2 } from "lucide-react";

const jobListings = [
  {
    title: "Head Chef",
    location: "Colombo",
    type: "Full Time",
    desc: "Lead our kitchen brigade with authentic regional Indian recipes. Must have 5+ years experience in traditional Indian cooking, preferably with village-origin training.",
  },
  {
    title: "Front of House Manager",
    location: "Colombo",
    type: "Full Time",
    desc: "Oversee our themed dining experience from entry to exit. You'll manage reservations, train hosts, and ensure every guest leaves with a story.",
  },
  {
    title: "Theme Experience Host",
    location: "Colombo / Kandy",
    type: "Part Time",
    desc: "Be the storyteller. Guide guests through our themed worlds, explain the cultural nuances, and create immersive moments at every table.",
  },
  {
    title: "Social Media Content Creator",
    location: "Remote",
    type: "Freelance",
    desc: "Capture the magic of Indian Kitchen through stunning visual content. Experience with food photography, reels, and brand storytelling required.",
  },
];

const careerSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(9, "Valid phone number is required"),
  role: z.string().min(1, "Please select a role"),
  currentLocation: z.string().min(2, "Location is required"),
  linkedin: z.string().optional(),
  portfolio: z.string().optional(),
  experience: z.string().min(1, "Please select your experience"),
  whyUs: z.string().min(10, "Please tell us why you want to join"),
});

type CareerData = z.infer<typeof careerSchema>;

const experienceOptions = ["Less than 1 year", "1-2 years", "3-5 years", "5-10 years", "10+ years"];

export default function CareersPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CareerData>({
    resolver: zodResolver(careerSchema),
  });

  const onSubmit = (data: CareerData) => {
    const message = `👤 *New Job Application*

*Name:* ${data.fullName}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Role:* ${data.role}
*Location:* ${data.currentLocation}
*LinkedIn:* ${data.linkedin || "Not provided"}
*Portfolio:* ${data.portfolio || "Not provided"}
*Experience:* ${data.experience}
*Why Indian Kitchen:* ${data.whyUs}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/94117112334?text=${encoded}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-parchment pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-crimson mb-8 leading-tight">
            Join the World-Builders
          </h1>
          <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            We don&apos;t hire waitstaff. We hire storytellers. At Indian Kitchen, every person &mdash; from the kitchen to the floor &mdash; plays a character in an immersive world. We&apos;re looking for people who care about craft, culture, and creating unforgettable human moments.
          </p>
        </motion.div>

        {/* Job Listings */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl md:text-4xl text-crimson mb-12 text-center"
          >
            Current Openings
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {jobListings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white p-8 border border-border-gold rounded-sm shadow-[0_4px_20px_rgba(200,135,42,0.08)] hover:shadow-[0_8px_30px_rgba(200,135,42,0.15)] hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-display text-2xl text-crimson mb-3">{job.title}</h3>
                <div className="flex flex-wrap gap-4 mb-4 text-text-muted text-sm">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-terracotta" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-terracotta" />
                    {job.type}
                  </span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-6">{job.desc}</p>
                <a
                  href="#application-form"
                  className="inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:text-gold transition-colors uppercase tracking-wider"
                >
                  <Briefcase className="w-4 h-4" />
                  Apply for this Role &rarr;
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <motion.div
          id="application-form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto bg-void text-cream p-8 md:p-12 rounded-sm shadow-xl border border-gold/20"
        >
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl text-gold mb-4">General Application</h2>
            <p className="text-cream/80">Apply below and we&apos;ll reach out via WhatsApp.</p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-display text-3xl text-gold mb-4">Application Sent</h3>
              <p className="text-cream/80 text-lg mb-8">
                Your application has been submitted via WhatsApp. Our team will review and get back to you.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-void transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Full Name *</label>
                  <input {...register("fullName")} type="text" className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors" />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Email *</label>
                  <input {...register("email")} type="email" className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors" />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Phone *</label>
                  <input {...register("phone")} type="tel" className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors" />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Role Applying For *</label>
                  <select {...register("role")} className="w-full bg-void border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors">
                    <option value="">Select Role</option>
                    {jobListings.map(j => <option key={j.title} value={j.title}>{j.title}</option>)}
                    <option value="General Application">General Application</option>
                  </select>
                  {errors.role && <p className="text-red-400 text-xs mt-1">{errors.role.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Current Location *</label>
                  <input {...register("currentLocation")} type="text" className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors" />
                  {errors.currentLocation && <p className="text-red-400 text-xs mt-1">{errors.currentLocation.message}</p>}
                </div>
                <div>
                  <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Years of F&B Experience *</label>
                  <select {...register("experience")} className="w-full bg-void border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors">
                    <option value="">Select</option>
                    {experienceOptions.map(e => <option key={e} value={e}>{e}</option>)}
                  </select>
                  {errors.experience && <p className="text-red-400 text-xs mt-1">{errors.experience.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">LinkedIn Profile</label>
                  <input {...register("linkedin")} type="url" className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors" placeholder="https://linkedin.com/in/..." />
                </div>
                <div>
                  <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Portfolio / Website</label>
                  <input {...register("portfolio")} type="url" className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors" placeholder="https://..." />
                </div>
              </div>

              <div>
                <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Why do you want to work at Indian Kitchen? *</label>
                <textarea {...register("whyUs")} rows={4} className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors resize-none" />
                {errors.whyUs && <p className="text-red-400 text-xs mt-1">{errors.whyUs.message}</p>}
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-terracotta text-cream font-medium text-lg border border-terracotta hover:bg-gold hover:border-gold hover:text-void transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Submit Application via WhatsApp"}
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </main>
  );
}
