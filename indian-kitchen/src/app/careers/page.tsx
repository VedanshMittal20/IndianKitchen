"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import * as z from "zod";

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
    <main className="min-h-screen bg-paper text-text-dark">
      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 bg-paper border-b border-sage/10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.1] bg-cover bg-center"
          style={{ backgroundImage: "url(/images/slide_6.png)" }}
        />
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sage text-[10px] tracking-[0.25em] uppercase mb-4 pipe-item inline-block">
              Careers
            </p>
            <h1 className="heading-presentation mb-4">Join the World-Builders</h1>
            <p className="text-text-muted font-light leading-relaxed text-base md:text-lg">
              We don&apos;t hire waitstaff. We hire storytellers. Every person — from kitchen to
              floor — plays a character in an immersive world.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
        {/* Job Listings */}
        <div className="max-w-5xl mx-auto mb-14 md:mb-16">
          <h2 className="font-display text-2xl md:text-3xl text-espresso mb-8 text-center">
            Current Openings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white p-6 md:p-7 border border-terracotta/12 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-[9px] tracking-[0.2em] uppercase text-terracotta mb-2 block">
                  {job.location}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-espresso mb-2">{job.title}</h3>
                <span className="flex items-center gap-1.5 font-medium uppercase tracking-[0.1em] text-[9px] text-terracotta mb-3">
                  <Clock className="w-3 h-3" />
                  {job.type}
                </span>
                <p className="text-text-muted font-light text-sm leading-relaxed mb-5">{job.desc}</p>
                <a
                  href={`/careers?role=${encodeURIComponent(job.title)}#application-form`}
                  className="inline-block border border-espresso text-espresso hover:bg-espresso hover:text-cream px-5 py-2 transition-colors text-[10px] tracking-[0.2em] uppercase font-sans"
                >
                  Apply for this Role →
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
            className="max-w-4xl mx-auto bg-white p-7 md:p-10 shadow-lg border border-terracotta/12"
          >
            <div className="text-center mb-8">
              <h4 className="font-display text-2xl md:text-3xl text-espresso mb-2">
                Don&apos;t see your role?
              </h4>
              <p className="text-text-muted text-sm">Apply below and we&apos;ll reach out via WhatsApp.</p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-5 border border-sage/20">
                  <CheckCircle2 className="w-8 h-8 text-sage" />
                </div>
                <h3 className="font-display text-2xl text-espresso mb-3">Application Sent</h3>
                <p className="text-text-muted mb-6 max-w-md mx-auto">
                  Your application has been submitted via WhatsApp. Our team will review and get back
                  to you.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[10px] tracking-[0.2em] uppercase text-terracotta hover:text-espresso transition-colors font-medium link-underline"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-terracotta text-[9px] mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Full Name *
                    </label>
                    <input
                      {...register("fullName")}
                      type="text"
                      className="w-full bg-transparent border-b border-terracotta/25 text-text-dark py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm"
                    />
                    {errors.fullName && (
                      <p className="text-red-600 text-xs mt-1">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-terracotta text-[9px] mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full bg-transparent border-b border-terracotta/25 text-text-dark py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-terracotta text-[9px] mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Phone *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full bg-transparent border-b border-terracotta/25 text-text-dark py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-terracotta text-[9px] mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Role Applying For *
                    </label>
                    <select
                      {...register("role")}
                      className="w-full bg-transparent border-b border-terracotta/25 text-text-dark py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm"
                    >
                      <option value="">Select Role</option>
                      {jobListings.map((j) => (
                        <option key={j.title} value={j.title}>
                          {j.title}
                        </option>
                      ))}
                      <option value="General Application">General Application</option>
                    </select>
                    {errors.role && (
                      <p className="text-red-600 text-xs mt-1">{errors.role.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-terracotta text-[9px] mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Current Location *
                    </label>
                    <input
                      {...register("currentLocation")}
                      type="text"
                      className="w-full bg-transparent border-b border-terracotta/25 text-text-dark py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm"
                    />
                    {errors.currentLocation && (
                      <p className="text-red-600 text-xs mt-1">{errors.currentLocation.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-terracotta text-[9px] mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Years of F&B Experience *
                    </label>
                    <select
                      {...register("experience")}
                      className="w-full bg-transparent border-b border-terracotta/25 text-text-dark py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm"
                    >
                      <option value="">Select</option>
                      {experienceOptions.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                    {errors.experience && (
                      <p className="text-red-600 text-xs mt-1">{errors.experience.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-terracotta text-[9px] mb-1.5 uppercase tracking-[0.2em] font-sans">
                      LinkedIn Profile
                    </label>
                    <input
                      {...register("linkedin")}
                      type="url"
                      placeholder="https://linkedin.com/in/..."
                      className="w-full bg-transparent border-b border-terracotta/25 text-text-dark py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm placeholder:text-text-muted/40"
                    />
                    {errors.linkedin && (
                      <p className="text-red-600 text-xs mt-1">{errors.linkedin.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-terracotta text-[9px] mb-1.5 uppercase tracking-[0.2em] font-sans">
                      Portfolio / Website
                    </label>
                    <input
                      {...register("portfolio")}
                      type="url"
                      placeholder="https://..."
                      className="w-full bg-transparent border-b border-terracotta/25 text-text-dark py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm placeholder:text-text-muted/40"
                    />
                    {errors.portfolio && (
                      <p className="text-red-600 text-xs mt-1">{errors.portfolio.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-terracotta text-[9px] mb-1.5 uppercase tracking-[0.2em] font-sans">
                    Why do you want to work at Indian Kitchen? *
                  </label>
                  <textarea
                    {...register("whyUs")}
                    rows={4}
                    className="w-full bg-transparent border-b border-terracotta/25 text-text-dark py-2 focus:outline-none focus:border-espresso transition-colors resize-none font-sans text-sm"
                  />
                  {errors.whyUs && (
                    <p className="text-red-600 text-xs mt-1">{errors.whyUs.message}</p>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-espresso text-cream font-medium text-[10px] font-sans tracking-[0.2em] uppercase border border-espresso hover:bg-saffron hover:border-saffron hover:text-espresso transition-colors disabled:opacity-50"
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

export default function CareersPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream pt-32" />}>
      <CareersContent />
    </Suspense>
  );
}
