"use client";

import PageHero from "@/components/ui/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Corporate Dining",
    desc: "Tailored solutions for executive lunches, team building events, and corporate milestones.",
  },
  {
    title: "Private Dining & Celebrations",
    desc: "Intimate, immersive spaces dedicated entirely to your special moments.",
  },
  {
    title: "Travel & Guest Dining",
    desc: "Curated experiences for tour groups looking for an authentic taste of India.",
  },
  {
    title: "Custom Menus & Special Rates",
    desc: "Bespoke culinary journeys designed specifically for your event's unique needs.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-paper min-h-screen">
      <PageHero
        label="Our Services"
        title="Beyond the Plate"
        subtitle="Tailored experiences for every occasion."
        image="/images/real_interior.jpeg"
      />

      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6"
            >
              <SectionLabel className="mb-4">Our Services</SectionLabel>
              <h2 className="heading-presentation mb-8">Extending the Experience</h2>
              <p className="text-text-dark/85 text-base md:text-lg font-light leading-relaxed mb-8">
                At Indian Kitchen, we extend our experience beyond dining, creating tailored solutions
                for corporates, travelers, and private celebrations.
              </p>

              <div className="space-y-6">
                {services.map((service, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-sage/10 shadow-sm">
                    <h3 className="font-display text-xl text-forest uppercase tracking-wide mb-2">
                      {service.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 relative h-[600px] rounded-[32px] overflow-hidden border border-sage/10 shadow-xl"
            >
              <Image
                src="/images/private_dining.png"
                alt="Our Services"
                fill
                className="object-cover img-warm"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
