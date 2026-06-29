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
    <main className="min-h-screen bg-surface-dark text-brand-warm-cream relative overflow-hidden">
      {/* Background styling for consistency */}
      <div className="absolute inset-0 noise-overlay pointer-events-none z-0"></div>

      <div className="relative z-10">
        <PageHero
          label="Join Our Village"
          title={<span className="heading-presentation text-gradient-primary">Join the<br />World-Builders</span>}
          subtitle="We don't hire waitstaff. We hire storytellers. Every person — from kitchen to floor — plays a character in an immersive world."
          image="https://res.cloudinary.com/duibfjsjh/image/upload/f_auto,q_auto/indian-kitchen/real_waiter"
          light={false}
        />

        <SectionShell variant="void" className="py-24">
          {/* Job Listings */}
          <div className="max-w-5xl mx-auto mb-24 relative z-10">
            <div className="text-center mb-12">
              <span className="font-label-sm uppercase tracking-[0.2em] text-brand-saffron mb-4 block">Careers</span>
              <h2 className="heading-presentation text-gradient-primary text-4xl md:text-5xl">Current Openings</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {jobListings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card hover-lift p-8 md:p-10 flex flex-col h-full border-brand-saffron/30"
                >
                  <span className="text-xs tracking-[0.2em] text-brand-saffron font-bold mb-3 block uppercase">
                    {job.location}
                  </span>
                  <h3 className="font-headline-md text-white mb-3 tracking-wider text-3xl">{job.title}</h3>
                  <span className="flex items-center gap-1.5 font-bold tracking-[0.1em] text-[10px] text-brand-golden mb-5 font-body-md uppercase">
                    <Clock className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                  <p className="text-brand-warm-cream/90 font-body-lg font-light text-base leading-relaxed mb-8 flex-grow">{job.desc}</p>
                  <a
                    href={`/careers?role=${encodeURIComponent(job.title)}#application-form`}
                    className="btn-outline w-full text-center mt-auto border-brand-saffron text-brand-saffron hover:bg-brand-saffron hover:text-surface-dark font-bold"
                  >
                    Apply for Role
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div id="application-form" className="scroll-mt-28 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto glass-card p-8 md:p-14"
            >
              <div className="text-center mb-10 border-b border-brand-saffron/20 pb-8">
                <h4 className="heading-presentation text-gradient-primary text-3xl md:text-4xl mb-4 tracking-wide">
                  General Application
                </h4>
                <p className="text-brand-sandy/80 text-sm font-body-md font-light">Don't see your role above? Apply below and we'll reach out to schedule an interview.</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-brand-saffron/10 flex items-center justify-center mx-auto mb-6 border border-brand-saffron/30 shadow-[0_0_15px_rgba(255,153,51,0.2)]">
                    <CheckCircle2 className="w-8 h-8 text-brand-saffron" />
                  </div>
                  <h3 className="heading-presentation text-brand-warm-cream text-2xl mb-3 tracking-wide">Application Sent</h3>
                  <p className="text-brand-sandy/80 mb-8 max-w-md mx-auto font-body-md font-light">
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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-brand-saffron text-[10px] font-bold mb-2 tracking-[0.2em] font-body-md uppercase">
                        Full Name *
                      </label>
                      <input
                        {...register("fullName")}
                        type="text"
                        className="w-full bg-transparent border-b border-brand-saffron/30 text-brand-warm-cream py-2 focus:outline-none focus:border-brand-saffron transition-all font-body-md text-base"
                      />
                      {errors.fullName && (
                        <p className="text-[#FF4444] text-xs mt-1.5">{errors.fullName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-brand-saffron text-[10px] font-bold mb-2 tracking-[0.2em] font-body-md uppercase">
                        Email *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full bg-transparent border-b border-brand-saffron/30 text-brand-warm-cream py-2 focus:outline-none focus:border-brand-saffron transition-all font-body-md text-base"
                      />
                      {errors.email && (
                        <p className="text-[#FF4444] text-xs mt-1.5">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-brand-saffron text-[10px] font-bold mb-2 tracking-[0.2em] font-body-md uppercase">
                        Phone *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full bg-transparent border-b border-brand-saffron/30 text-brand-warm-cream py-2 focus:outline-none focus:border-brand-saffron transition-all font-body-md text-base"
                      />
                      {errors.phone && (
                        <p className="text-[#FF4444] text-xs mt-1.5">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-brand-saffron text-[10px] font-bold mb-2 tracking-[0.2em] font-body-md uppercase">
                        Role Applying For *
                      </label>
                      <select
                        {...register("role")}
                        className="w-full bg-transparent border-b border-brand-saffron/30 text-brand-warm-cream py-2 focus:outline-none focus:border-brand-saffron transition-all font-body-md text-base cursor-pointer"
                      >
                        <option value="" className="bg-surface-dark text-brand-warm-cream">Select Role</option>
                        {jobListings.map((j) => (
                          <option key={j.title} value={j.title} className="bg-surface-dark text-brand-warm-cream">
                            {j.title}
                          </option>
                        ))}
                        <option value="General Application" className="bg-surface-dark text-brand-saffron font-bold">
                          General Application
                        </option>
                      </select>
                      {errors.role && (
                        <p className="text-[#FF4444] text-xs mt-1.5">{errors.role.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-brand-saffron text-[10px] font-bold mb-2 tracking-[0.2em] font-body-md uppercase">
                        Current Location *
                      </label>
                      <input
                        {...register("currentLocation")}
                        type="text"
                        className="w-full bg-transparent border-b border-brand-saffron/30 text-brand-warm-cream py-2 focus:outline-none focus:border-brand-saffron transition-all font-body-md text-base"
                      />
                      {errors.currentLocation && (
                        <p className="text-[#FF4444] text-xs mt-1.5">{errors.currentLocation.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-brand-saffron text-[10px] font-bold mb-2 tracking-[0.2em] font-body-md uppercase">
                        Years of Experience *
                      </label>
                      <select
                        {...register("experience")}
                        className="w-full bg-transparent border-b border-brand-saffron/30 text-brand-warm-cream py-2 focus:outline-none focus:border-brand-saffron transition-all font-body-md text-base cursor-pointer"
                      >
                        <option value="" className="bg-surface-dark text-brand-warm-cream">Select</option>
                        {experienceOptions.map((e) => (
                          <option key={e} value={e} className="bg-surface-dark text-brand-warm-cream">
                            {e}
                          </option>
                        ))}
                      </select>
                      {errors.experience && (
                        <p className="text-[#FF4444] text-xs mt-1.5">{errors.experience.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-brand-saffron text-[10px] font-bold mb-2 tracking-[0.2em] font-body-md uppercase">
                        LinkedIn Profile
                      </label>
                      <input
                        {...register("linkedin")}
                        type="url"
                        placeholder="https://linkedin.com/in/..."
                        className="w-full bg-transparent border-b border-brand-saffron/30 text-brand-warm-cream py-2 focus:outline-none focus:border-brand-saffron transition-all font-body-md text-base placeholder:text-brand-sandy/30"
                      />
                      {errors.linkedin && (
                        <p className="text-[#FF4444] text-xs mt-1.5">{errors.linkedin.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-brand-saffron text-[10px] font-bold mb-2 tracking-[0.2em] font-body-md uppercase">
                        Portfolio / Website
                      </label>
                      <input
                        {...register("portfolio")}
                        type="url"
                        placeholder="https://..."
                        className="w-full bg-transparent border-b border-brand-saffron/30 text-brand-warm-cream py-2 focus:outline-none focus:border-brand-saffron transition-all font-body-md text-base placeholder:text-brand-sandy/30"
                      />
                        {errors.portfolio && (
                        <p className="text-[#FF4444] text-xs mt-1.5">{errors.portfolio.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-brand-saffron text-[10px] font-bold mb-2 tracking-[0.2em] font-body-md uppercase">
                      Why do you want to work at Indian Kitchen? *
                    </label>
                    <textarea
                      {...register("whyUs")}
                      rows={4}
                      className="w-full bg-transparent border-b border-brand-saffron/30 text-brand-warm-cream py-2 focus:outline-none focus:border-brand-saffron transition-all resize-none font-body-md text-base"
                    />
                    {errors.whyUs && (
                      <p className="text-[#FF4444] text-xs mt-1.5">{errors.whyUs.message}</p>
                    )}
                  </div>

                  <div className="pt-8">
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
      </div>
    </main>
  );
}

export default function CareersPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface-container-lowest pt-32" />}>
      <CareersContent />
    </Suspense>
  );
}
