"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useInView } from "react-intersection-observer";
import SectionShell from "@/components/layout/SectionShell";
import SectionHeader from "@/components/layout/SectionHeader";

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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
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
    <SectionShell variant="void" id="reservations" className="py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5"
          >
            <div className="lg:sticky lg:top-28">
              <SectionHeader 
                label="Reservations" 
                title={<>Reserve Your<br />Sanctuary</>}
                subtitle="Secure your passport to an immersive culinary journey. We highly recommend booking in advance, particularly for Sherlock Mystery Dining."
                className="mb-8"
                lightMode
              />
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-gold mb-1.5 font-bold block">
                    Direct Booking Hotline
                  </span>
                  <p className="font-sans text-base text-cream font-medium">+94 117 112 334</p>
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-gold mb-1.5 font-bold block">
                    Colombo Address
                  </span>
                  <p className="font-sans text-base text-cream/70 font-light leading-relaxed">
                    357 R.A. De Mel Mawatha,
                    <br />
                    Colombo 03
                  </p>
                </div>
                <div>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-gold mb-1.5 font-bold block">
                    Sanctuary Kitchen Hours
                  </span>
                  <p className="font-sans text-base text-cream/70 font-light leading-relaxed">
                    Everyday: 12:30 PM - 3:00 AM
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
            <div className="flex flex-col items-center justify-center py-16 text-center bg-void-light border border-gold/15 p-8 shadow-xl rounded-sm">
              <span className="font-display text-3xl text-cream mb-4 uppercase tracking-wide">Reservation Sent</span>
              <p className="text-cream/65 font-sans font-light mb-6 max-w-sm text-sm">
                Your request has been forwarded via WhatsApp. Our hosts will confirm your table shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-outline font-sans text-[10px] tracking-[0.2em] uppercase font-bold"
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 bg-void-light border border-gold/15 p-6 md:p-10 shadow-xl rounded-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gold text-[9px] tracking-[0.2em] uppercase mb-1.5 font-bold font-sans">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full bg-transparent border-b border-gold/30 text-cream py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                  />
                  {errors.name && (
                    <p className="text-crimson text-xs mt-1 font-sans">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gold text-[9px] tracking-[0.2em] uppercase mb-1.5 font-bold font-sans">
                    Phone
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    className="w-full bg-transparent border-b border-gold/30 text-cream py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                  />
                  {errors.phone && (
                    <p className="text-crimson text-xs mt-1 font-sans">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gold text-[9px] tracking-[0.2em] uppercase mb-1.5 font-bold font-sans">
                    Date
                  </label>
                  <input
                    {...register("date")}
                    type="date"
                    className="w-full bg-transparent border-b border-gold/30 text-cream py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                  />
                  {errors.date && (
                    <p className="text-crimson text-xs mt-1 font-sans">{errors.date.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gold text-[9px] tracking-[0.2em] uppercase mb-1.5 font-bold font-sans">
                    Time
                  </label>
                  <input
                    {...register("time")}
                    type="time"
                    className="w-full bg-transparent border-b border-gold/30 text-cream py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                  />
                  {errors.time && (
                    <p className="text-crimson text-xs mt-1 font-sans">{errors.time.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-gold text-[9px] tracking-[0.2em] uppercase mb-1.5 font-bold font-sans">
                    Guests
                  </label>
                  <select
                    {...register("guests")}
                    className="w-full bg-transparent border-b border-gold/30 text-cream py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                  >
                    <option value="" className="bg-void text-cream">Select</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                      <option key={n} value={n} className="bg-void text-cream">
                        {n} Guests
                      </option>
                    ))}
                  </select>
                  {errors.guests && (
                    <p className="text-crimson text-xs mt-1 font-sans">{errors.guests.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gold text-[9px] tracking-[0.2em] uppercase mb-1.5 font-bold font-sans">
                  Theme Preference
                </label>
                <select
                  {...register("theme")}
                  className="w-full bg-transparent border-b border-gold/30 text-cream py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm"
                >
                  <option value="" className="bg-void text-cream">Select Theme</option>
                  <option value="Pondicherry Street" className="bg-void text-cream">Pondicherry Street (Colombo)</option>
                  <option value="Kerala Houseboat" className="bg-void text-cream">Kerala Houseboat (Kandy)</option>
                  <option value="Sherlock Mystery" className="bg-void text-cream">Sherlock Mystery Dining (Colombo)</option>
                  <option value="No Preference" className="bg-void text-cream">No Preference</option>
                </select>
                {errors.theme && (
                  <p className="text-crimson text-xs mt-1 font-sans">{errors.theme.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gold text-[9px] tracking-[0.2em] uppercase mb-1.5 font-bold font-sans">
                  Special Requests (Optional)
                </label>
                <textarea
                  {...register("specialRequests")}
                  rows={2}
                  className="w-full bg-transparent border-b border-gold/30 text-cream py-2 focus:outline-none focus:border-gold transition-colors resize-none font-sans text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? "Processing..." : "Submit Reservation via WhatsApp"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionShell>
  );
}
