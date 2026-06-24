"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import * as z from "zod";
import PageHero from "@/components/ui/PageHero";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

const jobListings = [
  {
    title: "Executive Theme Chef",
    location: "Pondicherry Street, Colombo",
    type: "Full-Time",
    desc: "Master of South Indian coastal cuisine with French colonial influence. Lead a kitchen brigade of 15, ensuring absolute authenticity in every dish.",
  },
  {
    title: "Immersive Experience Host",
    location: "The Sherlock, Colombo",
    type: "Part-Time / Full-Time",
    desc: "Part maître d', part actor. Guide guests through mystery dining, dropping subtle clues and ensuring flawless in-character service.",
  },
  {
    title: "Mixologist (Spice Specialist)",
    location: "Kerala Houseboat, Kandy",
    type: "Full-Time",
    desc: "Design our signature mocktail menu with deep understanding of Indian spices, botanical extracts, and dramatic presentation.",
  },
  {
    title: "Restaurant Manager",
    location: "Upcoming Outlet (Location TBA)",
    type: "Full-Time",
    desc: "Lead the launch of our newest theme. Requires 5+ years of high-end restaurant management and a passion for experiential dining.",
  },
];

const experienceOptions = [
  "Less than 1 year",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10+ years",
];

const optionalUrl = z
  .string()
  .refine((val) => val === "" || z.string().url().safeParse(val).success, {
    message: "Please enter a valid URL",
  });

const applicationSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(9, "Valid phone number is required"),
  role: z.string().min(1, "Please select a role"),
  currentLocation: z.string().min(2, "Location is required"),
  experience: z.string().min(1, "Please select your experience level"),
  linkedin: optionalUrl,
  portfolio: optionalUrl,
  whyUs: z.string().min(10, "Please tell us why you want to join us"),
});

type ApplicationData = z.infer<typeof applicationSchema>;

function CareersContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const preselectedRole = searchParams.get("role");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      role: preselectedRole || "",
      linkedin: "",
      portfolio: "",
    },
  });

  useEffect(() => {
    if (preselectedRole) {
      setValue("role", preselectedRole);
      document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [preselectedRole, setValue]);

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
    window.open(`https://wa.me/94117112334?text=${encoded}`, "_blank");
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-parchment text-void">
      <PageHero
        label="Join Our Village"
        title={<>Join the<br />World-Builders</>}
        subtitle="We don't hire waitstaff. We hire storytellers. Every person — from kitchen to floor — plays a character in an immersive world."
        image="/images/real_waiter.jpeg"
        light
      />

      <SectionShell variant="parchment" className="py-24">
        {/* Job Listings */}
        <div className="max-w-5xl mx-auto mb-24">
          <SectionHeader label="Careers" title="Current Openings" align="center" className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {jobListings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream p-8 md:p-10 border border-gold/15 hover:border-gold transition-all duration-300 shadow-xl rounded-sm"
              >
                <span className="text-[9px] tracking-[0.2em] uppercase text-gold font-bold mb-3 block">
                  {job.location}
                </span>
                <h3 className="font-display text-2xl text-void mb-3 uppercase tracking-wide">{job.title}</h3>
                <span className="flex items-center gap-1.5 font-bold uppercase tracking-[0.1em] text-[9px] text-terracotta mb-4 font-sans">
                  <Clock className="w-3.5 h-3.5" />
                  {job.type}
                </span>
                <p className="text-text-muted font-sans font-light text-sm leading-relaxed mb-6">{job.desc}</p>
                <a
                  href={`/careers?role=${encodeURIComponent(job.title)}#application-form`}
                  className="btn-outline w-full text-center"
                >
                  Apply for Role
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="application-form" className="scroll-mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-cream p-8 md:p-14 shadow-xl border border-gold/15 rounded-sm"
          >
            <div className="text-center mb-10 border-b border-gold/10 pb-6">
              <h4 className="font-display text-3xl text-void mb-3 uppercase tracking-wide">
                Don't see your role?
              </h4>
              <p className="text-text-muted text-sm font-sans font-light">Apply below and we'll reach out to schedule an interview.</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5 border border-gold/30">
                  <CheckCircle2 className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-void mb-3 uppercase tracking-wide">Application Sent</h3>
                <p className="text-text-muted mb-6 max-w-md mx-auto font-sans font-light">
                  Your application has been submitted via WhatsApp. Our talent team will review your details and get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-outline"
                >
                  Make Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gold text-[9px] font-bold mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Full Name *
                    </label>
                    <input
                      {...register("fullName")}
                      type="text"
                      className="w-full bg-transparent border-b border-gold/30 text-void py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                    />
                    {errors.fullName && (
                      <p className="text-crimson text-xs mt-1">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gold text-[9px] font-bold mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full bg-transparent border-b border-gold/30 text-void py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                    />
                    {errors.email && (
                      <p className="text-crimson text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gold text-[9px] font-bold mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Phone *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full bg-transparent border-b border-gold/30 text-void py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                    />
                    {errors.phone && (
                      <p className="text-crimson text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gold text-[9px] font-bold mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Role Applying For *
                    </label>
                    <select
                      {...register("role")}
                      className="w-full bg-transparent border-b border-gold/30 text-void py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                    >
                      <option value="" className="bg-cream text-void">Select Role</option>
                      {jobListings.map((j) => (
                        <option key={j.title} value={j.title} className="bg-cream text-void">
                          {j.title}
                        </option>
                      ))}
                      <option value="General Application" className="bg-cream text-void">General Application</option>
                    </select>
                    {errors.role && (
                      <p className="text-crimson text-xs mt-1">{errors.role.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gold text-[9px] font-bold mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Current Location *
                    </label>
                    <input
                      {...register("currentLocation")}
                      type="text"
                      className="w-full bg-transparent border-b border-gold/30 text-void py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                    />
                    {errors.currentLocation && (
                      <p className="text-crimson text-xs mt-1">{errors.currentLocation.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gold text-[9px] font-bold mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Years of Experience *
                    </label>
                    <select
                      {...register("experience")}
                      className="w-full bg-transparent border-b border-gold/30 text-void py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                    >
                      <option value="" className="bg-cream text-void">Select</option>
                      {experienceOptions.map((e) => (
                        <option key={e} value={e} className="bg-cream text-void">
                          {e}
                        </option>
                      ))}
                    </select>
                    {errors.experience && (
                      <p className="text-crimson text-xs mt-1">{errors.experience.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gold text-[9px] font-bold mb-1.5 uppercase tracking-[0.2em] font-sans">
                      LinkedIn Profile
                    </label>
                    <input
                      {...register("linkedin")}
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      className="w-full bg-transparent border-b border-gold/30 text-void py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm placeholder:text-void/25"
                    />
                    {errors.linkedin && (
                      <p className="text-crimson text-xs mt-1">{errors.linkedin.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gold text-[9px] font-bold mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Portfolio / Website
                    </label>
                    <input
                      {...register("portfolio")}
                      type="url"
                      placeholder="https://..."
                      className="w-full bg-transparent border-b border-gold/30 text-void py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm placeholder:text-void/25"
                    />
                    {errors.portfolio && (
                      <p className="text-crimson text-xs mt-1">{errors.portfolio.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-gold text-[9px] font-bold mb-1.5 uppercase tracking-[0.2em] font-sans">
                    Why do you want to work at Indian Kitchen? *
                  </label>
                  <textarea
                    {...register("whyUs")}
                    rows={4}
                    className="w-full bg-transparent border-b border-gold/30 text-void py-2 focus:outline-none focus:border-gold transition-colors resize-none font-sans text-sm"
                  />
                  {errors.whyUs && (
                    <p className="text-crimson text-xs mt-1">{errors.whyUs.message}</p>
                  )}
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full"
                  >
                    {isSubmitting ? "Processing..." : "Submit Application via WhatsApp"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </SectionShell>
    </main>
  );
}

export default function CareersPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-parchment pt-32" />}>
      <CareersContent />
    </Suspense>
  );
}
