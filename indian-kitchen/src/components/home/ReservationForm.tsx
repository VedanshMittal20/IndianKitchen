"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// Form Schema
const reservationSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  phone: z.string().min(9, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  guests: z.string().min(1, "Number of guests is required"),
  occasion: z.string().optional(),
  theme: z.string().optional(),
  requests: z.string().optional(),
});

type ReservationData = z.infer<typeof reservationSchema>;

const times = [
  "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM",
  "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM",
  "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
  "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM", "12:00 AM",
  "12:30 AM", "1:00 AM", "1:30 AM", "2:00 AM", "2:30 AM"
];

const guests = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11-20", "20+"];
const occasions = ["Casual Dining", "Birthday", "Anniversary", "Corporate Dinner", "Other"];
const themes = ["No Preference", "Pondicherry Street", "Kerala Houseboat", "The Sherlock"];

export default function ReservationForm() {
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
    const message = `🍽️ *New Table Reservation Request*

*Name:* ${data.fullName}
*Phone:* ${data.phone}
*Email:* ${data.email}
*Date:* ${data.date}
*Time:* ${data.time}
*Guests:* ${data.guests}
*Occasion:* ${data.occasion || "Not specified"}
*Theme:* ${data.theme || "No preference"}
*Special Requests:* ${data.requests || "None"}`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/94117112334?text=${encoded}`;
    
    // Open WhatsApp in new tab
    window.open(url, '_blank');
    setIsSubmitted(true);
  };

  // Get today's date in YYYY-MM-DD for min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="py-24 bg-parchment" id="reservations">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-crimson mb-4">
            Claim Your Seat at the Story
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Book your table today and immerse yourself in an unforgettable culinary journey.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row shadow-2xl rounded-sm overflow-hidden border border-border-gold">
          {/* Form Side */}
          <div className="w-full lg:w-1/2 bg-void p-8 md:p-12">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 min-h-[500px]"
              >
                <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-4xl">✨</span>
                </div>
                <h3 className="font-display text-3xl text-gold">Request Sent</h3>
                <p className="text-cream/80 text-lg max-w-md">
                  Your reservation has been sent to the Indian Kitchen team via WhatsApp. Expect a confirmation within 30 minutes.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-void transition-colors"
                >
                  Make Another Booking
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Full Name *</label>
                    <input
                      {...register("fullName")}
                      type="text"
                      className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors"
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Phone Number *</label>
                    <div className="flex">
                      <span className="border-b border-gold/40 py-2 pr-2 text-cream/60">+94</span>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors"
                        placeholder="7X XXX XXXX"
                      />
                    </div>
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Email Address *</label>
                  <input
                    {...register("email")}
                    type="email"
                    className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Date */}
                  <div>
                    <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Date *</label>
                    <input
                      {...register("date")}
                      type="date"
                      min={today}
                      className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                    />
                    {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Time *</label>
                    <select
                      {...register("time")}
                      className="w-full bg-void border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select Time</option>
                      {times.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time.message}</p>}
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Guests *</label>
                    <select
                      {...register("guests")}
                      className="w-full bg-void border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select</option>
                      {guests.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                    {errors.guests && <p className="text-red-400 text-xs mt-1">{errors.guests.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Occasion */}
                  <div>
                    <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Occasion</label>
                    <select
                      {...register("occasion")}
                      className="w-full bg-void border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="">Select Occasion</option>
                      {occasions.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>

                  {/* Theme */}
                  <div>
                    <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Preferred Theme</label>
                    <select
                      {...register("theme")}
                      className="w-full bg-void border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors"
                    >
                      {themes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-cream/80 text-sm mb-2 uppercase tracking-wide">Special Requests</label>
                  <textarea
                    {...register("requests")}
                    rows={3}
                    className="w-full bg-transparent border-b border-gold/40 text-cream py-2 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Dietary requirements, seating preferences, etc."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-terracotta text-cream font-medium text-lg border border-terracotta hover:bg-gold hover:border-gold hover:text-void transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Request Reservation via WhatsApp"}
                </button>
              </form>
            )}
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[auto]">
            <Image
              src="/images/slide_2.png" // Placeholder for ambience
              alt="Reservation Ambience"
              fill
              className="object-cover sepia-[0.1] saturate-[1.1]"
            />
            <div className="absolute inset-0 bg-void/30 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
