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

export default function ReservationForm() {
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
    window.open(`https://wa.me/94117112334?text=${encoded}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section className="py-32 md:py-48 bg-cream border-t border-wood" id="reservations">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/5"
          >
            <div className="sticky top-32">
              <span className="text-[10px] tracking-[0.3em] uppercase text-wood font-medium block mb-4">
                Réservation
              </span>
              <h2 className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.9] text-forest mb-8">
                Reserve Your<br />
                <span className="italic">Table</span>
              </h2>
              <p className="text-text-muted font-light mb-12 leading-relaxed">
                Secure your passport to an immersive culinary journey. We highly recommend booking in advance, especially for our signature Sherlock Mystery Dining experience.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-wood mb-2">Call Us Directly</h4>
                  <p className="font-sans text-lg text-forest">+94 117 112 334</p>
                </div>
                <div>
                  <h4 className="text-[10px] tracking-[0.2em] uppercase text-wood mb-2">Location</h4>
                  <p className="font-sans text-lg text-forest">357 R.A. De Mel Mawatha,<br/>Colombo 03</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full lg:w-3/5"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center">
                <span className="font-display text-4xl text-forest mb-6">Reservation Sent</span>
                <p className="text-text-muted font-light mb-8 max-w-sm">
                  Your request has been forwarded via WhatsApp. Our hosts will confirm your booking shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-wood hover:text-forest transition-colors link-underline pb-1"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-wood mb-2">Name</label>
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full bg-transparent border-b border-wood/30 text-forest py-2 focus:outline-none focus:border-forest transition-colors font-sans"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-wood mb-2">Phone</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full bg-transparent border-b border-wood/30 text-forest py-2 focus:outline-none focus:border-forest transition-colors font-sans"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-wood mb-2">Date</label>
                    <input
                      {...register("date")}
                      type="date"
                      className="w-full bg-transparent border-b border-wood/30 text-forest py-2 focus:outline-none focus:border-forest transition-colors font-sans"
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-wood mb-2">Time</label>
                    <input
                      {...register("time")}
                      type="time"
                      className="w-full bg-transparent border-b border-wood/30 text-forest py-2 focus:outline-none focus:border-forest transition-colors font-sans"
                    />
                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-wood mb-2">Guests</label>
                    <select
                      {...register("guests")}
                      className="w-full bg-transparent border-b border-wood/30 text-forest py-2 focus:outline-none focus:border-forest transition-colors font-sans"
                    >
                      <option value="">Select</option>
                      {[1,2,3,4,5,6,7,8,"9+"].map(n => <option key={n} value={n}>{n} Guests</option>)}
                    </select>
                    {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-wood mb-2">Theme Preference</label>
                  <select
                    {...register("theme")}
                    className="w-full bg-transparent border-b border-wood/30 text-forest py-2 focus:outline-none focus:border-forest transition-colors font-sans"
                  >
                    <option value="">Select Theme</option>
                    <option value="Pondicherry Street">Pondicherry Street (Colombo)</option>
                    <option value="Kerala Houseboat">Kerala Houseboat (Kandy)</option>
                    <option value="Sherlock Mystery">Sherlock Mystery Dining (Colombo)</option>
                    <option value="No Preference">No Preference</option>
                  </select>
                  {errors.theme && <p className="text-red-500 text-xs mt-1">{errors.theme.message}</p>}
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-wood mb-2">Special Requests (Optional)</label>
                  <textarea
                    {...register("specialRequests")}
                    rows={2}
                    className="w-full bg-transparent border-b border-wood/30 text-forest py-2 focus:outline-none focus:border-forest transition-colors resize-none font-sans"
                  />
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-forest text-cream font-sans text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-yellow hover:text-forest transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Submit Reservation"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
