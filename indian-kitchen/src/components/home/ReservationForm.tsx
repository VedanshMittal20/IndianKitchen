"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useInView } from "react-intersection-observer";

const reservationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(9, "Valid phone number is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  guests: z.string().min(1, "Number of guests is required"),
  theme: z.string().min(1, "Please select a theme"),
  specialRequests: z.string().optional(),
});

type ReservationData = z.infer<typeof reservationSchema>;

interface ReservationFormProps {
  showHeader?: boolean;
}

export default function ReservationForm({ showHeader = true }: ReservationFormProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReservationData>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = (data: ReservationData) => {
    const message = `🛎️ *New Table Reservation*

*Name:* ${data.name}
*Phone:* ${data.phone}
*Date:* ${data.date}
*Time:* ${data.time}
*Guests:* ${data.guests}
*Theme Preference:* ${data.theme}
*Special Requests:* ${data.specialRequests || "None"}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/94117112334?text=${encoded}`, "_blank");
    setIsSubmitted(true);
  };

  return (
    <section className="section-padding bg-cream border-t border-terracotta/10" id="reservations">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          {showHeader && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/5"
            >
              <div className="lg:sticky lg:top-28">
                <span className="text-[10px] tracking-[0.3em] uppercase text-terracotta font-medium block mb-3">
                  Reservations
                </span>
                <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-espresso mb-5">
                  Reserve Your<br />
                  <span className="italic">Table</span>
                </h2>
                <p className="text-text-muted font-light mb-8 leading-relaxed text-sm">
                  Secure your passport to an immersive culinary journey. Book in advance for Sherlock
                  Mystery Dining.
                </p>
                <div className="space-y-5">
                  <div>
                    <h4 className="text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1">
                      Call Us Directly
                    </h4>
                    <p className="font-sans text-base text-espresso">+94 117 112 334</p>
                  </div>
                  <div>
                    <h4 className="text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1">
                      Location
                    </h4>
                    <p className="font-sans text-base text-espresso">
                      357 R.A. De Mel Mawatha,
                      <br />
                      Colombo 03
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: showHeader ? 0.2 : 0 }}
            className={`w-full ${showHeader ? "lg:w-3/5" : "max-w-3xl mx-auto"}`}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center bg-white border border-terracotta/12 p-8">
                <span className="font-display text-3xl text-espresso mb-4">Reservation Sent</span>
                <p className="text-text-muted font-light mb-6 max-w-sm text-sm">
                  Your request has been forwarded via WhatsApp. Our hosts will confirm shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-terracotta hover:text-espresso transition-colors link-underline pb-1"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 bg-white border border-terracotta/12 p-6 md:p-8 shadow-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1.5">
                      Name
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full bg-transparent border-b border-terracotta/25 text-espresso py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1.5">
                      Phone
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full bg-transparent border-b border-terracotta/25 text-espresso py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1.5">
                      Date
                    </label>
                    <input
                      {...register("date")}
                      type="date"
                      className="w-full bg-transparent border-b border-terracotta/25 text-espresso py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm"
                    />
                    {errors.date && (
                      <p className="text-red-600 text-xs mt-1">{errors.date.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1.5">
                      Time
                    </label>
                    <input
                      {...register("time")}
                      type="time"
                      className="w-full bg-transparent border-b border-terracotta/25 text-espresso py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm"
                    />
                    {errors.time && (
                      <p className="text-red-600 text-xs mt-1">{errors.time.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1.5">
                      Guests
                    </label>
                    <select
                      {...register("guests")}
                      className="w-full bg-transparent border-b border-terracotta/25 text-espresso py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm"
                    >
                      <option value="">Select</option>
                      {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                        <option key={n} value={n}>
                          {n} Guests
                        </option>
                      ))}
                    </select>
                    {errors.guests && (
                      <p className="text-red-600 text-xs mt-1">{errors.guests.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1.5">
                    Theme Preference
                  </label>
                  <select
                    {...register("theme")}
                    className="w-full bg-transparent border-b border-terracotta/25 text-espresso py-2 focus:outline-none focus:border-espresso transition-colors font-sans text-sm"
                  >
                    <option value="">Select Theme</option>
                    <option value="Pondicherry Street">Pondicherry Street (Colombo)</option>
                    <option value="Kerala Houseboat">Kerala Houseboat (Kandy)</option>
                    <option value="Sherlock Mystery">Sherlock Mystery Dining (Colombo)</option>
                    <option value="No Preference">No Preference</option>
                  </select>
                  {errors.theme && (
                    <p className="text-red-600 text-xs mt-1">{errors.theme.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[9px] tracking-[0.2em] uppercase text-terracotta mb-1.5">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    {...register("specialRequests")}
                    rows={2}
                    className="w-full bg-transparent border-b border-terracotta/25 text-espresso py-2 focus:outline-none focus:border-espresso transition-colors resize-none font-sans text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-espresso text-cream font-sans text-[10px] tracking-[0.2em] uppercase font-medium hover:bg-saffron hover:text-espresso transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Submit Reservation via WhatsApp"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
