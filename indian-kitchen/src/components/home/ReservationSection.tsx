"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    date: "mm/dd/yyyy",
    guests: "2 People",
    phone: "+1 234 567 890"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, handle API submission here.
    alert("Reservation requested! (This is a mockup)");
  };

  return (
    <section className="bg-surface py-24 relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 noise-overlay"></div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-12">
          <h2 className="font-display-lg text-4xl md:text-5xl text-white tracking-widest uppercase mb-2">
            CLAIM YOUR TABLE
          </h2>
          <p className="font-label-lg text-brand-golden tracking-[0.2em] uppercase text-xs">
            EXCLUSIVITY AWAITS
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full border border-brand-sandy/20 p-8 md:p-12 glass-panel">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-label-sm text-brand-golden text-[10px] uppercase tracking-widest">
                NAME
              </label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-surface border border-brand-sandy/50 text-brand-warm-cream focus:border-brand-accent-green outline-none w-full px-4 py-3 font-body-md transition-colors rounded-sm"
              />
            </div>

            {/* Date Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="font-label-sm text-brand-golden text-[10px] uppercase tracking-widest">
                DATE
              </label>
              <input 
                type="text" 
                id="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="bg-surface border border-brand-sandy/50 text-brand-warm-cream focus:border-brand-accent-green outline-none w-full px-4 py-3 font-body-md transition-colors rounded-sm"
              />
            </div>

            {/* Guests Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="guests" className="font-label-sm text-brand-golden text-[10px] uppercase tracking-widest">
                GUESTS
              </label>
              <select 
                id="guests"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: e.target.value})}
                className="bg-surface border border-brand-sandy/50 text-brand-warm-cream focus:border-brand-accent-green outline-none w-full px-4 py-3 font-body-md transition-colors rounded-sm appearance-none"
              >
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5+ People</option>
              </select>
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-label-sm text-brand-golden text-[10px] uppercase tracking-widest">
                PHONE
              </label>
              <input 
                type="tel" 
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-surface border border-brand-sandy/50 text-brand-warm-cream focus:border-brand-accent-green outline-none w-full px-4 py-3 font-body-md transition-colors rounded-sm"
              />
            </div>
            
          </div>

          <button 
            type="submit"
            className="w-full bg-brand-red text-white font-label-lg uppercase tracking-[0.1em] py-4 rounded-sm hover:bg-red-800 transition-colors shadow-lg"
          >
            CONFIRM RESERVATION
          </button>

        </form>

      </div>
    </section>
  );
}
