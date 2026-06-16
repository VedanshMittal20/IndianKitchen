"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, MapPin, Clock, Briefcase } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const jobListings = [
  {
    title: "Executive Theme Chef",
    location: "Pondicherry Street, Colombo",
    type: "Full-Time",
    desc: "We are seeking a master of South Indian coastal cuisine who understands the delicate balance of French colonial influence. You will lead a kitchen brigade of 15, ensuring absolute authenticity in every dish.",
  },
  {
    title: "Immersive Experience Host",
    location: "The Sherlock, Colombo",
    type: "Part-Time / Full-Time",
    desc: "Part maître d', part actor. You will guide guests through their mystery dining experience, dropping subtle clues, staying in character, and ensuring flawless service.",
  },
  {
    title: "Mixologist (Spice Specialist)",
    location: "Kerala Houseboat, Kandy",
    type: "Full-Time",
    desc: "Design and execute our signature mocktail menu. You must have a deep understanding of Indian spices, botanical extracts, and dramatic presentation techniques (smoke, fire, infusions).",
  },
  {
    title: "Restaurant Manager",
    location: "Upcoming Outlet (Location TBA)",
    type: "Full-Time",
    desc: "Lead the launch of our newest theme. Requires 5+ years of high-end restaurant management experience, exceptional leadership skills, and a passion for experiential dining.",
  },
];

const experienceOptions = [
  "Less than 1 year",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10+ years",
];

const applicationSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(9, "Valid phone number is required"),
  role: z.string().min(1, "Please select a role"),
  currentLocation: z.string().min(2, "Location is required"),
  experience: z.string().min(1, "Please select your experience level"),
  linkedin: z.string().url().optional().or(z.literal("")),
  portfolio: z.string().url().optional().or(z.literal("")),
  whyUs: z.string().min(10, "Please tell us why you want to join us"),
});

type ApplicationData = z.infer<typeof applicationSchema>;

export default function CareersPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = (data: ApplicationData) => {
    const message = `🎯 *New Career Application*

*Name:* ${data.fullName}
*Role:* ${data.role}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Location:* ${data.currentLocation}
*Experience:* ${data.experience}

*LinkedIn:* ${data.linkedin || "N/A"}
*Portfolio:* ${data.portfolio || "N/A"}

*Why Indian Kitchen?*
${data.whyUs}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/94117112334?text=${encoded}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-cream text-text-dark pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest mb-6">
            Join the Art of Saveur
          </h1>
          <p className="text-text-muted text-lg font-light leading-relaxed max-w-3xl mx-auto">
            We don&apos;t hire waitstaff. We hire storytellers. At Indian Kitchen, every person &mdash; from the kitchen to the floor &mdash; plays a character in an immersive world. We&apos;re looking for people who care about craft, culture, and creating unforgettable human moments.
          </p>
        </motion.div>

        {/* Job Listings */}
        <div className="max-w-5xl mx-auto mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl md:text-4xl text-forest mb-12 text-center"
          >
            Current Openings
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white p-8 border border-wood/20 rounded-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-[10px] tracking-[0.2em] uppercase text-wood mb-2 block">
                    {job.location}
                </span>
                <h3 className="font-display text-2xl md:text-3xl text-forest mb-2">
                    {job.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-text-muted font-sans mb-4">
                  <span className="flex items-center gap-1.5 font-medium uppercase tracking-[0.1em] text-[10px] text-wood">
                    <Clock className="w-3 h-3" />
                    {job.type}
                  </span>
                </div>
                <p className="text-text-muted font-light mb-6">
                    {job.desc}
                </p>
                <a
                  href={`mailto:careers@indiankitchen.lk?subject=Application for ${job.title} - ${job.location}`}
                  className="inline-block border border-forest text-forest hover:bg-forest hover:text-cream px-6 py-2 transition-colors text-[11px] tracking-[0.2em] uppercase font-sans"
                >
                  Apply for this Role &rarr;
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="application-form">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-sm shadow-xl border border-wood/20"
          >
            <div className="text-center mb-10">
              <h4 className="font-display text-3xl md:text-4xl text-forest mb-4">Don't see your role?</h4>
              <p className="text-text-muted">Apply below and we&apos;ll reach out via WhatsApp.</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-forest/5 flex items-center justify-center mx-auto mb-6 border border-forest/10">
                  <CheckCircle2 className="w-10 h-10 text-forest" />
                </div>
                <h3 className="font-display text-3xl text-forest mb-4">Application Sent</h3>
                <p className="text-text-muted text-lg mb-8">
                  Your application has been submitted via WhatsApp. Our team will review and get back to you.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[11px] tracking-[0.2em] uppercase text-wood hover:text-forest transition-colors font-medium link-underline"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-wood text-[10px] mb-2 uppercase tracking-[0.2em] font-sans">Full Name *</label>
                    <input {...register("fullName")} type="text" className="w-full bg-transparent border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans" />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-wood text-[10px] mb-2 uppercase tracking-[0.2em] font-sans">Email *</label>
                    <input {...register("email")} type="email" className="w-full bg-transparent border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-wood text-[10px] mb-2 uppercase tracking-[0.2em] font-sans">Phone *</label>
                    <input {...register("phone")} type="tel" className="w-full bg-transparent border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-wood text-[10px] mb-2 uppercase tracking-[0.2em] font-sans">Role Applying For *</label>
                    <select {...register("role")} className="w-full bg-transparent border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans">
                      <option value="">Select Role</option>
                      {jobListings.map(j => <option key={j.title} value={j.title}>{j.title}</option>)}
                      <option value="General Application">General Application</option>
                    </select>
                    {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-wood text-[10px] mb-2 uppercase tracking-[0.2em] font-sans">Current Location *</label>
                    <input {...register("currentLocation")} type="text" className="w-full bg-transparent border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans" />
                    {errors.currentLocation && <p className="text-red-500 text-xs mt-1">{errors.currentLocation.message}</p>}
                  </div>
                  <div>
                    <label className="block text-wood text-[10px] mb-2 uppercase tracking-[0.2em] font-sans">Years of F&B Experience *</label>
                    <select {...register("experience")} className="w-full bg-transparent border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans">
                      <option value="">Select</option>
                      {experienceOptions.map(e => <option key={e} value={e}>{e}</option>)}
                    </select>
                    {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-wood text-[10px] mb-2 uppercase tracking-[0.2em] font-sans">LinkedIn Profile</label>
                    <input {...register("linkedin")} type="url" className="w-full bg-transparent border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans" placeholder="https://linkedin.com/in/..." />
                  </div>
                  <div>
                    <label className="block text-wood text-[10px] mb-2 uppercase tracking-[0.2em] font-sans">Portfolio / Website</label>
                    <input {...register("portfolio")} type="url" className="w-full bg-transparent border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors font-sans" placeholder="https://..." />
                  </div>
                </div>

                <div>
                  <label className="block text-wood text-[10px] mb-2 uppercase tracking-[0.2em] font-sans">Why do you want to work at Indian Kitchen? *</label>
                  <textarea {...register("whyUs")} rows={4} className="w-full bg-transparent border-b border-wood/30 text-text-dark py-2 focus:outline-none focus:border-forest transition-colors resize-none font-sans" />
                  {errors.whyUs && <p className="text-red-500 text-xs mt-1">{errors.whyUs.message}</p>}
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-forest text-cream font-medium text-[11px] font-sans tracking-[0.2em] uppercase border border-forest hover:bg-yellow hover:border-yellow hover:text-forest transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Submit Application via WhatsApp"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </main>
  );
}
